"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Building, Users, Lightbulb, ArrowDown } from "lucide-react"
import ProjectCard from "@/components/project-card"
import ValueCard from "@/components/value-card"
import TestimonialCard from "@/components/testimonial-card"
import { useRouter } from "next/navigation"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const router = useRouter()
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/building-exterior.jpg"
            alt="Trinova Modern Building"
            fill
            className="object-cover scale-105 transition-transform duration-[15s] ease-out hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 z-10 relative h-full flex items-center justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Badge Desarrollos Inmobiliarios */}
            <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-2 sm:mb-3 md:mb-4 lg:mb-6 opacity-0 animate-fade-in animation-delay-100">
              <div className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white/20 backdrop-blur-lg border border-white/40 rounded-full text-white text-xs sm:text-sm font-light tracking-widest uppercase shadow-xl hover:bg-white/25 transition-all duration-300">
                Desarrollos Inmobiliarios
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extralight text-white mb-6 sm:mb-8 leading-[0.85] tracking-tight opacity-0 animate-fade-in-up animation-delay-300">
              Diseñamos espacios para{" "}
              <span className="text-[#215977] font-light relative inline-block">
                vivir mejor
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#215977] to-[#062b66] transform scale-x-0 transition-transform duration-1000 delay-1500 animate-[scale-x-100_0.8s_ease-out_2s_forwards]"></div>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 mb-8 sm:mb-10 max-w-4xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up animation-delay-500">
              Desarrollos inmobiliarios de calidad en las mejores zonas de Buenos Aires, donde cada detalle está pensado
              para crear experiencias de vida excepcionales.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center opacity-0 animate-fade-in-up animation-delay-700">
              <Button
                onClick={() => {
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
                }}
                className="bg-[#215977] hover:bg-[#1a4a63] text-white px-12 sm:px-16 py-5 sm:py-6 text-base sm:text-lg font-medium rounded-full btn-primary group transition-all duration-500 hover:shadow-2xl hover:shadow-[#215977]/30 hover:scale-105"
              >
                Conocer proyectos
                <ChevronRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
              <Button
                onClick={() => {
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
                }}
                variant="outline"
                className="border-2 border-white text-white bg-white/20 hover:bg-white hover:text-[#062b66] px-12 sm:px-16 py-5 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-500 hover:shadow-2xl backdrop-blur-sm hover:scale-105"
              >
                Sobre nosotros
              </Button>
            </div>

            {/* Scroll indicator - Below buttons */}
            <div className="mt-12 sm:mt-16 opacity-0 animate-fade-in animation-delay-1000">
              <div
                className="flex flex-col items-center text-white/60 hover:text-white/90 transition-colors duration-300 cursor-pointer"
                onClick={() => {
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
                }}
              >
                <span className="text-xs sm:text-sm font-light mb-2 sm:mb-3 tracking-wider">Descubrir más</span>
                <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-section"
        className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-32 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-6 sm:mb-8">
                <div className="inline-block px-4 sm:px-6 py-2 bg-[#215977]/10 text-[#215977] text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full mb-6 sm:mb-8">
                  Nuestra Historia
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight mb-6 sm:mb-8 leading-[0.9] tracking-tight text-gray-900">
                Somos <span className="text-[#215977] font-light relative">Trinova</span>
              </h2>

              <div className="mb-8 sm:mb-10 lg:mb-12">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                  Nacimos de la unión de tres profesionales con amplia trayectoria en el rubro inmobiliario, que
                  decidieron crear una marca joven, moderna y confiable para proyectos urbanos de calidad.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 animate-slide-in-right">
              <div className="image-overlay hover-lift group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/lobby-entrance.jpg"
                    alt="Architecture Detail"
                    width={400}
                    height={600}
                    className="object-cover h-full w-full transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="image-overlay hover-lift group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/images/apartment-living.jpg"
                      alt="Interior Design"
                      width={400}
                      height={280}
                      className="object-cover h-full w-full transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="image-overlay hover-lift group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/images/terrace-outdoor.jpg"
                      alt="Blueprint"
                      width={400}
                      height={280}
                      className="object-cover h-full w-full transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 xl:mb-32 animate-fade-in-up">
            <div className="inline-block px-4 sm:px-6 py-2 bg-[#062b66]/10 text-[#062b66] text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full mb-6 sm:mb-8">
              Desarrollos
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Nuestros Proyectos
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed">
              Desarrollamos proyectos inmobiliarios en zonas estratégicas de Buenos Aires, priorizando el diseño y la
              experiencia de vida de los futuros residentes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mb-16 sm:mb-20">
            <div className="animate-slide-in-left animate-delay-200">
              <ProjectCard
                title="Aizpurúa 2326"
                location="Villa Urquiza"
                image="/images/Fachada-aizpurua.png"
                status="En construcción"
                completion="2027"
                units="1, 2, 3 y 4 ambientes"
                href="/proyectos/aizpurua-2326"
              />
            </div>
            <div className="animate-slide-in-right animate-delay-400">
              <ProjectCard
                title="Nicasio Oroño 1652"
                location="Caballito"
                image="/images/Fachada-Nicasio.png"
                status="En construcción"
                completion="2027"
                units="1, 2 y 3 ambientes"
                href="/proyectos/nicasio-orono-1652"
              />
            </div>
            <div className="animate-slide-in-right animate-delay-600">
              <ProjectCard
                title="Constituyentes 5151"
                location="Villa Urquiza"
                image="/images/constituyentes-5151-exterior.jpg"
                status="Finalizado"
                completion="2024"
                units="1 y 3 ambientes"
                href="/proyectos/constituyentes-5151"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 xl:mb-32 animate-fade-in-up">
            <div className="inline-block px-4 sm:px-6 py-2 bg-[#215977]/10 text-[#215977] text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full mb-6 sm:mb-8">
              Filosofía
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Nuestros Valores
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed">
              Estos principios guían cada decisión que tomamos y cada proyecto que desarrollamos.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="animate-fade-in-up animate-delay-200">
              <ValueCard
                icon={<Lightbulb className="h-12 w-12 sm:h-16 sm:w-16 text-[#215977]" />}
                title="Innovación"
                description="Buscamos constantemente nuevas formas de mejorar nuestros desarrollos y procesos, incorporando las últimas tendencias en diseño y tecnología."
              />
            </div>
            <div className="animate-fade-in-up animate-delay-400">
              <ValueCard
                icon={<Building className="h-12 w-12 sm:h-16 sm:w-16 text-[#215977]" />}
                title="Calidad"
                description="Utilizamos los mejores materiales y técnicas constructivas en cada uno de nuestros proyectos, garantizando durabilidad y excelencia."
              />
            </div>
            <div className="animate-fade-in-up animate-delay-600">
              <ValueCard
                icon={<Users className="h-12 w-12 sm:h-16 sm:w-16 text-[#215977]" />}
                title="Confianza"
                description="Construimos relaciones duraderas basadas en la transparencia, el cumplimiento y el compromiso con nuestros clientes."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-br from-[#062b66] via-[#0a3575] to-[#215977] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 xl:mb-32 animate-fade-in-up">
            <div className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full mb-6 sm:mb-8">
              Testimonios
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight mb-6 sm:mb-8 tracking-tight">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-5xl mx-auto font-light leading-relaxed">
              La satisfacción de quienes confían en nosotros es nuestro mayor logro y motivación.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="animate-fade-in-up animate-delay-200">
              <TestimonialCard
                quote="Invertir con Trinova fue una de las mejores decisiones que tomé. El proceso fue transparente y el resultado superó mis expectativas."
                author="Martín"
                role="Propietario en Villa Urquiza"
              />
            </div>
            <div className="animate-fade-in-up animate-delay-400">
              <TestimonialCard
                quote="La calidad constructiva y la atención al detalle en cada espacio demuestran el compromiso de Trinova con la excelencia."
                author="Carolina"
                role="Inversora en Villa Urquiza"
              />
            </div>
            <div className="animate-fade-in-up animate-delay-600">
              <TestimonialCard
                quote="Desde el primer contacto hasta la entrega, el equipo de Trinova mostró un profesionalismo y dedicación excepcionales."
                author="Roberto"
                role="Inversor en Villa Urquiza"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-b from-white to-gray-50/50 relative"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-32 items-start">
            <div className="animate-slide-in-left">
              <div className="mb-6 sm:mb-8">
                <div className="inline-block px-4 sm:px-6 py-2 bg-[#215977]/10 text-[#215977] text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full mb-6 sm:mb-8">
                  Contacto
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight mb-8 sm:mb-10 lg:mb-12 tracking-tight text-gray-900">
                Contactanos
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 sm:mb-14 lg:mb-16 font-light leading-relaxed">
                Estamos para responder todas tus consultas y asesorarte en tu próxima inversión inmobiliaria.
              </p>

              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="flex items-start group cursor-pointer p-4 sm:p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#215977] mr-4 sm:mr-6 mt-2 transition-all duration-300 group-hover:scale-110 group-hover:text-[#062b66]" />
                  <div>
                    <h3 className="font-medium text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Oficina Central</h3>
                    <p className="text-gray-600 font-light text-base sm:text-lg">Nicasio Oroño 1683, C.A.B.A.</p>
                  </div>
                </div>

                <div className="flex items-start group cursor-pointer p-4 sm:p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 sm:w-8 sm:h-8 text-[#215977] mr-4 sm:mr-6 mt-2 transition-all duration-300 group-hover:scale-110 group-hover:text-[#062b66]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">Teléfono</h3>
                    <p className="text-gray-600 font-light text-base sm:text-lg">+54 9 11 4440 3520</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactSection/>
          </div>
        </div>
      </section>
    </main>
  )
}
