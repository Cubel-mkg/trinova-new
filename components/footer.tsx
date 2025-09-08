"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleFooterNavClick = (target: "about" | "contact") => {
    if (target === "about") {
      if (pathname === "/") {
        const aboutSection = document.getElementById("about-section")
        if (aboutSection) {
          const headerOffset = 120
          const elementPosition = aboutSection.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      } else {
        window.scrollTo(0, 0)
        router.push("/#about-section")
      }
    } else if (target === "contact") {
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
        }
      } else {
        window.scrollTo(0, 0)
        router.push("/contacto")
      }
    }
  }

  return (
    <footer className="bg-[#062b66] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#062b66] via-[#0a3575] to-[#215977] opacity-95"></div>

      <div className="container mx-auto px-8 lg:px-16 py-24 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16">
          <div>
            <Image
              src="/images/trinova-logo.png"
              alt="Trinova Logo"
              width={240}
              height={66}
              className="mb-12 brightness-0 invert transition-transform duration-300 hover:scale-105"
            />
            <p className="text-white/70 mb-12 font-light leading-relaxed text-lg">
              Desarrolladora inmobiliaria enfocada en proyectos residenciales en zonas estratégicas de Buenos Aires.
            </p>
            <div className="flex space-x-8">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  className="text-white/70 hover:text-[#215977] transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-12">Proyectos</h3>
            <ul className="space-y-6 text-white/70 font-light text-lg">
              {[
                { name: "Aizpurúa 2326", href: "/proyectos/aizpurua-2326" },
                { name: "Nicasio Oroño 1652", href: "/proyectos/nicasio-orono-1652" },
                { name: "Constituyentes 5151", href: "/proyectos/constituyentes-5151" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#215977] transition-colors duration-300 underline-animate"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-12">Empresa</h3>
            <ul className="space-y-6 text-white/70 font-light text-lg">
              <li key="Sobre nosotros">
                <button
                  onClick={() => handleFooterNavClick("about")}
                  className="hover:text-[#215977] transition-colors duration-300 underline-animate bg-transparent border-none text-left w-full"
                >
                  Sobre nosotros
                </button>
              </li>
              <li key="Contacto">
                <button
                  onClick={() => handleFooterNavClick("contact")}
                  className="hover:text-[#215977] transition-colors duration-300 underline-animate bg-transparent border-none text-left w-full"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-12">Contacto</h3>
            <address className="not-italic text-white/70 space-y-6 font-light leading-relaxed text-lg">
              <p>Nicasio Oroño 1683</p>
              <p>C.A.B.A., Argentina</p>
              <p className="hover:text-[#215977] transition-colors duration-300 cursor-pointer">+54 9 11 4440 3520</p>
              <p className="hover:text-[#215977] transition-colors duration-300 cursor-pointer">{""}</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-12 text-center text-white/50 text-base font-light">
          <p>&copy; {new Date().getFullYear()} Trinova. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
