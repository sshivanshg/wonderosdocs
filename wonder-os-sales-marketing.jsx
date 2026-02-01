import { useState } from "react";

export default function WonderOSSales() {

  // ============ DATA ============

  const strategyOverview = [
    { phase: "Phase 1", label: "FOUNDATION", weeks: "Week 1-4", color: "#a78bfa", goal: "Build pipeline before product is ready", focus: "Content + Outreach" },
    { phase: "Phase 2", label: "FIRST SALES", weeks: "Week 5-8", color: "#60a5fa", goal: "Close 3-5 paid customers", focus: "Demo + Convert" },
    { phase: "Phase 3", label: "PROOF", weeks: "Week 9-12", color: "#34d399", goal: "5 live apps = social proof", focus: "Case Studies + Scale" },
    { phase: "Phase 4", label: "GROWTH", weeks: "Month 4-6", color: "#fb923c", goal: "₹3-5Cr revenue run rate", focus: "Referral + Paid" },
    { phase: "Phase 5", label: "SCALE", weeks: "Month 7-12", color: "#c084fc", goal: "₹10-15Cr, 100+ apps", focus: "Enterprise + Platform" },
  ];

  const salesTeamStructure = [
    {
      role: "Priyabrata — CEO / Sales Lead",
      color: "#6366f1",
      icon: "👑",
      responsibilities: [
        "Owns all enterprise & high-value deals (₹10L+)",
        "Final pitch + closing call for every deal",
        "Relationship owner for top 20 clients",
        "Approves all pricing — no discounts without his sign-off",
        "Weekly 1-on-1 with Anirban on pipeline",
      ],
      process: [
        "Monday: Review pipeline, prioritize top 5 leads",
        "Tue-Thu: Discovery + Demo calls (max 3/day)",
        "Friday: Follow-up emails + close decisions",
      ],
    },
    {
      role: "Anirban — Sales Lead / Pipeline Manager",
      color: "#60a5fa",
      icon: "📞",
      responsibilities: [
        "Owns the full pipeline: lead → qualified → demo → closed",
        "Runs all discovery calls (first touch)",
        "Qualifies leads using Wonder Filter criteria",
        "Schedules demos with Priyabrata for high-value",
        "Closes deals under ₹8L independently",
        "Manages CRM — every lead tracked daily",
      ],
      process: [
        "Morning: Process new leads from all sources (target: respond < 2 hrs)",
        "Mid-day: Discovery calls (qualify budget, timeline, fit)",
        "Afternoon: Follow-ups, proposals, objection handling",
        "Daily: Update CRM with status + next action",
      ],
    },
    {
      role: "Shubhodeep — Demo Designer / Configurator UX",
      color: "#34d399",
      icon: "🎨",
      responsibilities: [
        "Builds custom demo versions for each sales call",
        "Maintains 5 polished showcase apps (one per template)",
        "Updates configurator UI based on sales feedback",
        "Creates visual proposals (branded PDF/deck per client)",
        "Owns the 'wow moment' in every demo",
      ],
      process: [
        "Before each demo: customize showcase app with client's branding",
        "Post-demo: create branded proposal within 24 hrs",
        "Weekly: improve demo flow based on objections heard",
      ],
    },
    {
      role: "Support/QA Person — Content + Community",
      color: "#fb923c",
      icon: "📝",
      responsibilities: [
        "Publishes 3 content pieces/week (blog, LinkedIn, case studies)",
        "Manages Wonder OS community channels",
        "Responds to all inbound inquiries within 1 hour",
        "Tracks content → lead attribution",
        "Runs referral program logistics",
      ],
      process: [
        "Monday: Plan week's content calendar",
        "Tue/Thu: Publish long-form content (blog / LinkedIn)",
        "Wed/Fri: Publish short-form (reels, carousels, tweets)",
        "Daily: Monitor & respond to all comments + DMs",
      ],
    },
  ];

  const salesProcess = [
    {
      stage: "1. LEAD CAPTURE",
      color: "#a78bfa",
      icon: "🎯",
      channels: ["Website configurator (free quote)", "LinkedIn DMs + posts", "WhatsApp referrals", "Industry events / meetups", "Cold outreach (targeted)"],
      qualification: "Budget ₹3L+, Decision maker, Needs app in 3-6 months, India-based (priority)",
      tools: "Website form → auto email → CRM entry → Slack alert to Anirban",
      kpi: "50 qualified leads / month by Month 3",
    },
    {
      stage: "2. DISCOVERY CALL",
      color: "#60a5fa",
      icon: "📞",
      channels: ["30-min video call (Zoom/Google Meet)", "Anirban runs", "Use Wonder Filter scoring checklist"],
      qualification: "Questions: What problem? What timeline? Who decides? What budget range? Have you tried other solutions?",
      tools: "Notion template for call notes → CRM update → next step within 24 hrs",
      kpi: "40% of leads move to demo stage",
    },
    {
      stage: "3. DEMO (THE WOW MOMENT)",
      color: "#34d399",
      icon: "🖥️",
      channels: ["45-min live demo call", "Priyabrata leads (high-value) or Anirban (standard)", "Show CLIENT'S branding on a live app"],
      qualification: "Demo flow: Problem recap → Show their industry template → Customize live → Show mobile → Show pricing → ROI calculator",
      tools: "Shubhodeep pre-builds branded demo. Screen share live app running on Vercel.",
      kpi: "60% of demos convert to proposal",
    },
    {
      stage: "4. PROPOSAL",
      color: "#fb923c",
      icon: "📄",
      channels: ["Branded PDF proposal", "Sent within 24 hrs of demo", "Video walkthrough of proposal (Loom, 3 min)"],
      qualification: "Includes: Scope, Timeline (30 days), Pricing breakdown, ROI estimate, Testimonial/case study, Clear CTA + payment link",
      tools: "Notion → PDF export. Razorpay payment link embedded.",
      kpi: "50% of proposals close within 7 days",
    },
    {
      stage: "5. CLOSE + ONBOARD",
      color: "#c084fc",
      icon: "✅",
      channels: ["Payment via Razorpay", "Welcome email + onboarding doc", "Kickoff call within 48 hrs", "Wonder team handles deployment"],
      qualification: "Handoff: Sales → Support/QA. Client gets dashboard access. Deployment starts automatically.",
      tools: "Razorpay webhook → auto deploy trigger → Founder dashboard live",
      kpi: "100% of closed deals deploy within 30 days",
    },
  ];

  const marketingChannels = [
    {
      channel: "LinkedIn (Primary B2B)",
      color: "#60a5fa",
      icon: "💼",
      strategy: "Thought leadership from Priyabrata's personal account. Weekly posts showing client transformations, behind-the-scenes builds, founder lessons.",
      contentMix: ["40% Educational (how-to, industry insights)", "30% Social Proof (client wins, app launches)", "20% Behind-the-scenes (build process, team)", "10% Promotional (new features, pricing)"],
      frequency: "3-4 posts/week from Priyabrata. 2 posts/week from Wonder OS page.",
      kpi: "500 followers Month 1 → 2K Month 3 → 5K Month 6",
    },
    {
      channel: "Website + SEO",
      color: "#a78bfa",
      icon: "🌐",
      strategy: "Long-tail SEO targeting Indian founders searching for app development. Blog posts answering real questions. Configurator as lead magnet.",
      contentMix: ["Blog: 'How to build X app in India' guides", "Case studies per industry", "Pricing transparency page", "Free ROI Calculator tool"],
      frequency: "2 blog posts/week. Update existing posts monthly.",
      kpi: "500 organic visits Month 2 → 2K Month 4 → 5K Month 6",
    },
    {
      channel: "WhatsApp + Referral",
      color: "#34d399",
      icon: "📱",
      strategy: "India's #1 business channel. Referral program: refer a founder, get ₹50K off your next maintenance. WhatsApp Business API for nurturing.",
      contentMix: ["Welcome sequence (5 messages over 7 days)", "Monthly value updates", "Referral reminders + celebration when referral closes"],
      frequency: "1 message/week to existing leads. Instant response to new inquiries.",
      kpi: "30% of new leads from referrals by Month 4",
    },
    {
      channel: "YouTube / Reels / Shorts",
      color: "#fb923c",
      icon: "🎬",
      strategy: "Show the MAGIC. 60-90 sec videos of apps being built. 'Built in 30 days' transformation videos. Client testimonials.",
      contentMix: ["App demo walkthroughs (60 sec)", "Behind the build (90 sec)", "Client testimonials (45 sec)", "Industry-specific use cases"],
      frequency: "2-3 short videos/week. 1 longer YouTube video/month.",
      kpi: "10K total views Month 2 → 50K Month 4",
    },
    {
      channel: "Communities + Events",
      color: "#c084fc",
      icon: "🤝",
      strategy: "Be present in Indian startup/founder communities. Sponsor 1 event/month. Offer free 'App Feasibility Consultation' at events.",
      contentMix: ["Startup India forums / groups", "Industry-specific communities (healthcare, real estate)", "Founder meetups in Bangalore, Delhi, Mumbai", "Online webinars (monthly)"],
      frequency: "1 event/month. Active in 3-5 online communities daily.",
      kpi: "5 warm leads per event",
    },
  ];

  const pricingStrategy = {
    tiers: [
      { name: "Wonder Starter", setup: "₹3.9L", maintenance: "₹40,000/mo", features: ["1 app", "Web only", "Basic support", "5 features included", "30-day delivery"], color: "#60a5fa", best: false },
      { name: "Wonder Pro", setup: "₹5.9L", maintenance: "₹65,000/mo", features: ["1 app", "Web + iOS + Android", "Priority support", "8 features included", "Custom domain", "30-day delivery"], color: "#6366f1", best: true },
      { name: "Wonder Enterprise", setup: "₹9.9L", maintenance: "₹1,20,000/mo", features: ["1-2 apps", "Web + iOS + Android", "24/7 support", "Unlimited features", "Custom domain + branding", "AI chatbot included", "30-day delivery"], color: "#c084fc", best: false },
    ],
    objections: [
      { q: "It's too expensive", a: "Compare: Traditional agency charges ₹15-50L for same app + 6-12 months. We deliver in 30 days at ₹4-10L. ROI positive in 2-3 months of maintenance savings." },
      { q: "Why not use no-code tools?", a: "No-code tools stop at 70%. They can't deploy to App Store. They have performance issues at scale. We give 100% production-ready code you own forever." },
      { q: "Why not use AI code generators?", a: "They generate 60-70% working code. You still need developers to fix, test, deploy. We handle everything end-to-end with guaranteed delivery." },
      { q: "Can you show proof?", a: "We have [X] live apps running. Here's a demo with YOUR branding right now. Book a call and see it live." },
      { q: "We need time to think", a: "Totally fair. I'll send you a branded proposal + ROI calculator. Most founders who delay 2+ weeks lose their slot to another founder in same industry." },
    ],
  };

  const funnelMetrics = [
    { stage: "Leads Generated", target: [150, 300, 500], color: "#a78bfa" },
    { stage: "Qualified Leads", target: [60, 120, 200], color: "#60a5fa" },
    { stage: "Demos Conducted", target: [30, 60, 100], color: "#34d399" },
    { stage: "Proposals Sent", target: [18, 36, 60], color: "#fb923c" },
    { stage: "Deals Closed", target: [9, 18, 30], color: "#c084fc" },
    { stage: "Revenue (₹Cr)", target: [2.5, 5, 10], color: "#6366f1" },
  ];

  // ============ COMPONENTS ============

  function OverviewBadge({ phase, label, weeks, color, goal, focus }) {
    return (
      <div style={{ flex: "1 1 180px", background: "#111118", border: `1px solid ${color}33`, borderRadius: 12, padding: "14px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: color, background: `${color}15`, padding: "2px 8px", borderRadius: 10 }}>{phase}</span>
          <span style={{ fontSize: 9, color: "#64748b" }}>{weeks}</span>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{label}</div>
        <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.4 }}>{goal}</div>
        <div style={{ fontSize: 10, color: color, fontWeight: 600, marginTop: "auto", background: `${color}10`, padding: "3px 8px", borderRadius: 6, display: "inline-block", alignSelf: "flex-start" }}>{focus}</div>
      </div>
    );
  }

  function AccordionSection({ title, color, icon, data, renderItem }) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ marginBottom: 8, borderRadius: 12, border: `1px solid ${open ? color : "#1e1e2e"}`, background: "#111118", overflow: "hidden" }}>
        <div onClick={() => setOpen(!open)} style={{ padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", userSelect: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>{icon}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{title}</span>
          </div>
          <span style={{ color: color, fontSize: 13 }}>{open ? "▲" : "▼"}</span>
        </div>
        {open && <div style={{ borderTop: `1px solid ${color}22`, padding: "12px 16px 16px" }}>{renderItem(data)}</div>}
      </div>
    );
  }

  // ============ MAIN ============

  // ... (data remain same)

  // export default function WonderOSSales() { // moved to top
  const [tab, setTab] = useState("overview");
  const [openTeam, setOpenTeam] = useState(-1);
  const [openProcess, setOpenProcess] = useState(-1);
  const [openMarketing, setOpenMarketing] = useState(-1);

  const tabs = [
    { id: "overview", label: "🗺️ Strategy Overview" },
    { id: "team", label: "👥 Sales Team" },
    { id: "process", label: "⚡ Sales Process" },
    { id: "marketing", label: "📢 Marketing" },
    { id: "pricing", label: "💰 Pricing + Objections" },
    { id: "metrics", label: "📈 Funnel Metrics" },
  ];

  return (
    <div style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#111120,#0a0a12)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", padding: "18px 20px", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>⚡</div>
          <div>
            <div style={{ fontSize: 19, fontWeight: 700, color: "#fff" }}>Wonder OS — Sales & Marketing Master Plan</div>
            <div style={{ fontSize: 11, color: "#6366f1", fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase" }}>Structure · Process · Functioning · Metrics</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "6px", padding: "6px", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.03)", marginBottom: "24px", overflowX: "auto" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            background: tab === t.id ? "#6366f1" : "transparent", color: tab === t.id ? "#fff" : "#94a3b8",
            border: tab === t.id ? "none" : "1px solid #1e1e2e", borderRadius: 8, padding: "6px 12px",
            fontSize: 12, fontWeight: 600, cursor: "pointer"
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ margin: "0 auto" }}>

        {/* ====== OVERVIEW ====== */}
        {tab === "overview" && (
          <div>
            <div style={{ padding: "10px 14px", background: "#1a1a2e", borderRadius: 10, border: "1px solid #2d2d44", marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}><span style={{ color: "#34d399", fontWeight: 700 }}>MASTER STRATEGY:</span> Start selling BEFORE product is fully built. Pipeline first, product second. Every week of delay = lost revenue.</span>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {strategyOverview.map((s, i) => <OverviewBadge key={i} {...s} />)}
            </div>
            {/* Flow arrow */}
            <div style={{ marginTop: 20, background: "#111118", border: "1px solid #1e1e2e", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>How It All Connects — Full Flow</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center", justifyContent: "center" }}>
                {["Content/Outreach", "→", "Lead Captured", "→", "Discovery Call", "→", "Demo (Wow!)", "→", "Proposal 24hrs", "→", "Payment", "→", "Auto Deploy", "→", "Live App 30 Days", "→", "Maintenance MRR"].map((item, i) => (
                  <span key={i} style={{
                    fontSize: 10, fontWeight: 600,
                    color: item === "→" ? "#3f3f55" : i % 2 === 0 ? "#e2e8f0" : "#94a3b8",
                    background: item === "→" ? "transparent" : "#1a1a2e",
                    padding: item === "→" ? "0" : "4px 9px",
                    borderRadius: 20, border: item === "→" ? "none" : "1px solid #2d2d44"
                  }}>{item}</span>
                ))}
              </div>
            </div>
            {/* Key rules */}
            <div style={{ marginTop: 14, background: "#111118", border: "1px solid #fb923c33", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#fb923c", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>⚡ Golden Rules — Non-Negotiable</div>
              {[
                "Respond to every lead within 2 hours. Speed = trust in India.",
                "Never discount more than 10%. Discounting kills perceived value.",
                "Every demo must show the client's OWN branding on a live app.",
                "Proposal within 24 hours. Every hour of delay = 10% drop in close rate.",
                "Never quote 'custom pricing' on call. Use the configurator. Transparency wins.",
                "Every closed deal = case study within 30 days of launch.",
              ].map((rule, i) => (
                <div key={i} style={{ display: "flex", gap: 8, padding: "5px 0", borderBottom: i < 5 ? "1px solid #1e1e2e" : "none" }}>
                  <span style={{ color: "#fb923c", fontSize: 9, marginTop: 2 }}>★</span>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== SALES TEAM ====== */}
        {tab === "team" && (
          <div>
            <div style={{ padding: "10px 14px", background: "#1a1a2e", borderRadius: 10, border: "1px solid #2d2d44", marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}><span style={{ color: "#60a5fa", fontWeight: 700 }}>TEAM STRUCTURE:</span> 4 people own sales + marketing. Clear ownership. No overlap. Daily cadence.</span>
            </div>
            {salesTeamStructure.map((person, i) => {
              const open = openTeam === i;
              return (
                <div key={i} style={{ marginBottom: 8, borderRadius: 12, border: `1px solid ${open ? person.color : "#1e1e2e"}`, background: "#111118", overflow: "hidden" }}>
                  <div onClick={() => setOpenTeam(open ? -1 : i)} style={{ padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", userSelect: "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 20 }}>{person.icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{person.role}</span>
                    </div>
                    <span style={{ color: person.color, fontSize: 13 }}>{open ? "▲" : "▼"}</span>
                  </div>
                  {open && (
                    <div style={{ borderTop: `1px solid ${person.color}22`, padding: "14px 16px 16px" }}>
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: person.color, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Responsibilities</div>
                        {person.responsibilities.map((r, j) => (
                          <div key={j} style={{ fontSize: 12, color: "#94a3b8", padding: "4px 0", display: "flex", gap: 6, borderBottom: j < person.responsibilities.length - 1 ? "1px solid #1e1e2e" : "none" }}>
                            <span style={{ color: person.color, fontSize: 9, marginTop: 2 }}>→</span>{r}
                          </div>
                        ))}
                      </div>
                      <div style={{ background: `${person.color}08`, border: `1px solid ${person.color}22`, borderRadius: 8, padding: "10px 12px" }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: person.color, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Daily/Weekly Process</div>
                        {person.process.map((p, j) => (
                          <div key={j} style={{ fontSize: 11, color: "#94a3b8", padding: "3px 0" }}>📌 {p}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ====== SALES PROCESS ====== */}
        {tab === "process" && (
          <div>
            <div style={{ padding: "10px 14px", background: "#1a1a2e", borderRadius: 10, border: "1px solid #2d2d44", marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}><span style={{ color: "#34d399", fontWeight: 700 }}>5-STAGE PROCESS:</span> Every deal follows this exact flow. No shortcuts. Each stage has clear tools, KPIs, and handoffs.</span>
            </div>
            {/* Stage pipeline visual */}
            <div style={{ display: "flex", gap: 3, marginBottom: 16, alignItems: "stretch" }}>
              {salesProcess.map((s, i) => (
                <div key={i} style={{ flex: 1, background: "#111118", border: `1px solid ${s.color}33`, borderRadius: i === 0 ? "10px 0 0 10px" : i === salesProcess.length - 1 ? "0 10px 10px 0" : 0, padding: "10px 8px", textAlign: "center", position: "relative" }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: s.color }}>{s.stage.split(". ")[1]}</div>
                  {i < salesProcess.length - 1 && <div style={{ position: "absolute", right: -6, top: "50%", transform: "translateY(-50%)", color: "#3f3f55", fontSize: 10, zIndex: 1 }}>▶</div>}
                </div>
              ))}
            </div>
            {/* Detailed stages */}
            {salesProcess.map((stage, i) => {
              const open = openProcess === i;
              return (
                <div key={i} style={{ marginBottom: 8, borderRadius: 12, border: `1px solid ${open ? stage.color : "#1e1e2e"}`, background: "#111118", overflow: "hidden" }}>
                  <div onClick={() => setOpenProcess(open ? -1 : i)} style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", userSelect: "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 18 }}>{stage.icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{stage.stage}</span>
                    </div>
                    <span style={{ color: stage.color, fontSize: 13 }}>{open ? "▲" : "▼"}</span>
                  </div>
                  {open && (
                    <div style={{ borderTop: `1px solid ${stage.color}22`, padding: "14px 16px 16px" }}>
                      {[
                        { label: "How", items: stage.channels },
                        { label: "Qualify / Key Questions", items: [stage.qualification] },
                        { label: "Tools & Automation", items: [stage.tools] },
                        { label: "KPI Target", items: [stage.kpi] },
                      ].map((section, j) => (
                        <div key={j} style={{ marginBottom: j < 3 ? 12 : 0 }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: stage.color, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 5 }}>{section.label}</div>
                          {section.items.map((item, k) => (
                            <div key={k} style={{ fontSize: 12, color: "#94a3b8", padding: "3px 0", display: "flex", gap: 6 }}>
                              <span style={{ color: stage.color, fontSize: 9, marginTop: 2 }}>→</span>{item}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ====== MARKETING ====== */}
        {tab === "marketing" && (
          <div>
            <div style={{ padding: "10px 14px", background: "#1a1a2e", borderRadius: 10, border: "1px solid #2d2d44", marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}><span style={{ color: "#fb923c", fontWeight: 700 }}>5 CHANNELS:</span> LinkedIn is #1 priority. Website for inbound. WhatsApp + referrals for India-specific growth. Video for proof. Communities for trust.</span>
            </div>
            {marketingChannels.map((ch, i) => {
              const open = openMarketing === i;
              return (
                <div key={i} style={{ marginBottom: 8, borderRadius: 12, border: `1px solid ${open ? ch.color : "#1e1e2e"}`, background: "#111118", overflow: "hidden" }}>
                  <div onClick={() => setOpenMarketing(open ? -1 : i)} style={{ padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", userSelect: "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 20 }}>{ch.icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0" }}>{ch.channel}</span>
                    </div>
                    <span style={{ color: ch.color, fontSize: 13 }}>{open ? "▲" : "▼"}</span>
                  </div>
                  {open && (
                    <div style={{ borderTop: `1px solid ${ch.color}22`, padding: "14px 16px 16px" }}>
                      <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5, marginBottom: 12, padding: "10px 12px", background: "#1a1a2e", borderRadius: 8, border: "1px solid #2d2d44" }}>{ch.strategy}</div>
                      <div style={{ marginBottom: 10 }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: ch.color, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Content Mix</div>
                        {ch.contentMix.map((c, j) => (
                          <div key={j} style={{ fontSize: 11, color: "#94a3b8", padding: "3px 0", display: "flex", gap: 6 }}>
                            <span style={{ color: ch.color, fontSize: 9, marginTop: 2 }}>◆</span>{c}
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <div style={{ flex: 1, minWidth: 140 }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: ch.color, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Frequency</div>
                          <div style={{ fontSize: 11, color: "#94a3b8" }}>{ch.frequency}</div>
                        </div>
                        <div style={{ flex: 1, minWidth: 140 }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: ch.color, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>KPI</div>
                          <div style={{ fontSize: 11, color: ch.color, fontWeight: 600 }}>{ch.kpi}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ====== PRICING ====== */}
        {tab === "pricing" && (
          <div>
            <div style={{ padding: "10px 14px", background: "#1a1a2e", borderRadius: 10, border: "1px solid #2d2d44", marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}><span style={{ color: "#c084fc", fontWeight: 700 }}>PRICING PHILOSOPHY:</span> Transparent. Configurator-based. No hidden costs. Pro is the default pitch. Objection playbook below.</span>
            </div>
            {/* Pricing cards */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              {pricingStrategy.tiers.map((tier, i) => (
                <div key={i} style={{ flex: "1 1 180px", background: "#111118", border: `2px solid ${tier.best ? tier.color : tier.color + "33"}`, borderRadius: 14, padding: "18px 16px", position: "relative", overflow: "hidden" }}>
                  {tier.best && <div style={{ position: "absolute", top: 10, right: -28, background: tier.color, color: "#fff", fontSize: 9, fontWeight: 700, padding: "2px 32px", transform: "rotate(45deg)", letterSpacing: 0.5 }}>BEST</div>}
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{tier.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 4 }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: tier.color }}>{tier.setup}</span>
                    <span style={{ fontSize: 10, color: "#64748b" }}>setup</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 12 }}>{tier.maintenance} maintenance</div>
                  <div style={{ borderTop: "1px solid #1e1e2e", paddingTop: 10 }}>
                    {tier.features.map((f, j) => (
                      <div key={j} style={{ fontSize: 11, color: "#94a3b8", padding: "3px 0", display: "flex", gap: 6 }}>
                        <span style={{ color: tier.color }}>✓</span>{f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Objection handling */}
            <div style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#fb923c", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>🛡️ Objection Handling Playbook</div>
              {pricingStrategy.objections.map((obj, i) => (
                <div key={i} style={{ marginBottom: i < pricingStrategy.objections.length - 1 ? 10 : 0, padding: "10px 12px", background: "#1a1a2e", borderRadius: 8, border: "1px solid #2d2d44" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#fb923c", marginBottom: 5 }}>❓ "{obj.q}"</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>💬 {obj.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====== METRICS ====== */}
        {tab === "metrics" && (
          <div>
            <div style={{ padding: "10px 14px", background: "#1a1a2e", borderRadius: 10, border: "1px solid #2d2d44", marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}><span style={{ color: "#6366f1", fontWeight: 700 }}>FUNNEL TARGETS:</span> Month 3 · Month 6 · Month 12. If any stage falls behind, the whole funnel breaks. Review weekly.</span>
            </div>
            {/* Funnel visual */}
            <div style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: 12, padding: "18px", marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 14 }}>Sales Funnel — Monthly Targets</div>
              {/* Header */}
              <div style={{ display: "flex", marginBottom: 8 }}>
                <div style={{ flex: 2, fontSize: 10, color: "#64748b", fontWeight: 600 }}>STAGE</div>
                <div style={{ flex: 1, fontSize: 10, color: "#a78bfa", fontWeight: 600, textAlign: "center" }}>Month 3</div>
                <div style={{ flex: 1, fontSize: 10, color: "#60a5fa", fontWeight: 600, textAlign: "center" }}>Month 6</div>
                <div style={{ flex: 1, fontSize: 10, color: "#34d399", fontWeight: 600, textAlign: "center" }}>Month 12</div>
              </div>
              {funnelMetrics.map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", padding: "7px 0", borderBottom: i < funnelMetrics.length - 1 ? "1px solid #1e1e2e" : "none" }}>
                  <div style={{ flex: 2, display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: row.color, flexShrink: 0 }}></div>
                    <span style={{ fontSize: 12, color: "#e2e8f0", fontWeight: row.stage.includes("Revenue") ? 700 : 400 }}>{row.stage}</span>
                  </div>
                  {row.target.map((t, j) => (
                    <div key={j} style={{ flex: 1, textAlign: "center", fontSize: 13, fontWeight: 700, color: row.stage.includes("Revenue") ? row.color : "#94a3b8" }}>{t}</div>
                  ))}
                </div>
              ))}
            </div>
            {/* Conversion rates */}
            <div style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>Target Conversion Rates</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  { from: "Lead → Qualified", rate: "40%", color: "#a78bfa" },
                  { from: "Qualified → Demo", rate: "50%", color: "#60a5fa" },
                  { from: "Demo → Proposal", rate: "60%", color: "#34d399" },
                  { from: "Proposal → Close", rate: "50%", color: "#fb923c" },
                  { from: "Overall: Lead → Close", rate: "6%", color: "#6366f1" },
                ].map((c, i) => (
                  <div key={i} style={{ flex: "1 1 140px", background: "#1a1a2e", border: `1px solid ${c.color}33`, borderRadius: 8, padding: "10px 12px", textAlign: "center" }}>
                    <div style={{ fontSize: 10, color: "#64748b", marginBottom: 4 }}>{c.from}</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: c.color }}>{c.rate}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Weekly review checklist */}
            <div style={{ marginTop: 14, background: "#111118", border: "1px solid #34d39933", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#34d399", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>📋 Weekly Review Checklist (Every Monday)</div>
              {[
                "How many new leads came in? From which channel?",
                "How many discovery calls happened? Any no-shows?",
                "How many demos this week? Any objections we haven't handled?",
                "Proposals sent — any pending > 48 hrs? Follow up TODAY.",
                "Any deals closed? Update case study pipeline.",
                "Content published this week? Any engagement spikes?",
                "Pipeline health: anything stalled > 2 weeks? Kill or escalate.",
              ].map((item, i) => (
                <div key={i} style={{ fontSize: 11, color: "#94a3b8", padding: "4px 0", display: "flex", gap: 7, borderBottom: i < 6 ? "1px solid #1e1e2e" : "none" }}>
                  <span style={{ color: "#34d399" }}>☐</span>{item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 22, padding: "14px 18px", background: "#1a1a2e", borderRadius: 12, border: "1px solid #2d2d44", textAlign: "center" }}>
          <span style={{ fontSize: 11, color: "#64748b" }}><span style={{ color: "#6366f1", fontWeight: 700 }}>Wonder OS Sales & Marketing</span> · 5 phases · 4-person team · 5 stages · 5 channels · ₹10-15Cr Year 1 target</span>
        </div>
      </div>
    </div>
  );
}
