import { useEffect, useRef, useState } from 'react'
import './AboutPage.css'

const stats = [
  { key: 'clients', label: 'Satisfied clients', value: 150, suffix: '+' },
  { key: 'wigs', label: 'Revamped wigs', value: 100, suffix: '+' },
  { key: 'delivery', label: 'Delivery', value: '24/7', suffix: '' },
  { key: 'response', label: 'Response time', value: '2–3 min', suffix: '' },
]

function AnimatedNumber({ value, suffix, active, triggerKey }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined

    setDisplayValue(0)

    let animationFrame
    let startedAt

    const tick = (timestamp) => {
      if (!startedAt) startedAt = timestamp

      const progress = Math.min((timestamp - startedAt) / 1800, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easedProgress * value)
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick)
      }
    }

    animationFrame = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(animationFrame)
  }, [active, triggerKey, value])

  return (
    <strong>
      {displayValue}
      {suffix}
    </strong>
  )
}

export default function AboutPage() {
  const statsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [triggerKey, setTriggerKey] = useState(0)

  useEffect(() => {
    const node = statsRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTriggerKey((value) => value + 1)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-page" id="about">
      <div className="section-heading">
        <p className="eyebrow">About us</p>
        <h2>Luxury hair, confidence and care in every style.</h2>
      </div>

      <div className="about-copy-wrap">
        <div className="about-copy">
          <p>
            TM Styles &amp; Strands is a premium wig and beauty studio created for women who want to feel
            elevated, polished and completely themselves. We blend beauty, craftsmanship and confidence to
            deliver looks that feel natural, effortless and uniquely yours.
          </p>
          <p>
            From everyday glamour to statement textures, we offer styling guidance, wig consultations and care
            advice that help every client feel supported from first fitting to final finish.
          </p>

        </div>
      </div>

      <div className="stats-panel" ref={statsRef}>
        {stats.map(({ key, label, value, suffix }) => (
          <div key={key} className="stat-box">
            {typeof value === 'number' ? (
              <AnimatedNumber value={value} suffix={suffix} active={isVisible} triggerKey={triggerKey} />
            ) : (
              <strong>{value}</strong>
            )}
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
