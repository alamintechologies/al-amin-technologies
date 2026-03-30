import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background animate-gradient-shift" style={{ backgroundSize: "400% 400%" }} />
        
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          Innovating the Future of IT
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">Al-Amin</span>
          <br />
          <span className="text-gradient">Technologies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Delivering Smart & Scalable IT Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base glow-primary hover:scale-105 transition-transform duration-300"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary/40 text-primary font-semibold text-base hover:bg-primary/10 transition-all duration-300"
          >
            <MessageCircle size={18} />
            Contact Us
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection