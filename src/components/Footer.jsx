"use client"

import { Mail, Phone, Facebook, Instagram, Youtube, Twitter, MessageCircle, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const interestingLinks = [
    { label: "Contact", href: "/contact" },
    { label: "About us", href: "/about-allaboutdoctor" },
    { label: "How it works", href: "#" },
    { label: "Universities", href: "#" },
    { label: "Costs", href: "#" },
    { label: "Career Guidance Sessions", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Left Column - Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Contact</h3>

              {/* Logo & Main Address */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <img src="/assets/img/logo.png" className="w-[150]"></img>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>G-07, First Floor, RTech Capital Highstreet,</p>
                  <p>Mahal Road, Jagatpura, Jaipur,</p>
                  <p>Rajasthan – 302017</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a
                  href="tel:+919351018577"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <span>+91 93510 18577</span>
                </a>
                <a
                  href="mailto:info@allaboutdoctor.in"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <span>info@allaboutdoctor.in</span>
                </a>
              </div>

              {/* International Offices */}
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground text-sm">International Offices</h4>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>Lucknow, Dehradun, Pune, Panipat, Patna, Thane, Kota, Gurugram</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-6 border-t border-border">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Center Column - Request Information */}
          <div className=" text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Request Information</h3>

            {/* Placeholder for 3D Character - Using a styled div */}
            <div className="w-full h-48 rounded-lg border-2 border-dashed border-border flex items-center justify-center bg-opacity-5">
              <div className="text-center">
                <div className="text-5xl mb-2">👨‍💼</div>
                <p className="text-xs text-muted-foreground">3D Character</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground max-w-xs">
              Take the first step and order request free study information today.
            </p>

            <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
              Request free information
            </button>
          </div>

          {/* Right Column - Interesting Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Interesting links</h3>

              <nav className="space-y-3">
                {interestingLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ArrowRight
                      size={16}
                      className="text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform"
                    />
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Sister Company */}
            {/* <div className="pt-6 border-t border-border space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇩🇪</span>
                <h4 className="font-semibold text-foreground text-sm">Our German sister company</h4>
              </div>
              <a
                href="https://www.future-doctor.de"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <ArrowRight size={14} />
                <span>www.future-doctor.de</span>
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            Copyright © {currentYear} All About Doctor Education Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
