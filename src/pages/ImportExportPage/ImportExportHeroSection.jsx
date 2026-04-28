import { useRef } from 'react'
import './ImportExportHeroSection.css'
import heroImage from '../../Images/import-export-hero-section.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function ImportExportHeroSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section 
      className="import-export-hero-section"
      ref={(el) => (animRefs.current[0] = el)}
    >
      <img src={heroImage} alt="Import and Export Hero" className="import-export-hero-image" />
    </section>
  )
}

export default ImportExportHeroSection
