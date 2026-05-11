import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="border-t border-border bg-background/95">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="font-display text-xl font-bold text-gradient">
              Al-Amin Technologies
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Delivering smart & scalable IT solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold text-foreground">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:alamintechologies@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  alamintechnologies.business@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917024703957"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 70247 03957
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-10 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {currentYear} Al-Amin Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
