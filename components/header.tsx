"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }

    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        closeMobileMenu()
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [mobileMenuOpen])

  const router = useRouter()
  const pathname = usePathname()

  const openMobileMenu = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setMobileMenuOpen(true)
    setTimeout(() => setIsAnimating(false), 400)
  }

  const closeMobileMenu = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setMobileMenuOpen(false)
    setTimeout(() => setIsAnimating(false), 400)
  }

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }

  const handleNavClick = (item: string) => {
    if (item === "Proyectos" && pathname === "/") {
      const projectsSection = document.getElementById("projects-section")
      if (projectsSection) {
        const headerOffset = 120
        const elementPosition = projectsSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        projectsSection.style.opacity = "0.7"
        projectsSection.style.transition = "opacity 0.4s ease-out"
        setTimeout(() => {
          projectsSection.style.opacity = "1"
        }, 400)
      }
    } else if (item === "Nosotros" && pathname === "/") {
      const aboutSection = document.getElementById("about-section")
      if (aboutSection) {
        const headerOffset = 120
        const elementPosition = aboutSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        aboutSection.style.opacity = "0.7"
        aboutSection.style.transition = "opacity 0.4s ease-out"
        setTimeout(() => {
          aboutSection.style.opacity = "1"
        }, 400)
      }
    } else if (item === "Proyectos") {
      // Scroll to top before navigation
      window.scrollTo(0, 0)
      router.push("/#projects-section")
    } else if (item === "Nosotros") {
      // Scroll to top before navigation
      window.scrollTo(0, 0)
      router.push("/#about-section")
    } else if (item === "Contacto") {
      if (pathname === "/") {
        const contactSection = document.getElementById("contact-section")
        if (contactSection) {
          const headerOffset = 120
          const elementPosition = contactSection.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })

          contactSection.style.opacity = "0.7"
          contactSection.style.transition = "opacity 0.4s ease-out"
          setTimeout(() => {
            contactSection.style.opacity = "1"
          }, 400)
        }
      } else {
        // Scroll to top before navigation
        window.scrollTo(0, 0)
        router.push("/#contact-section")
      }
    }
  }

  const handleMobileNavClick = (item: string) => {
    closeMobileMenu()
    setTimeout(() => {
      handleNavClick(item)
    }, 200)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="flex items-center justify-between py-6 sm:py-8">
            <Link href="/" className="z-10 transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/trinova-logo.png"
                alt="Trinova Logo"
                width={200}
                height={55}
                className="transition-opacity duration-300 hover:opacity-80 w-auto h-12 sm:h-14"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-12 lg:space-x-16">
              {["Proyectos", "Nosotros", "Contacto"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-800 hover:text-[#215977] transition-all duration-300 font-light text-lg relative group underline-animate cursor-pointer bg-transparent border-none"
                >
                  {item}
                </button>
              ))}
            </nav>

            <button
              ref={buttonRef}
              className={`md:hidden z-[60] relative p-3 rounded-lg transition-all duration-300 ${
                mobileMenuOpen ? "text-white bg-white/10" : "text-gray-800 hover:text-[#215977] hover:bg-gray-100/50"
              }`}
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              disabled={isAnimating}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`h-6 w-6 absolute inset-0 transition-all duration-300 transform ${
                    mobileMenuOpen ? "rotate-45 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
                  }`}
                />
                <X
                  className={`h-6 w-6 absolute inset-0 transition-all duration-300 transform ${
                    mobileMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-45 opacity-0 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay and Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[55] md:hidden">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={closeMobileMenu}
          />

          {/* Menu Panel */}
          <div
            ref={menuRef}
            className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Menu Header */}
            <div className="h-20 sm:h-24 bg-[#062b66] flex items-center justify-between px-6">
              <Image
                src="/images/trinova-logo.png"
                alt="Trinova Logo"
                width={160}
                height={44}
                className="brightness-0 invert"
              />
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-[calc(100%-5rem)] sm:h-[calc(100%-6rem)]">
              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  {["Proyectos", "Nosotros", "Contacto"].map((item, index) => (
                    <div
                      key={item}
                      className={`transform transition-all duration-300 ease-out ${
                        mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: mobileMenuOpen ? `${(index + 1) * 100}ms` : "0ms",
                      }}
                    >
                      <button
                        onClick={() => handleMobileNavClick(item)}
                        className="w-full text-left px-4 py-4 text-gray-800 hover:text-[#215977] hover:bg-gray-50 rounded-lg transition-all duration-200 font-light text-xl border-none bg-transparent group"
                      >
                        <span className="flex items-center justify-between">
                          {item}
                          <svg
                            className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </nav>

              {/* Menu Footer */}
              <div
                className={`px-6 py-6 bg-gray-50 border-t border-gray-100 transform transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? "400ms" : "0ms",
                }}
              >
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    Desarrolladora inmobiliaria enfocada en proyectos residenciales de calidad.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:info@trinova.com.ar"
                      className="block text-[#215977] hover:text-[#062b66] text-sm font-medium transition-colors duration-200"
                    >
                      info@trinova.com.ar
                    </a>
                    <a
                      href="tel:+541112345678"
                      className="block text-[#215977] hover:text-[#062b66] text-sm font-medium transition-colors duration-200"
                    >
                      +54 11 1234-5678
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
