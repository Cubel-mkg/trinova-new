"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Home,
  Car,
  Shield,
  Users,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  Play,
  Building,
  Download,
} from "lucide-react"
import InteractiveMap from "@/components/interactive-map"
import ContactSection from "@/components/contact-section"
import ConstituyentesInteractiveMap from "@/components/constituyentes-interactive-map"

export default function Constituyentes5151Page() {
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
      type: "image",
      src: "/images/constituyentes-5151-hero.png",
      alt: "Fachada del edificio Constituyentes 5151",
      caption: "Fachada moderna con amplios balcones",
    },
    {
      type: "image",
      src: "/images/Obra-Constituyentes-cocina.png",
      alt: "Monoambiente",
      caption: "Monoambiente",
    },
    {
      type: "image",
      src: "/images/Obra-Constituyentes-31.png",
      alt: "Monoambiente Divisible",
      caption: "Monoambiente Divisible",
    },
    {
      type: "image",
      src: "/images/Obra-Constituyentes-40.png",
      alt: "Monoambiente Divisible con patio",
      caption: "Monoambiente Divisible con patio",
    },
    {
      type: "image",
      src: "/images/three-bedroom-floorplan.png",
      alt: "Tres Ambientes",
      caption: "Tres Ambientes",
    },
    {
      type: "image",
      src: "/images/Constituyentes-1.png",
      alt: "Balcon",
      caption: "Balcon",
    },
    {
      type: "image",
      src: "/images/Constituyentes-2.png",
      alt: "Cuarto",
      caption: "Cuarto",
    },
    {
      type: "image",
      src: "/images/Constituyentes-3.png",
      alt: "Baño",
      caption: "Baño",
    },
    {
      type: "image",
      src: "/images/Constituyentes-4.png",
      alt: "Hall",
      caption: "Hall",
    },
    {
      type: "image",
      src: "/images/Constituyentes-5.png",
      alt: "Hall",
      caption: "Hall",
    },
    {
      type: "video",
      platform: "vimeo",
      url: "https://player.vimeo.com/video/1120486409?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      alt: "Video Constituyentes",
      caption: "Video Constituyentes"
    },
  ]

  // Unit types data
  const unitTypes = [
    {
      id: "type1",
      title: "Monoambiente",
      subtitle: "Unidades funcionales y luminosas",
      units: "Superficie cubierta: 29,8 – 34,4 m²",
      covered: "29,8 – 34,4 m²",
      semicovered: "4,5 – 7,4 m²",
      uncovered: null,
      total: "34,3 – 41,8 m²",
      image: "/images/Obra-Constituyentes-cocina.png",
      price: "Vendido",
      available: false,
      badge: "Entregado",
    },
    {
      id: "type2",
      title: "Monoambiente divisible",
      subtitle: "Espacios adaptables y versátiles",
      units: "Superficie cubierta: 34,0 – 40,1 m²",
      covered: "34,0 – 40,1 m²",
      semicovered: "5,4 – 10,2 m²",
      uncovered: null,
      total: "39,4 – 50,3 m²",
      image: "/images/Obra-Constituyentes-31.png",
      price: "Vendido",
      available: false,
      badge: "Entregado",
      note: "hasta 55,2 m² con patio",
    },
    {
      id: "type3",
      title: "Monoambiente con patio",
      subtitle: "Monoambiente divisible con patio",
      units: "Superficie cubierta: 43,1 - 45,7 m²",
      covered: "43,1 - 45,7 m²",
      semicovered: null,
      uncovered: "Patio 21,4 - 31,6 m²",
      total: "67,1 - 74.7 m²",
      image: "/images/Obra-Constituyentes-40.png", // Updated image property
      price: "Vendido",
      available: false,
      badge: "Entregado",
    },
    {
      id: "type4",
      title: "Tres ambientes",
      subtitle: "Unidad premium con terraza",
      units: "Superficie cubierta: 64,6 m²",
      covered: "64,6 m²",
      semicovered: "27,5 m²",
      uncovered: "Terraza 27,5 m²",
      total: "92,1 m²",
      image: "/images/three-bedroom-floorplan.png", // Updated image property
      price: "Vendido",
      available: false,
      badge: "Entregado",
    },
  ]

  // Amenities data
  const amenities = [
    {
      icon: <Users className="h-10 w-10" />,
      title: "SUM con terraza",
      description: "Salón de Usos Múltiples equipado con terraza para eventos y reuniones",
    },
    {
      icon: <Car className="h-10 w-10" />,
      title: "Guardacoches",
      description: "Cocheras cubiertas disponibles con acceso directo al edificio",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Bauleras",
      description: "Espacios de guardado adicional para mayor comodidad",
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Bicicletero",
      description: "Espacio dedicado para el guardado seguro de bicicletas",
    },
  ]

  // Building features
  const buildingFeatures = [
    "Estructura de hormigón armado con fachada revestida en Tarquini",
    "Carpinterías de aluminio con DVH, para máximo confort térmico y acústico",
    "Ascensores automáticos de acero inoxidable y hall de acceso contemporáneo",
    "Acceso vehicular con portón automatizado",
    "Espacio para bicicletas en planta baja",
    "Guardacoches y bauleras disponibles",
    "Salón de Usos Múltiples (SUM) con terraza",
    "Sistema de seguridad integral",
  ]

  // Unit features
  const unitFeatures = [
    "Pisos de porcelanato símil madera de primera calidad",
    "Cocinas modernas con anafes y hornos eléctricos en acero inoxidable",
    "Muebles de melamina y mesadas de granito",
    "Placards con frentes corredizos e interiores completos",
    "Balcones con parrilla propia en cada unidad",
    "Carpinterías de aluminio con doble vidrio hermético (DVH)",
    "Terminaciones de primer nivel en todos los ambientes",
    "Preinstalaciones para servicios modernos",
  ]

  // FAQ data
  const faqItems = [
    {
      question: "¿El proyecto está terminado?",
      answer: "Sí, Constituyentes 5151 se encuentra finalizado y todas las unidades fueron entregadas exitosamente.",
    },
    {
      question: "¿Hay unidades disponibles?",
      answer:
        "No, todas las unidades ya fueron vendidas. El proyecto tuvo una excelente recepción en el mercado y se agotó completamente.",
    },
    {
      question: "¿Qué tipo de amenities ofrece?",
      answer:
        "El edificio cuenta con SUM con terraza, guardacoches, bauleras y espacio para bicicletas, además de un hall contemporáneo con ascensores de acero inoxidable.",
    },
    {
      question: "¿Cuáles son las principales características del edificio?",
      answer:
        "Estructura de hormigón armado con fachada Tarquini, carpinterías de aluminio con DVH, pisos de porcelanato símil madera y cocinas completamente equipadas con electrodomésticos de acero inoxidable.",
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

  const goToVideo = () => {
    const videoIndex = galleryImages.findIndex(item => item.type === "video");
    if (videoIndex !== -1) {
      setCurrentImageIndex(videoIndex);
      setShowGalleryModal(true); // opcional, si querés abrir el modal directo en el video
    }
  };

  const goToGallery = () => {
    setCurrentImageIndex(0);
    setShowGalleryModal(true); // opcional, si querés abrir el modal directo en el video
  };


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
            src="/images/constituyentes-5151-hero-up.png"
            alt="Constituyentes 5151 - Fachada del edificio"
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
                <span>Villa Urquiza | Proyecto Finalizado</span>
                <div className="w-2 h-2 bg-[#215977] rounded-full ml-3 animate-pulse animation-delay-500"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white mb-6 sm:mb-8 leading-[0.85] sm:leading-[0.9] tracking-tight opacity-0 animate-fade-in-up animation-delay-300">
                  Constituyentes 5151: diseño y confort en Villa Urquiza
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 mb-8 sm:mb-10 lg:mb-12 max-w-xl lg:max-w-2xl font-light leading-relaxed opacity-0 animate-fade-in-up animation-delay-500">
                  Av. de los Constituyentes 5151, Villa Urquiza, Buenos Aires
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 mb-8 sm:mb-10 lg:mb-12 max-w-xl lg:max-w-2xl font-light leading-relaxed opacity-0 animate-fade-in-up animation-delay-600">
                  Proyecto finalizado · Unidades 100% vendidas
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center sm:justify-start opacity-0 animate-fade-in-up animation-delay-700">
                  <Button
                    onClick={() => scrollToSection(contactRef)}
                    className="bg-[#215977] hover:bg-[#1a4a63] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-medium rounded-full btn-primary group transition-all duration-500 hover:shadow-2xl hover:shadow-[#215977]/30 hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[240px] lg:min-w-[280px]"
                  >
                    <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Consultar otros proyectos</span>
                  </Button>

                  <Button
                    onClick={() => {
                      // Create a temporary link to download the brochure from Google Drive
                      const link = document.createElement("a");
                      link.href = "https://drive.google.com/uc?export=download&id=1bzmV7z_GzLJqc23I48Y0pO8NdjpjsLRz";
                      link.download = "Constituyentes-5151-Brochure.pdf"; // Nombre del archivo al descargar
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-white hover:bg-gray-50 text-[#215977] border-2 border-[#215977] hover:border-[#1a4a63] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-medium rounded-full group transition-all duration-500 hover:shadow-2xl hover:shadow-[#215977]/20 hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[240px] lg:min-w-[280px]"
                  >  
                    <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Descargar Book</span>
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
                      <h3 className="text-white text-xl font-medium">Constituyentes 5151</h3>
                      <p className="text-white/70">Villa Urquiza, Buenos Aires</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-white/60 text-sm mb-1">Estado</p>
                      <p className="text-white text-lg font-medium">Finalizado</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                      <p className="text-white/60 text-sm mb-1">Tipologías</p>
                      <p className="text-white text-lg font-medium">1 y 3 amb.</p>
                    </div>
                  </div>

                  <Button
                    onClick={goToVideo}
                    className="w-full bg-white/20 hover:bg-white text-white hover:text-[#062b66] py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Acceder al video</span>
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
                  Constituyentes 5151, un desarrollo finalizado con diseño y calidad en Villa Urquiza.
                </h2>
              </div>

              <div className="space-y-6 mb-10">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Constituyentes 5151 se presenta como un desarrollo residencial terminado, que fusiona arquitectura
                  contemporánea con espacios funcionales y luminosos. Un proyecto que marcó tendencia en Villa Urquiza,
                  ofreciendo calidad constructiva y detalles de primer nivel.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Características</h3>
                  <p className="text-gray-600">
                    Un edificio moderno que presentó departamentos de 1 y 3 ambientes con balcón aterrazado, todos
                    vendidos exitosamente.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Calidad</h3>
                  <p className="text-gray-600">
                    El equipamiento y las terminaciones del edificio contaron con detalles de categoría, materiales
                    nobles y tecnología de vanguardia, todos entregados según las especificaciones prometidas.
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
                    src="/images/constituyentes-5151-hero.png"
                    alt="Constituyentes 5151 Fachada"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <div>
                      <p className="text-white/80 text-sm mb-2">Proyecto Finalizado</p>
                      <h3 className="text-white text-2xl font-medium">Constituyentes 5151</h3>
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
              Tipologías entregadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Todas las unidades fueron vendidas y entregadas exitosamente en 2024.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {unitTypes.map((unit) => (
              <div
                key={unit.id}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
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
                    <div className="absolute top-6 right-6 px-6 py-2 text-sm font-medium tracking-wide rounded-full shadow-lg bg-green-500 text-white">
                      {unit.badge}
                    </div>
                  )}
                </div>

                <div className="p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-3xl font-light text-gray-900 mb-3">{unit.title}</h3>
                      <p className="text-[#215977] font-medium mb-2 text-lg">{unit.subtitle}</p>
                      <p className="text-gray-500 text-base">{unit.units}</p>
                      {unit.note && <p className="text-gray-400 text-sm mt-2 italic">({unit.note})</p>}
                    </div>
                    <div className="bg-gray-50 px-6 py-3 rounded-xl">
                      <p className="text-sm text-gray-500">Estado</p>
                      <p className="font-medium text-green-600 text-lg">{unit.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-2">Superficie Cubierta</p>
                      <p className="font-medium text-gray-900 text-base">{unit.covered}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-2">{unit.uncovered ? "Descubierta" : "Semicubierta"}</p>
                      <p className="font-medium text-gray-900 text-base">{unit.uncovered || unit.semicovered || "-"}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-2">Superficie Total</p>
                      <p className="font-medium text-[#215977] text-base">{unit.total}</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => scrollToSection(contactRef)}
                    className="w-full bg-gray-100 text-gray-400 cursor-not-allowed py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                    disabled={true}
                  >
                    <span>Todas las unidades vendidas</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">¿Te interesa conocer nuestros proyectos actuales disponibles?</p>
            <div className="flex justify-center">
              <Button
                onClick={() => scrollToSection(contactRef)}
                className="bg-[#062b66] hover:bg-[#041d47] text-white px-10 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <span>Ver proyectos disponibles</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
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
              El emprendimiento contó con Salón de Usos Múltiples con terraza, guardacoches, bauleras y espacio para
              bicicletas, todos entregados según lo prometido.
            </h2>
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
                src="/images/Obra-Constituyentes-31.png"
                alt="Terraza común"
                width={1200}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <h1 className="text-3xl font-light text-white mb-4">Ver Galeria</h1>
                  <Button
                    onClick={() => goToGallery()}
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
            <div className="inline-block px-6 py-2 bg-[#215977]/10 text-[#215977] text-sm font-medium tracking-wider uppercase rounded-full mb-6">
              Ubicación
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Barrio Villa Urquiza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Ubicado en la calle Constituyentes 5151, Villa Urquiza, este proyecto se encontró rodeado de calles
              arboladas, excelente conectividad y una variada oferta educativa, comercial y gastronómica.
            </p>
          </div>

          {/* Interactive Map Component */}
          <ConstituyentesInteractiveMap />
        </div>
      </section>

      {/* Progress Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#215977]/10 text-[#215977] text-sm font-medium tracking-wider uppercase rounded-full mb-6">
              Cronograma del Proyecto
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-6 sm:mb-8 tracking-tight text-gray-900">
              Proyecto Completado Exitosamente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Constituyentes 5151 fue finalizado según cronograma y todas las unidades fueron entregadas exitosamente.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">Progreso General</span>
              <span className="text-sm font-medium text-green-600">100% Completado</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: "100%" }}
              >
                <div className="absolute right-0 top-0 w-3 h-3 bg-green-600 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-green-600 hidden lg:block"></div>

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {[
                {
                  id: 1,
                  title: "Adquisición de Terreno y Confección de Proyecto",
                  description: "Compra del terreno y desarrollo del proyecto arquitectónico",
                  status: "completed",
                  date: "2022",
                },
                {
                  id: 2,
                  title: "Inicio de Obra",
                  description: "Excavación y fundaciones",
                  status: "completed",
                  date: "2022",
                },
                {
                  id: 3,
                  title: "Estructura",
                  description: "Construcción de estructura de hormigón armado",
                  status: "completed",
                  date: "2023",
                },
                {
                  id: 4,
                  title: "Mampostería e Instalaciones",
                  description: "Levantamiento de paredes y sistemas eléctricos/sanitarios",
                  status: "completed",
                  date: "2023",
                },
                {
                  id: 5,
                  title: "Terminaciones",
                  description: "Revestimientos, pisos y acabados interiores",
                  status: "completed",
                  date: "2024",
                },
                {
                  id: 6,
                  title: "Entrega",
                  description: "Finalización completa y entrega de todas las unidades",
                  status: "completed",
                  date: "2024",
                },
              ].map((milestone, index) => (
                <div
                  key={milestone.id}
                  className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-10">
                    <div className="w-6 h-6 rounded-full border-4 bg-green-500 border-green-500 shadow-lg">
                      <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="p-8 bg-white rounded-3xl shadow-lg border-2 border-green-500/30 bg-green-500/5 transition-all duration-500 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 rounded-full mr-3 lg:hidden bg-green-500"></div>
                        <span className="text-sm font-medium text-green-600 tracking-wider uppercase">
                          {milestone.date}
                        </span>
                        <Check className="h-5 w-5 text-green-500 ml-auto" />
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
          <div className="mt-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-light mb-4">Proyecto Finalizado</h3>
                <p className="text-white/80 leading-relaxed">
                  Constituyentes 5151 fue completado exitosamente y todas las unidades fueron entregadas según las
                  especificaciones prometidas.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light mb-2">100%</div>
                <div className="text-white/80">Completado</div>
              </div>
              <div className="text-center lg:text-right">
                <Button
                  onClick={() => scrollToSection(contactRef)}
                  className="bg-white/20 hover:bg-white text-white hover:text-green-600 px-8 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Proyectos Actuales
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
              Detalles constructivos entregados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              El proyecto y el equipamiento contaron con detalles de categoría, materiales nobles y tecnología de
              vanguardia, todos entregados según las especificaciones prometidas.
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
                <div className="w-12 h-12 bg-[#062b66]/10 rounded-xl flex items-center justify-center mr-4">
                  <Home className="h-6 w-6 text-[#062b66]" />
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
                Respondemos las consultas más comunes sobre el proyecto Constituyentes 5151
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300`}
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
                  Conocé nuestros proyectos actuales
                </h2>
                <p className="text-xl text-white/80 max-w-xl font-light leading-relaxed">
                  Nuestro equipo está listo para asesorarte sobre nuestros proyectos disponibles y próximos
                  lanzamientos.
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
                  Envianos un correo electrónico y te responderemos a la brevedad con información sobre nuestros
                  proyectos disponibles.
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
              {galleryImages[currentImageIndex].type === "video" ? (
                <iframe
                  src={galleryImages[currentImageIndex].url}
                  title={galleryImages[currentImageIndex].alt}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Image
                  src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentImageIndex].alt}
                  fill
                  className="object-contain rounded-lg"
                />
              )}

              <div className="absolute bottom-[-35px] left-0 right-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6">
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

            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {galleryImages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 relative h-20 w-32 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index ? "border-[#215977] opacity-100" : "border-transparent opacity-60"
                  }`}
                >
                  {item.type === "video" ? (
                    <video src={item.src} className="object-cover w-full h-full" />
                  ) : (
                    <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
