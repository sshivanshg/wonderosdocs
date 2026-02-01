import { useState } from "react";

const checklist = [
  {
    phase: "WEEK 1-2: FOUNDATION", color: "#a78bfa", icon: "🏗️",
    items: [
      { task: "Next.js 14 project scaffolded + pushed to GitHub", critical: true },
      { task: "Vercel connected — staging URL live", critical: true },
      { task: "Supabase project created (platform DB)", critical: true },
      { task: "Prisma ORM configured + connected to Supabase", critical: true },
      { task: "Core DB schema: customers, projects, deployments, subscriptions", critical: true },
      { task: "NextAuth.js: email/password + Google OAuth working", critical: true },
      { task: "Razorpay test keys integrated — test payment flows", critical: true },
      { task: "GitHub org + 5 private template repo placeholders", critical: false },
      { task: "wonderos.in domain + Cloudflare DNS configured", critical: false },
      { task: "Staging vs production env separated on Vercel", critical: false },
      { task: "Resend email connected + test email sent", critical: false },
      { task: "Sentry error monitoring connected", critical: false },
    ],
  },
  {
    phase: "WEEK 3-4: TEMPLATE #1 — SERVICE BUSINESS HUB", color: "#60a5fa", icon: "🏢",
    items: [
      { task: "Template repo created with full folder structure", critical: true },
      { task: "Next.js frontend: booking page, service catalog, client portal", critical: true },
      { task: "Backend APIs: booking, availability logic, payments", critical: true },
      { task: "React Native mobile screens scaffolded (iOS + Android)", critical: true },
      { task: "Branding injection system: logo, colors, fonts via JSON config", critical: true },
      { task: "Feature toggle engine: enable/disable modules per config", critical: true },
      { task: "Per-app Supabase DB provisioning script tested", critical: true },
      { task: "Cloudflare R2 bucket provisioning script tested", critical: false },
      { task: "Service owner admin dashboard (bookings, revenue)", critical: false },
      { task: "Auto email confirmation on booking", critical: false },
      { task: "Template docs: features, config options, customization points", critical: false },
    ],
  },
  {
    phase: "WEEK 5-6: DEPLOYMENT PIPELINE", color: "#34d399", icon: "🚀",
    items: [
      { task: "GitHub Actions workflow written + tested end-to-end", critical: true },
      { task: "Vercel programmatic Deploy API working", critical: true },
      { task: "Full pipeline: payment → trigger → clone → inject → deploy → LIVE", critical: true },
      { task: "Cloudflare domain + SSL auto-config via API", critical: true },
      { task: "Health checks: post-deploy endpoint verification", critical: true },
      { task: "Real-time deployment status in platform DB", critical: true },
      { task: "Founder notification email on deploy success", critical: false },
      { task: "Failed deploy → Slack/email alert to Wonder team", critical: false },
      { task: "Rollback: auto-revert if health check fails", critical: false },
      { task: "Deploy logs stored + viewable", critical: false },
    ],
  },
  {
    phase: "WEEK 7-8: FOUNDER DASHBOARD", color: "#fb923c", icon: "📊",
    items: [
      { task: "Registration + onboarding flow (signup → verify → profile)", critical: true },
      { task: "Configurator: template picker → features → pricing preview", critical: true },
      { task: "Dashboard home: projects, status, quick actions", critical: true },
      { task: "Real-time deployment progress tracker (visual steps)", critical: true },
      { task: "Billing: plan, invoices, upgrade/downgrade", critical: true },
      { task: "Support tickets: create, status, reply", critical: true },
      { task: "Onboarding checklist for first-time setup", critical: false },
      { task: "Settings: profile, team, API keys", critical: false },
      { task: "Dashboard fully mobile-responsive", critical: false },
    ],
  },
  {
    phase: "WEEK 9-10: TEMPLATE #2 + MOBILE BUILDS", color: "#f472b6", icon: "🏥📱",
    items: [
      { task: "Healthcare Management template built (patient + doctor portals)", critical: true },
      { task: "Appointment booking + availability (healthcare-specific)", critical: true },
      { task: "React Native builds working via Expo EAS Build", critical: true },
      { task: "iOS .ipa generated + code-signed", critical: true },
      { task: "Android .aab generated + signed", critical: true },
      { task: "TestFlight beta distribution set up", critical: true },
      { task: "App Store submission guide (step-by-step)", critical: false },
      { task: "Play Store submission guide", critical: false },
      { task: "Mobile branding injection tested (icon, splash, colors)", critical: false },
      { task: "E2E mobile test suite (basic flows)", critical: false },
    ],
  },
  {
    phase: "WEEK 11-12: TEMPLATES #3-5 + LAUNCH", color: "#c084fc", icon: "🚢",
    items: [
      { task: "Real Estate Platform template built + tested", critical: true },
      { task: "Education & Coaching template built + tested", critical: true },
      { task: "E-commerce Store template built + tested", critical: true },
      { task: "All 5 templates deployed end-to-end at least once", critical: true },
      { task: "5 beta founders onboarded + apps live", critical: true },
      { task: "Beta feedback collected + critical bugs fixed", critical: true },
      { task: "Internal ops dashboard for Wonder team", critical: false },
      { task: "Public website: landing, pricing, case studies, demo", critical: false },
      { task: "Launch announcement prepped (email, social, communities)", critical: false },
      { task: "Post-launch monitoring: Sentry + uptime + alerts active", critical: false },
    ],
  },
];

const postData = [
  {
    month: "Month 4-5", title: "REVENUE + ITERATION", color: "#6366f1",
    targets: ["10-20 paying customers", "₹1-2 Cr revenue", "95%+ store approval"],
    actions: ["Fix all beta bugs", "Add PostHog analytics (free tier)", "Email drip sequences for founders", "Refine configurator from real usage", "Maintenance revenue starts (₹50K-2L/mo per app)", "Track NPS, churn, LTV"],
  },
  {
    month: "Month 6", title: "GROWTH ENGINE", color: "#60a5fa",
    targets: ["30+ apps deployed", "₹3-5 Cr revenue", "MRR ₹20-40L"],
    actions: ["Simple CRM (HubSpot free)", "WhatsApp per client (manual)", "n8n for internal ops only", "Client case study videos", "Launch referral program", "Finalize sales playbook for Anirban"],
  },
  {
    month: "Month 7-9", title: "AI + SCALE", color: "#34d399",
    targets: ["50+ apps deployed", "₹5-10 Cr revenue", "Team 12-15 people"],
    actions: ["Wonder Concierge AI chatbot (optional)", "Wonder Filter AI lead scoring", "Upgraded self-service configurator", "2-3 new templates from demand", "International pricing (USD)", "Seed fundraise if needed"],
  },
  {
    month: "Month 10-12", title: "PLATFORM PLAY", color: "#fb923c",
    targets: ["100+ apps deployed", "₹10-15 Cr revenue", "MRR ₹1 Cr+"],
    actions: ["White-label pilot (3-5 agencies)", "Template marketplace beta", "Full founder analytics", "Enterprise tier pricing", "Year 2 roadmap", "Series A based on metrics"],
  },
];

const uxFlows = {
  onboarding: {
    label: "Onboarding", color: "#a78bfa",
    steps: [
      { title: "Sign Up", lines: ["⚡ Wonder OS", "─────────────", "Build your app today", "Production-ready in 30 days", "─────────────", "[  Full Name  ]", "[  Email Address  ]", "[  Password  ]", "─────────────", "▶  Create Account", "Already have account? Sign in"] },
      { title: "Verify Email", lines: ["⚡ Wonder OS", "─────────────", "📧", "Check your inbox", "We sent a verification link to your@email.com", "─────────────", "▶  Resend Email", "← Back"] },
      { title: "Profile", lines: ["⚡ Wonder OS", "─  Step 2 of 3  ─", "About you", "─────────────", "[  Company / Project Name  ]", "[  Industry (dropdown)  ]", "[  Team Size  ]", "[  Phone +91  ]", "─────────────", "▶  Continue →"] },
      { title: "Pick Goal", lines: ["⚡ Wonder OS", "─  Step 3 of 3  ─", "What do you want to build?", "We'll recommend the best template", "─────────────", "🏢  Service Business", "🏥  Healthcare App", "🏠  Real Estate", "📚  Education", "🛒  E-commerce", "─────────────", "▶  Go to Configurator →"] },
    ],
  },
  configurator: {
    label: "Configurator", color: "#60a5fa",
    steps: [
      { title: "Pick Template", lines: ["⚡ Wonder OS  |  Configurator  |  Dashboard", "─  Step 1 → 2 → 3 → 4  ─", "Choose your template", "─────────────", "🏢  Service Business Hub  —  ₹5.9L", "🏥  Healthcare Management  —  ₹6.9L", "🏠  Real Estate Platform  —  ₹5.5L", "📚  Education & Coaching  —  ₹5.2L", "🛒  E-commerce Store  —  ₹6.5L", "─────────────", "▶  Select & Continue →"] },
      { title: "Features", lines: ["⚡ Wonder OS  |  Configurator  |  Dashboard", "─  Step 1 ✓  →  Step 2  →  3 → 4  ─", "Pick your features", "─────────────", "✓  Booking System (included)  [ON]", "✓  Payment Gateway (included)  [ON]", "○  AI Chatbot +₹40,000  [OFF]", "○  SMS Reminders +₹15,000  [OFF]", "○  WhatsApp +₹25,000  [OFF]", "○  Lead Management +₹30,000  [OFF]", "─────────────", "Total: ₹5,90,000", "▶  Continue →"] },
      { title: "Brand", lines: ["⚡ Wonder OS  |  Configurator  |  Dashboard", "─  Step 1 ✓  →  2 ✓  →  Step 3  → 4  ─", "Brand it your way", "─────────────", "[  Upload Logo  ]", "Primary Color  [🟣]", "Secondary Color  [🔵]", "[  App Name  ]", "[  Your Domain  ]", "─────────────", "[ Live Preview of your app ]", "▶  Continue →"] },
      { title: "Review + Pay", lines: ["⚡ Wonder OS  |  Configurator  |  Dashboard", "─  Steps 1-3 ✓  →  Step 4  ─", "Review your order", "─────────────", "Template: Service Business Hub", "Features: Booking, Payments, SMS", "Domain: app.mycompany.com", "Timeline: 30 days to live", "─────────────", "Total: ₹6,05,000", "▶  Pay with Razorpay →", "← Edit"] },
    ],
  },
  dashboard: {
    label: "Dashboard", color: "#fb923c",
    steps: [
      { title: "Home", lines: ["⚡ Wonder  |  🏠 Home  📦 Projects  💳 Billing  🎫 Support", "─────────────", "Welcome back, Priyabrata", "─────────────", "Active Apps: 3  |  MRR: ₹1.8L  |  Due: Mar 15", "─────────────", "📦  Nabo Clothing  —  LIVE ✓  —  2 days ago", "📦  MediqAI  —  DEPLOYING…  —  Step 8 / 12", "─────────────", "▶  + Start New Project"] },
      { title: "Projects", lines: ["⚡ Wonder  |  🏠 Home  📦 Projects  💳 Billing  🎫 Support", "─────────────", "My Projects", "All  |  Live  |  Deploying  |  Draft", "─────────────", "🏢  Nabo Clothing  —  LIVE ✓  —  ₹1.2L/mo", "🏥  MediqAI  —  DEPLOYING  —  In progress", "🛒  QuickMart  —  LIVE ✓  —  ₹80K/mo", "─────────────", "▶  + New Project"] },
      { title: "Deploy Status", lines: ["⚡ Wonder  |  🏠 Home  📦 Projects  💳 Billing  🎫 Support", "─────────────", "MediqAI — Deployment Status", "─────────────", "✅  Payment confirmed", "✅  Template cloned", "✅  Config injected", "✅  Database provisioned", "⏳  Building & deploying… (3 min)", "⭕  Domain configuration", "⭕  Health check", "⭕  LIVE!", "─  ~8 minutes remaining  ─"] },
      { title: "Support", lines: ["⚡ Wonder  |  🏠 Home  📦 Projects  💳 Billing  🎫 Support", "─────────────", "Support Tickets", "▶  + New Ticket", "─────────────", "🎫  #1042  —  App icon not showing  —  Open  —  2hrs", "🎫  #1038  —  Payment gateway test  —  Resolved ✓", "🎫  #1035  —  Add new service type  —  In Progress"] },
    ],
  },
  billing: {
    label: "Billing", color: "#34d399",
    steps: [
      { title: "Plans", lines: ["⚡ Wonder  |  🏠 Home  📦 Projects  💳 Billing  🎫 Support", "─────────────", "Billing & Plans", "─────────────", "Current: Wonder Pro — ₹25,000/mo — Up to 5 apps", "Apps Used: 3 of 5", "Maintenance MRR: ₹1,80,000", "─────────────", "▶  Upgrade Plan"] },
      { title: "Invoices", lines: ["⚡ Wonder  |  🏠 Home  📦 Projects  💳 Billing  🎫 Support", "─────────────", "Invoices", "─────────────", "INV-031  —  ₹25,000  —  Feb 2026  —  Paid ✓", "INV-030  —  ₹6,05,000  —  Jan 2026  —  Paid ✓  (Setup)", "INV-029  —  ₹25,000  —  Jan 2026  —  Paid ✓"] },
      { title: "Usage", lines: ["⚡ Wonder  |  🏠 Home  📦 Projects  💳 Billing  🎫 Support", "─────────────", "Usage This Month", "─────────────", "Deployments: 2  |  API Calls: 12.4K  |  Storage: 2.3GB", "─────────────", "Nabo Clothing  —  8.2K calls  —  1.1GB", "QuickMart  —  4.2K calls  —  1.2GB"] },
    ],
  },
};

export default function App() {
  const [tab, setTab] = useState("checklist");
  const [openIdx, setOpenIdx] = useState(-1);
  const [uxFlow, setUxFlow] = useState("onboarding");
  const [uxStep, setUxStep] = useState(0);

  const flow = uxFlows[uxFlow];
  const screen = flow.steps[uxStep];

  return (
    <div style={{ background: "#0b0b12", minHeight: "100vh", color: "#e2e8f0", fontFamily: "Inter, system-ui, sans-serif", fontSize: 14 }}>

      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg, #12121f, #0b0b12)", borderBottom: "1px solid #222", padding: "18px 24px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #6366f1, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>⚡</div>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>Wonder OS — Execution Plan</div>
          <div style={{ fontSize: 11, color: "#6366f1", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>90-Day Checklist · Post-90 Roadmap · Master UX Wireframes</div>
        </div>
      </div>

      {/* TAB BAR */}
      <div style={{ display: "flex", gap: 6, padding: "12px 24px", background: "#0f0f18", borderBottom: "1px solid #222" }}>
        {[
          { id: "checklist", label: "✓  90-Day Checklist" },
          { id: "after90", label: "🚀  After 90 Days" },
          { id: "ux", label: "🖥️  Master UX" },
        ].map((t) => (
          <button key={t.id} onClick={() => { setTab(t.id); setOpenIdx(-1); }} style={{
            background: tab === t.id ? "#6366f1" : "transparent",
            color: tab === t.id ? "#fff" : "#64748b",
            border: tab === t.id ? "none" : "1px solid #2a2a3a",
            borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer",
            transition: "all 0.2s"
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 40px" }}>

        {/* ============ CHECKLIST TAB ============ */}
        {tab === "checklist" && (
          <div>
            <div style={{ background: "#161620", border: "1px solid #2a2a3a", borderRadius: 10, padding: "10px 16px", marginBottom: 20 }}>
              <span style={{ color: "#34d399", fontWeight: 700, fontSize: 12 }}>HOW TO READ: </span>
              <span style={{ color: "#64748b", fontSize: 12 }}>Tap each phase to expand. <span style={{ color: "#a78bfa" }}>◆ CRITICAL</span> = must finish before next phase. Grey = nice-to-have. <strong style={{ color: "#fff" }}>65 tasks total.</strong></span>
            </div>
            {checklist.map((phase, i) => {
              const open = openIdx === i;
              const crit = phase.items.filter(x => x.critical).length;
              return (
                <div key={i} style={{ marginBottom: 10, borderRadius: 12, border: `1px solid ${open ? phase.color : "#2a2a3a"}`, background: "#131318", overflow: "hidden", transition: "border 0.2s" }}>
                  <div onClick={() => setOpenIdx(open ? -1 : i)} style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", userSelect: "none" }}>
                    <span style={{ fontSize: 22 }}>{phase.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#eee" }}>{phase.phase}</div>
                      <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{crit} critical &nbsp;·&nbsp; {phase.items.length - crit} secondary &nbsp;·&nbsp; {phase.items.length} tasks</div>
                    </div>
                    <span style={{ color: phase.color, fontSize: 14, transition: "transform 0.2s", display: "inline-block", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
                  </div>
                  {open && (
                    <div style={{ borderTop: `1px solid ${phase.color}25`, padding: "4px 18px 16px" }}>
                      {phase.items.map((item, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "7px 0", borderBottom: j < phase.items.length - 1 ? "1px solid #1e1e28" : "none" }}>
                          <span style={{ marginTop: 4, fontSize: 8, color: item.critical ? phase.color : "#333", flexShrink: 0 }}>◆</span>
                          <span style={{ fontSize: 12, color: item.critical ? "#ddd" : "#555", flex: 1, lineHeight: 1.5 }}>{item.task}</span>
                          {item.critical && <span style={{ fontSize: 9, fontWeight: 700, color: phase.color, background: `${phase.color}15`, padding: "2px 8px", borderRadius: 10, flexShrink: 0, whiteSpace: "nowrap" }}>CRITICAL</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ============ AFTER 90 DAYS TAB ============ */}
        {tab === "after90" && (
          <div>
            <div style={{ background: "#161620", border: "1px solid #2a2a3a", borderRadius: 10, padding: "10px 16px", marginBottom: 20 }}>
              <span style={{ color: "#fb923c", fontWeight: 700, fontSize: 12 }}>AFTER DAY 90: </span>
              <span style={{ color: "#64748b", fontSize: 12 }}>Wonder OS is live with 5 beta customers. Now it's about <strong style={{ color: "#fff" }}>revenue, iteration, and growth</strong> — month by month.</span>
            </div>

            {/* Revenue bar */}
            <div style={{ background: "#131318", border: "1px solid #2a2a3a", borderRadius: 12, padding: "18px 20px", marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Year 1 Revenue Arc</div>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-end", height: 110 }}>
                {[
                  { l: "M1-3", pct: 22, c: "#a78bfa", r: "₹2-3Cr" },
                  { l: "M4-5", pct: 38, c: "#60a5fa", r: "₹1-2Cr" },
                  { l: "M6", pct: 50, c: "#34d399", r: "₹3-5Cr" },
                  { l: "M7-9", pct: 72, c: "#fb923c", r: "₹5-10Cr" },
                  { l: "M10-12", pct: 100, c: "#c084fc", r: "₹10-15Cr" },
                ].map((b, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, height: "100%" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: b.c }}>{b.r}</span>
                    <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                      <div style={{ width: "100%", height: `${b.pct}%`, background: `linear-gradient(to top, ${b.c}, ${b.c}55)`, borderRadius: 6 }}></div>
                    </div>
                    <span style={{ fontSize: 10, color: "#555" }}>{b.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Month cards */}
            {postData.map((card, i) => {
              const open = openIdx === i;
              return (
                <div key={i} style={{ marginBottom: 10, borderRadius: 12, border: `1px solid ${card.color}30`, background: "#131318", overflow: "hidden" }}>
                  <div onClick={() => setOpenIdx(open ? -1 : i)} style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer", userSelect: "none" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: `${card.color}12`, border: `1px solid ${card.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 15, fontWeight: 800, color: card.color }}>{card.month.split(" ")[1]}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#eee" }}>{card.title}</div>
                      <div style={{ fontSize: 11, color: card.color }}>{card.month}</div>
                    </div>
                    <span style={{ color: "#555", fontSize: 14, transform: open ? "rotate(180deg)" : "rotate(0)", display: "inline-block", transition: "transform 0.2s" }}>▼</span>
                  </div>
                  {open && (
                    <div style={{ borderTop: `1px solid ${card.color}20`, padding: "14px 18px" }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: card.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Targets</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                        {card.targets.map((t, j) => (
                          <span key={j} style={{ fontSize: 11, color: "#ddd", background: `${card.color}10`, border: `1px solid ${card.color}25`, padding: "4px 12px", borderRadius: 20 }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: card.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Actions</div>
                      {card.actions.map((a, j) => (
                        <div key={j} style={{ fontSize: 12, color: "#888", padding: "5px 0", display: "flex", gap: 8, borderBottom: j < card.actions.length - 1 ? "1px solid #1e1e28" : "none" }}>
                          <span style={{ color: card.color }}>→</span>{a}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ============ MASTER UX TAB ============ */}
        {tab === "ux" && (
          <div>
            <div style={{ background: "#161620", border: "1px solid #2a2a3a", borderRadius: 10, padding: "10px 16px", marginBottom: 20 }}>
              <span style={{ color: "#60a5fa", fontWeight: 700, fontSize: 12 }}>MASTER UX: </span>
              <span style={{ color: "#64748b", fontSize: 12 }}>Every screen a founder touches. Pick a <strong style={{ color: "#fff" }}>flow</strong> → then a <strong style={{ color: "#fff" }}>screen</strong>. This is Shubhodeep's build map.</span>
            </div>

            {/* Journey */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, marginBottom: 18, flexWrap: "wrap" }}>
              {["Sign Up", "→", "Configurator", "→", "Pay", "→", "Deploy", "→", "Dashboard", "→", "Maintain"].map((item, i) => (
                <span key={i} style={{
                  fontSize: 11, fontWeight: 600,
                  color: item === "→" ? "#333" : "#aaa",
                  background: item === "→" ? "transparent" : "#1a1a24",
                  padding: item === "→" ? "0 2px" : "4px 12px",
                  borderRadius: 20,
                  border: item === "→" ? "none" : "1px solid #2a2a3a"
                }}>{item}</span>
              ))}
            </div>

            {/* Flow buttons */}
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              {Object.entries(uxFlows).map(([key, f]) => (
                <button key={key} onClick={() => { setUxFlow(key); setUxStep(0); }} style={{
                  background: uxFlow === key ? f.color : "transparent",
                  color: uxFlow === key ? "#fff" : "#888",
                  border: uxFlow === key ? "none" : "1px solid #2a2a3a",
                  borderRadius: 8, padding: "7px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer"
                }}>{f.label}</button>
              ))}
            </div>

            {/* Screen buttons */}
            <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
              {flow.steps.map((s, i) => (
                <button key={i} onClick={() => setUxStep(i)} style={{
                  background: uxStep === i ? `${flow.color}15` : "transparent",
                  color: uxStep === i ? flow.color : "#555",
                  border: uxStep === i ? `1px solid ${flow.color}40` : "1px solid #2a2a3a",
                  borderRadius: 6, padding: "5px 0", fontSize: 11, fontWeight: 600, cursor: "pointer", flex: 1, textAlign: "center"
                }}>{s.title}</button>
              ))}
            </div>

            {/* Wireframe box */}
            <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #2a2a3a" }}>
              {/* Browser chrome */}
              <div style={{ background: "#1a1a24", padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ef4444" }}></div>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#eab308" }}></div>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#22c55e" }}></div>
                <div style={{ flex: 1, textAlign: "center", fontSize: 11, color: "#555" }}>wonderos.in — {screen.title}</div>
              </div>

              {/* Screen content as styled lines */}
              <div style={{ background: "#0f0f16", padding: "24px 28px", minHeight: 380 }}>
                {screen.lines.map((line, i) => {
                  const isHeader = i === 0 || (line.includes("Welcome") || line.includes("Choose") || line.includes("About") || line.includes("What do") || line.includes("Pick") || line.includes("Brand") || line.includes("Review") || line.includes("My Projects") || line.includes("Billing") || line.includes("Support Tickets") || line.includes("Usage") || line.includes("Invoices") || line.includes("Check your") || line.includes("Deployment Status"));
                  const isDivider = line.includes("─────");
                  const isBtn = line.startsWith("▶");
                  const isPrice = line.includes("Total:");
                  const isLink = line.startsWith("←") || line.includes("Sign in") || line.includes("← Back") || line.includes("← Edit");
                  const isNav = line.includes("Wonder OS  |") || line.includes("Wonder  |");
                  const isDone = line.startsWith("✅");
                  const isActive = line.startsWith("⏳");
                  const isWaiting = line.startsWith("⭕");
                  const isToggleOn = line.includes("[ON]");
                  const isToggleOff = line.includes("[OFF]");
                  const isSubtext = line.includes("Production-ready") || line.includes("We sent") || line.includes("We'll recommend") || line.includes("remaining");
                  const isInput = line.startsWith("[") && line.endsWith("]") && !line.includes("Live Preview");
                  const isPreview = line.includes("Live Preview");
                  const isTarget = line.includes("Active Apps") || line.includes("Deployments:") || line.includes("Apps Used");

                  let color = "#aaa";
                  let fontWeight = 400;
                  let fontSize = 13;
                  let bg = "transparent";
                  let borderRadius = 0;
                  let padding = "3px 0";
                  let border = "none";
                  let textAlign = "left";

                  if (i === 0 && line.includes("⚡")) { color = "#6366f1"; fontWeight = 800; fontSize = 15; textAlign = "center"; padding = "6px 0 10px"; }
                  if (isNav) { color = "#555"; fontSize = 11; padding = "4px 0 10px"; border = "1px solid #2a2a3a"; borderRadius = 6; padding = "6px 10px"; bg = "#161620"; }
                  if (isDivider) { color = "#2a2a3a"; fontSize = 10; padding = "4px 0"; }
                  if (isHeader && i !== 0) { color = "#fff"; fontWeight = 700; fontSize = 16; padding = "8px 0 4px"; textAlign = "center"; }
                  if (isSubtext) { color = "#555"; fontSize = 11; textAlign = "center"; }
                  if (isInput) { bg = "#161620"; border = "1px solid #2a2a3a"; borderRadius = 8; padding = "9px 12px"; color = "#555"; fontSize = 12; }
                  if (isPreview) { bg = "#0a0a10"; border = "1px dashed #2a2a3a"; borderRadius = 8; padding = "18px 12px"; color = "#555"; fontSize = 11; textAlign = "center"; }
                  if (isBtn) { bg = "linear-gradient(135deg, #6366f1, #8b5cf6)"; color = "#fff"; fontWeight = 700; fontSize = 13; borderRadius = 8; padding = "10px 16px"; textAlign = "center"; }
                  if (isPrice) { color = "#34d399"; fontWeight = 800; fontSize = 19; textAlign = "center"; padding = "8px 0"; }
                  if (isLink) { color = "#6366f1"; fontSize = 11; textAlign = "center"; }
                  if (isDone) { color = "#34d399"; fontSize = 13; }
                  if (isActive) { color = "#fb923c"; fontWeight = 600; fontSize = 13; }
                  if (isWaiting) { color = "#444"; fontSize = 13; }
                  if (isToggleOn) { color = "#ddd"; }
                  if (isToggleOff) { color = "#555"; }
                  if (isTarget) { bg = "#161620"; border = "1px solid #2a2a3a"; borderRadius = 8; padding = "8px 12px"; color = "#ddd"; fontSize = 12; }

                  // Cards (lines starting with emoji that are not buttons or steps)
                  const isCard = !isBtn && !isDone && !isActive && !isWaiting && !isInput && !isPreview && !isDivider && !isNav && !isHeader && !isSubtext && !isLink && !isPrice && !isTarget && (line.startsWith("🏢") || line.startsWith("🏥") || line.startsWith("🏠") || line.startsWith("📚") || line.startsWith("🛒") || line.startsWith("📦") || line.startsWith("🎫") || line.startsWith("INV") || line.startsWith("Nabo") || line.startsWith("Quick") || line.startsWith("Template:") || line.startsWith("Features:") || line.startsWith("Domain:") || line.startsWith("Timeline:") || line.startsWith("Current:") || line.startsWith("Apps Used") || line.startsWith("Maintenance"));
                  if (isCard) { bg = "#161620"; border = "1px solid #2a2a3a"; borderRadius = 8; padding = "9px 12px"; color = "#ddd"; fontSize = 12; }

                  return (
                    <div key={i} style={{ background: bg, border, borderRadius, padding, color, fontWeight, fontSize, textAlign, margin: "2px 0", lineHeight: 1.5 }}>
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Prev / Next */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14 }}>
              <button onClick={() => uxStep > 0 && setUxStep(uxStep - 1)} disabled={uxStep === 0} style={{ background: "transparent", border: "1px solid #2a2a3a", borderRadius: 8, padding: "6px 14px", fontSize: 12, color: uxStep === 0 ? "#333" : "#888", cursor: uxStep === 0 ? "default" : "pointer" }}>← Prev</button>
              <span style={{ fontSize: 11, color: "#555" }}>{uxStep + 1} / {flow.steps.length}</span>
              <button onClick={() => uxStep < flow.steps.length - 1 && setUxStep(uxStep + 1)} disabled={uxStep === flow.steps.length - 1} style={{ background: "transparent", border: "1px solid #2a2a3a", borderRadius: 8, padding: "6px 14px", fontSize: 12, color: uxStep === flow.steps.length - 1 ? "#333" : "#888", cursor: uxStep === flow.steps.length - 1 ? "default" : "pointer" }}>Next →</button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 30, textAlign: "center", padding: "14px", background: "#131318", borderRadius: 12, border: "1px solid #2a2a3a" }}>
          <span style={{ fontSize: 11, color: "#555" }}><span style={{ color: "#6366f1", fontWeight: 700 }}>Wonder OS v1.0</span> · 65 tasks · 5 templates · 30-day delivery · Ship to App Stores · Charge real money</span>
        </div>
      </div>
    </div>
  );
}
