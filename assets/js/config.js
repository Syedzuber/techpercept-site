/* ============================================================
   techpercept.com — site config. Fill before launch.
   This is the only file you should need to touch to connect
   the site. After editing: python3 build.py, commit, push.
   ============================================================ */
window.TP_CONFIG = {
  ZOHO_WEBTOLEAD_URL: "",   /* Zoho CRM → Setup → Developer Space → Web Forms → the form's action URL */
  CALENDLY_URL: "",         /* e.g. https://calendly.com/you/20min */
  WHATSAPP: "",             /* e.g. +91 98xxx xxxxx */
  EMAIL: "",                /* e.g. hello@techpercept.com */

  /* Where the hero's enquiry "arrives on". Rotates every SOURCE_EVERY ms. */
  SOURCES: ["IndiaMART", "WhatsApp", "Instagram", "Google", "JustDial"],
  SOURCE_EVERY: 3000
};
