import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Creatives from './pages/Creatives'
import YouTube from './pages/YouTube'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}
