import { useSearchParams } from 'react-router-dom'

const tabs = ['nails', 'crochet', 'music', 'matcha']

const content = {
  nails: <p>nail art photos coming soon! 💅</p>,
  crochet: <p>crochet projects coming soon! 🧶</p>,
  music: <p>songs and playlists coming soon! 🎵</p>,
  matcha: <p>home cafe coming soon! </p>,
}

export default function Creatives() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tab = searchParams.get('tab') || 'nails'

  return (
    <div className="simple-page">
      <h2>creatives</h2>
      <div className="tab-bar">
        {tabs.map((t) => (
          <button
            key={t}
            className={`tab-btn ${tab === t ? 'tab-btn--active' : ''}`}
            onClick={() => setSearchParams({ tab: t })}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {content[tab] || <p>nothing here yet!</p>}
      </div>
    </div>
  )
}
