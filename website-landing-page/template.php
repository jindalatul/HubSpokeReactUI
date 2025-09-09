<?php 
/* Template Name: custom-home-page-SaaS */ 
?>
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ConvertRank – Content‑First SEO for Service Businesses</title>
  <meta name="color-scheme" content="light dark" />
  <style>
    /* ================== Design Tokens ================== */
    :root{
      --bg: #ffffff;
      --ink:#0b0b0c;
      --muted:#5f6368;
      --line:#e9eaee;
      --card:#ffffff;
      --soft:#f7f7f9;
      --shadow: 0 10px 30px rgba(0,0,0,.06);

      /* Brand accents */
      --brand-primary:#5a2c68;   /* deep purple */
      --brand-secondary:#a9963e; /* muted gold */

      /* Metric palette */
      --accent-traffic:#10b981;
      --accent-volume:#2563eb;
      --accent-med:#f59e0b;
      --accent-hard:#ef4444;

      --maxw:1140px;
      --r-sm:12px; --r-md:16px; --r-lg:24px;
      --space:clamp(18px,2vw,28px);
      --space-lg:clamp(48px,6vw,96px);
      --h1:clamp(36px,5.2vw,64px);
      --h2:clamp(24px,3.2vw,40px);
      --h3:clamp(18px,2vw,22px);
      --body:clamp(15px,1.15vw,17px);
    }

    @media (prefers-color-scheme: dark){
      :root{ --bg:#0b0b0c; --ink:#f2f3f5; --muted:#a6abb4; --line:#1d1f26; --card:#0f1012; --soft:#111214; --shadow:0 12px 40px rgba(0,0,0,.45); }
    }
    [data-theme="dark"]{ --bg:#0b0b0c; --ink:#f2f3f5; --muted:#a6abb4; --line:#1d1f26; --card:#0f1012; --soft:#111214; --shadow:0 12px 40px rgba(0,0,0,.45); }

    /* ================== Base ================== */
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: "Open Sans", "Inter", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif;
      font-weight:300;
      font-size:var(--body);
      line-height:1.7;
      color:var(--ink);
      background:var(--bg);
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }
    .container{max-width:var(--maxw); margin:0 auto; padding:0 var(--space)}
    section{padding:var(--space-lg) 0}
    h1,h2,h3{margin:0 0 10px; font-weight:300; letter-spacing:-0.01em}
    h1{font-size:var(--h1); line-height:1.08; color:var(--brand-primary)}
    h2{font-size:var(--h2); color:var(--brand-primary)}
    h3{font-size:var(--h3); color:var(--brand-secondary)}
    p{margin:10px 0; color:var(--muted)}
    strong{font-weight:500}

    /* ================== Header ================== */
    header{ position:sticky; top:0; z-index:50; background:rgba(255,255,255,.9); backdrop-filter:saturate(140%) blur(8px); border-bottom:1px solid var(--line); }
    [data-theme="dark"] header{ background:rgba(15,16,18,.7); }
    .head{ display:flex; align-items:center; justify-content:space-between; padding:14px 0; }
    .brand{ display:flex; align-items:center; gap:12px; font-weight:600; letter-spacing:.2px; color:var(--brand-primary) }
    .mark{ width:34px; height:34px; border-radius:8px; display:grid; place-items:center; background:var(--brand-primary); color:#fff; font-weight:600; }
    nav{ display:flex; gap:20px; font-weight:400 }
    nav a{ color:inherit; text-decoration:none; padding:6px 2px; position:relative; font-weight:300 }
    nav a:after{ content:""; position:absolute; left:0; right:0; bottom:-6px; height:1px; background:var(--brand-secondary); transform:scaleX(0); transform-origin:left; transition:transform .18s ease; }
    nav a:hover:after{ transform:scaleX(1) }
    .head-actions{ display:flex; gap:10px; align-items:center }

    /* ================== Buttons ================== */
    .btn{ border:1px solid var(--line); background:transparent; color:inherit; border-radius:8px; padding:8px 14px; font-weight:400; cursor:pointer; transition:transform .06s ease, background .2s ease, border-color .2s ease }
    .btn:hover{ background:var(--soft) }
    .btn:active{ transform:translateY(1px) }
    .btn-primary{ background:var(--brand-primary); color:#fff; border-color:var(--brand-primary); font-weight:500 }
    .btn-primary:hover{ background:#482454; border-color:#482454 }
    .btn-secondary{ background:var(--brand-secondary); color:#fff; border:none }
    .btn-secondary:hover{ background:#8a8234 }

    /* ================== Layout ================== */
    .grid-2{ display:grid; gap:26px; grid-template-columns:1.08fr .92fr; align-items:center }
    .grid-3{ display:grid; gap:18px; grid-template-columns:repeat(3,minmax(0,1fr)) }
    .grid-4{ display:grid; gap:18px; grid-template-columns:repeat(4,minmax(0,1fr)) }
    @media (max-width:980px){ .grid-2{grid-template-columns:1fr} .grid-3{grid-template-columns:1fr 1fr} .grid-4{grid-template-columns:1fr 1fr} }
    @media (max-width:640px){ .grid-3,.grid-4{grid-template-columns:1fr} }

    .card{ background:var(--card); border:1px solid var(--line); border-radius:var(--r-md); padding:clamp(16px,2vw,22px); box-shadow:var(--shadow) }
    .muted{ background:var(--soft) }

    /* ================== Inputs ================== */
    .input-row{ display:flex; gap:10px; flex-wrap:wrap; margin-top:14px }
    .input{ flex:1; min-width:260px; padding:12px; border-radius:8px; border:1px solid var(--line); background:var(--bg); color:inherit; font-weight:300 }

    /* ================== Chips / Metrics ================== */
    .chip{ display:inline-flex; align-items:center; gap:6px; padding:3px 10px; border-radius:999px; font-size:12px; border:1px solid var(--line); background:var(--bg); font-weight:400 }
    .easy{ color:var(--accent-traffic) }
    .med{ color:var(--accent-med) }
    .hard{ color:var(--accent-hard) }
    .vol{ color:var(--accent-volume) }

    /* ================== Figures (inline SVG mockups) ================== */
    .figure{ border:1px solid var(--line); border-radius:var(--r-lg); overflow:hidden; background:#fff; box-shadow:var(--shadow) }
    .caption{ font-size:12px; color:var(--muted); text-align:center; padding:8px 0 0 }

    /* ================== Details / FAQ ================== */
    details{ border:1px solid var(--line); border-radius:10px; padding:10px 14px; background:var(--card) }
    summary{ cursor:pointer; list-style:none; font-weight:400; color:var(--ink) }
    summary::-webkit-details-marker{ display:none }
    details[open]{ box-shadow:var(--shadow) }

    /* ================== Footer ================== */
    footer{ border-top:1px solid var(--line) }
    .foot{ display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap; padding:18px 0; font-weight:300 }

    /* Utility */
    .row{ display:flex; gap:10px; align-items:center; flex-wrap:wrap }
    .center{text-align:center}
    .logos{filter:grayscale(1); opacity:.7}
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <div class="container head">
    <a href="https://convertrank.com" style="text-decoration:none;">
        <div class="brand"><div class="mark">CR</div><div>ConvertRank</div></div>
    </a>
      <nav>
        <a href="#how">How it works</a>
        <a href="#why">Why ConvertRank</a>
        <a href="#examples">Use cases</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="https://convertrank.com/blog">Blogs</a>
      </nav>
      <div class="head-actions">
        <button class="btn">Log in</button>
        <button class="btn btn-primary">Rescue My Website</button>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section>
    <div class="container grid-2">
      <div>
        <h1>Content-First Growth, <span style="color:var(--brand-secondary)">Not Design-First Dead Ends</span></h1>
        <p>Without <strong>traffic</strong>, most websites turn into <strong>graveyards</strong>. 
          <br/>
        Most SMBs spend their budget making a site look great—only to be left with no traffic. ConvertRank flips the script with a content-first traffic plan of service pages, guides, and articles aligned to what buyers search—so your site finally gets seen.</p>

          <div class="input-row">
          <input class="input" type="text" placeholder="Enter a topic… e.g. realtor in Austin" />
          <button class="btn btn-primary">Generate Traffic Plan</button>
          <button class="btn btn-secondary">See Example</button>
        </div>
        <div class="row" style="margin-top:10px">
          <span class="chip vol">Traffic estimates</span>
          <span class="chip easy">Easy wins</span>
          <span class="chip">CMS‑agnostic</span>
        </div>
      </div>

      <!-- Dashboard illustration -->
      <figure class="figure">
        <svg viewBox="0 0 1100 720" width="100%" height="auto" role="img" aria-label="SaaS dashboard mock with traffic and keyword metrics">
          <rect x="0" y="0" width="1100" height="720" fill="#fff"/>
          <rect x="0" y="0" width="1100" height="54" fill="#f6f7f9"/>
          <circle cx="26" cy="27" r="6" fill="#e5e7eb"/>
          <circle cx="46" cy="27" r="6" fill="#e5e7eb"/>
          <circle cx="66" cy="27" r="6" fill="#e5e7eb"/>

          <!-- left nav -->
          <rect x="0" y="54" width="220" height="666" fill="#fbfbfc"/>
          <rect x="24" y="92" width="172" height="16" rx="4" fill="#5a2c68"/>
          <rect x="24" y="130" width="138" height="12" rx="4" fill="#d3d7de"/>
          <rect x="24" y="154" width="154" height="12" rx="4" fill="#d3d7de"/>

          <!-- top metrics cards -->
          <rect x="252" y="92" width="240" height="120" rx="18" fill="#fff" stroke="#e9eaee"/>
          <rect x="512" y="92" width="240" height="120" rx="18" fill="#fff" stroke="#e9eaee"/>
          <rect x="772" y="92" width="240" height="120" rx="18" fill="#fff" stroke="#e9eaee"/>

          <text x="272" y="132" font-family="Open Sans, ui-sans-serif" font-weight="600" font-size="22" fill="#5a2c68">Traffic Potential</text>
          <text x="272" y="172" font-family="Open Sans, ui-sans-serif" font-weight="800" font-size="38" fill="#10b981">12,000</text>

          <text x="532" y="132" font-family="Open Sans, ui-sans-serif" font-weight="600" font-size="22" fill="#5a2c68">Competition</text>
          <rect x="532" y="150" width="120" height="12" rx="6" fill="#10b981"/>
          <rect x="654" y="150" width="60" height="12" rx="6" fill="#f59e0b"/>
          <rect x="716" y="150" width="24" height="12" rx="6" fill="#ef4444"/>

          <text x="792" y="132" font-family="Open Sans, ui-sans-serif" font-weight="600" font-size="22" fill="#5a2c68">Top Keywords</text>
          <rect x="792" y="150" width="80" height="24" rx="12" fill="none" stroke="#2563eb"/>
          <text x="804" y="167" font-family="Open Sans, ui-sans-serif" font-size="14" fill="#2563eb">Vol 1.2k</text>

          <!-- table -->
          <rect x="252" y="242" width="760" height="420" rx="18" fill="#fff" stroke="#e9eaee"/>
          <rect x="252" y="242" width="760" height="52" rx="18 18 0 0" fill="#f6f7f9"/>
          <text x="272" y="274" font-family="Open Sans, ui-sans-serif" font-weight="600" font-size="16" fill="#5a2c68">Keyword</text>
          <text x="720" y="274" font-family="Open Sans, ui-sans-serif" font-weight="600" font-size="16" fill="#5a2c68">Volume</text>
          <text x="860" y="274" font-family="Open Sans, ui-sans-serif" font-weight="600" font-size="16" fill="#5a2c68">Difficulty</text>

          <text x="272" y="316" font-family="Open Sans, ui-sans-serif" font-size="15" fill="#111">How to file a claim in Texas</text>
          <text x="720" y="316" font-family="Open Sans, ui-sans-serif" font-size="15" fill="#2563eb">1.2k</text>
          <rect x="860" y="301" width="64" height="22" rx="11" fill="none" stroke="#10b981"/>
          <text x="879" y="317" font-family="Open Sans, ui-sans-serif" font-size="13" fill="#10b981">Easy</text>

          <text x="272" y="356" font-family="Open Sans, ui-sans-serif" font-size="15" fill="#111">Average settlement explained</text>
          <text x="720" y="356" font-family="Open Sans, ui-sans-serif" font-size="15" fill="#2563eb">850</text>
          <rect x="860" y="341" width="72" height="22" rx="11" fill="none" stroke="#f59e0b"/>
          <text x="874" y="357" font-family="Open Sans, ui-sans-serif" font-size="13" fill="#f59e0b">Medium</text>

          <text x="272" y="396" font-family="Open Sans, ui-sans-serif" font-size="15" fill="#111">Slip &amp; fall lawyer</text>
          <text x="720" y="396" font-family="Open Sans, ui-sans-serif" font-size="15" fill="#2563eb">1.8k</text>
          <rect x="860" y="381" width="64" height="22" rx="11" fill="none" stroke="#ef4444"/>
          <text x="879" y="397" font-family="Open Sans, ui-sans-serif" font-size="13" fill="#ef4444">Hard</text>

          <!-- sparkline -->
          <polyline points="270,610 310,565 350,575 390,530 430,540 470,505 510,520 550,470 590,460 630,430 670,420" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round" />
          <circle cx="670" cy="420" r="6" fill="#10b981"/>
          <text x="680" y="425" font-family="Open Sans, ui-sans-serif" font-size="13" fill="#10b981">+28% MoM</text>
        </svg>
      </figure>
    </div>
  </section>

  <!-- Problem -->
  <section>
    <div class="container">
      <h2>Why “pretty” websites still don’t perform</h2>
      <div class="grid-3" style="margin-top:10px">
        <div class="card"><h3>Design ≠ distribution</h3><p>Without pages that match search demand, your site stays invisible: no traffic, no pipeline.</p></div>
        <div class="card"><h3>Random blogging</h3><p>Publishing without data wastes time. We prioritize by volume, intent, and difficulty.</p></div>
        <div class="card"><h3>Analysis paralysis</h3><p>We give you a plan, not a spreadsheet headache—then 1‑click outlines to ship weekly.</p></div>
      </div>
    </div>
  </section>

  <!-- Why ConvertRank -->
  <section id="why" class="muted">
    <div class="container">
      <h2>What you get with ConvertRank</h2>
      <div class="grid-3">
        <div class="card"><h3>Traffic plan</h3><p>Service pages, guides, and articles prioritized by search volume and intent.</p></div>
        <div class="card"><h3>Difficulty realism</h3><p>Every idea labeled <span class="chip easy">Easy</span> <span class="chip med">Med</span> <span class="chip hard">Hard</span> so you invest smartly.</p></div>
        <div class="card"><h3>1‑click outlines</h3><p>Publisher‑ready H2/H3s + FAQs for consistent, expert content—no CMS migration needed.</p></div>
      </div>
    </div>
  </section>

  <!-- How it Works -->
  <section id="how">
    <div class="container">
      <h2>From zero to traction in three steps</h2>
      <div class="grid-3">
        <div class="card"><h3>1) Enter a topic</h3><p>Describe what you do (e.g., “personal injury lawyer Austin”).</p></div>
        <div class="card"><h3>2) See your plan</h3><p>We group opportunities into service pages, guides, and support articles with metrics.</p></div>
        <div class="card"><h3>3) Ship content</h3><p>Click to generate a clean outline and publish. Repeat weekly.</p></div>
      </div>
    </div>
  </section>

  <!-- Proof / Metrics -->
  <section class="muted">
    <div class="container">
      <h2>Forecast the upside before writing a word</h2>
      <div class="grid-3">
        <div class="card">
          <h3>Traffic Potential</h3>
          <div class="row" style="align-items:baseline"><div style="font-weight:800; font-size:42px; color:var(--accent-traffic)">12,000</div><span class="chip vol">monthly searches</span></div>
        </div>
        <div class="card">
          <h3>Competition Mix</h3>
          <div class="row" style="margin-top:6px"><span class="chip easy">Easy 45%</span><span class="chip med">Med 35%</span><span class="chip hard">Hard 20%</span></div>
        </div>
        <div class="card">
          <h3>Top Opportunities</h3>
          <ul style="margin-top:6px"><li>How to File a Claim in Texas <span class="chip easy">Easy • Vol 1.2k</span></li><li>Average Settlement Explained <span class="chip easy">Easy • Vol 850</span></li><li>Slip &amp; Fall Lawyer <span class="chip med">Med • Vol 1.8k</span></li></ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Use cases -->
  <section id="examples">
    <div class="container">
      <h2>Built for service businesses</h2>
      <div class="grid-3">
        <div class="card"><h3>Law Firms</h3><p>Turn common client questions into high‑intent pages.</p></div>
        <div class="card"><h3>Real Estate</h3><p>Neighborhood &amp; service pages that beat portals locally.</p></div>
        <div class="card"><h3>Healthcare &amp; Dental</h3><p>Service + FAQ hubs that attract patients searching now.</p></div>
      </div>
    </div>
  </section>

  <!-- Integrations -->
  <section class="muted">
    <div class="container">
      <h2>Works with your stack</h2>
      <div class="grid-4">
        <div class="card">WordPress</div>
        <div class="card">Webflow</div>
        <div class="card">Squarespace</div>
        <div class="card">Custom CMS</div>
      </div>
      <p class="center" style="margin-top:10px">No migration required. Paste outlines into your CMS and publish.</p>
    </div>
  </section>

  <!-- Testimonials -->
  <section>
    <div class="container">
      <h2>Loved by owners and operators</h2>
      <div class="grid-3" style="margin-top:10px">
        <blockquote class="card"><p>“We finally stopped guessing and started publishing. Leads tripled in 6 weeks.”</p><p style="color:var(--brand-primary)">— Sarah, Managing Partner</p></blockquote>
        <blockquote class="card"><p>“The difficulty labels saved us months of trial and error.”</p><p style="color:var(--brand-primary)">— Daniel, Broker Owner</p></blockquote>
        <blockquote class="card"><p>“Outlines are clean and on‑brand. Our team ships every week now.”</p><p style="color:var(--brand-primary)">— Priya, Marketing Lead</p></blockquote>
      </div>
    </div>
  </section>

  <!-- Pricing with toggle -->
  <section id="pricing" class="muted">
    <div class="container">
      <h2>Simple pricing</h2>
      <div class="row" style="margin:8px 0 18px">
        <span class="chip" style="border-color:var(--brand-secondary); color:var(--brand-secondary)">Billing</span>
        <label class="row" style="gap:6px"><input type="checkbox" id="billingToggle" aria-label="Toggle yearly pricing"/> Yearly <span class="chip easy" id="saveTag" style="display:none">Save 20%</span></label>
      </div>
      <div class="grid-2">
        <div class="card">
          <h3>Free</h3>
          <div class="row" style="align-items:baseline"><div class="price" style="font-weight:800">$0</div><span class="chip">/mo</span></div>
          <ul><li>1 project / month</li><li>Titles + outlines</li><li>No metrics</li></ul>
          <button class="btn" style="margin-top:10px; width:100%">Start Free</button>
        </div>
        <div class="card" style="outline:2px solid var(--brand-primary)">
          <h3>Premium</h3>
          <div class="row" style="align-items:baseline"><div id="proPrice" class="price" style="font-weight:800">$49</div><span class="chip">/mo</span></div>
          <ul><li>5 projects / month</li><li>Traffic &amp; difficulty metrics</li><li>Keyword opportunities</li><li>Export &amp; save</li></ul>
          <button class="btn btn-primary" style="margin-top:10px; width:100%">Rescue My Website</button>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq">
    <div class="container">
      <h2>Frequently asked questions</h2>
      <div class="grid-3" style="margin-top:10px">
        <details class="card"><summary>Do I need to move my site?</summary><p>No. ConvertRank works with your current CMS. Just copy outlines and publish.</p></details>
        <details class="card"><summary>How accurate are the metrics?</summary><p>We blend industry‑standard volumes with relative difficulty signals for pragmatic planning.</p></details>
        <details class="card"><summary>Can my team collaborate?</summary><p>Yes. Share plans and export outlines so writers and SMEs can contribute quickly.</p></details>
      </div>
    </div>
  </section>

  <!-- Security & Privacy -->
  <section class="muted">
    <div class="container">
      <h2>Security &amp; privacy first</h2>
      <div class="grid-3">
        <div class="card"><h3>Minimal data</h3><p>Only the keywords and titles needed to generate your plan.</p></div>
        <div class="card"><h3>Ownership</h3><p>Your content is yours—export anytime.</p></div>
        <div class="card"><h3>No CMS access</h3><p>We don’t connect to your backend. You stay in control.</p></div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section>
    <div class="container center">
      <h2>Keep the brand black‑and‑white. Let the metrics add the color.</h2>
      <p>ConvertRank makes SEO calm, predictable, and compounding.</p>
      <div class="row" style="justify-content:center"><button class="btn btn-primary">Start Your Plan</button><button class="btn btn-secondary">See Example</button></div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container foot">
      <div>© <span id="year"></span> ConvertRank</div>
      <div class="row"><a href="#">Privacy</a><span>•</span><a href="#">Terms</a><span>•</span><a href="#">Contact</a></div>
    </div>
  </footer>

  <script>
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle
    const html = document.documentElement; const btn = document.getElementById('themeToggle');
    const saved = localStorage.getItem('cr-theme'); if(saved) html.setAttribute('data-theme', saved);
    btn.addEventListener('click', () => { const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; html.setAttribute('data-theme', next); localStorage.setItem('cr-theme', next); });

    // Pricing toggle
    const toggle = document.getElementById('billingToggle');
    const proPrice = document.getElementById('proPrice');
    const saveTag = document.getElementById('saveTag');
    if (toggle) toggle.addEventListener('change', (e) => {
      if(e.target.checked){ proPrice.textContent = '$39'; saveTag.style.display='inline-flex'; }
      else { proPrice.textContent = '$49'; saveTag.style.display='none'; }
    });
  </script>
</body>
</html>
