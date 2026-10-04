import './CollectionPage.css'
import imageOne from '../assets/images/1.jpg'
import imageTwo from '../assets/images/2.jpg'
import imageThree from '../assets/images/3.jpg'
import imageFour from '../assets/images/4.jpg'
import imageFive from '../assets/images/5.jpg'
import imageSix from '../assets/images/6.jpg'

const collectionItems = [
  { src: imageOne, title: 'Silk Base Blend', tone: 'Glossy brunette' },
  { src: imageTwo, title: 'Soft Curl Luxe', tone: 'Honey brown' },
  { src: imageThree, title: 'Bouncy Bob', tone: 'Deep black' },
  { src: imageFour, title: 'Length & Layers', tone: 'Cocoa wave' },
  { src: imageFive, title: 'Signature Glam', tone: 'Chestnut shine' },
  { src: imageSix, title: 'Classic Volume', tone: 'Warm brown' },
]

const whatsappNumber = '2349060256522'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello TM Styles & Strands, I would love to order one of your wigs.')}`

export default function CollectionPage() {
  return (
    <section className="collection-page" id="collection">
      <div className="section-heading">
        <p className="eyebrow">Collection</p>
        <h2>Our favourite wig looks.</h2>
      </div>

      <div className="collection-grid">
        {collectionItems.map(({ src, title, tone }) => (
          <article key={title} className="collection-card">
            <img src={src} alt={title} />
            <div className="collection-meta">
              <div>
                <h3>{title}</h3>
                <p>{tone}</p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={`Order ${title}`}>
                Order now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
