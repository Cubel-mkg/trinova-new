"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Home,
  Car,
  Shield,
  Wifi,
  Users,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Check,
  ArrowRight,
  Calendar,
  X,
  Play,
  Building,
  Download,
} from "lucide-react"
import CaballitoInteractiveMap from "@/components/caballito-interactive-map"
import ContactSection from "@/components/contact-section"

export default function NicasioOronoPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isNavSticky, setIsNavSticky] = useState(false)
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const unitsRef = useRef(null)
  const amenitiesRef = useRef(null)
  const locationRef = useRef(null)
  const detailsRef = useRef(null)
  const contactRef = useRef(null)

  // Gallery images
  const galleryImages = [
    {
      src: "/images/Fachada-Nicasio.png",
      alt: "Fachada del edificio Nicasio Oroño 1652",
      caption: "Fachada moderna en el corazón de Caballito",
    },
    {
      src: "/images/Hero-nicasio.png",
      alt: "Living de departamento",
      caption: "Amplios espacios con excelente iluminación natural",
    },
    {
      src: "/images/INTERIOR-NICASIO.png",
      alt: "Comedor integrado",
      caption: "Ambientes integrados con acabados premium",
    },
    {
      src: "/images/Kitchen-nicasio.png",
      alt: "Cocina moderna",
      caption: "Cocinas equipadas con electrodomésticos de primera línea",
    },
    {
      src: "/images/HALL-NICASIO.png",
      alt: "Hall de entrada",
      caption: "Hall de entrada con diseño contemporáneo",
    },
    {
      src: "/images/balcon-nicasio.png",
      alt: "Terraza común",
      caption: "Espacios comunes para el disfrute de los residentes",
    },
  ]

  // Unit types data
  const unitTypes = [
    {
      id: "1amb_frente_101-501",
      title: "1 Ambiente",
      subtitle: "1 ambiente al frente (Piso 1º al 5º)",
      units: "UF: 101, 201, 301, 401, 501",
      covered: "44,90 m²",
      semicovered: "5,10 m²",
      uncovered: null,
      total: "50,00 m²",
      image: "/images/finales_1 ambiente PISO 2 101,201.jpg",
      price: "Consultar",
      available: true,
      badge: null,
    },
    {
      id: "1amb_frente_102-502",
      title: "1 Ambiente",
      subtitle: "1 ambiente al frente (Piso 1º al 5º)",
      units: "UF: 102, 202, 302, 402, 502",
      covered: "38,50 m²",
      semicovered: "5,00 m²",
      uncovered: null,
      total: "43,50 m²",
      image: "/images/finales_1 ambiente PISO 1 102,202.jpg",
      price: "Consultar",
      available: true,
      badge: null,
    },
    {
      id: "2amb_frente_601",
      title: "2 Ambientes",
      subtitle: "2 ambientes al frente (Piso 6º)",
      units: "UF: 601",
      covered: "67,65 m²",
      semicovered: null,
      uncovered: "25,85 m²",
      total: "93,50 m²",
      image: "/images/finales_2 AMBIENTES PISO 6 601.jpg",
      price: "Consultar",
      available: true,
      badge: null,
    },
    {
      id: "2amb_contrafrente_701",
      title: "2 Ambientes",
      subtitle: "2 ambientes al frente (Piso 7º)",
      units: "UF: 701",
      covered: "51,90 m²",
      semicovered: null,
      uncovered: "15,70 m²",
      total: "67,60 m²",
      image: "/images/finales_2 AMBIENTES PISO 7 2 701.jpg",
      price: "Consultar",
      available: true,
      badge: null,
    },
    {
      id: "2amb_frente_702",
      title: "2 Ambientes",
      subtitle: "2 ambientes al contrafrente (Piso 7º)",
      units: "UF: 702",
      covered: "71,75 m²",
      semicovered: null,
      uncovered: "23,65 m²",
      total: "95,40 m²",
      image: "/images/finales_2 AMBIENTES - PISO 7 702.jpg",
      price: "Consultar",
      available: true,
      badge: null,
    },
    {
      id: "3amb_contrafrente_103",
      title: "3 Ambientes",
      subtitle: "3 ambientes al contrafrente (Piso 1º)",
      units: "UF: 103",
      covered: "86,65 m²",
      semicovered: "8,75 m²",
      uncovered: "7,65 m²",
      total: "103,05 m²",
      image: "/images/finales_3 AMBIENTES PISO 1 103.jpg",
      price: "Consultar",
      available: true,
      badge: null,
    },
    {
      id: "3amb_contrafrente_203-503",
      title: "3 Ambientes",
      subtitle: "3 ambientes al contrafrente (Piso 2º al 5º)",
      units: "UF: 203, 303, 403, 503",
      covered: "86,65 m²",
      semicovered: "8,75 m²",
      uncovered: null,
      total: "95,40 m²",
      image: "/images/finales_3 AMBIENTES PISO 6 202,203.jpg",
      price: "Consultar",
      available: true,
      badge: null,
    },
    {
      id: "3amb_contrafrente_602",
      title: "3 Ambientes",
      subtitle: "3 ambientes al contrafrente (Piso 6º)",
      units: "UF: 602",
      covered: "86,65 m²",
      semicovered: "8,75 m²",
      uncovered: null,
      total: "95,40 m²",
      image: "/images/finales_3 AMBIENTES PISO 6 202,203.jpg",
      price: "Consultar",
      available: true,
      badge: null,
    },
  ]

  // Amenities data
  const amenities = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Seguridad 24hs",
      description: "Vigilancia permanente y sistema de cámaras para tu tranquilidad",
    },
    {
      icon: <Car className="h-10 w-10" />,
      title: "Estacionamiento",
      description: "Cocheras cubiertas disponibles con acceso directo",
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Hall de entrada",
      description: "Amplio lobby con diseño contemporáneo y recepción",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Parrilla comunitaria",
      description: "Espacio equipado para reuniones y eventos sociales",
    },
    {
      icon: <Wifi className="h-10 w-10" />,
      title: "Laundry",
      description: "Área de lavado compartida con equipamiento moderno",
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Terraza verde",
      description: "Solarium con sillones y espacios verdes para relajarse",
    },
  ]

  // Building features
  const buildingFeatures = [
    "Fachada con revestimiento tipo tarquini",
    "Estructura de hormigón armado de alta resistencia",
    "Iluminación LED en espacios comunes",
    "Ascensores de acero inoxidable primera línea",
    "Preinstalación de TV y portero eléctrico",
    "Espacios guardacoches disponibles (Cubiertos)",
    "Sistema de emergencia y seguridad contra incendios",
    "Bicicleteo en planta baja",
  ]

  // Unit features
  const unitFeatures = [
    "Pisos de porcelanato símil madera de primera calidad",
    "Cocina con horno eléctrico de primera marca",
    "Mesadas de granito y pileta de acero inoxidable",
    "Baños con revestimientos de porcelanato",
    "Preinstalación para aire acondicionado individual",
    "Aberturas de aluminio con DVH (doble vidrio hermético)",
    "Placares en melamina con frente completo",
    "Puertas interiores con marco de chapa y hoja placa",
  ]

  // FAQ data
  const faqItems = [
    {
      question: "¿Cuál es la fecha estimada de finalización de obra?",
      answer:
        "La fecha estimada de finalización de la obra es en diciembre de 2027. El cronograma contempla todas las etapas de construcción y terminaciones de calidad.",
    },
    {
      question: "¿Qué formas de pago y financiación están disponibles?",
      answer:
        "Ofrecemos diversas opciones de pago, desde contado con importantes descuentos hasta planes de financiación en cuotas durante la obra. También trabajamos con principales entidades bancarias para créditos hipotecarios.",
    },
    {
      question: "¿Las unidades se entregan con cocina equipada?",
      answer:
        "Sí, todas las unidades se entregan con cocina completa que incluye muebles bajo y sobre mesada, cocina y horno eléctricos de primera marca, y mesada de granito natural.",
    },
    {
      question: "¿El edificio cuenta con cocheras disponibles?",
      answer:
        "Sí, el edificio cuenta con cocheras cubiertas disponibles que se comercializan por separado. Consultá disponibilidad y precios con nuestros asesores.",
    },
  ]

  // Scroll handling for section navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Check if nav should be sticky
      if (scrollPosition > window.innerHeight - 100) {
        setIsNavSticky(true)
      } else {
        setIsNavSticky(false)
      }

      // Determine active section
      const refs = [
        { ref: overviewRef, id: "overview" },
        { ref: unitsRef, id: "units" },
        { ref: amenitiesRef, id: "amenities" },
        { ref: locationRef, id: "location" },
        { ref: detailsRef, id: "details" },
        { ref: contactRef, id: "contact" },
      ]

      for (let i = refs.length - 1; i >= 0; i--) {
        const { ref, id } = refs[i]
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionRef) => {
    const offset = isNavSticky ? 100 : 80
    const sectionTop = sectionRef.current.offsetTop - offset
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    })
  }

  // Handle gallery navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ minHeight: "700px" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero-nicasio.png"
            alt="Nicasio Oroño 1652"
            fill
            className="object-cover scale-105 transition-transform duration-[15s] ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#062b66]/80 via-black/60 to-[#215977]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#062b66]/20 via-transparent to-[#215977]/20 opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 z-10 relative pt-16 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-6 sm:mb-8 mt-4 sm:mt-8 opacity-0 animate-fade-in animation-delay-100">
              <div className="inline-flex items-center px-10 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium tracking-wider uppercase shadow-md">
                <div className="w-2 h-2 bg-[#215977] rounded-full mr-3 animate-pulse"></div>
                <span>Caballito | Proyecto 2027</span>
                <div className="w-2 h-2 bg-[#215977] rounded-full ml-3 animate-pulse animation-delay-500"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white mb-6 sm:mb-8 leading-[0.85] sm:leading-[0.9] tracking-tight opacity-0 animate-fade-in-up animation-delay-300">
                  Vivir en el corazón de Caballito
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 mb-8 sm:mb-10 lg:mb-12 max-w-xl lg:max-w-2xl font-light leading-relaxed opacity-0 animate-fade-in-up animation-delay-500">
                  Un estilo de vida equilibrado, donde cada día se vive con confort, practicidad y un toque de
                  inspiración barrial. Ubicado en Nicasio Oroño 1652, en el centro de Caballito, rodeado de colegios,
                  comercios, estaciones de metrobus, subte y múltiples accesos rápidos.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center sm:justify-start opacity-0 animate-fade-in-up animation-delay-700">
                  <Button
                    onClick={() => scrollToSection(contactRef)}
                    className="bg-[#215977] hover:bg-[#1a4a63] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-medium rounded-full btn-primary group transition-all duration-500 hover:shadow-2xl hover:shadow-[#215977]/30 hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[240px] lg:min-w-[280px]"
                  >
                    <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Consultar disponibilidad</span>
                  </Button>

                  <Button
                    onClick={() => {
                      // Create a temporary link to download the brochure
                      const link = document.createElement("a")
                      link.href = "/brochures/Brochure-comercial-Nicasio-Oroño-1652-new.pdf"
                      link.download = "Brochure-comercial-Nicasio-Oroño-1652-new"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                    className="bg-white hover:bg-gray-50 text-[#215977] border-2 border-[#215977] hover:border-[#1a4a63] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-medium rounded-full group transition-all duration-500 hover:shadow-2xl hover:shadow-[#215977]/20 hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[240px] lg:min-w-[280px]"
                  >
                    <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Descargar Brochure</span>
                  </Button>
                </div>
              </div>

              <div className="hidden xl:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-[#215977]/20 transition-all duration-500 hover:scale-[1.02] opacity-0 animate-fade-in-up animation-delay-800">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#215977] flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-medium">Nicasio Oroño 1652</h3>
                      <p className="text-white/70">Caballito, Buenos Aires</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-white/60 text-sm mb-1">Entrega estimada</p>
                      <p className="text-white text-lg font-medium">Diciembre 2027</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-white/60 text-sm mb-1">Tipologías</p>
                      <p className="text-white text-lg font-medium">1, 2 y 3 amb.</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => setShowGalleryModal(true)}
                    className="w-full bg-white/20 hover:bg-white text-white hover:text-[#062b66] py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Ver galería</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1000 cursor-pointer"
          onClick={() => scrollToSection(overviewRef)}
        >
          <div className="flex flex-col items-center text-white/60 hover:text-white/90 transition-colors duration-300">
            <span className="text-sm font-light mb-3 tracking-wider">Descubrir más</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        ref={overviewRef}
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <div className="inline-block px-6 py-2 bg-[#215977]/10 text-[#215977] text-sm font-medium tracking-wider uppercase rounded-full mb-6">
                  El proyecto
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 leading-tight text-gray-900">
                  Edificio de diseño moderno con detalles de categoría
                </h2>
              </div>

              <div className="space-y-6 mb-10">
                <p className="text-lg text-gray-600 leading-relaxed">
                  El desarrollo presenta departamentos de 1, 2 y 3 ambientes con balcones aterrazados y terrazas
                  privadas, integrando arquitectura contemporánea con la esencia barrial que caracteriza Caballito.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nicasio Oroño 1652 combina diseño moderno, calidad constructiva y ubicación estratégica en un barrio
                  que ofrece todo lo necesario para una vida urbana plena y conectada.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Características</h3>
                  <p className="text-gray-600">
                    Un edificio moderno que presenta departamentos en diversas tipologías de 1, 2 y 3 ambientes con
                    balcón aterrazado.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Ubicación</h3>
                  <p className="text-gray-600">
                    Estratégicamente ubicado en Caballito, con excelente conectividad y acceso a todos los servicios.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#215977]/10 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#062b66]/10 rounded-full z-0"></div>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#215977]/20 transition-all duration-500 hover:scale-[1.02]">
                  <Image
                    src="/images/Fachada-Nicasio.png"
                    alt="Nicasio Oroño 1652 Fachada"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <div>
                      <p className="text-white/80 text-sm mb-2">Proyecto</p>
                      <h3 className="text-white text-2xl font-medium">Nicasio Oroño 1652</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section ref={unitsRef} className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#062b66]/10 text-[#062b66] text-sm font-medium tracking-wider uppercase rounded-full mb-6">
              Unidades
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Tipologías disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Diseñado para solteros, parejas, familias pequeñas e ideal para inversión.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {unitTypes.map((unit) => (
              <div
                key={unit.id}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={unit.image || "/placeholder.svg"}
                      alt={unit.title}
                      fill
                      className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 transform-gpu"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {unit.badge && (
                    <div
                      className={`absolute top-4 right-4 px-4 py-1 text-sm font-medium tracking-wide rounded-full shadow-lg ${
                        unit.badge === "Últimos disponibles"
                          ? "bg-orange-500 text-white animate-pulse"
                          : "bg-[#215977] text-white"
                      }`}
                    >
                      {unit.badge}
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-2">{unit.title}</h3>
                      <p className="text-[#215977] font-medium mb-1">{unit.subtitle}</p>
                      <p className="text-gray-500 text-sm font-mono">{unit.units}</p>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 rounded-xl">
                      <p className="text-sm text-gray-500">Precio</p>
                      <p className="font-medium text-gray-900">{unit.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Cubierta</p>
                      <p className="font-medium text-gray-900">{unit.covered}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Semicub.</p>
                      <p className="font-medium text-gray-900">{unit.semicovered || "-"}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Descub.</p>
                      <p className="font-medium text-gray-900">{unit.uncovered || "-"}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">Total</p>
                      <p className="font-medium text-[#215977]">{unit.total}</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => scrollToSection(contactRef)}
                    className="w-full bg-[#215977] hover:bg-[#1a4a63] text-white py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Consultar disponibilidad</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">
              ¿Necesitás más información sobre las unidades disponibles y formas de pago?
            </p>
            <Button
              onClick={() => scrollToSection(contactRef)}
              className="bg-[#062b66] hover:bg-[#041d47] text-white px-10 py-3 rounded-full transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
            >
              <span>Contactar a un asesor</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section
        ref={amenitiesRef}
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#215977]/10 text-[#215977] text-sm font-medium tracking-wider uppercase rounded-full mb-6">
              Amenities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Espacios comunes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              El emprendimiento cuenta con amenities completos: solárium, terraza verde con sillones lounge, parrilla
              comunitaria, laundry equipado y bicicleteo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-500 group"
              >
                <div className="mb-6 text-[#215977] bg-[#215977]/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{amenity.title}</h3>
                <p className="text-gray-600 font-light">{amenity.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/balcon-nicasio.png"
                alt="Terraza común"
                width={1200}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <h3 className="text-3xl font-light text-white mb-4">Retiro verde con parrilla</h3>
                  <p className="text-white/80 max-w-2xl mb-8">
                    Un espacio diseñado para el relax y el encuentro, con áreas verdes, solarium y parrilla equipada
                    para disfrutar con amigos y familia.
                  </p>
                  <Button
                    onClick={() => setShowGalleryModal(true)}
                    className="bg-white/20 hover:bg-white text-white hover:text-[#062b66] px-8 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center gap-2 w-auto"
                  >
                    <Play className="h-5 w-5" />
                    <span>Ver galería completa</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section ref={locationRef} className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#062b66]/10 text-[#062b66] text-sm font-medium tracking-wider uppercase rounded-full mb-6">
              Ubicación
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Barrio Caballito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Ubicado en Nicasio Oroño 1652, Caballito, este proyecto se encuentra en una ubicación estratégica, rodeado
              de colegios, comercios, estaciones de metrobus, subte y múltiples accesos rápidos que conectan con toda la
              ciudad.
            </p>
          </div>

          {/* Interactive Map Component */}
          <CaballitoInteractiveMap />
        </div>
      </section>

      {/* Progress Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#215977]/10 text-[#215977] text-sm font-medium tracking-wider uppercase rounded-full mb-6">
              Progreso de Obra
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Cronograma del Proyecto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Seguí el avance de la construcción de Nicasio Oroño 1652 con nuestro cronograma actualizado.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">Progreso General</span>
              <span className="text-sm font-medium text-[#215977]">5% Completado</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#215977] to-[#062b66] h-3 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: "5%" }}
              >
                <div className="absolute right-0 top-0 w-3 h-3 bg-[#215977] rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block"></div>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#215977] to-[#062b66] hidden lg:block transition-all duration-1000 ease-out"
              style={{ height: "5%" }}
            ></div>

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {[
                {
                  id: 1,
                  title: "Adquisición de Terreno y Confección de Proyecto",
                  description: "Compra del terreno y desarrollo del proyecto arquitectónico",
                  status: "completed",
                  isActive: false,
                },
                {
                  id: 2,
                  title: "Inicio de Obra",
                  description: "Excavación y fundaciones",
                  status: "in-progress",
                  isActive: true,
                },
                {
                  id: 3,
                  title: "Estructura",
                  description: "Construcción de estructura de hormigón armado",
                  status: "pending",
                  isActive: false,
                },
                {
                  id: 4,
                  title: "Mampostería e Instalaciones",
                  description: "Levantamiento de paredes y sistemas eléctricos/sanitarios",
                  status: "pending",
                  isActive: false,
                },
                {
                  id: 5,
                  title: "Terminaciones",
                  description: "Revestimientos, pisos y acabados interiores",
                  status: "pending",
                  isActive: false,
                },
                {
                  id: 6,
                  title: "Entrega",
                  description: "Finalización completa y entrega de unidades",
                  status: "pending",
                  isActive: false,
                },
              ].map((milestone, index) => (
                <div
                  key={milestone.id}
                  className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 ${
                        milestone.status === "completed"
                          ? "bg-[#215977] border-[#215977]"
                          : milestone.status === "in-progress"
                            ? "bg-white border-[#215977] animate-pulse"
                            : "bg-white border-gray-300"
                      } shadow-lg`}
                    >
                      {milestone.isActive && (
                        <div className="absolute inset-0 rounded-full bg-[#215977] animate-ping opacity-75"></div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div
                      className={`p-8 bg-white rounded-3xl shadow-lg border-2 transition-all duration-500 hover:shadow-xl ${
                        milestone.status === "completed"
                          ? "border-[#215977]/30 bg-[#215977]/5"
                          : milestone.status === "in-progress"
                            ? "border-[#215977] bg-[#215977]/10"
                            : "border-gray-200 hover:border-[#215977]/30"
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-3 h-3 rounded-full mr-3 lg:hidden ${
                            milestone.status === "completed"
                              ? "bg-[#215977]"
                              : milestone.status === "in-progress"
                                ? "bg-[#215977] animate-pulse"
                                : "bg-gray-300"
                          }`}
                        ></div>
                        {milestone.status === "completed" && <Check className="h-5 w-5 text-[#215977] ml-auto" />}
                        {milestone.isActive && (
                          <div className="ml-auto">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-[#215977] rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-[#215977] rounded-full animate-bounce animation-delay-100"></div>
                              <div className="w-2 h-2 bg-[#215977] rounded-full animate-bounce animation-delay-200"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-light text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status Card */}
          <div className="mt-20 bg-gradient-to-r from-[#215977] to-[#062b66] rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-light mb-4">Estado Actual</h3>
                <p className="text-white/80 leading-relaxed">
                  El proyecto se encuentra en etapa inicial de obra, con un avance del 5% según cronograma.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light mb-2">5%</div>
                <div className="text-white/80">Completado</div>
              </div>
              <div className="text-center lg:text-right">
                <Button
                  onClick={() => scrollToSection(contactRef)}
                  className="bg-white/20 hover:bg-white text-white hover:text-[#062b66] px-8 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  Solicitar Actualización
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section
        ref={detailsRef}
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#215977]/10 text-[#215977] text-sm font-medium tracking-wider uppercase rounded-full mb-6">
              Calidad
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Detalles constructivos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              El proyecto y el equipamiento cuentan con detalles de categoría, materiales nobles y tecnología de
              vanguardia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#062b66]/10 rounded-xl flex items-center justify-center mr-4">
                  <Building className="h-6 w-6 text-[#062b66]" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">En el edificio</h3>
              </div>

              <ul className="space-y-4">
                {buildingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#215977] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#215977]/10 rounded-xl flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-[#215977]" />
                </div>
                <h3 className="text-2xl font-light text-gray-900">En las unidades</h3>
              </div>

              <ul className="space-y-4">
                {unitFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#215977] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light mb-6 text-gray-900">Preguntas frecuentes</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Respondemos las consultas más comunes sobre el proyecto Nicasio Oroño 1652
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-lg font-medium text-gray-900 mb-4">{item.question}</h4>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-[#062b66] via-[#0a3575] to-[#215977] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div>
              <div className="mb-8">
                <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wider uppercase rounded-full mb-6">
                  Contacto
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight">
                  Consultá disponibilidad
                </h2>
                <p className="text-xl text-white/80 max-w-xl font-light leading-relaxed">
                  Nuestro equipo está listo para asesorarte y responder todas tus consultas sobre Nicasio Oroño 1652.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Phone className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Teléfono / WhatsApp</h3>
                  <p className="text-white/80 mb-4">+54 9 11 4440 3520</p>
                  <a
                    href="https://wa.me/5491144403520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <span>Enviar mensaje</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Sala de ventas</h3>
                  <p className="text-white/80 mb-4">Nicasio Oroño 1683, C.A.B.A.</p>
                  <a
                    href="https://maps.google.com/?q=Nicasio Oroño 1683, C.A.B.A., Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <span>Ver ubicación</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-xl font-medium">Email</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Envianos un correo electrónico y te responderemos a la brevedad con toda la información que necesites.
                </p>
                <a
                  href="mailto:info@trinova.com.ar"
                  className="text-white font-medium hover:text-[#215977] transition-colors duration-300"
                >
                  info@trinova.com.ar
                </a>
              </div>
            </div>

            <ContactSection/>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setShowGalleryModal(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300 z-10"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="relative h-[80vh]">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">{galleryImages[currentImageIndex].caption}</p>
                <p className="text-white/60 text-sm">
                  {currentImageIndex + 1} / {galleryImages.length}
                </p>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"
              >
                <ChevronRight className="h-6 w-6 text-white transform rotate-180" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 relative h-20 w-32 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index ? "border-[#215977] opacity-100" : "border-transparent opacity-60"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
