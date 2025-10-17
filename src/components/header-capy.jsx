"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const CORE_MENU = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-allaboutdoctor" },
  { label: "OUR BRANCHES", href: "/branches" },
]

const TAIL_MENU = [
  // { label: "PARTNERSHIP & FRANCHISE", href: "/partnership" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
]

// Horizontal chips for MBBS > India
const INDIA_STATES = [
  { label: "Maharashtra", href: "/mbbs-in-india/maharashtra" },
  { label: "Karnataka", href: "/mbbs-in-india/karnataka" },
  { label: "Tamil Nadu", href: "/mbbs-in-india/tamil-nadu" },
  { label: "Kerala", href: "/mbbs-in-india/kerala" },
  { label: "Gujarat", href: "/mbbs-in-india/gujarat" },
  { label: "Rajasthan", href: "/mbbs-in-india/rajasthan" },
  { label: "Uttar Pradesh", href: "/mbbs-in-india/uttar-pradesh" },
  { label: "Madhya Pradesh", href: "/mbbs-in-india/madhya-pradesh" },
  { label: "West Bengal", href: "/mbbs-in-india/west-bengal" },
  { label: "Telangana", href: "/mbbs-in-india/telangana" },
]

// Horizontal chips for MBBS > Abroad
const ABROAD_COUNTRIES = [
  { label: "Russia", href: "/mbbs-abroad/russia" },
  { label: "Uzbekistan", href: "/mbbs-abroad/uzbekistan" },
  { label: "Kazakhstan", href: "/mbbs-abroad/kazakhstan" },
  { label: "Philippines", href: "/mbbs-abroad/philippines" },
  { label: "Georgia", href: "/mbbs-abroad/georgia" },
  { label: "Egypt", href: "/mbbs-abroad/egypt" },
  { label: "Nepal", href: "/mbbs-abroad/nepal" },
  { label: "Bangladesh", href: "/mbbs-abroad/bangladesh" },
  { label: "Kyrgyzstan", href: "/mbbs-abroad/kyrgyzstan" },
  { label: "Armenia", href: "/mbbs-abroad/armenia" },
]

// Courses list from your screenshot
const COURSES = [
  { label: "MBBS", href: "/courses/mbbs" },
  { label: "MD", href: "/courses/md" },
  { label: "MS", href: "/courses/ms" },
  { label: "BAMS", href: "/courses/bams" },
  { label: "BDS", href: "/courses/bds" },
  { label: "BVSc (Bachelor of Veterinary Science)", href: "/courses/bvsc" },
  { label: "B.Sc. Nursing", href: "/courses/bsc-nursing" },
  { label: "GNM", href: "/courses/gnm" },
  { label: "ANM", href: "/courses/anm" },
  { label: "D PHARMA", href: "/courses/d-pharma" },
  { label: "B PHARMA", href: "/courses/b-pharma" },
  { label: "M PHARMA", href: "/courses/m-pharma" },
  { label: "BNYS", href: "/courses/bnys" },
  { label: "BHMS", href: "/courses/bhms" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openKey, setOpenKey] = useState(null)
  const closeOnEsc = (e) => e.key === "Escape" && (setMobileOpen(false), setOpenKey(null))

  useEffect(() => {
    if (mobileOpen) document.addEventListener("keydown", closeOnEsc)
    return () => document.removeEventListener("keydown", closeOnEsc)
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b ">
      {/* Topbar */}
      <div className="hidden sm:block bg-accent text-accent-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-end gap-4">
          <span className="inline-flex items-center gap-2">
            <MailIcon className="h-4 w-4 opacity-80" />
            <a href="mailto:info@allaboutdoctor.in" className="hover:underline">
              info@allaboutdoctor.in
            </a>
          </span>
        </div>
      </div>

      {/* Brand + quick actions */}
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/img/logo.png"
              alt="All About Doctor logo"
              width={200}
              height={200}
              className="rounded-md"
            />
          
          </Link>
        </div>

        {/* Desktop quick actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="/counselling"
            className="inline-flex items-center gap-2 rounded-xl border border-secondary/30 bg-background px-4 py-2 text-sm font-medium text-secondary hover:bg-secondary/10 transition"
          >
            <HeadsetIcon className="h-5 w-5" />
            <span>Live Meeting </span>
          </a>

          <div className="hidden md:flex items-center gap-2 pl-5 border-l">
            <PhoneIcon className="h-5 w-5 text-secondary" />
            <div className="leading-tight">
              <span className="text-xs text-muted-foreground">Call us Now</span>
              <a href="tel:+919351018577" className="block text-sm font-semibold text-secondary">
                +91 93510 18577
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 pl-5 border-l">
            <WhatsAppIcon className="h-5 w-5 text-green-600" />
            <div className="leading-tight">
              <span className="text-xs text-muted-foreground">Whatsapp Us</span>
              <a href="https://wa.me/917737367793" className="block text-sm font-semibold text-foreground">
                77373 67793
              </a>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 pl-5 border-l">
            <a aria-label="YouTube" href="#" className="group">
              <YouTubeIcon className="h-5 w-5 group-hover:scale-110 transition" />
            </a>
            <a aria-label="Facebook" href="#" className="group">
              <FacebookIcon className="h-5 w-5 group-hover:scale-110 transition" />
            </a>
            <a aria-label="Instagram" href="#" className="group">
              <InstagramIcon className="h-5 w-5 group-hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-3">
          <a href="tel:+919351018577" aria-label="Call" className="rounded-full p-2 border hover:bg-accent">
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/917737367793"
            aria-label="WhatsApp"
            className="rounded-full p-2 border hover:bg-accent"
          >
            <WhatsAppIcon className="h-5 w-5 text-green-600" />
          </a>
          <button
            aria-label="Open menu"
            className="rounded-md border px-3 py-2 hover:bg-accent"
            onClick={() => setMobileOpen(true)}
          >
            <BurgerIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="hidden lg:block bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center gap-2 text-[16px]">
            {/* CORE MENU - separate map */}
            {CORE_MENU.map((item, index) => (
              <li key={index} className="relative">
                <Link href={item.href} className="nav-link inline-flex items-center px-4 py-3">
                  <span>{item.label}</span>
                  <span className="underline-anim" />
                </Link>
              </li>
            ))}

            {/* MBBS (mega dropdown with two horizontal submenus) */}
            <li className="relative" onMouseEnter={() => setOpenKey("mbbs")} onMouseLeave={() => setOpenKey(null)}>
              <button
                className="nav-link group inline-flex items-center gap-2 px-4 py-3"
                aria-expanded={openKey === "mbbs"}
                onClick={() => setOpenKey(openKey === "mbbs" ? null : "mbbs")}
              >
                <span>MBBS</span>
                <ChevronDown className={`h-4 w-4 transition ${openKey === "mbbs" ? "rotate-180" : ""}`} />
                <span className="underline-anim" />
              </button>

              <div className={`dropdown ${openKey === "mbbs" ? "open" : ""}`}>
                <div className="min-w-[720px] rounded-md border bg-popover p-4 shadow ">
                  <div className="grid grid-cols-1 gap-4">
                    {/* India row - mapped chips */}
                    <div>
                      <div className="text-[12px] font-semibold mb-2 text-muted-foreground">1. MBBS IN INDIA</div>
                        <div className="flex flex-wrap items-stretch gap-2  pb-1 ">
                      {/* <div className="flex flex-nowrap items-stretch gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none]"> */}
                        {INDIA_STATES.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="px-3 py-2 text-black rounded-full text-sm bg-accent/50 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Abroad row - mapped chips */}
                    <div>
                      <div className="text-[12px] font-semibold mb-2 text-muted-foreground">2. MBBS IN ABROAD</div>
                      <div className="flex flex-wrap items-stretch gap-2  pb-1">
                        {ABROAD_COUNTRIES.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="px-3 py-2 text-black rounded-full text-sm bg-accent/50 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* COURSES (dropdown: list + screenshot/content) */}
            <li className="relative" onMouseEnter={() => setOpenKey("courses")} onMouseLeave={() => setOpenKey(null)}>
              <button
                className="nav-link group inline-flex items-center gap-2 px-4 py-3"
                aria-expanded={openKey === "courses"}
                onClick={() => setOpenKey(openKey === "courses" ? null : "courses")}
              >
                <span>COURSE</span>
                <ChevronDown className={`h-4 w-4 transition ${openKey === "courses" ? "rotate-180" : ""}`} />
                <span className="underline-anim" />
              </button>

              <div className={`dropdown ${openKey === "courses" ? "open" : ""}`}>
                <div className="min-w-[400px] rounded-md border bg-popover p-4 shadow">
                  <div className="grid grid-cols-4 gap-4">
                    {/* Left: mapped course list */}
                    <div className="col-span-7">
                      <ul className="grid grid-cols-2 gap-1">
                        {COURSES.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block text-black px-2 py-1.5 rounded text-sm hover:bg-accent hover:text-accent-foreground"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                   
                  </div>
                </div>
              </div>
            </li>

            {/* TAIL MENU - separate map */}
            {TAIL_MENU.map((item) => (
              <li key={item.href} className="relative">
                <Link href={item.href} className="nav-link inline-flex items-center px-4 py-3">
                  <span>{item.label}</span>
                  <span className="underline-anim" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition ${mobileOpen ? "pointer-events-auto" : "pointer-events-none" }  `}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-[90%] md:hidden bg-background border-l shadow-xl transition-transform ${
            mobileOpen ? "translate-x-0 " : "translate-x-full hidden"
          }`}
        >
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <span className="font-semibold">Menu</span>
            <button
              aria-label="Close menu"
              className="rounded-md border px-3 py-2"
              onClick={() => setMobileOpen(false)}
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="px-2 py-3 bg-white z-10" >
            {CORE_MENU.map((item) => (
              <Link
                key={item.href}
                href=""
                className="block rounded px-3 py-2 hover:bg-accent"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <details className="group rounded-md">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded px-3 py-2 hover:bg-accent">
                <span>MBBS</span>
                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
              </summary>

              <div className="px-3 pb-2">
                <div className="text-[12px] font-semibold mb-1 text-muted-foreground">1. MBBS IN INDIA</div>
                <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2">
                  {INDIA_STATES.map((s) => (
                    <Link
                      key={s.href}
                      href=""
                      className="px-3 py-2 rounded-full text-sm bg-accent/50 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>

                <div className="text-[12px] font-semibold mb-1 text-muted-foreground mt-2">2. MBBS IN ABROAD</div>
                <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2">
                  {ABROAD_COUNTRIES.map((c) => (
                    <Link
                      key={c.href}
                      href=""
                      className="px-3 py-2 rounded-full text-sm bg-accent/50 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                      onClick={() => setMobileOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </details>

            <details className="group rounded-md">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded px-3 py-2 hover:bg-accent">
                <span>COURSE</span>
                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <div className="pl-3 grid grid-cols-2 gap-1 pb-2">
                {COURSES.map((c) => (
                  <Link
                    key={c.href}
                    href=""
                    className="rounded px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </details>

            {TAIL_MENU.map((item) => (
              <Link
                key={item.href}
                href=""
                className="block rounded px-3 py-2 hover:bg-accent"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 border-t pt-4 grid grid-cols-2 gap-3">
              <a href="/counselling" className="rounded-md border px-3 py-2 text-center text-sm">
                Live Meeting 
              </a>
              <a
                href="tel:+919351018577"
                className="rounded-md bg-primary text-primary-foreground px-3 py-2 text-center text-sm"
              >
                Call now
              </a>
              <a
                href="https://wa.me/917737367793"
                className="rounded-md border px-3 py-2 text-center text-sm col-span-2"
              >
                WhatsApp 77373 67793
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Animations */}
      <style jsx>{`
        .nav-link {
          position: relative;
          font-weight: 600;
          letter-spacing: 0.2px;
        }
        .underline-anim {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 0.5rem;
          height: 2px;
          transform-origin: left;
          transform: scaleX(0);
          background: currentColor;
          opacity: 0.7;
          transition: transform 200ms ease;
        }
        .nav-link:hover .underline-anim,
        .nav-link:focus-visible .underline-anim {
          transform: scaleX(1);
        }
        .dropdown {
          position: absolute;
          left: 0;
          top: calc(100% + 4px);
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: all 200ms ease;
        }
        .dropdown.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
      `}</style>
    </header>
  )
}

/* --------- Icons (inline SVG for zero deps) --------- */
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" d="M3 7.5c0-1.105.895-2 2-2h14a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z" />
      <path strokeWidth="1.5" d="m3.5 7 8.2 6a1.5 1.5 0 0 0 1.8 0l8.2-6" />
    </svg>
  )
}
function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.5"
        d="M2.5 5.5 7 4l3 4-2 2a16 16 0 0 0 6 6l2-2 4 3-1.5 4.5c-.3.9-1.2 1.5-2.1 1.3C6.9 20.3 3.7 12.9 2.2 7.6c-.2-.9.4-1.8 1.3-2.1Z"
      />
    </svg>
  )
}
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2a9.9 9.9 0 0 0-8.5 15.1L2 22l5-1.4A9.9 9.9 0 1 0 12 2Zm0 1.8a8.1 8.1 0 0 1 6.8 12.6c-.3.4-.7.8-1.1 1.1A8.1 8.1 0 0 1 6 18.3l-.7-.4-.9.3.3-.9-.4-.7a8.1 8.1 0 0 1 7.7-12.7Zm-4 4.9c.2-.5.5-.5.8-.5h.7c.2 0 .5 0 .7.6.2.6.8 1.9.9 2-.1.2-.2.4-.4.6l-.3.4c-.1.1-.3.3-.1.6.2.3.9 1.5 2.1 2.4 1.4 1 1.7.8 2 .7l.7-.3c.2-.1.4 0 .5.2l1 1.6c.1.2.1.4 0 .5-.2.2-.9.7-1.8.7-1 .1-2.4-.2-4.1-1.3-2.2-1.4-3.6-3.8-3.9-4.2-.3-.4-.9-1.4-.9-2.5 0-.9.5-1.4.8-1.6Z" />
    </svg>
  )
}
function BurgerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}
function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}
function ChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" d="m6 9 6 6 6-6" />
    </svg>
  )
}
function HeadsetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" d="M4 12a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-2v-8h5" />
      <rect x="3" y="11" width="4" height="7" rx="2" />
      <rect x="17" y="11" width="4" height="7" rx="2" />
    </svg>
  )
}
function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23 7.5a4 4 0 0 0-2.8-2.8C18.4 4.3 12 4.3 12 4.3s-6.4 0-8.2.4A4 4 0 0 0 1 7.5a41 41 0 0 0 0 9c.2 1.3 1.3 2.4 2.8 2.8 1.8.4 8.2.4 8.2.4s6.4 0 8.2-.4A4 4 0 0 0 23 16.5a41 41 0 0 0 0-9ZM10 15.2V8.8l6 3.2-6 3.2Z" />
    </svg>
  )
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.2 21.7V12h3l.4-3.4h-3.4V6.4c0-1 .3-1.7 1.7-1.7h1.8V1.5c-.4-.1-1.5-.1-2.7-.1-2.7 0-4.6 1.7-4.6 4.8v2.4H7v3.4h3.4v9.7h2.8Z" />
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.3A5.7 5.7 0 1 1 6.3 14 5.7 5.7 0 0 1 12 8.3Zm0 2a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4ZM18 6.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
    </svg>
  )
}
