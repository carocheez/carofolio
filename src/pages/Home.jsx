import { useState } from 'react'
import { posts } from '../data/posts'
import Carousel from '../components/Carousel'

export default function Home() {
  const sorted = [
    ...posts.filter(p => p.pinned),
    ...posts.filter(p => !p.pinned).reverse(),
  ]
  const [selected, setSelected] = useState(null)
  const [mobileView, setMobileView] = useState('inbox')

  const handleSelect = (post) => {
    setSelected(post)
    setMobileView('email')
  }

  return (
    <div className="home-layout">
      {/* Left: inbox list */}
      <div className={`inbox-panel ${mobileView === 'email' ? 'mobile-hidden' : ''}`}>
        <div className="inbox-header">inbox</div>
        <div className="inbox-list">
          {sorted.map((post) => (
            <div
              key={post.id}
              className={`email-row ${selected?.id === post.id ? 'email-row--active' : ''}`}
              onClick={() => handleSelect(post)}
            >
              <div className="email-row-main">
                <span className="email-from">
                  {post.pinned && <span className="pin-icon">📌 </span>}
                  {post.from}
                </span>
                <span className="email-date">{post.date}</span>
              </div>
              <div className="email-subject">{post.subject}</div>
              <div className="email-preview">{post.preview}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: email body */}
      <div className={`email-panel ${mobileView === 'inbox' ? 'mobile-hidden' : ''}`}>
        {selected ? (
          <>
            <div className="email-panel-header">
              <button className="back-btn" onClick={() => setMobileView('inbox')}>← back</button>
              <div className="email-meta-row">
                <span className="email-meta-label">from:</span>
                <span className="email-meta-value">{selected.from}</span>
              </div>
              <div className="email-meta-row">
                <span className="email-meta-label">subject:</span>
                <span className="email-meta-value">{selected.subject}</span>
              </div>
              <div className="email-meta-row">
                <span className="email-meta-label">date:</span>
                <span className="email-meta-value">{selected.date}</span>
              </div>
            </div>
            <div className="email-body">
              {selected.body.split('\n').map((line, i) => (
                <p key={i}>{line.trim() || <br />}</p>
              ))}
              {selected.photos && <Carousel photos={selected.photos} />}
            </div>
          </>
        ) : (
          <div className="email-empty">select a post to read it</div>
        )}
      </div>
    </div>
  )
}
