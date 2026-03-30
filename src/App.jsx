import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUs from './components/WhyChooseUs'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App