import { useState } from 'react'
import './ContactPage.css'

const whatsappNumber = '2349060256522'
const whatsappLink = `https://wa.me/${whatsappNumber}`

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = formData.name.trim() || 'Customer'
    const email = formData.email.trim()
    const message = formData.message.trim() || 'I would like to order a wig and book a consultation.'

    const formattedMessage = `Hello TM Styles & Strands, my name is ${name}. Email: ${email || 'Not provided'}. Message: ${message}`
    const chatLink = `${whatsappLink}?text=${encodeURIComponent(formattedMessage)}`

    window.open(chatLink, '_blank', 'noopener,noreferrer')
    setFormData(initialForm)
  }

  return (
    <section className="contact-page" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact us</p>
        <h2>Let’s help you find your perfect wig.</h2>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
          </label>
          <label>
            Email address
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us your preferred wig style, colour and budget." />
          </label>
          <button type="submit" className="submit-button">Send via WhatsApp</button>
        </form>

        <div className="contact-cards">
          <article className="contact-card">
            <span className="contact-tag">WhatsApp</span>
            <h3>+234 906 025 6522</h3>
            <p>Fast replies for orders, styling and price questions.</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer">Chat now</a>
          </article>

          <article className="contact-card">
            <span className="contact-tag">Instagram</span>
            <h3>@tmstylesandstrands</h3>
            <p>See new looks, trends and recent wig drops.</p>
            <a href="https://www.instagram.com/tmstylesandstrands/" target="_blank" rel="noreferrer">Follow us</a>
          </article>

          <article className="contact-card">
            <span className="contact-tag">Email</span>
            <h3>hello@tmstylesandstrands.com</h3>
            <p>For bookings, custom requests and business enquiries.</p>
            <a href="mailto:hello@tmstylesandstrands.com">Email us</a>
          </article>
        </div>
      </div>

      <div className="delivery-note">
        <p><strong>Note:</strong> We do nationwide delivery. If your order is not delivered within the speculated time for delivery, send us a DM, email or give us a call.</p>
      </div>
    </section>
  )
}
