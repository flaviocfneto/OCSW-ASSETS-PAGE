// ============================================================
// OCSW Asset App — deployment configuration
// ------------------------------------------------------------
// This is the ONLY file you edit when the Apps Script deployment
// or OAuth client changes. QR codes never need reprinting for a
// deployment change — they point at this page, this page points here.
//
// Copied verbatim into the build output (Vite serves the /public
// folder at the site root), and referenced by index.html as
// <script src="./config.js"></script>.
// ============================================================
window.ASSET_APP_CONFIG = {
  // Apps Script Web App URL.
  //   Deploy > New deployment > Web app  (Execute as: Me, Access: Anyone)
  //   Must end in /exec
  EXEC_URL:
    'https://script.google.com/macros/s/AKfycbzZ8aUcOMabO99CZeq4x0d2o79QmAJPwC46j3PRPa7mIA3lkYhz1VprrhKqXjQqQnhc/exec',

  // OAuth 2.0 Web client ID from Google Cloud Console.
  //   APIs & Services > Credentials > OAuth client ID (Web application)
  //   Must end in .apps.googleusercontent.com
  //   The SAME value must be set in Apps Script via
  //   "Asset Manager > Deployment & Config > Set Sign-In Client ID".
  CLIENT_ID: 'REPLACE_WITH_OAUTH_CLIENT_ID.apps.googleusercontent.com',
};
