const videos = [
  { id: 'lvN-SmuzUxs',   title: 'video 1' },
  { id: 'Xmc_mVFJY0s',   title: 'video 2' },
  { id: 'ZAYMDWNH_Rc',   title: 'video 3' },
  { id: 'cO-NdyXyMhE',   title: 'video 4' },
  { id: 'gPP1czXDAX0',   title: 'video 5' },
  { id: 'wRf25YthBmc',   title: 'video 6' },
  { id: 'xFXQnhzZxtA',   title: 'video 7' },
  { id: 'X9hI26h_n9w',   title: 'video 8' },
  { id: 'B-RPR-nKo-o',   title: 'video 9' },
  { id: '1I7tmgHNESE',   title: 'video 10' },
]

export default function YouTube() {
  return (
    <div className="simple-page wide-page">
      <h2>youtube</h2>
      <div className="videos-grid">
        {videos.map((v) => (
          <div key={v.id} className="video-card">
            <iframe
              width="100%"
              height="215"
              src={`https://www.youtube.com/embed/${v.id}`}
              title={v.title}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p>{v.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
