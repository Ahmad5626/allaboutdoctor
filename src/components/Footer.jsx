"use client"

import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MessageCircle,
  Linkedin,
  ArrowRight,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  const links = [
    { label: "About Us", href: "/about-allaboutdoctor" },
    { label: "Contact", href: "/contact" },
    { label: "MBBS in India", href: "/india/mbbs" },
    { label: "MBBS Abroad", href: "/abroad/mbbs" },
    { label: "NEET UG", href: "/neet-ug-counselling" },
    { label: "NEET PG", href: "/neet-pg-counselling" },
  ]

  const socials = [
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    MessageCircle,
    Linkedin,
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0b5ed7] to-[#031b4e]" />

      {/* Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="space-y-6">
            <img src="/assets/img/logo.png" className="w-44 brightness-200" />

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              2nd Floor, Santosh Vihar, C-62, VIT Rd, Vishwa Vidhyalaya Nagar,
              Jagatpura, Jaipur – 302017
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-white/70" />
                +91 93510 18577
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-white/70" />
                info@allaboutdoctor.in
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className=" flex items-center gap-3">
                <Link href="https://facebook.com" className="hover:scale-110 transition-transform duration-300">
                  <img src="/assets/img/facebook.webp" className="w-6 h-6" alt="" />
                </Link>
                <Link href="https://www.instagram.com/all_about_doctor_" className="hover:scale-110 transition-transform duration-300">
                  <img src="/assets/img/instagram.png" className="w-8 h-8" alt="" />
                </Link>




                <Link href="https://twitter.com/allaboutdoctor" className="hover:scale-110 transition-transform duration-300">
                  <img src="/assets/img/twitter.png" className="w-6 h-6" alt="" />
                </Link>
                 <Link href="https://youtube.com/@allaboutdoctor05?si=F9zJS8-n2ENlotQZ" className="hover:scale-110 transition-transform duration-300">
                  <img src="/assets/img/youtube.png" className="w-6 h-6" alt="" />
                </Link>
              </div>
              <div className="relative">

              </div>
            </div>
            {/* <div className="flex gap-3 pt-2">
              {socials.map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white hover:text-primary transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div> */}
          </div>

          {/* CENTER GLASS CARD */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-xl">
              <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center text-4xl mb-6">
                <GraduationCap className="h-10 w-10 text-secondary " />
              </div>

              <h3 className="text-2xl font-semibold">
                Start Your MBBS Journey
              </h3>

              <p className="text-sm text-white/80 mt-4">
                Get expert counselling for MBBS in India & abroad.
              </p>

              <a
                href="/#form"
                className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-white text-primary font-semibold rounded-full hover:scale-105 transition"
              >
                Request Free Info
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>

            <nav className="space-y-3 text-sm text-white/80">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <ArrowRight size={14} />
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/20 text-xs text-white/70">
              International Offices: Armenia, Georgia, Kazakhstan, Bulgaria
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-16 pt-6 text-center text-xs text-white/60">
          © {year} All About Doctor Education Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
