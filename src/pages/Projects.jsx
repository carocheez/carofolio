const projects = [
  {
    title: 'carofolio',
    description: 'my personal portfolio website built with react.',
    link: 'https://github.com/carochenz/carofolio',
    tags: ['react', 'css', 'vite'],
  },
  {
    title: 'allstarpredict',
    description: 'an nba statistics website. search anything. predict your favorite player\'s first all-star selection.',
    link: 'https://github.com/carocheez/allstarpredict',
    tags: ['python', 'react', 'jsx'],
  },
]

export default function Projects() {
  return (
    <div className="simple-page">
      <h2>projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>
            {p.link && <a href={p.link} target="_blank" rel="noreferrer">view →</a>}
          </div>
        ))}
      </div>
    </div>
  )
}
