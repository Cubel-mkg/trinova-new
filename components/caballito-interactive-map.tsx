"use client"

import { useState } from "react"
import { MapPin, School, Hospital, Train, ShoppingBag, Coffee, ExternalLink } from "lucide-react"
import Image from "next/image"

// Define types for our points of interest
interface PointOfInterest {
  id: number
  name: string
  type: "education" | "health" | "transport" | "shopping" | "dining" | "culture" | "financial"
  distance: string
  walkTime?: string
  description?: string
  address?: string
}

export default function CaballitoInteractiveMap() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Points of interest data for Caballito
  const pointsOfInterest: PointOfInterest[] = [
    {
      id: 2,
      name: "Cid Campeador",
      type: "culture",
      distance: "300m",
      walkTime: "4 min",
      description: "Espacio cultural y recreativo",
      address: "Barrio Caballito",
    },
    {
      id: 3,
      name: "Metrobus",
      type: "transport",
      distance: "350m",
      walkTime: "4 min",
      description: "Estación de Metrobus",
      address: "Av. Rivadavia",
    },
    {
      id: 4,
      name: "Hospital Pedro Lagleyze",
      type: "health",
      distance: "800m",
      walkTime: "10 min",
      description: "Hospital oftalmológico",
      address: "Av. Juan B. Justo 4151",
    },
    {
      id: 5,
      name: "Policlínica Bancaria",
      type: "health",
      distance: "600m",
      walkTime: "8 min",
      description: "Centro médico",
      address: "Barrio Caballito",
    },
    {
      id: 6,
      name: "Plaza Irlanda",
      type: "culture",
      distance: "500m",
      walkTime: "6 min",
      description: "Plaza pública",
      address: "Barrio Caballito",
    },
    {
      id: 7,
      name: "Colegio Claret",
      type: "education",
      distance: "400m",
      walkTime: "5 min",
      description: "Institución educativa",
      address: "Barrio Caballito",
    },
    {
      id: 8,
      name: "Colegio Dillon",
      type: "education",
      distance: "450m",
      walkTime: "6 min",
      description: "Institución educativa",
      address: "Barrio Caballito",
    },
    {
      id: 9,
      name: "Colegio Santa Brígida",
      type: "education",
      distance: "550m",
      walkTime: "7 min",
      description: "Institución educativa",
      address: "Barrio Caballito",
    },
    {
      id: 10,
      name: "Instituto Redemptrix",
      type: "education",
      distance: "600m",
      walkTime: "8 min",
      description: "Instituto educativo",
      address: "Barrio Caballito",
    },
    {
      id: 11,
      name: "Instituto San Pedro Nolasco",
      type: "education",
      distance: "650m",
      walkTime: "8 min",
      description: "Instituto educativo",
      address: "Barrio Caballito",
    },
    {
      id: 12,
      name: "Instituto Orsino",
      type: "education",
      distance: "700m",
      walkTime: "9 min",
      description: "Instituto educativo",
      address: "Barrio Caballito",
    },
    {
      id: 13,
      name: "Plaza Gral. Benito Nazar",
      type: "culture",
      distance: "900m",
      walkTime: "12 min",
      description: "Plaza pública",
      address: "Barrio Caballito",
    },
    {
      id: 14,
      name: "Banco Provincia, Ciudad y Patagonia",
      type: "financial",
      distance: "400m",
      walkTime: "5 min",
      description: "Servicios financieros",
      address: "Barrio Caballito",
    },
  ]

  // Category configuration
  const categories = [
    { id: "all", name: "Todos", icon: <MapPin className="h-5 w-5" /> },
    { id: "transport", name: "Transporte", icon: <Train className="h-5 w-5" /> },
    { id: "education", name: "Educación", icon: <School className="h-5 w-5" /> },
    { id: "health", name: "Salud", icon: <Hospital className="h-5 w-5" /> },
    { id: "culture", name: "Cultura/Recreación", icon: <Coffee className="h-5 w-5" /> },
    { id: "financial", name: "Servicios Financieros", icon: <ShoppingBag className="h-5 w-5" /> },
  ]

  // Handle category filter click
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId)
  }

  // Filter POIs based on active category
  const filteredPOIs = pointsOfInterest.filter(
    (poi) => !activeCategory || activeCategory === "all" || poi.type === activeCategory,
  )

  return (
    <div className="w-full">
      {/* Category filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id || (!activeCategory && category.id === "all")
                ? "bg-[#215977] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 mb-8">
        <Image
          src="/images/nicasio-orono-location-map.png"
          alt="Mapa de ubicación Nicasio Oroño 1652 - Barrio Caballito"
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />

        {/* Project location highlight overlay */}
        <div className="nicasio-bubble-name absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border-l-4 border-[#215977]">
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 text-[#215977] mr-2" />
            <h4 className="font-medium text-gray-900">Nicasio Oroño 1652</h4>
          </div>
          <p className="text-gray-600 text-sm">
            Ubicado en el corazón de Caballito, con excelente conectividad y todos los servicios.
          </p>
        </div>

        {/* Open in Google Maps button */}
        <div className="absolute top-6 right-6">
          <a
            href="https://www.google.com/maps/place/Nicasio+Oro%C3%B1o+1652,+C1424+Caballito,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6190921,-58.4442544,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca65b2bba8b7f:0xc20be62a6d4a8683!8m2!3d-34.6190921!4d-58.4416795!16s%2Fg%2F11c5p0y8qy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-white text-gray-700 hover:text-[#215977] px-3 py-2 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 text-sm font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Abrir en Google Maps</span>
          </a>
        </div>
      </div>

      {/* Points of interest grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPOIs.map((poi) => (
          <div
            key={poi.id}
            className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start">
              <div
                className={`
                p-3 rounded-xl mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110
                ${
                  poi.type === "transport"
                    ? "bg-emerald-100 text-emerald-700"
                    : poi.type === "education"
                      ? "bg-blue-100 text-blue-700"
                      : poi.type === "health"
                        ? "bg-red-100 text-red-700"
                        : poi.type === "culture"
                          ? "bg-amber-100 text-amber-700"
                          : poi.type === "financial"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-700"
                }
              `}
              >
                {poi.type === "transport" ? (
                  <Train className="h-6 w-6" />
                ) : poi.type === "education" ? (
                  <School className="h-6 w-6" />
                ) : poi.type === "health" ? (
                  <Hospital className="h-6 w-6" />
                ) : poi.type === "culture" ? (
                  <Coffee className="h-6 w-6" />
                ) : poi.type === "financial" ? (
                  <ShoppingBag className="h-6 w-6" />
                ) : (
                  <MapPin className="h-6 w-6" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-[#215977] transition-colors duration-300">
                  {poi.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{poi.description}</p>
                {poi.address && <p className="text-gray-500 text-xs mb-3">{poi.address}</p>}
                <div className="flex items-center gap-2">
                  <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                    {poi.distance}
                  </span>
                  {poi.walkTime && (
                    <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                      {poi.walkTime} caminando
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-12 bg-gradient-to-r from-[#215977]/10 to-[#062b66]/10 rounded-2xl p-8">
        <h4 className="text-2xl font-light text-gray-900 mb-6 text-center">Conectividad excepcional</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-light text-[#215977] mb-2">1</div>
            <div className="text-sm text-gray-600">Transporte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-[#215977] mb-2">6</div>
            <div className="text-sm text-gray-600">Centros educativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-[#215977] mb-2">2</div>
            <div className="text-sm text-gray-600">Centros de salud</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-[#215977] mb-2">4</div>
            <div className="text-sm text-gray-600">Cultura y servicios</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 bg-gray-50 rounded-2xl p-6">
        <h4 className="font-medium text-gray-900 mb-4">Leyenda</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.slice(1).map((category) => (
            <div key={category.id} className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full mr-3 ${
                  category.id === "transport"
                    ? "bg-emerald-500"
                    : category.id === "education"
                      ? "bg-blue-500"
                      : category.id === "health"
                        ? "bg-red-500"
                        : category.id === "culture"
                          ? "bg-amber-500"
                          : category.id === "financial"
                            ? "bg-purple-500"
                            : "bg-gray-500"
                }`}
              ></div>
              <span className="text-sm text-gray-600">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
