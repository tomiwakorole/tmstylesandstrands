import { useState } from 'react'
import Hero from './Screens/Hero'
import AboutPage from './Screens/AboutPage'
import CollectionPage from './Screens/CollectionPage'
import ContactPage from './Screens/ContactPage'
import Footer from './Screens/Footer'
import './App.css'

const menuItems = [
  { label: 'About us', href: '#about' },
  { label: 'Collection', href: '#collection' },
  { label: 'Contact', href: '#contact' },
]

const whatsappNumber = '2349060256522'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello TM Styles & Strands, I would love to book a consultation.')}`

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="TM Styles and Strands home">
          <span className="brand-mark">TM</span>
          <span className="brand-name">Styles <i>&</i> Strands</span>
        </a>

        <button type="button" className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {menuItems.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
            Book a consultation
          </a>
        </nav>
      </header>

      <Hero />
      <AboutPage />
      <CollectionPage />
      <ContactPage />
      <Footer />
    </main>
  )
}

export default App
