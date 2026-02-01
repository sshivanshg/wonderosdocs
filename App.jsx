import { useState, useEffect } from 'react'
import WonderOSComplete from './wonder-os-complete.jsx'
import WonderOSInjection from './wonder-os-injection-architecture.jsx'
import WonderOSSales from './wonder-os-sales-marketing.jsx'
import WonderOSV1 from './wonder-os-v1.jsx'
import WonderOSMobile from './wonder-os.jsx'
import { BookOpen, Zap, Terminal, BarChart3, Rocket, Smartphone, Menu, X, ChevronRight, Github } from 'lucide-react'

const docs = [
  { id: 'v1', title: 'v1.0 Architecture', icon: <Rocket size={18} />, component: WonderOSV1, description: 'Core system design and 90-day plan' },
  { id: 'injection', title: 'Injection Engine', icon: <Terminal size={18} />, component: WonderOSInjection, description: 'Code-injection and template logic' },
  { id: 'complete', title: 'Execution Plan', icon: <Zap size={18} />, component: WonderOSComplete, description: 'Step-by-step development roadmap' },
  { id: 'sales', title: 'Sales & Marketing', icon: <BarChart3 size={18} />, component: WonderOSSales, description: 'Go-to-market and growth strategy' },
  { id: 'mobile', title: 'Mobile & Launch', icon: <Smartphone size={18} />, component: WonderOSMobile, description: 'App Store and Play Store submission' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState(docs[0].id)
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024
      setIsMobile(mobile)
      if (!mobile) setIsSidebarOpen(true)
      else setIsSidebarOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const ActiveComponent = docs.find(d => d.id === activeTab)?.component || docs[0].component

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#05050a', color: '#e2e8f0', fontFamily: "'Outfit', sans-serif" }}>
      {/* Mobile Backdrop */}
      {isMobile && isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 40,
            transition: 'opacity 0.3s'
          }}
        />
      )}

      {/* Sidebar */}
      <aside style={{
        width: '300px',
        background: '#0a0a0f',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        transition: 'transform 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        position: isMobile ? 'fixed' : 'relative',
        height: '100vh',
        zIndex: 50,
        transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        boxShadow: isMobile && isSidebarOpen ? '20px 0 50px rgba(0,0,0,1)' : 'none'
      }}>
        <div style={{ padding: '32px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
            }}>
              <BookOpen size={20} color="white" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-0.5px', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Wonder OS</span>
          </div>
          {isMobile && (
            <button onClick={() => setIsSidebarOpen(false)} style={{ background: 'transparent', border: 'none', color: '#4b4b6b', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          )}
        </div>

        <nav style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#4b4b6b', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px', marginLeft: '12px' }}>Contents</div>
          {docs.map(doc => (
            <button
              key={doc.id}
              onClick={() => {
                setActiveTab(doc.id)
                if (isMobile) setIsSidebarOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid transparent',
                background: activeTab === doc.id ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
                borderColor: activeTab === doc.id ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                color: activeTab === doc.id ? '#fff' : '#94a3b8',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                fontWeight: activeTab === doc.id ? 600 : 500,
                fontSize: '14px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                color: activeTab === doc.id ? '#818cf8' : '#4b4b6b',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {doc.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div>{doc.title}</div>
                {activeTab === doc.id && (
                  <div style={{ fontSize: '11px', fontWeight: 400, color: 'rgba(129, 140, 248, 0.7)', marginTop: '2px' }}>{doc.description}</div>
                )}
              </div>
              {activeTab === doc.id && <ChevronRight size={14} style={{ color: '#6366f1' }} />}

              {activeTab === doc.id && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '25%',
                  bottom: '25%',
                  width: '3px',
                  background: '#6366f1',
                  borderRadius: '0 4px 4px 0'
                }} />
              )}
            </button>
          ))}
        </nav>

        <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to top, #0a0a0f, transparent)' }}>
          <a
            href="https://github.com/sshivanshg/wonderosdocs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#4b4b6b',
              fontSize: '13px',
              textDecoration: 'none',
              marginBottom: '16px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#4b4b6b'}
          >
            <Github size={16} />
            <span>Repository</span>
          </a>
          <div style={{ fontSize: '11px', color: '#4b4b6b', lineHeight: 1.5 }}>
            Wonder OS Documentation<br />
            Built for scale. v1.0.0
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', position: 'relative' }}>
        <header style={{
          height: '72px',
          background: 'rgba(5, 5, 10, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 30
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {(!isSidebarOpen || isMobile) && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  color: '#e2e8f0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px',
                  borderRadius: '10px',
                  transition: 'all 0.2s'
                }}
              >
                <Menu size={20} />
              </button>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#4b4b6b', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Section</span>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1e1e2e' }} />
              <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', margin: 0 }}>{docs.find(d => d.id === activeTab)?.title}</h2>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              padding: '6px 12px',
              borderRadius: '20px',
              background: 'rgba(52, 211, 153, 0.1)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              fontSize: '11px',
              fontWeight: 700,
              color: '#34d399',
              display: isMobile ? 'none' : 'block'
            }}>
              LIVE SYSTEM
            </div>
          </div>
        </header>

        <main style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          background: '#05050a'
        }}>
          <div style={{ padding: isMobile ? '20px' : '40px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <ActiveComponent />
          </div>

          <footer style={{ padding: '40px', borderTop: '1px solid rgba(255,255,255,0.03)', marginTop: 'auto', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', color: '#4b4b6b' }}>
              © 2026 Wonder OS Ecosystem. Propelled by Super-Engineers.
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
