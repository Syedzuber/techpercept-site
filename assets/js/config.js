/* ============================================================
   techpercept.com — site config. Fill before launch.
   This file is YOURS: nothing else writes to it. After editing:
   python3 build.py, commit, push. (Page copy for the Act I
   scenarios lives in scenarios.js.)
   ============================================================ */
window.TP_CONFIG = {
  ZOHO_WEBTOLEAD_URL: "",   /* Zoho CRM → Setup → Developer Space → Web Forms → the form's action URL */
  CALENDLY_URL: "https://calendly.com/techpercept/15min",         /* e.g. https://calendly.com/you/20min */
  WHATSAPP: "+91-9560-690-425",             /* e.g. +91 98xxx xxxxx */
  EMAIL: "hello@techpercept.com",                /* e.g. hello@techpercept.com */

  /* Where the hero's enquiry "arrives on". Rotates every SOURCE_EVERY ms. */
  SOURCES: ["IndiaMART", "WhatsApp", "Instagram", "Google", "JustDial"],
  SOURCE_EVERY: 3000
};
