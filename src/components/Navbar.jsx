import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
      <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
      <Link to="/creatives" className={location.pathname === '/creatives' ? 'active' : ''}>Creatives</Link>
      <Link to="/youtube" className={location.pathname === '/youtube' ? 'active' : ''}>YouTube</Link>
      <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
    </nav>
  )
}
