import { useState } from 'react'
import WonderOSComplete from './wonder-os-complete.jsx'
import WonderOSInjection from './wonder-os-injection-architecture.jsx'
import WonderOSSales from './wonder-os-sales-marketing.jsx'
import WonderOSV1 from './wonder-os-v1.jsx'
import WonderOSMobile from './wonder-os.jsx'
import { BookOpen, Zap, Terminal, BarChart3, Rocket, Smartphone, Menu, X } from 'lucide-react'

const docs = [
  { id: 'v1', title: 'v1.0 Architecture', icon: <Rocket size={18} />, component: WonderOSV1 },
  { id: 'injection', title: 'Injection Engine', icon: <Terminal size={18} />, component: WonderOSInjection },
  { id: 'complete', title: 'Execution Plan', icon: <Zap size={18} />, component: WonderOSComplete },
  { id: 'sales', title: 'Sales & Marketing', icon: <BarChart3 size={18} />, component: WonderOSSales },
  { id: 'mobile', title: 'Mobile & Launch', icon: <Smartphone size={18} />, component: WonderOSMobile },
]

export default function App() {
  const [activeTab, setActiveTab] = useState(docs[0].id)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const ActiveComponent = docs.find(d => d.id === activeTab)?.component || docs[0].component

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#05050a', color: '#e2e8f0' }}>
      {/* Sidebar */}
      <div style={{
        width: isSidebarOpen ? '280px' : '0',
        background: '#0a0a0f',
        borderRight: '1px solid #1e1e2e',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #1e1e2e', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BookOpen size={18} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px' }}>Wonder OS Docs</span>
        </div>

        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#4b4b6b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', marginLeft: '12px' }}>Documentation Sections</div>
          {docs.map(doc => (
            <button
              key={doc.id}
              onClick={() => setActiveTab(doc.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === doc.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                color: activeTab === doc.id ? '#818cf8' : '#94a3b8',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                fontWeight: activeTab === doc.id ? 600 : 500,
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== doc.id) {
                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                   e.currentTarget.style.color = '#e2e8f0'
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== doc.id) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#94a3b8'
                }
              }}
            >
              <div style={{ color: activeTab === doc.id ? '#818cf8' : '#4b4b6b' }}>
                {doc.icon}
              </div>
              {doc.title}
            </button>
          ))}
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid #1e1e2e', background: '#0a0a0f' }}>
          <div style={{ fontSize: '12px', color: '#4b4b6b', textAlign: 'center' }}>
            Wonder OS v1.0 • Core Ecosystem
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <header style={{ 
          height: '64px', 
          background: 'rgba(10, 10, 15, 0.8)', 
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1e1e2e',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 5
        }}>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '8px'
            }}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <span style={{ fontSize: '13px', color: '#4b4b6b' }}>Viewing:</span>
             <span style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>{docs.find(d => d.id === activeTab)?.title}</span>
          </div>

          <div style={{ width: '40px' }} />
        </header>

        <main style={{ flex: 1, overflowY: 'auto', padding: '0' }}>
          <ActiveComponent />
        </main>
      </div>
    </div>
  )
}
