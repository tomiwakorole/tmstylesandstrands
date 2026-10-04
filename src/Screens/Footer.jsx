import './Footer.css'

const whatsappNumber = '2349060256522'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello TM Styles & Strands, I would like to make an order.')}`

const instagramLink = 'https://instagram.com/tmstylesandstrands'
const tiktokLink = 'https://www.tiktok.com/@tmstylesandstrands'

const socialLinks = [
  { name: 'Instagram', href: instagramLink, icon: 'instagram' },
  { name: 'TikTok', href: tiktokLink, icon: 'tiktok' },
  { name: 'WhatsApp', href: whatsappLink, icon: 'whatsapp' },
]

function SocialIcon({ type }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  }

  switch (type) {
    case 'instagram':
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'tiktok':
      return (
        <svg {...commonProps}>
          <path d="M14 4c1.2 1.8 2.8 2.8 5 3v2.7c-1.8 0-3.2-.3-4.6-1.1v6.2a5.2 5.2 0 1 1-5.2-5.2c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V4h2.9Z" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg {...commonProps}>
          <path d="M20.1 3.9A9.8 9.8 0 0 0 3.9 15.7L3 21l5.4-1.4a9.8 9.8 0 0 0 11.7-15.7Z" />
          <path d="M15.8 14.3c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.1.2-.3.2-.5.1a8.1 8.1 0 0 1-2.2-1.4A8.8 8.8 0 0 1 8.5 10c-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.8.7.7.2 1.3.2 1.8.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.2 0-.1-.3-.2-.5-.3Z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-panel">
        <div className="footer-brand-block">
          <a className="brand" href="#home" aria-label="TM Styles and Strands home">
            <span className="brand-mark">TM</span>
            <span className="brand-name">Styles <i>&</i> Strands</span>
          </a>
          <p className="footer-tagline">Luxury wigs, styling and care for your everyday glow.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#collection">Collections</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          {socialLinks.map(({ name, href, icon }) => (
            <a key={name} className="footer-social" href={href} target="_blank" rel="noreferrer" aria-label={name}>
              <SocialIcon type={icon} />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
