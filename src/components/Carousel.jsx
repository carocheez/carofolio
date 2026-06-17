import { useState } from 'react'

export default function Carousel({ photos }) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setIndex((i) => (i + 1) % photos.length)

  return (
    <div className="carousel">
      <div className="carousel-main">
        <button className="carousel-btn" onClick={prev}>‹</button>
        <div className="carousel-img-wrapper">
          <img
            className="carousel-img"
            src={photos[index]}
            alt={`photo ${index + 1}`}
          />
        </div>
        <button className="carousel-btn" onClick={next}>›</button>
      </div>
      <div className="carousel-dots">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === index ? 'carousel-dot--active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
