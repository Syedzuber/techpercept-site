/* ============================================================
   Act I — the four businesses. One road; pick a chip and the
   words change. Each has: chip label, intro, four station keys,
   four captions, four callouts [head, sub], ok flags (green
   station), station labels, and the summary [headline, body].
   Keep every intro that isn't a client honest: "A composite."
   ============================================================ */
window.TP_SCENARIOS = [
  { id:'none', chip:'has no system',
    intro:'A serious business rarely runs short of leads. It runs short of system. WhatsApp, Excel and one person’s memory — this is the road most of our calls start on.',
    keys:['FIRST CONTACT','THE QUOTE','HANDOVER','EXECUTION &amp; BILLING'],
    caps:[
      'The 9pm enquiry gets answered the <span class="hl hl-red">next afternoon</span> — after two other vendors already have.',
      'The quote goes out on day four and gets <span class="hl hl-red">one follow-up</span> call. Then silence. The buyer, confused about the subsidy, signs with whoever explained it.',
      'The order lives in the <span class="hl hl-red">salesman’s head</span> when the project team takes over. Ops starts from a blank sheet and re-asks the customer everything.',
      'The <span class="hl hl-red">DISCOM approval</span> stuck for three weeks that nobody knew about until the customer called. The milestone <span class="hl hl-red">invoice</span> raised fifty days late. The <span class="hl hl-red">retention</span> never billed at all.'],
    calls:[
      ['LEAK A · 21:04 → 12:30','15 hours. Lead gone to the vendor who replied in four minutes.'],
      ['LEAK B · DAY 4 → DAY 34','Lost on touch two. Marked “price”. It wasn’t price.'],
      ['LEAK C · DAY 0 → DAY 4','First impression of delivery: chaos.'],
      ['LEAK D · DAY 41 → DAY 150','Work done. Money missing.']],
    ok:[false,false,false,false], st:['1','2','3','4'],
    sum:['Crores a year','Each gap is small. Together they are the difference between the business you have and the one you should have — same team, same <span class="hl hl-red">leads</span>, same ad spend. <span class="tag">The audit puts your number on it.</span>'] },

  { id:'bought', chip:'bought a system',
    intro:'Zoho, Odoo, HubSpot — twenty-five seats, licensed two years ago, set up by a reseller who has since moved on. The lead goes in. The leaks are the same. The causes are not. <span class="tag">A composite of what we find when the system is already there.</span>',
    keys:['CAPTURED · 21:04','THE PIPELINE','THE DASHBOARD','THE PARALLEL SYSTEM'],
    caps:[
      'The enquiry lands in the CRM <span class="hl hl-green">in seconds</span>, source-tagged, assigned. This part works. It is the part the reseller demoed.',
      'Every deal sits in <span class="hl hl-red">“Qualified”</span> for forty days because nobody updates the stage. The follow-up cadence exists as a workflow — switched off in month two, after it emailed a customer twice.',
      'The founder’s dashboard says ₹4.2 Cr in pipeline. The sales head’s WhatsApp says ₹1.1 Cr. The founder <span class="hl hl-red">stopped opening</span> the dashboard in March.',
      'Three of eleven modules in use. Six of twenty-five seats log in. The real business runs in <span class="hl hl-red">four WhatsApp groups</span> and one Excel, and the CRM is where someone copies it on Friday — if there’s time.'],
    calls:[
      ['SYSTEM · WORKING','The licence is earning its keep for exactly one screen.'],
      ['PEOPLE · NOBODY OWNS THE DATA','The system is a data-entry tax. So nobody pays it.'],
      ['CONFIGURATION · DEFAULT STAGES, NO RULES','Built to the product’s idea of a pipeline, not the business’s.'],
      ['DIRECTION · A TOOL WAS BOUGHT. A PROCESS NEVER WAS.','Nobody wrote down what “done” looks like, so the implementation never finished.']],
    ok:[true,false,false,false], st:['✓','2','3','4'],
    sum:['Same leak.<br>Different cause.','Nobody needs to rip this out. The audit reads the data you already have — stage history, activity logs, who logged in when — and names which of the three failed: the <b>people</b>, the <b>configuration</b>, or the <b>direction</b>. Then we fix that one. <span class="tag">You keep the system you paid for.</span>'] },

  { id:'outgrew', chip:'outgrew its system',
    intro:'Sales ran well on the CRM. Projects ran on an off-the-shelf tool that couldn’t hold how the team actually worked. <span class="tag">A real client, anonymised — the one in Act II.</span>',
    keys:['CAPTURED · 21:04','THE HANDOVER','THE PROJECT','THE FOUNDER’S VIEW'],
    caps:[
      'The enquiry lands in the CRM <span class="hl hl-green">in seconds</span>, assigned and followed up. Sales was never the problem — the leak started after the signature.',
      'The won order is <span class="hl hl-red">re-typed</span> into the project tool, because the two don’t share a record. Site, sizing and price reach the project team second-hand.',
      'The tool knows “task” and “milestone”. It doesn’t know <span class="hl hl-red">design QA</span>, a procurement hold, or that a rooftop and a tender move differently. So the real plan lives in a sheet beside it.',
      'Every role keeps <span class="hl hl-red">its own tracker</span>. A blocked approval sits inside a task nobody opens, and the founder hears about it from the customer.'],
    calls:[
      ['SYSTEM · WORKING','The CRM did its job.'],
      ['CONFIGURATION · TWO RECORDS, NO LINK','Every project began as a copy.'],
      ['DIRECTION · THE TOOL’S PROCESS, NOT THEIRS','Real stages squeezed into a generic template.'],
      ['PEOPLE · THE SHEET BECAME THE SYSTEM','The tool got updated for the report. The work happened elsewhere.']],
    ok:[true,false,false,false], st:['✓','2','3','4'],
    sum:['Configured to the limit.<br>Then built.','No setting fixes a process the tool can’t model. So we sat with each role — survey, design, procurement, site, finance — until the system matched how they already worked. <b>The team runs on it every day.</b> <span class="tag">Act II shows it running.</span>'] },

  { id:'four', chip:'has four systems',
    intro:'A CRM for sales. Tally for accounts. A project tool ops chose. A field app someone downloaded. Four logins, four truths. <span class="tag">A composite.</span>',
    keys:['FIRST CONTACT','THE QUOTE','HANDOVER','EXECUTION &amp; BILLING'],
    caps:[
      'The lead is in the CRM. The site visit is in the field app. The two are joined by a phone number <span class="hl hl-red">typed twice</span> — differently.',
      'Quote in the CRM, proforma in Tally. When the price changes on the call, <span class="hl hl-red">one gets updated</span>. Accounts bills the other.',
      'The deal is re-typed into the project tool by the ops coordinator, from a WhatsApp forward. Scope, address and contact copied by hand — <span class="hl hl-red">the third time</span>.',
      'Milestone marked done in the project tool on the 3rd. Invoice raised in Tally on the 28th — when someone asked. Retention <span class="hl hl-red">tracked nowhere</span>.'],
    calls:[
      ['CONFIGURATION · NO COMMON KEY','Same customer, two records, no match.'],
      ['PEOPLE · WHOEVER REMEMBERS','Reconciliation is a person, not a step.'],
      ['DIRECTION · NOBODY OWNS THE SEAMS','Each department chose well. Nobody chose for the business.'],
      ['CONFIGURATION · NOTHING FIRES ANYTHING','The leak is in the seams, not the tools.']],
    ok:[false,false,false,false], st:['1','2','3','4'],
    sum:['The tools are fine.<br>The seams aren’t.','Nothing needs replacing. The audit maps every hand-copy between systems and prices each one. Then we <b>wire the three that matter</b>. <span class="tag">Four logins stay four logins. One truth.</span>'] }
];
