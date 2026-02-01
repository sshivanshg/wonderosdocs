import { useState } from "react";

const checklist = [
  { phase: "WEEK 1-2: FOUNDATION", color: "#a78bfa", icon: "🏗️", items: [
    { task: "Next.js 14 project scaffolded + pushed to GitHub", critical: true },
    { task: "Vercel connected — staging URL live", critical: true },
    { task: "Supabase project created (platform DB)", critical: true },
    { task: "Prisma ORM configured + connected to Supabase", critical: true },
    { task: "Core DB schema: customers, projects, deployments, subscriptions", critical: true },
    { task: "NextAuth.js: email/password + Google OAuth working", critical: true },
    { task: "Razorpay test keys integrated — test payment confirmed", critical: true },
    { task: "GitHub org + 5 private template repo placeholders created", critical: false },
    { task: "wonderos.in domain + Cloudflare DNS configured", critical: false },
    { task: "Staging vs Production split on Vercel", critical: false },
    { task: "Resend email connected + test email sent", critical: false },
    { task: "Sentry error monitoring connected", critical: false },
  ]},
  { phase: "WEEK 3-4: TEMPLATE #1 — SERVICE BUSINESS HUB", color: "#60a5fa", icon: "🏢", items: [
    { task: "Template repo created: /frontend /backend /mobile /config", critical: true },
    { task: "Frontend: booking page, service catalog, client portal", critical: true },
    { task: "Backend APIs: booking, availability, payment flow", critical: true },
    { task: "React Native mobile screens scaffolded (iOS + Android)", critical: true },
    { task: "Branding injection: logo, colors, fonts via JSON config", critical: true },
    { task: "Feature toggle engine: enable/disable modules via config", critical: true },
    { task: "Per-app Supabase DB provisioning script tested", critical: true },
    { task: "Cloudflare R2 bucket provisioning script tested", critical: false },
    { task: "Admin dashboard: manage bookings, view revenue", critical: false },
    { task: "Auto email confirmation on booking", critical: false },
  ]},
  { phase: "WEEK 5-6: DEPLOYMENT PIPELINE", color: "#34d399", icon: "🚀", items: [
    { task: "GitHub Actions workflow written + tested end-to-end", critical: true },
    { task: "Vercel programmatic deploy API (not just git push)", critical: true },
    { task: "Full pipeline: payment → trigger → clone → inject → deploy → LIVE", critical: true },
    { task: "Cloudflare domain + SSL auto-config via API", critical: true },
    { task: "Health check system: post-deploy endpoint verification", critical: true },
    { task: "Deployment status updates in real-time to platform DB", critical: true },
    { task: "Founder email notification on successful deploy", critical: false },
    { task: "Failed deploy → Slack/email alert to Wonder team", critical: false },
    { task: "Rollback: revert to previous if health check fails", critical: false },
  ]},
  { phase: "WEEK 7-8: FOUNDER DASHBOARD", color: "#fb923c", icon: "📊", items: [
    { task: "Sign up → verify email → profile onboarding flow", critical: true },
    { task: "Configurator: template picker → features → pricing preview", critical: true },
    { task: "Dashboard home: projects, status, quick actions", critical: true },
    { task: "Real-time deployment progress tracker (visual steps)", critical: true },
    { task: "Billing: plan, invoices, upgrade/downgrade", critical: true },
    { task: "Support tickets: create, status, reply", critical: true },
    { task: "Guided onboarding checklist for new founders", critical: false },
    { task: "Settings: profile, team, API keys", critical: false },
    { task: "Dashboard is mobile-responsive", critical: false },
  ]},
  { phase: "WEEK 9-10: TEMPLATE #2 + MOBILE", color: "#f472b6", icon: "🏥📱", items: [
    { task: "Healthcare template: patient portal + doctor dashboard", critical: true },
    { task: "Appointment booking + availability (healthcare-specific)", critical: true },
    { task: "React Native mobile builds via EAS Build working", critical: true },
    { task: "iOS .ipa generated + code-signed", critical: true },
    { task: "Android .aab generated + signed", critical: true },
    { task: "TestFlight beta distribution set up", critical: true },
    { task: "App Store submission guide (step-by-step)", critical: false },
    { task: "Play Store submission guide (step-by-step)", critical: false },
    { task: "Mobile branding injection: icon, splash, colors", critical: false },
  ]},
  { phase: "WEEK 11-12: TEMPLATES #3-5 + LAUNCH", color: "#c084fc", icon: "🚢", items: [
    { task: "Real Estate Platform template built + tested", critical: true },
    { task: "Education / Coaching template built + tested", critical: true },
    { task: "E-commerce Store template built + tested", critical: true },
    { task: "All 5 templates deployed end-to-end at least once", critical: true },
    { task: "5 beta founders onboarded with apps LIVE", critical: true },
    { task: "Beta feedback collected + critical bugs fixed", critical: true },
    { task: "Internal ops dashboard for Wonder team", critical: false },
    { task: "Public website: landing, pricing, case studies, demo", critical: false },
    { task: "Launch announcement ready (email, social, communities)", critical: false },
  ]},
];

const postData = [
  { month: "Month 4-5", title: "REVENUE + ITERATION", color: "#6366f1",
    targets: ["10-20 paying customers", "₹1-2 Cr revenue", "95%+ store approval"],
    actions: ["Fix all beta bugs", "Add PostHog analytics (free)", "Email drip for founders", "Maintenance MRR starts (₹50K-2L/app/mo)", "Track NPS + LTV"] },
  { month: "Month 6", title: "GROWTH ENGINE", color: "#60a5fa",
    targets: ["30+ apps deployed", "₹3-5 Cr revenue", "MRR ₹20-40L"],
    actions: ["Simple CRM (HubSpot free)", "WhatsApp per client (manual)", "n8n for internal ops only", "Case study videos", "Referral program", "Sales playbook for Anirban"] },
  { month: "Month 7-9", title: "AI + SCALE", color: "#34d399",
    targets: ["50+ apps deployed", "₹5-10 Cr revenue", "Team: 12-15"],
    actions: ["Wonder Concierge AI chatbot", "Wonder Filter lead scoring", "Self-service configurator upgrade", "2-3 new templates", "International pricing (USD)", "Seed fundraise if needed"] },
  { month: "Month 10-12", title: "PLATFORM PLAY", color: "#fb923c",
    targets: ["100+ apps deployed", "₹10-15 Cr revenue", "MRR ₹1Cr+"],
    actions: ["Agency white-label pilot", "Template marketplace beta", "Full founder analytics", "Enterprise tier", "Year 2 roadmap", "Series A conversation"] },
];

const uxFlows = {
  onboarding: { label: "Onboarding", color: "#a78bfa", steps: [
    { title: "Sign Up", els: [
      { t:"logo" },{ t:"h", v:"Build your app today" },{ t:"sub", v:"Production-ready in 30 days" },
      { t:"inp", v:"Full Name" },{ t:"inp", v:"Email Address" },{ t:"inp", v:"Password" },
      { t:"btn", v:"Create Account" },{ t:"link", v:"Already have account? Sign in" }
    ]},
    { title: "Verify", els: [
      { t:"logo" },{ t:"big", v:"📧" },{ t:"h", v:"Check your inbox" },
      { t:"sub", v:"Sent verification link to your@email.com" },
      { t:"btn", v:"Resend Email" },{ t:"link", v:"← Back" }
    ]},
    { title: "Profile", els: [
      { t:"prog", v:"Step 2 / 3" },{ t:"h", v:"About you" },
      { t:"inp", v:"Company Name" },{ t:"inp", v:"Industry" },{ t:"inp", v:"Team Size" },{ t:"inp", v:"Phone +91" },
      { t:"btn", v:"Continue →" }
    ]},
    { title: "Pick Goal", els: [
      { t:"prog", v:"Step 3 / 3" },{ t:"h", v:"What do you want to build?" },
      { t:"sub", v:"We'll recommend the best template" },
      { t:"card", v:"🏢 Service Business" },{ t:"card", v:"🏥 Healthcare" },{ t:"card", v:"🏠 Real Estate" },
      { t:"card", v:"📚 Education" },{ t:"card", v:"🛒 E-commerce" },
      { t:"btn", v:"Go to Configurator →" }
    ]}
  ]},
  configurator: { label: "Configurator", color: "#60a5fa", steps: [
    { title: "Template", els: [
      { t:"nav" },{ t:"prog", v:"Step 1 → 2 → 3 → 4" },{ t:"h", v:"Choose your template" },
      { t:"card", v:"🏢 Service Business Hub — ₹5.9L" },{ t:"card", v:"🏥 Healthcare — ₹6.9L" },
      { t:"card", v:"🏠 Real Estate — ₹5.5L" },{ t:"card", v:"📚 Education — ₹5.2L" },{ t:"card", v:"🛒 E-commerce — ₹6.5L" },
      { t:"btn", v:"Select & Continue →" }
    ]},
    { title: "Features", els: [
      { t:"nav" },{ t:"prog", v:"Step 1 ✓ → Step 2 → 3 → 4" },{ t:"h", v:"Pick features" },
      { t:"tog", v:"Booking System (included)", on:true },{ t:"tog", v:"Payment Gateway (included)", on:true },
      { t:"tog", v:"AI Chatbot +₹40,000", on:false },{ t:"tog", v:"SMS Reminders +₹15,000", on:false },
      { t:"tog", v:"WhatsApp +₹25,000", on:false },{ t:"tog", v:"Lead Management +₹30,000", on:false },
      { t:"price", v:"Total: ₹5,90,000" },{ t:"btn", v:"Continue →" }
    ]},
    { title: "Brand", els: [
      { t:"nav" },{ t:"prog", v:"Steps 1-2 ✓ → Step 3 → 4" },{ t:"h", v:"Brand it your way" },
      { t:"upload", v:"Upload Logo" },{ t:"color", v:"Primary Color" },{ t:"color", v:"Secondary Color" },
      { t:"inp", v:"App Name" },{ t:"inp", v:"Domain (app.yourcompany.com)" },
      { t:"preview", v:"[ Live Preview ]" },{ t:"btn", v:"Continue →" }
    ]},
    { title: "Review + Pay", els: [
      { t:"nav" },{ t:"prog", v:"Steps 1-3 ✓ → Step 4" },{ t:"h", v:"Review order" },
      { t:"sum", v:"Template: Service Business Hub" },{ t:"sum", v:"Features: Booking, Payments, SMS" },
      { t:"sum", v:"Domain: app.mycompany.com" },{ t:"sum", v:"Timeline: 30 days to live" },
      { t:"price", v:"Total: ₹6,05,000" },{ t:"btn", v:"Pay with Razorpay →" },{ t:"link", v:"← Edit" }
    ]}
  ]},
  dashboard: { label: "Dashboard", color: "#fb923c", steps: [
    { title: "Home", els: [
      { t:"side" },{ t:"h", v:"Welcome back, Priyabrata" },
      { t:"stats", v:["Apps: 3","MRR: ₹1.8L","Due: Mar 15"] },
      { t:"card", v:"📦 Nabo Clothing — LIVE ✓" },{ t:"card", v:"📦 MediqAI — DEPLOYING… Step 8/12" },
      { t:"btn", v:"+ New Project" }
    ]},
    { title: "Projects", els: [
      { t:"side" },{ t:"h", v:"My Projects" },{ t:"filter", v:"All | Live | Deploying | Draft" },
      { t:"card", v:"🏢 Nabo Clothing — LIVE ✓ — ₹1.2L/mo" },
      { t:"card", v:"🏥 MediqAI — DEPLOYING" },{ t:"card", v:"🛒 QuickMart — LIVE ✓ — ₹80K/mo" },
      { t:"btn", v:"+ New Project" }
    ]},
    { title: "Deploy Status", els: [
      { t:"side" },{ t:"h", v:"MediqAI — Deployment" },
      { t:"step", v:"Payment confirmed", done:true },{ t:"step", v:"Template cloned", done:true },
      { t:"step", v:"Config injected", done:true },{ t:"step", v:"Database provisioned", done:true },
      { t:"step", v:"Building & deploying…", active:true },
      { t:"step", v:"Domain configuration", done:false },{ t:"step", v:"Health check", done:false },
      { t:"step", v:"LIVE!", done:false },{ t:"sub", v:"~8 minutes remaining" }
    ]},
    { title: "Support", els: [
      { t:"side" },{ t:"h", v:"Support Tickets" },{ t:"btn", v:"+ New Ticket" },
      { t:"card", v:"🎫 #1042 — App icon not showing — Open" },
      { t:"card", v:"🎫 #1038 — Payment test — Resolved ✓" },
      { t:"card", v:"🎫 #1035 — Add service type — In Progress" }
    ]}
  ]},
  billing: { label: "Billing", color: "#34d399", steps: [
    { title: "Plans", els: [
      { t:"side" },{ t:"h", v:"Billing & Plans" },
      { t:"card", v:"Wonder Pro — ₹25,000/mo — Up to 5 apps" },
      { t:"card", v:"Apps: 3 of 5 used" },{ t:"card", v:"Maintenance MRR: ₹1,80,000" },
      { t:"btn", v:"Upgrade Plan" }
    ]},
    { title: "Invoices", els: [
      { t:"side" },{ t:"h", v:"Invoices" },
      { t:"card", v:"INV-031 — ₹25,000 — Feb 2026 — Paid ✓" },
      { t:"card", v:"INV-030 — ₹6,05,000 — Jan 2026 — Paid ✓ (Setup)" },
      { t:"card", v:"INV-029 — ₹25,000 — Jan 2026 — Paid ✓" }
    ]},
    { title: "Usage", els: [
      { t:"side" },{ t:"h", v:"Usage This Month" },
      { t:"stats", v:["Deploys: 2","API: 12.4K","Storage: 2.3GB"] },
      { t:"card", v:"Nabo Clothing — 8.2K calls — 1.1GB" },{ t:"card", v:"QuickMart — 4.2K calls — 1.2GB" }
    ]}
  ]}
};

function El({ el }) {
  switch(el.t) {
    case "logo": return <div style={{fontSize:15,fontWeight:800,color:"#6366f1",textAlign:"center",padding:"8px 0"}}>⚡ Wonder OS</div>;
    case "h": return <div style={{fontSize:16,fontWeight:700,color:"#fff",textAlign:"center",padding:"6px 0 2px"}}>{el.v}</div>;
    case "sub": return <div style={{fontSize:11,color:"#64748b",textAlign:"center",padding:"2px 0 4px"}}>{el.v}</div>;
    case "inp": return <div style={{background:"#1a1a2e",border:"1px solid #2d2d44",borderRadius:8,padding:"9px 12px",fontSize:12,color:"#64748b",margin:"4px 0"}}>{el.v}</div>;
    case "btn": return <div style={{background:"linear-gradient(135deg,#6366f1,#8b5cf6)",borderRadius:8,padding:"10px",fontSize:13,fontWeight:700,color:"#fff",textAlign:"center",margin:"8px 0"}}>{el.v}</div>;
    case "link": return <div style={{fontSize:11,color:"#6366f1",textAlign:"center",padding:"3px 0"}}>{el.v}</div>;
    case "big": return <div style={{fontSize:34,textAlign:"center",padding:"6px 0"}}>{el.v}</div>;
    case "prog": return <div style={{fontSize:11,color:"#6366f1",fontWeight:600,textAlign:"center",padding:"3px 0 6px"}}>{el.v}</div>;
    case "card": return <div style={{background:"#1a1a2e",border:"1px solid #2d2d44",borderRadius:8,padding:"9px 12px",fontSize:12,color:"#e2e8f0",margin:"4px 0"}}>{el.v}</div>;
    case "tog": return (
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid #1e1e2e"}}>
        <span style={{fontSize:12,color:el.on?"#e2e8f0":"#64748b"}}>{el.v}</span>
        <div style={{width:34,height:18,borderRadius:9,background:el.on?"#6366f1":"#2d2d44",position:"relative"}}>
          <div style={{width:14,height:14,borderRadius:"50%",background:"#fff",position:"absolute",top:2,left:el.on?18:2}}></div>
        </div>
      </div>
    );
    case "price": return <div style={{fontSize:20,fontWeight:800,color:"#34d399",textAlign:"center",padding:"8px 0"}}>{el.v}</div>;
    case "upload": return <div style={{background:"#1a1a2e",border:"1px dashed #2d2d44",borderRadius:8,padding:"18px",fontSize:12,color:"#64748b",textAlign:"center",margin:"4px 0"}}>{el.v}</div>;
    case "color": return (
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 0"}}>
        <span style={{fontSize:12,color:"#94a3b8"}}>{el.v}</span>
        <div style={{width:24,height:24,borderRadius:6,background:"#6366f1",border:"2px solid #2d2d44"}}></div>
      </div>
    );
    case "preview": return <div style={{background:"#0f0f18",border:"1px solid #2d2d44",borderRadius:8,padding:"24px 12px",fontSize:11,color:"#64748b",textAlign:"center",margin:"4px 0"}}>{el.v}</div>;
    case "sum": return <div style={{fontSize:12,color:"#94a3b8",padding:"5px 0",borderBottom:"1px solid #1e1e2e"}}>{el.v}</div>;
    case "nav": return <div style={{fontSize:11,color:"#64748b",padding:"5px 0 8px",borderBottom:"1px solid #1e1e2e",marginBottom:4}}>⚡ Wonder OS &nbsp;|&nbsp; Configurator &nbsp;|&nbsp; Dashboard</div>;
    case "side": return (
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:95,background:"#0f0f18",borderRight:"1px solid #1e1e2e",padding:"12px 10px"}}>
        <div style={{fontSize:13,fontWeight:800,color:"#6366f1",marginBottom:10}}>⚡ Wonder</div>
        {["🏠 Home","📦 Projects","💳 Billing","🎫 Support","⚙️ Settings"].map(i=>(
          <div key={i} style={{fontSize:11,color:"#64748b",padding:"5px 8px",borderRadius:6}}>{i}</div>
        ))}
      </div>
    );
    case "stats": return (
      <div style={{display:"flex",gap:6,margin:"6px 0"}}>
        {el.v.map((s,i)=>(
          <div key={i} style={{flex:1,background:"#1a1a2e",border:"1px solid #2d2d44",borderRadius:8,padding:"8px 6px",fontSize:11,color:"#e2e8f0",textAlign:"center"}}>{s}</div>
        ))}
      </div>
    );
    case "filter": return <div style={{fontSize:11,color:"#64748b",padding:"4px 0 8px"}}>{el.v}</div>;
    case "step": return (
      <div style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0"}}>
        <div style={{width:18,height:18,borderRadius:"50%",background:el.done?"#34d399":el.active?"#fb923c":"#2d2d44",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#fff",flexShrink:0}}>
          {el.done?"✓":el.active?"…":"○"}
        </div>
        <span style={{fontSize:12,color:el.done?"#34d399":el.active?"#fb923c":"#64748b",fontWeight:el.active?600:400}}>{el.v}</span>
      </div>
    );
    default: return null;
  }
}

export default function App() {
  const [tab, setTab] = useState("checklist");
  const [openPhase, setOpenPhase] = useState(-1);
  const [openPost, setOpenPost] = useState(-1);
  const [uxFlow, setUxFlow] = useState("onboarding");
  const [uxStep, setUxStep] = useState(0);

  const flow = uxFlows[uxFlow];

  return (
    <div style={{background:"#0a0a0f",minHeight:"100vh",color:"#e2e8f0",fontFamily:"'Inter',sans-serif"}}>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#111120,#0a0a12)",borderBottom:"1px solid #1e1e2e",padding:"18px 20px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:34,height:34,borderRadius:9,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>⚡</div>
          <div>
            <div style={{fontSize:18,fontWeight:700,color:"#fff"}}>Wonder OS — Execution Plan</div>
            <div style={{fontSize:11,color:"#6366f1",fontWeight:600,letterSpacing:"0.8px",textTransform:"uppercase"}}>Checklist · Post-90 Roadmap · Master UX</div>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{display:"flex",gap:4,padding:"10px 20px",background:"#0f0f18",borderBottom:"1px solid #1e1e2e"}}>
        {[{id:"checklist",label:"✓ 90-Day Checklist"},{id:"after90",label:"🚀 After 90 Days"},{id:"ux",label:"🖥️ Master UX"}].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            background:tab===t.id?"#6366f1":"transparent",color:tab===t.id?"#fff":"#94a3b8",
            border:tab===t.id?"none":"1px solid #1e1e2e",borderRadius:8,padding:"7px 15px",
            fontSize:13,fontWeight:600,cursor:"pointer"
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{padding:"18px 20px",maxWidth:1050,margin:"0 auto"}}>

        {/* ========== CHECKLIST ========== */}
        {tab==="checklist" && (
          <div>
            <div style={{padding:"10px 14px",background:"#1a1a2e",borderRadius:10,border:"1px solid #2d2d44",marginBottom:14}}>
              <span style={{fontSize:12,color:"#94a3b8"}}><span style={{color:"#34d399",fontWeight:700}}>HOW TO READ:</span> Expand each phase. <span style={{color:"#a78bfa"}}>◆ CRITICAL</span> = must finish before next phase. Grey = nice-to-have. <span style={{color:"#fff",fontWeight:700}}>65 total tasks.</span></span>
            </div>
            {checklist.map((phase,i)=>{
              const open = openPhase===i;
              const crit = phase.items.filter(x=>x.critical).length;
              return (
                <div key={i} style={{marginBottom:8,borderRadius:12,border:`1px solid ${open?phase.color:"#1e1e2e"}`,background:"#111118",overflow:"hidden"}}>
                  <div onClick={()=>setOpenPhase(open?-1:i)} style={{padding:"12px 15px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",userSelect:"none"}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <span style={{fontSize:18}}>{phase.icon}</span>
                      <div>
                        <div style={{fontSize:13,fontWeight:700,color:"#e2e8f0"}}>{phase.phase}</div>
                        <div style={{fontSize:11,color:"#64748b",marginTop:1}}>{crit} critical · {phase.items.length-crit} secondary</div>
                      </div>
                    </div>
                    <span style={{color:phase.color,fontSize:13}}>{open?"▲":"▼"}</span>
                  </div>
                  {open && (
                    <div style={{borderTop:`1px solid ${phase.color}22`,padding:"6px 15px 12px"}}>
                      {phase.items.map((item,j)=>(
                        <div key={j} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"6px 0",borderBottom:j<phase.items.length-1?"1px solid #1e1e2e":"none"}}>
                          <span style={{marginTop:3,fontSize:9,color:item.critical?phase.color:"#3f3f55",flexShrink:0}}>◆</span>
                          <span style={{fontSize:12,color:item.critical?"#e2e8f0":"#64748b",flex:1,lineHeight:1.4}}>{item.task}</span>
                          {item.critical && <span style={{fontSize:9,fontWeight:700,color:phase.color,background:`${phase.color}18`,padding:"2px 7px",borderRadius:10,flexShrink:0}}>CRITICAL</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ========== AFTER 90 DAYS ========== */}
        {tab==="after90" && (
          <div>
            <div style={{padding:"10px 14px",background:"#1a1a2e",borderRadius:10,border:"1px solid #2d2d44",marginBottom:14}}>
              <span style={{fontSize:12,color:"#94a3b8"}}><span style={{color:"#fb923c",fontWeight:700}}>AFTER DAY 90:</span> 5 beta customers live. Now: <span style={{color:"#fff"}}>revenue, iteration, growth</span> month by month.</span>
            </div>
            {/* Revenue bars */}
            <div style={{background:"#111118",border:"1px solid #1e1e2e",borderRadius:12,padding:"16px 18px",marginBottom:14}}>
              <div style={{fontSize:11,fontWeight:700,color:"#6366f1",textTransform:"uppercase",letterSpacing:0.5,marginBottom:10}}>Year 1 Revenue Arc</div>
              <div style={{display:"flex",alignItems:"flex-end",gap:8,height:90}}>
                {[{l:"M1-3",h:22,c:"#a78bfa",r:"₹2-3Cr"},{l:"M4-5",h:38,c:"#60a5fa",r:"₹1-2Cr"},{l:"M6",h:50,c:"#34d399",r:"₹3-5Cr"},{l:"M7-9",h:70,c:"#fb923c",r:"₹5-10Cr"},{l:"M10-12",h:100,c:"#c084fc",r:"₹10-15Cr"}].map((b,i)=>(
                  <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:3,height:"100%"}}>
                    <span style={{fontSize:9,color:b.c,fontWeight:700}}>{b.r}</span>
                    <div style={{flex:1,width:"100%",display:"flex",alignItems:"flex-end"}}>
                      <div style={{width:"100%",height:`${b.h}%`,background:`linear-gradient(to top,${b.c},${b.c}44)`,borderRadius:6}}></div>
                    </div>
                    <span style={{fontSize:9,color:"#64748b"}}>{b.l}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Cards */}
            {postData.map((card,i)=>{
              const open = openPost===i;
              return (
                <div key={i} style={{borderRadius:12,border:`1px solid ${card.color}33`,background:"#111118",overflow:"hidden",marginBottom:8}}>
                  <div onClick={()=>setOpenPost(open?-1:i)} style={{padding:"12px 15px",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{display:"flex",alignItems:"center",gap:12}}>
                      <div style={{width:38,height:38,borderRadius:9,background:`${card.color}15`,border:`1px solid ${card.color}33`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <span style={{fontSize:13,fontWeight:800,color:card.color}}>{card.month.split(" ")[1]}</span>
                      </div>
                      <div>
                        <div style={{fontSize:13,fontWeight:700,color:"#e2e8f0"}}>{card.title}</div>
                        <div style={{fontSize:11,color:card.color}}>{card.month}</div>
                      </div>
                    </div>
                    <span style={{color:"#64748b",fontSize:13}}>{open?"▲":"▼"}</span>
                  </div>
                  {open && (
                    <div style={{borderTop:`1px solid ${card.color}22`,padding:"12px 15px"}}>
                      <div style={{marginBottom:10}}>
                        <div style={{fontSize:10,fontWeight:700,color:card.color,textTransform:"uppercase",letterSpacing:0.5,marginBottom:6}}>Targets</div>
                        <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                          {card.targets.map((t,j)=>(
                            <span key={j} style={{fontSize:11,color:"#e2e8f0",background:`${card.color}12`,padding:"3px 10px",borderRadius:20,border:`1px solid ${card.color}28`}}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div style={{fontSize:10,fontWeight:700,color:card.color,textTransform:"uppercase",letterSpacing:0.5,marginBottom:6}}>Actions</div>
                        {card.actions.map((a,j)=>(
                          <div key={j} style={{fontSize:12,color:"#94a3b8",padding:"4px 0",display:"flex",gap:6,borderBottom:j<card.actions.length-1?"1px solid #1e1e2e":"none"}}>
                            <span style={{color:card.color,fontSize:9,marginTop:2}}>→</span>{a}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ========== MASTER UX ========== */}
        {tab==="ux" && (
          <div>
            <div style={{padding:"10px 14px",background:"#1a1a2e",borderRadius:10,border:"1px solid #2d2d44",marginBottom:14}}>
              <span style={{fontSize:12,color:"#94a3b8"}}><span style={{color:"#60a5fa",fontWeight:700}}>MASTER UX:</span> Every screen a founder touches. Pick a <span style={{color:"#fff"}}>flow</span> then <span style={{color:"#fff"}}>screen</span>. This is what Shubhodeep builds.</span>
            </div>
            {/* Journey */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:3,marginBottom:14,flexWrap:"wrap"}}>
              {["Sign Up","→","Configurator","→","Pay","→","Deploy","→","Dashboard","→","Maintain"].map((item,i)=>(
                <span key={i} style={{fontSize:11,color:item==="→"?"#3f3f55":"#94a3b8",background:item==="→"?"transparent":"#1a1a2e",padding:item==="→"?"0":"4px 10px",borderRadius:20,border:item==="→"?"none":"1px solid #2d2d44",fontWeight:600}}>{item}</span>
              ))}
            </div>
            {/* Flow buttons */}
            <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}>
              {Object.entries(uxFlows).map(([key,f])=>(
                <button key={key} onClick={()=>{setUxFlow(key);setUxStep(0)}} style={{
                  background:uxFlow===key?f.color:"transparent",color:uxFlow===key?"#fff":"#94a3b8",
                  border:uxFlow===key?"none":"1px solid #2d2d44",borderRadius:8,padding:"6px 14px",
                  fontSize:12,fontWeight:600,cursor:"pointer"
                }}>{f.label}</button>
              ))}
            </div>
            {/* Screen buttons */}
            <div style={{display:"flex",gap:4,marginBottom:12}}>
              {flow.steps.map((s,i)=>(
                <button key={i} onClick={()=>setUxStep(i)} style={{
                  background:uxStep===i?`${flow.color}18`:"transparent",color:uxStep===i?flow.color:"#64748b",
                  border:uxStep===i?`1px solid ${flow.color}44`:"1px solid #1e1e2e",
                  borderRadius:6,padding:"5px 8px",fontSize:11,fontWeight:600,cursor:"pointer",flex:1,textAlign:"center"
                }}>{s.title}</button>
              ))}
            </div>
            {/* Wireframe device */}
            <div style={{background:"#0a0a0f",border:"1px solid #2d2d44",borderRadius:14,overflow:"hidden"}}>
              <div style={{background:"#1a1a2e",padding:"7px 12px",display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:"#ef4444"}}></div>
                <div style={{width:10,height:10,borderRadius:"50%",background:"#eab308"}}></div>
                <div style={{width:10,height:10,borderRadius:"50%",background:"#22c55e"}}></div>
                <div style={{flex:1,textAlign:"center",fontSize:11,color:"#64748b"}}>wonderos.in — {flow.steps[uxStep].title}</div>
              </div>
              <div style={{padding:"18px 20px 18px 115px",position:"relative",minHeight:340,background:"#111118"}}>
                {flow.steps[uxStep].els.map((el,i)=><El key={i} el={el}/>)}
              </div>
            </div>
            {/* Prev Next */}
            <div style={{display:"flex",justifyContent:"space-between",marginTop:10}}>
              <button onClick={()=>uxStep>0&&setUxStep(uxStep-1)} disabled={uxStep===0} style={{background:"transparent",border:"1px solid #2d2d44",borderRadius:8,padding:"5px 12px",fontSize:12,color:uxStep===0?"#3f3f55":"#94a3b8",cursor:uxStep===0?"default":"pointer"}}>← Prev</button>
              <span style={{fontSize:11,color:"#64748b"}}>{uxStep+1} / {flow.steps.length}</span>
              <button onClick={()=>uxStep<flow.steps.length-1&&setUxStep(uxStep+1)} disabled={uxStep===flow.steps.length-1} style={{background:"transparent",border:"1px solid #2d2d44",borderRadius:8,padding:"5px 12px",fontSize:12,color:uxStep===flow.steps.length-1?"#3f3f55":"#94a3b8",cursor:uxStep===flow.steps.length-1?"default":"pointer"}}>Next →</button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{marginTop:24,padding:"14px 18px",background:"#1a1a2e",borderRadius:12,border:"1px solid #2d2d44",textAlign:"center"}}>
          <span style={{fontSize:11,color:"#64748b"}}><span style={{color:"#6366f1",fontWeight:700}}>Wonder OS v1.0</span> · 65 tasks · 5 templates · 30-day delivery · Ship to stores</span>
        </div>
      </div>
    </div>
  );
}
