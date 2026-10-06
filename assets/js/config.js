/* ============================================================
   techpercept.com — site config. Fill before launch.
   This file is YOURS: nothing else writes to it. After editing:
   python3 build.py, commit, push. (Page copy for the Act I
   scenarios lives in scenarios.js.)
   ============================================================ */
window.TP_CONFIG = {
  ZOHO_WEBTOLEAD_URL: "https://crm.zoho.in/crm/WebToLeadForm",
  ZOHO_XNQSJSDP: "e4324cfe83c9030045f3f903f548197b234852490599255787827dbe22d25491",
  ZOHO_XMIWTLD:  "a6c7297fc88370ac977805006e47a3a54042a0b4958b8dd84abf7b21606e16b98017cae80d99af7cad11cb4c586bfb7d",
  ZOHO_RETURN_URL: "https://techpercept.com/?sent=1",
  CALENDLY_URL: "https://calendly.com/techpercept/15min",         /* e.g. https://calendly.com/you/20min */
  WHATSAPP: "+91-9560-690-425",             /* e.g. +91 98xxx xxxxx */
  EMAIL: "hello@techpercept.com",                /* e.g. hello@techpercept.com */

  /* Where the hero's enquiry "arrives on". Rotates every SOURCE_EVERY ms. */
  SOURCES: ["IndiaMART", "WhatsApp", "Instagram", "Google", "JustDial"],
  SOURCE_EVERY: 3000
};
