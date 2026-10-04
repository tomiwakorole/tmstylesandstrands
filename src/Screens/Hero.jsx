import { useEffect, useRef, useState } from 'react'
import imageOne from '../assets/images/1.jpg'
import imageTwo from '../assets/images/2.jpg'
import imageThree from '../assets/images/3.jpg'
import imageFour from '../assets/images/4.jpg'
import imageFive from '../assets/images/5.jpg'
import imageSix from '../assets/images/6.jpg'
import '../Styles/Hero.css'

const headline = 'Wear your confidence.'

const galleryImages = [
  { src: imageOne, alt: 'Wig style shown at the TM Styles & Strands salon' },
  { src: imageTwo, alt: 'Long wavy wig styled by TM Styles & Strands' },
  { src: imageThree, alt: 'Sleek bob wig styled by TM Styles & Strands' },
  { src: imageFour, alt: 'A finished wig style from TM Styles & Strands' },
  { src: imageFive, alt: 'A client wearing a styled wig' },
  { src: imageSix, alt: 'A close-up of a TM Styles & Strands hairstyle' },
]

const socialLinks = [
  { name: 'Instagram', short: 'IG', href: 'https://www.instagram.com/tmstylesandstrands/' },
  { name: 'TikTok', short: 'TK', href: 'https://www.tiktok.com/@tmstylesandstrands' },
  { name: 'Facebook', short: 'FB', href: 'https://www.facebook.com/tmstylesandstrands' },
]

function Hero() {
  const heroRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCharacters, setVisibleCharacters] = useState(0)
  const [isWriting, setIsWriting] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return undefined

    let timeoutId
    let isCancelled = false

    const eraseHeadline = (characterCount) => {
      if (isCancelled) return
      setIsWriting(false)
      setVisibleCharacters(characterCount)

      if (characterCount > 0) {
        timeoutId = window.setTimeout(() => eraseHeadline(characterCount - 1), 25)
      } else {
        timeoutId = window.setTimeout(() => writeHeadline(0), 150)
      }
    }

    const writeHeadline = (characterCount) => {
      if (isCancelled) return
      setIsWriting(true)
      setVisibleCharacters(characterCount)

      if (characterCount < headline.length) {
        timeoutId = window.setTimeout(() => writeHeadline(characterCount + 1), 45)
      } else {
        setIsWriting(false)
        timeoutId = window.setTimeout(() => eraseHeadline(headline.length - 1), 550)
      }
    }

    timeoutId = window.setTimeout(() => writeHeadline(0), 350)

    return () => {
      isCancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [isVisible])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % galleryImages.length)
    }, 3000)

    return () => window.clearInterval(timer)
  }, [])

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % galleryImages.length)
  }
  const wearText = headline.slice(0, Math.min(visibleCharacters, 4))
  const yourText = headline.slice(5, Math.max(5, Math.min(visibleCharacters, 9)))
  const confidenceText = headline.slice(10, Math.max(10, visibleCharacters))

  return (
    <section className={`hero ${isVisible ? 'hero-is-visible' : ''} ${isWriting ? 'hero-is-writing' : ''}`} id="home" ref={heroRef}>
      <div className="hero-copy">
        <h1 aria-label="Wear your confidence" tabIndex="0">
          <span className="hero-word hero-word-one">{wearText}</span>
          <span className="hero-word hero-word-two">{yourText}</span>
          <span className="hero-word hero-word-three">
            {confidenceText.endsWith('.') ? confidenceText.slice(0, -1) : confidenceText}
            <span className="hero-period">{confidenceText.endsWith('.') ? '.' : ''}</span>
          </span>
        </h1>
        <p className="hero-services">Wigs <i>·</i> Restoration <i>·</i> Care</p>

        <nav className="hero-socials" aria-label="Social media">
          <span className="social-title">FOLLOW ALONG</span>
          {socialLinks.map(({ name, short, href }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>
              <span className="social-mark">{short}</span>
              <span>{name}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="hero-right">
        <div className="hero-image" aria-label="TM Styles & Strands wig and beauty gallery" role="group" onMouseEnter={showNextImage}>
          <img key={galleryImages[activeImage].src} src={galleryImages[activeImage].src} alt={galleryImages[activeImage].alt} />
          <span className="image-label">THE SIGNATURE LOOK</span>
          <div className="gallery-dots" aria-label="Choose a gallery image">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={index === activeImage ? 'gallery-dot is-active' : 'gallery-dot'}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={index === activeImage}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
