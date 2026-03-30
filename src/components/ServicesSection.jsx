import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Server, Plug, Palette, Cloud, Code } from 'lucide-react'

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications built with cutting-edge frameworks and technologies." },
  { icon: Server, title: "Backend Development", desc: "Robust, scalable server-side architectures that power your applications reliably." },
  { icon: Plug, title: "API Development", desc: "RESTful and GraphQL APIs designed for performance, security, and developer experience." },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces that delight users and drive engagement." },
  { icon: Cloud, title: "Cloud & Deployment", desc: "Seamless cloud infrastructure setup, CI/CD pipelines, and DevOps solutions." },
  { icon: Code, title: "Custom Solutions", desc: "Tailored software solutions designed to solve your unique business challenges." },
]

const ServicesSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-8 hover:glow-primary transition-all duration-500 hover:-translate-y-2 gradient-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection