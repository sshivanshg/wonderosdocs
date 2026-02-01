import { useState } from "react";

const layers = [
  {
    id: "manifest",
    title: "Layer 1 — Template Manifest",
    tag: "Static · Per-Template · Git-tracked",
    tagColor: "#34d399",
    summary: "Every template ships with a single source-of-truth JSON manifest. Nothing in the system works without it. It declares what the template IS — not how it's deployed.",
    icon: "📄",
    files: [
      { path: "templates/service-hub/manifest.json", role: "Root config for Service Business Hub" },
      { path: "templates/healthcare/manifest.json", role: "Root config for Healthcare Management" },
      { path: "templates/realestate/manifest.json", role: "Root config for Real Estate" },
    ],
    code: [
      '// templates/service-hub/manifest.json',
      '{',
      '  "id": "service-business-hub",',
      '  "version": "1.0.0",',
      '  "name": "Service Business Hub",',
      '',
      '  // ── What this template CAN do ──',
      '  "capabilities": {',
      '    "booking": true,',
      '    "clientPortal": true,',
      '    "payments": true,',
      '    "adminDashboard": true,',
      '    "emailNotifications": true,',
      '    "smsReminders": true,',
      '    "mobileApp": true',
      '  },',
      '',
      '  // ── Branding slots the founder fills ──',
      '  "branding": {',
      '    "appName":        { "type": "string",  "required": true },',
      '    "logo":           { "type": "file",    "accepts": ["png","svg"] },',
      '    "primaryColor":   { "type": "hex",     "default": "#6366f1" },',
      '    "secondaryColor": { "type": "hex",     "default": "#8b5cf6" },',
      '    "fontFamily":     { "type": "string",  "default": "Inter" },',
      '    "domain":         { "type": "string",  "required": true }',
      '  },',
      '',
      '  // ── Business config slots ──',
      '  "business": {',
      '    "currency":   { "type": "enum", "options": ["INR","USD"], "default": "INR" },',
      '    "timezone":   { "type": "string", "default": "Asia/Kolkata" },',
      '    "workingHrs": { "type": "object", "default": { "start":"09:00","end":"18:00" } }',
      '  },',
      '',
      '  // ── Mobile build metadata ──',
      '  "mobile": {',
      '    "bundleId": { "type": "string", "pattern": "com.{domain}.app" }',
      '  }',
      '}',
    ],
    whyEvergreen: 'New capabilities are added by adding keys to "capabilities". New branding slots by adding keys to "branding". The injection engine never changes — only the manifest grows. This is the contract between what a template offers and what a founder configures.',
  },
  {
    id: "founder-config",
    title: "Layer 2 — Founder Config",
    tag: "Dynamic · Per-Deployment · DB-backed",
    tagColor: "#60a5fa",
    summary: "When a founder pays and configures their app, their choices are stored as a single JSONB document in Supabase. This is the runtime identity of their specific deployment.",
    icon: "⚙️",
    files: [
      { path: "supabase → deployments table", role: "Row per founder app, config = JSONB" },
      { path: "api/configurator/save.ts", role: "Validates input against manifest schema" },
    ],
    code: [
      '// Supabase: deployments table → config (JSONB)',
      '// Generated when founder completes configurator',
      '{',
      '  "deploymentId": "dep_a1b2c3",',
      '  "templateId":   "service-business-hub",',
      '  "templateVersion": "1.0.0",',
      '',
      '  // ── Founder branding choices ──',
      '  "branding": {',
      '    "appName":       "BookEasy",',
      '    "logo":          "r2://wonder-apps/dep_a1b2c3/logo.png",',
      '    "primaryColor":  "#f59e0b",',
      '    "secondaryColor":"#d97706",',
      '    "fontFamily":    "Poppins",',
      '    "domain":        "bookeasy.in"',
      '  },',
      '',
      '  // ── Features they enabled ──',
      '  "features": {',
      '    "booking":            true,',
      '    "clientPortal":       true,',
      '    "payments":           true,',
      '    "adminDashboard":     true,',
      '    "emailNotifications": true,',
      '    "smsReminders":       false,   // ← toggled OFF',
      '    "mobileApp":          true',
      '  },',
      '',
      '  // ── Business config ──',
      '  "business": {',
      '    "currency":   "INR",',
      '    "timezone":   "Asia/Kolkata",',
      '    "workingHrs": { "start": "08:00", "end": "20:00" }',
      '  },',
      '',
      '  // ── Infra refs (filled by deploy pipeline) ──',
      '  "infra": {',
      '    "supabaseProjectId": "proj_xyz123",',
      '    "r2Bucket":          "wonder-apps-dep_a1b2c3",',
      '    "vercelProjectId":   "vcel_abc456",',
      '    "customDomain":      "bookeasy.in",',
      '    "status":            "LIVE"',
      '  }',
      '}',
    ],
    whyEvergreen: "When you add a new feature toggle to any template manifest, the Configurator UI auto-renders it because it reads capabilities dynamically. No frontend code changes. The founder config is just the manifest slots filled with real values.",
  },
  {
    id: "inject-script",
    title: "Layer 3 — Inject Script",
    tag: "Build-time · GitHub Actions · Template-agnostic",
    tagColor: "#fb923c",
    summary: "The core engine. Runs once per deployment inside GitHub Actions before Next.js build. Reads manifest + founder config, rewrites the template codebase. Same script deploys all 5 templates.",
    icon: "🔧",
    files: [
      { path: "scripts/inject.ts", role: "Main engine — reads config, rewrites files" },
      { path: "scripts/inject.test.ts", role: "Unit tests per injection strategy" },
      { path: ".github/workflows/deploy.yml", role: "Calls inject.ts at Step 5" },
    ],
    code: [
      '// scripts/inject.ts',
      '// Runs in GitHub Actions BEFORE next build',
      '// Template-agnostic — same script for all templates',
      '',
      'const config = JSON.parse(process.env.FOUNDER_CONFIG);',
      'const manifest = readJSON(`./templates/${config.templateId}/manifest.json`);',
      '',
      '// ── STRATEGY 1: Env File Injection ──',
      'function injectEnvFile(config) {',
      '  const vars = [',
      '    `NEXT_PUBLIC_APP_NAME=${config.branding.appName}`,',
      '    `NEXT_PUBLIC_PRIMARY_COLOR=${config.branding.primaryColor}`,',
      '    `NEXT_PUBLIC_SECONDARY_COLOR=${config.branding.secondaryColor}`,',
      '    `NEXT_PUBLIC_FONT_FAMILY=${config.branding.fontFamily}`,',
      '    `NEXT_PUBLIC_LOGO_URL=${config.branding.logo}`,',
      '    `SUPABASE_URL=${config.infra.supabaseUrl}`,',
      '  ];',
      '  writeFile(".env.local", vars.join("\\n"));',
      '}',
      '',
      '// ── STRATEGY 2: Feature Flag JSON ──',
      '// Next.js tree-shakes disabled features OUT',
      'function injectFeatureFlags(config) {',
      '  const flags = {};',
      '  for (const [k, v] of Object.entries(config.features)) {',
      '    flags[k] = v;',
      '  }',
      '  writeFile("src/config/features.json", JSON.stringify(flags));',
      '}',
      '',
      '// ── STRATEGY 3: Theme Token Injection ──',
      'function injectThemeTokens(config) {',
      '  const css = `:root {',
      '    --color-primary: ${config.branding.primaryColor};',
      '    --color-secondary: ${config.branding.secondaryColor};',
      '    --font-family: ${config.branding.fontFamily}, sans-serif;',
      '  }`;',
      '  writeFile("src/styles/brand-tokens.css", css);',
      '}',
      '',
      '// ── STRATEGY 4: Mobile Config ──',
      'function injectMobileConfig(config) {',
      '  const appJson = readJSON("app.json");',
      '  appJson.expo.name = config.branding.appName;',
      '  appJson.expo.bundleIdentifier = `com.${config.branding.domain}.app`;',
      '  writeFile("app.json", JSON.stringify(appJson));',
      '}',
      '',
      '// ── MAIN ──',
      'injectEnvFile(config);',
      'injectFeatureFlags(config, manifest);',
      'injectThemeTokens(config);',
      'if (config.features.mobileApp) injectMobileConfig(config);',
      '',
      'console.log("✓ Injection complete for", config.branding.appName);',
    ],
    whyEvergreen: "New features don't require changes to inject.ts. Adding SMS reminders? Add smsReminders to manifest. The feature flag JSON auto-includes it. The app's feature gate reads it. inject.ts only changes when you add a fundamentally new injection strategy.",
  },
  {
    id: "runtime-gates",
    title: "Layer 4 — Runtime Feature Gates",
    tag: "Runtime · App-level · Code-split aware",
    tagColor: "#a78bfa",
    summary: "Features are gated by a runtime utility that checks the injected feature flags. This ensures code is only executed if the feature is enabled for the specific deployment.",
    icon: "🚪",
    files: [
      { path: "src/lib/features.ts", role: "Runtime gate utility" }
    ],
    code: [
      "// src/lib/features.ts",
      "import flags from '../config/features.json';",
      "",
      "export function isEnabled(feature: string) {",
      "  return !!flags[feature];",
      "}"
    ],
    whyEvergreen: "The gates are generic. You write 'if (isEnabled(\"booking\"))' once. Whether it shows up depends entirely on the injection layer."
  }
];

export default function WonderOSInjection() {
  return (
    <div style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", padding: "24px 28px", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>⚡</div>
          <div>
            <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>Wonder OS — Injection Engine</h1>
            <span style={{ fontSize: "12px", color: "#6366f1", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Core Architecture • Layered Customization</span>
          </div>
        </div>
      </div>

      <div style={{ margin: "0 auto" }}>
        {layers.map((layer, i) => (
          <div key={i} style={{ marginBottom: "24px", padding: "24px", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", background: "rgba(255,255,255,0.01)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "24px" }}>{layer.icon}</span>
              <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#fff" }}>{layer.title}</h2>
              <span style={{ fontSize: "10px", fontWeight: 700, background: `${layer.tagColor}22`, color: layer.tagColor, padding: "4px 10px", borderRadius: "20px", border: `1px solid ${layer.tagColor}33` }}>{layer.tag}</span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>{layer.summary}</p>

            <div style={{ background: "#05050a", padding: "20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", overflowX: "auto" }}>
              <pre style={{ margin: 0 }}><code style={{ fontSize: "13px", color: "#c4b5fd" }}>{layer.code.join('\n')}</code></pre>
            </div>

            <div style={{ marginTop: "20px", padding: "16px", background: "rgba(99, 102, 241, 0.05)", borderRadius: "10px", border: "1px solid rgba(99, 102, 241, 0.1)" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#818cf8", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>Why it works</span>
              <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", lineHeight: 1.5 }}>{layer.whyEvergreen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}