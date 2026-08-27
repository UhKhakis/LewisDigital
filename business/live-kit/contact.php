<?php
/**
 * ============================================================================
 *  LEWIS DIGITAL — CONTACT FORM HANDLER (production client sites)
 * ============================================================================
 *  Receives the POST from the contact form in index.html, sanitizes the input,
 *  and emails it to the business using PHP's built-in mail() function.
 *
 *  Self-contained: no Composer, no external libraries, no third-party form
 *  service. Before every production launch, confirm that PHP and mail() work
 *  on the assigned cPanel account by submitting a live test message.
 *
 *  SECURITY (built in):
 *    - only accepts POST (a GET redirects back to the site)
 *    - required-field + email-format validation
 *    - input sanitization (strip tags, trim, kill CR/LF header-injection chars)
 *    - honeypot field ("company") that humans never see — bots fill it
 *    - time-trap: rejects submissions completed in under a few seconds
 *    - a safe From/Reply-To (never injects raw user data into mail headers)
 *    - errors are logged server-side; visitors only ever see a generic message
 *      (no path/stack leakage)
 * ============================================================================
 */

/* ============================================================================
 * >>> CONFIG — SET THE BUSINESS'S EMAIL ADDRESS HERE <<<
 * This is the ONE value you must change when deploying each client site.
 * Everything else below is optional tuning.
 * ========================================================================== */

$to             = "owner@example.com";      // CHANGE: business's real inbox — receives every submission. Comma-separate multiple addresses if needed.
$business_name  = "Your Business Name";     // CHANGE: shown on the thank-you page and in the email subject
$subject_prefix = "New website inquiry";    // optional: text prepended to the email subject
$from_email     = "noreply@example.com";    // optional: the From address. Use a real mailbox on THIS cPanel account (e.g. info@theclientdomain.com) if mail() is rejected.

/* ============================================================================
 * >>> END CONFIG <<<
 * ========================================================================== */


/* ----------------------------------------------------------------------------
 * Small helpers
 * ------------------------------------------------------------------------- */

// Sanitize a single-line field (name, email, phone): trim, strip tags, and
// remove CR/LF/NUL so it can never be used for header injection.
function ld_clean_single($value) {
    $value = trim((string) $value);
    $value = strip_tags($value);
    $value = str_replace(array("\r", "\n", "\0"), ' ', $value);
    return $value;
}

// Sanitize the multi-line message: trim, strip tags, drop CR/NUL but keep
// newlines so line breaks in the visitor's message survive.
function ld_clean_message($value) {
    $value = trim((string) $value);
    $value = strip_tags($value);
    $value = str_replace(array("\r", "\0"), '', $value);
    return $value;
}

// Render the visitor-facing result page and stop. $ok = true shows "thanks",
// $ok = false shows a friendly "something went wrong" with a fallback.
// Deliberately minimal, inline-styled, self-contained HTML (no dependency on
// styles.css, so it works even if the page is reached out of context).
function ld_respond($ok, $business_name) {
    $title   = $ok ? 'Message sent' : 'Something went wrong';
    $heading = $ok ? 'Thanks — your message is on its way.' : 'We couldn\'t send your message.';
    $body    = $ok
        ? 'We\'ll get back to you as soon as we can. You can also reach us by phone anytime.'
        : 'Please try again in a moment, or give us a call directly.';
    $accent  = '#2563eb';
    $ink     = '#1f2430';
    $body_c  = '#3c4350';
    header('Content-Type: text/html; charset=utf-8');
    echo '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">'
       . '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
       . '<title>' . htmlspecialchars($title, ENT_QUOTES, 'UTF-8') . '</title></head>'
       . '<body style="margin:0;font-family:Inter,Arial,sans-serif;background:#f5f7fa;color:' . $body_c . ';line-height:1.6;">'
       . '<div style="max-width:560px;margin:80px auto;background:#fff;border:1px solid #e5e9f0;border-radius:14px;padding:40px;text-align:center;">'
       . '<div style="width:52px;height:52px;margin:0 auto 20px;border-radius:12px;background:' . $accent . ';color:#fff;font-size:28px;font-weight:800;line-height:52px;">'
       . ($ok ? '&#10003;' : '!') . '</div>'
       . '<h1 style="color:' . $ink . ';font-size:24px;margin:0 0 12px;">' . htmlspecialchars($heading, ENT_QUOTES, 'UTF-8') . '</h1>'
       . '<p style="margin:0 0 24px;">' . htmlspecialchars($body, ENT_QUOTES, 'UTF-8') . '</p>'
       . '<a href="index.html" style="display:inline-block;background:' . $accent . ';color:#fff;text-decoration:none;padding:12px 22px;border-radius:8px;font-weight:600;">Back to ' . htmlspecialchars($business_name, ENT_QUOTES, 'UTF-8') . '</a>'
       . '</div></div></body></html>';
    exit;
}


/* ----------------------------------------------------------------------------
 * 1. Method gate — only accept POST
 * ------------------------------------------------------------------------- */
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: index.html');
    exit;
}


/* ----------------------------------------------------------------------------
 * 2. Honeypot — if the hidden "company" field is non-empty, a bot filled it.
 *    Pretend success (send nothing) so the bot learns nothing useful.
 * ------------------------------------------------------------------------- */
$honeypot = trim((string) (isset($_POST['company']) ? $_POST['company'] : ''));
if ($honeypot !== '') {
    ld_respond(true, $business_name);
}


/* ----------------------------------------------------------------------------
 * 3. Time-trap — reject submissions completed unrealistically fast (bots).
 *    "form_time" is a Unix timestamp set by a tiny inline script on the page.
 * ------------------------------------------------------------------------- */
$form_time = (int) (isset($_POST['form_time']) ? $_POST['form_time'] : 0);
// If the timestamp is present but unrealistically fresh, it's a bot that filled
// the form instantly — drop it silently. If it's absent (0), JavaScript may be
// disabled on a real visitor's browser, so DON'T drop a potential human; the
// honeypot and required-field validation still apply in that case.
if ($form_time > 0 && (time() - $form_time) < 3) {
    ld_respond(true, $business_name);
}


/* ----------------------------------------------------------------------------
 * 4. Sanitize all inputs
 * ------------------------------------------------------------------------- */
$name    = ld_clean_single(isset($_POST['name'])    ? $_POST['name']    : '');
$email   = ld_clean_single(isset($_POST['email'])   ? $_POST['email']   : '');
$phone   = ld_clean_single(isset($_POST['phone'])   ? $_POST['phone']   : '');
$message = ld_clean_message(isset($_POST['message']) ? $_POST['message'] : '');


/* ----------------------------------------------------------------------------
 * 5. Validate required fields
 * ------------------------------------------------------------------------- */
$errors = array();
if ($name === '') {
    $errors[] = 'name';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}
if ($message === '') {
    $errors[] = 'message';
}
if (!empty($errors)) {
    // Show a generic failure — do not echo field-by-field detail back to bots,
    // and never reveal anything about the server.
    ld_respond(false, $business_name);
}


/* ----------------------------------------------------------------------------
 * 6. Compose the message
 * ------------------------------------------------------------------------- */
$subject = str_replace(array("\r", "\n"), ' ', $subject_prefix . ' — ' . $name);
$subject = substr($subject, 0, 250); // keep it reasonable

$body  = "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
if ($phone !== '') {
    $body .= "Phone: " . $phone . "\n";
}
$body .= "\nMessage:\n" . $message . "\n";

$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'the website';
$body .= "\n---\nSent from the contact form on " . $host . " at " . date('Y-m-d H:i:s T') . ".\n";


/* ----------------------------------------------------------------------------
 * 7. Build safe headers (never trust raw user input in headers)
 * ------------------------------------------------------------------------- */
// Default From domain falls back to this site's hostname if $from_email is left
// as a placeholder. Use a real mailbox on the cPanel account in production.
$from_email = ld_clean_single($from_email);
if ($from_email === '' || !filter_var($from_email, FILTER_VALIDATE_EMAIL)) {
    $domain = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost';
    $from_email = 'noreply@' . preg_replace('/^www\./i', '', $domain);
}

// Reply-To uses the visitor's (sanitized) name + validated email, so the
// business can hit "reply" to answer them directly.
$headers  = "From: " . $business_name . " <" . $from_email . ">\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();


/* ----------------------------------------------------------------------------
 * 8. Send, and handle success/failure safely
 * ------------------------------------------------------------------------- */
$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    ld_respond(true, $business_name);
}

// Log the failure server-side (for the team), but tell the visitor something
// neutral — never leak paths, the recipient address, or PHP diagnostics.
error_log('Lewis Digital contact form: mail() failed. To=' . $to . ' From=' . $from_email . ' at ' . date('c'));
ld_respond(false, $business_name);
