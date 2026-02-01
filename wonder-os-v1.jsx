import { useState } from "react";

export default function WonderOSV1() {

  const phases = [
    {
      week: "Week 1-2",
      label: "Foundation",
      color: "#a78bfa",
      tasks: [
        "Next.js 14 project scaffolding (Vercel)",
        "Supabase PostgreSQL setup (platform DB)",
        "Auth system (NextAuth.js + email/password + Google OAuth)",
        "Core DB schema: customers, projects, deployments, subscriptions",
        "Razorpay payment integration (test mode)",
        "GitHub org + private template repos created",
        "Domain setup: wonderos.in + staging environments",
      ],
    },
    {
      week: "Week 3-4",
      label: "Template #1",
      color: "#60a5fa",
      tasks: [
        "Service Business Hub template (full React Native + Next.js backend)",
        "Template repo structure: /frontend, /backend, /mobile, /config",
        "Branding injection system (logo, colors, fonts, app name)",
        "Feature toggle engine (enable/disable modules via JSON config)",
        "Supabase per-app database provisioning script",
        "Cloudflare R2 bucket provisioning per app",
        "Basic deployment script: clone → inject → deploy → verify",
      ],
    },
    {
      week: "Week 5-6",
      label: "Deployment Pipeline",
      color: "#34d399",
      tasks: [
        "Semi-automated deployment pipeline (GitHub Actions)",
        "Vercel programmatic deploy API integration",
        "Custom domain configuration automation (Cloudflare API)",
        "SSL auto-provisioning verification",
        "Health check system (endpoint verification post-deploy)",
        "Deployment status tracking in platform DB",
        "Founder notification system (email + dashboard)",
      ],
    },
    {
      week: "Week 7-8",
      label: "Founder Dashboard",
      color: "#fb923c",
      tasks: [
        "Founder registration + onboarding flow",
        "Project dashboard (status, URLs, metrics)",
        "Configurator UI: template selection → feature picker → pricing",
        "Real-time deployment progress tracker",
        "Support ticket system (simple)",
        "Billing dashboard (Razorpay subscription view)",
        "Documentation & onboarding guides embedded",
      ],
    },
    {
      week: "Week 9-10",
      label: "Template #2 + Mobile",
      color: "#f472b6",
      tasks: [
        "Healthcare Management template (booking + patient portal)",
        "React Native mobile app builds (iOS + Android)",
        "EAS Build (Expo) CI/CD for mobile",
        "App Store submission guide + assisted workflow",
        "Play Store submission guide + assisted workflow",
        "TestFlight beta distribution setup",
        "Mobile app template injection (icons, splash, API endpoints)",
      ],
    },
    {
      week: "Week 11-12",
      label: "Templates #3-5 + Launch",
      color: "#c084fc",
      tasks: [
        "Real Estate Platform template",
        "Education/Coaching template",
        "E-commerce Store template",
        "Beta testing with 5 real founders",
        "Bug fixes + performance tuning",
        "Internal ops dashboard (Wonder team)",
        "Public launch preparation (website, case studies, pricing page)",
      ],
    },
  ];

  const architecture = {
    layers: [
      {
        name: "CLIENT LAYER",
        color: "#6366f1",
        components: [
          { name: "Public Website", detail: "Landing, pricing, showcase" },
          { name: "Founder Dashboard", detail: "Projects, deployments, billing" },
          { name: "Wonder Admin", detail: "Internal ops, support, monitoring" },
        ],
      },
      {
        name: "FRONTEND (Next.js 14)",
        color: "#8b5cf6",
        components: [
          { name: "Public Pages", detail: "SEO-optimized, configurator entry" },
          { name: "Auth Layer", detail: "NextAuth.js — email, Google OAuth" },
          { name: "Founder Portal", detail: "Dashboard, projects, support" },
          { name: "Admin Panel", detail: "Internal team only" },
        ],
      },
      {
        name: "BACKEND (Next.js API Routes)",
        color: "#a78bfa",
        components: [
          { name: "Auth & Identity", detail: "JWT, RBAC, sessions" },
          { name: "Project Management", detail: "CRUD, status tracking" },
          { name: "Configurator Engine", detail: "Template → config → pricing" },
          { name: "Deployment Orchestrator", detail: "Triggers GitHub Actions" },
          { name: "Billing Service", detail: "Razorpay subscriptions" },
          { name: "Support System", detail: "Ticket CRUD, assignment" },
        ],
      },
      {
        name: "DEPLOYMENT PIPELINE",
        color: "#7c3aed",
        components: [
          { name: "GitHub Actions", detail: "CI/CD trigger per deployment" },
          { name: "Template Engine", detail: "Clone → inject config → build" },
          { name: "Vercel Deploy API", detail: "Programmatic web deploy" },
          { name: "Supabase Provisioner", detail: "New DB per founder app" },
          { name: "Cloudflare APIs", detail: "Domain + R2 + SSL" },
          { name: "Mobile Build (EAS)", detail: "iOS .ipa + Android .aab" },
        ],
      },
      {
        name: "DATA LAYER",
        color: "#5b21b6",
        components: [
          { name: "Platform DB", detail: "Supabase — customers, projects" },
          { name: "App DBs", detail: "Isolated Supabase per founder app" },
          { name: "File Storage", detail: "Cloudflare R2 per app" },
        ],
      },
    ],
  };

  const techStack = [
    {
      category: "Frontend",
      icon: "🖥️",
      items: [
        { name: "Next.js 14", role: "App Router, SSR, API routes" },
        { name: "React 18", role: "UI components" },
        { name: "TypeScript", role: "Type safety everywhere" },
        { name: "Tailwind CSS", role: "Styling" },
        { name: "shadcn/ui", role: "Component library" },
        { name: "Zustand", role: "Client state" },
        { name: "React Query", role: "Server state + caching" },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: [
        { name: "Next.js API Routes", role: "All backend logic" },
        { name: "Prisma", role: "ORM + migrations" },
        { name: "Zod", role: "Input validation" },
        { name: "NextAuth.js", role: "Authentication" },
        { name: "Razorpay", role: "Payments (India)" },
        { name: "Resend", role: "Email delivery" },
      ],
    },
    {
      category: "Infrastructure",
      icon: "☁️",
      items: [
        { name: "Vercel", role: "Hosting (platform + founder apps)" },
        { name: "Supabase", role: "PostgreSQL managed DB" },
        { name: "Cloudflare", role: "CDN + R2 storage + domains" },
        { name: "GitHub Actions", role: "Deployment automation" },
        { name: "Sentry", role: "Error monitoring" },
        { name: "Better Stack", role: "Uptime + logs" },
      ],
    },
    {
      category: "Mobile",
      icon: "📱",
      items: [
        { name: "React Native 0.73", role: "iOS + Android apps" },
        { name: "Expo (EAS Build)", role: "Cloud builds + signing" },
        { name: "Fastlane", role: "Store submission automation" },
      ],
    },
  ];

  const templates = [
    {
      name: "Service Business Hub",
      week: "Week 3-4",
      status: "first",
      icon: "🏢",
      features: ["Booking system", "Client portal", "Payment integration", "Admin dashboard", "Email confirmations", "SMS reminders"],
      useCases: ["Salons", "Consultants", "Tutors", "Freelancers", "Agencies"],
    },
    {
      name: "Healthcare Management",
      week: "Week 9-10",
      status: "second",
      icon: "🏥",
      features: ["Patient portal", "Appointment booking", "Doctor dashboard", "Prescription system", "Payment gateway", "Reminder system"],
      useCases: ["Clinics", "Dentists", "Therapists", "Labs", "Telehealth"],
    },
    {
      name: "Real Estate Platform",
      week: "Week 11-12",
      status: "third",
      icon: "🏠",
      features: ["Property listings", "Search & filters", "Inquiry system", "Agent dashboard", "Virtual tours", "Lead management"],
      useCases: ["Agents", "Brokers", "Developers", "PG providers"],
    },
    {
      name: "Education & Coaching",
      week: "Week 11-12",
      status: "third",
      icon: "📚",
      features: ["Course catalog", "Student dashboard", "Video hosting", "Quiz system", "Certificate generation", "Payment gating"],
      useCases: ["Coaches", "EdTech", "YouTube creators", "Corporate trainers"],
    },
    {
      name: "E-commerce Store",
      week: "Week 11-12",
      status: "third",
      icon: "🛒",
      features: ["Product catalog", "Shopping cart", "Razorpay checkout", "Order management", "Inventory system", "Delivery tracking"],
      useCases: ["D2C brands", "Local shops", "Artisans", "Dropshippers"],
    },
  ];

  const teamRoles = [
    { name: "Priyabrata (CEO)", role: "Sales, strategy, client relations, configurator UX decisions", hours: "Full-time" },
    { name: "Mainak (CTO)", role: "Template architecture, deployment pipeline, backend APIs, infrastructure", hours: "Full-time" },
    { name: "Shubhodeep (Designer/PM)", role: "Template UI/UX, founder dashboard design, client customization layer", hours: "Full-time" },
    { name: "Anirban (Sales)", role: "Client acquisition, demo calls, onboarding coordination", hours: "Full-time" },
    { name: "Dev 1", role: "Template #1 build (Service Hub), deployment scripts", hours: "Full-time" },
    { name: "Dev 2", role: "Templates #2-5 build, mobile (React Native)", hours: "Full-time" },
    { name: "Support/QA", role: "Testing, App Store submissions, client support", hours: "Full-time" },
  ];

  const notBuildList = [
    { item: "AI Agents (Concierge, Filter, Content, Insights)", reason: "Add Month 7+ after 50 apps deployed", priority: "Later" },
    { item: "Full CRM System", reason: "Use simple lead forms + spreadsheet initially", priority: "Later" },
    { item: "22 n8n Workflows", reason: "Use n8n for YOUR internal ops only", priority: "Later" },
    { item: "Template Marketplace", reason: "Need 100+ apps first. Year 2.", priority: "Later" },
    { item: "White-Label Platform", reason: "Need proven model first. Year 2.", priority: "Later" },
    { item: "Microservices", reason: "Monolith works up to 1000 apps", priority: "Never (until needed)" },
    { item: "Multi-Region Deployment", reason: "India-only Year 1", priority: "Never (until needed)" },
    { item: "Vector Databases / RAG", reason: "No AI features in v1.0", priority: "Later" },
    { item: "Analytics Dashboard", reason: "Use PostHog free tier initially", priority: "Month 4+" },
    { item: "WhatsApp Automation", reason: "Manual WhatsApp initially", priority: "Month 4+" },
  ];

  const deployFlow = [
    { step: 1, title: "Founder Pays", detail: "Razorpay captures setup fee (₹5-10L)", time: "Day 0" },
    { step: 2, title: "Job Queued", detail: "Payment webhook triggers deployment record in DB", time: "Seconds" },
    { step: 3, title: "GitHub Actions Triggered", detail: "Deployment script fires via API call", time: "< 1 min" },
    { step: 4, title: "Clone Template Repo", detail: "Private GitHub repo cloned to runner", time: "< 30 sec" },
    { step: 5, title: "Inject Config", detail: "Branding, features, env vars injected into codebase", time: "< 1 min" },
    { step: 6, title: "Provision Database", detail: "Supabase API creates new PostgreSQL instance", time: "2-3 min" },
    { step: 7, title: "Provision Storage", detail: "Cloudflare R2 bucket created via API", time: "< 1 min" },
    { step: 8, title: "Build & Deploy", detail: "Next.js build → Vercel programmatic deploy", time: "3-5 min" },
    { step: 9, title: "Run Migrations", detail: "Prisma migrations against new database", time: "< 1 min" },
    { step: 10, title: "Configure Domain", detail: "Cloudflare DNS + SSL via API", time: "2-5 min" },
    { step: 11, title: "Health Check", detail: "Verify endpoints, auth, DB connection", time: "< 1 min" },
    { step: 12, title: "Status → LIVE", detail: "Dashboard updated, founder notified via email", time: "Instant" },
  ];

  // ... (data remain same)

  // export default function WonderOSV1() { // moved to top
  const [activeTab, setActiveTab] = useState("architecture");
  const [expandedTemplate, setExpandedTemplate] = useState(0);
  const [expandedPhase, setExpandedPhase] = useState(0);

  const tabs = [
    { id: "architecture", label: "Architecture" },
    { id: "techstack", label: "Tech Stack" },
    { id: "templates", label: "Templates" },
    { id: "deployment", label: "Deploy Flow" },
    { id: "timeline", label: "90-Day Plan" },
    { id: "team", label: "Team + What NOT to Build" },
  ];

  return (
    <div style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", padding: "24px 28px", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>⚡</div>
          <div>
            <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>Wonder OS — v1.0 Architecture</h1>
            <span style={{ fontSize: "12px", color: "#6366f1", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>90-Day MVP Blueprint • Build What Matters</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "6px", padding: "6px", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.03)", marginBottom: "24px", overflowX: "auto" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id ? "#6366f1" : "transparent",
              color: activeTab === tab.id ? "#fff" : "#94a3b8",
              border: activeTab === tab.id ? "none" : "1px solid #1e1e2e",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ margin: "0 auto" }}>

        {/* === ARCHITECTURE TAB === */}
        {activeTab === "architecture" && (
          <div>
            <div style={{ marginBottom: "20px", padding: "16px 20px", background: "#1a1a2e", borderRadius: "12px", border: "1px solid #2d2d44" }}>
              <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px", lineHeight: 1.6 }}>
                <span style={{ color: "#6366f1", fontWeight: 700 }}>PHILOSOPHY:</span> Modular monolith. Single Next.js app handles everything. No microservices, no event bus, no complexity. Scale when you hit 1000 apps — not before. Every layer here is <span style={{ color: "#34d399" }}>the minimum viable version</span>.
              </p>
            </div>
            {architecture.layers.map((layer, i) => (
              <div key={i} style={{ marginBottom: "12px", borderRadius: "12px", overflow: "hidden", border: `1px solid ${layer.color}22` }}>
                <div style={{ background: `${layer.color}15`, padding: "12px 18px", display: "flex", alignItems: "center", gap: "10px", borderBottom: `1px solid ${layer.color}22` }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: layer.color, boxShadow: `0 0 8px ${layer.color}66` }}></div>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: layer.color, letterSpacing: "0.5px" }}>{layer.name}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px", padding: "12px" }}>
                  {layer.components.map((c, j) => (
                    <div key={j} style={{ background: "#141420", borderRadius: "8px", padding: "10px 14px", border: "1px solid #1e1e2e" }}>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#e2e8f0", marginBottom: "3px" }}>{c.name}</div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>{c.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Arrow indicators between layers */}
            <div style={{ textAlign: "center", marginTop: "20px", padding: "16px", background: "#1a1a2e", borderRadius: "12px", border: "1px solid #2d2d44" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#64748b", lineHeight: 1.8 }}>
                <span style={{ color: "#6366f1" }}>Client Layer</span> → HTTPS/JWT →
                <span style={{ color: "#8b5cf6" }}> Frontend</span> → API calls →
                <span style={{ color: "#a78bfa" }}> Backend</span> → triggers →
                <span style={{ color: "#7c3aed" }}> Deployment Pipeline</span> → writes →
                <span style={{ color: "#5b21b6" }}> Data Layer</span>
              </p>
            </div>
          </div>
        )}

        {/* === TECH STACK TAB === */}
        {activeTab === "techstack" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
            {techStack.map((cat, i) => (
              <div key={i} style={{ background: "#141420", borderRadius: "14px", border: "1px solid #1e1e2e", overflow: "hidden" }}>
                <div style={{ padding: "14px 18px", background: "#1a1a2e", borderBottom: "1px solid #1e1e2e", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "18px" }}>{cat.icon}</span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#e2e8f0", textTransform: "uppercase", letterSpacing: "0.5px" }}>{cat.category}</span>
                </div>
                <div style={{ padding: "12px" }}>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "8px 0", borderBottom: j < cat.items.length - 1 ? "1px solid #1e1e2e" : "none" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#c4b5fd" }}>{item.name}</span>
                      <span style={{ fontSize: "11px", color: "#64748b", textAlign: "right", maxWidth: "55%" }}>{item.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* What's NOT needed callout */}
            <div style={{ gridColumn: "1 / -1", marginTop: "8px", padding: "18px 22px", background: "#1a1015", borderRadius: "12px", border: "1px solid #3d1f1f" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <span style={{ fontSize: "16px" }}>🚫</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#f87171" }}>WHAT YOU DO NOT NEED IN V1.0</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Kubernetes", "Microservices", "Kafka / RabbitMQ", "Vector DB", "Redis Cluster", "AWS Lambda", "GraphQL", "Multi-region"].map((item) => (
                  <span key={item} style={{ fontSize: "11px", background: "#2a1515", color: "#f87171", padding: "4px 10px", borderRadius: "20px", border: "1px solid #3d1f1f" }}>✕ {item}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === TEMPLATES TAB === */}
        {activeTab === "templates" && (
          <div>
            <div style={{ marginBottom: "16px", padding: "14px 18px", background: "#1a1a2e", borderRadius: "10px", border: "1px solid #2d2d44" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>
                <span style={{ color: "#34d399", fontWeight: 700 }}>CORE RULE:</span> Each template is a <span style={{ color: "#fff" }}>complete, production-ready codebase</span>. Not a demo. Not a wireframe. A full app that ships to App Store + Play Store in 30 days after branding + customization.
              </p>
            </div>
            {templates.map((t, i) => (
              <div key={i} style={{ marginBottom: "10px", borderRadius: "12px", overflow: "hidden", border: expandedTemplate === i ? "1px solid #6366f1" : "1px solid #1e1e2e", background: "#141420", cursor: "pointer" }} onClick={() => setExpandedTemplate(i)}>
                <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "22px" }}>{t.icon}</span>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#e2e8f0" }}>{t.name}</div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>Build: {t.week}</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.5px",
                    background: t.status === "first" ? "#6366f122" : t.status === "second" ? "#60a5fa22" : "#34d39922",
                    color: t.status === "first" ? "#6366f1" : t.status === "second" ? "#60a5fa" : "#34d399",
                    border: `1px solid ${t.status === "first" ? "#6366f1" : t.status === "second" ? "#60a5fa" : "#34d399"}44`
                  }}>
                    {t.status === "first" ? "PRIORITY #1" : t.status === "second" ? "PRIORITY #2" : "BATCH BUILD"}
                  </span>
                </div>
                {expandedTemplate === i && (
                  <div style={{ padding: "0 18px 16px", borderTop: "1px solid #1e1e2e" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", paddingTop: "14px" }}>
                      <div>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "0.5px" }}>Core Features</div>
                        {t.features.map((f, j) => (
                          <div key={j} style={{ fontSize: "12px", color: "#94a3b8", padding: "5px 0", display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ color: "#34d399", fontSize: "10px" }}>●</span>{f}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "0.5px" }}>Target Use Cases</div>
                        {t.useCases.map((u, j) => (
                          <div key={j} style={{ fontSize: "12px", color: "#94a3b8", padding: "5px 0", display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ color: "#fb923c", fontSize: "10px" }}>→</span>{u}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* === DEPLOYMENT FLOW TAB === */}
        {activeTab === "deployment" && (
          <div>
            <div style={{ marginBottom: "20px", padding: "14px 18px", background: "#1a1a2e", borderRadius: "10px", border: "1px solid #2d2d44" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>
                <span style={{ color: "#34d399", fontWeight: 700 }}>TOTAL AUTOMATED DEPLOY TIME:</span> <span style={{ color: "#fff", fontWeight: 700 }}>~15-20 minutes</span> from payment confirmation to live app. App Store/Play Store approval adds 1-3 days (handled by Wonder team).
              </p>
            </div>
            <div style={{ position: "relative", paddingLeft: "40px" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: "19px", top: "0", bottom: "0", width: "2px", background: "linear-gradient(to bottom, #6366f1, #34d399)" }}></div>
              {deployFlow.map((step, i) => (
                <div key={i} style={{ position: "relative", marginBottom: "8px" }}>
                  {/* Circle */}
                  <div style={{
                    position: "absolute", left: "-40px", top: "12px", width: "20px", height: "20px", borderRadius: "50%",
                    background: i < 6 ? "#6366f1" : "#34d399", border: "3px solid #0a0a0f",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 700, color: "#fff"
                  }}>{step.step}</div>
                  <div style={{ background: "#141420", borderRadius: "10px", padding: "12px 16px", border: "1px solid #1e1e2e", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#e2e8f0" }}>{step.title}</div>
                      <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>{step.detail}</div>
                    </div>
                    <span style={{ fontSize: "11px", color: "#6366f1", fontWeight: 600, background: "#6366f111", padding: "3px 8px", borderRadius: "6px", whiteSpace: "nowrap" }}>{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === 90-DAY TIMELINE TAB === */}
        {activeTab === "timeline" && (
          <div>
            <div style={{ marginBottom: "20px", padding: "14px 18px", background: "#1a1a2e", borderRadius: "10px", border: "1px solid #2d2d44" }}>
              <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>
                <span style={{ color: "#fb923c", fontWeight: 700 }}>TARGET:</span> 5 production templates, semi-automated deployment, 5 beta customers live, public launch ready — all in 90 days.
              </p>
            </div>
            {phases.map((phase, i) => (
              <div key={i} style={{ marginBottom: "8px", borderRadius: "12px", overflow: "hidden", border: expandedPhase === i ? `1px solid ${phase.color}` : "1px solid #1e1e2e", background: "#141420", cursor: "pointer" }} onClick={() => setExpandedPhase(i)}>
                <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${phase.color}18`, border: `1px solid ${phase.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "14px", fontWeight: 800, color: phase.color }}>{i + 1}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#e2e8f0" }}>{phase.label}</div>
                      <div style={{ fontSize: "11px", color: phase.color, fontWeight: 600 }}>{phase.week}</div>
                    </div>
                  </div>
                  <span style={{ color: "#64748b", fontSize: "16px" }}>{expandedPhase === i ? "▲" : "▼"}</span>
                </div>
                {expandedPhase === i && (
                  <div style={{ padding: "0 18px 16px", borderTop: `1px solid ${phase.color}22` }}>
                    {phase.tasks.map((task, j) => (
                      <div key={j} style={{ fontSize: "12px", color: "#94a3b8", padding: "7px 0", display: "flex", alignItems: "flex-start", gap: "8px", borderBottom: j < phase.tasks.length - 1 ? "1px solid #1e1e2e" : "none" }}>
                        <span style={{ color: phase.color, marginTop: "2px", fontSize: "10px" }}>✓</span>{task}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* === TEAM + NOT BUILD TAB === */}
        {activeTab === "team" && (
          <div>
            {/* Team */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>👥 Team Allocation — 90 Days</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {teamRoles.map((t, i) => (
                  <div key={i} style={{ background: "#141420", borderRadius: "10px", padding: "12px 16px", border: "1px solid #1e1e2e", display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ minWidth: "140px" }}>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#e2e8f0" }}>{t.name}</div>
                      <span style={{ fontSize: "10px", color: "#6366f1", background: "#6366f111", padding: "2px 8px", borderRadius: "10px" }}>{t.hours}</span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#94a3b8" }}>{t.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What NOT to Build */}
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#f87171", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>🚫 What NOT to Build in 90 Days</div>
              <div style={{ background: "#1a1015", borderRadius: "12px", border: "1px solid #3d1f1f", overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr 1fr", padding: "10px 16px", background: "#231518", borderBottom: "1px solid #3d1f1f" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Feature</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>Why Skip</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>When</span>
                </div>
                {notBuildList.map((item, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 3fr 1fr", padding: "10px 16px", borderBottom: i < notBuildList.length - 1 ? "1px solid #2a1518" : "none", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#f87171" }}>{item.item}</span>
                    <span style={{ fontSize: "11px", color: "#94a3b8" }}>{item.reason}</span>
                    <span style={{ fontSize: "10px", color: "#64748b", background: "#231518", padding: "3px 8px", borderRadius: "6px", whiteSpace: "nowrap" }}>{item.priority}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: "32px", padding: "18px 22px", background: "#1a1a2e", borderRadius: "12px", border: "1px solid #2d2d44", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "12px", color: "#64748b", lineHeight: 1.7 }}>
            <span style={{ color: "#6366f1", fontWeight: 700 }}>Wonder OS v1.0</span> — Build 5 templates. Deploy in 30 days. Ship to stores. Charge real money.<br />
            <span style={{ color: "#34d399" }}>Everything else is noise until the model is proven.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
