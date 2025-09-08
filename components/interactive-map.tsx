"use client"

import { useState } from "react"
import { MapPin, Hospital, Train, ShoppingBag, Coffee, ExternalLink, Utensils } from "lucide-react"
import Image from "next/image"

// Define types for our points of interest
interface PointOfInterest {
  id: number
  name: string
  type: "transport" | "health" | "dining" | "shopping" | "fast-food" | "financial" | "recreation"
  distance?: string
  walkTime?: string
  description?: string
  address?: string
}

export default function InteractiveMap() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Points of interest data
  const pointsOfInterest: PointOfInterest[] = [
    {
      id: 2,
      name: "Estación de Tren Pueyrredón",
      type: "transport",
      description: "Estación de tren",
    },
    {
      id: 3,
      name: "Estación de Tren Urquiza",
      type: "transport",
      description: "Estación de tren",
    },
    {
      id: 4,
      name: "Estación de Subte “B” Juan M. Rosas",
      type: "transport",
      description: "Estación de Subte Línea B",
    },
    {
      id: 5,
      name: "Cercanía con Av. General Paz",
      type: "transport",
      description: "Importante avenida de acceso",
    },
    {
      id: 6,
      name: "Centro Médico Stamboulian",
      type: "health",
      description: "Centro médico",
    },
    {
      id: 7,
      name: "Estación de Subte “B” Echeverría",
      type: "transport",
      description: "Estación de Subte Línea B",
    },
    {
      id: 8,
      name: "Tea Connection",
      type: "dining",
      description: "Cafetería y restaurante",
    },
    {
      id: 9,
      name: "Le Blé",
      type: "dining",
      description: "Cafetería y panadería",
    },
    {
      id: 10,
      name: "Dandy",
      type: "dining",
      description: "Restaurante y bar",
    },
    {
      id: 11,
      name: "McDonald’s",
      type: "fast-food",
      description: "Restaurante de comida rápida",
    },
    {
      id: 12,
      name: "Burger King",
      type: "fast-food",
      description: "Restaurante de comida rápida",
    },
    {
      id: 13,
      name: "Mostaza",
      type: "fast-food",
      description: "Restaurante de comida rápida",
    },
    {
      id: 14,
      name: "Hipermercado Carrefour",
      type: "shopping",
      description: "Supermercado",
    },
  ]

  // Category configuration
  const categories = [
    { id: "all", name: "Todos", icon: <MapPin className="h-5 w-5" /> },
    { id: "transport", name: "Transporte", icon: <Train className="h-5 w-5" /> },
    { id: "health", name: "Salud", icon: <Hospital className="h-5 w-5" /> },
    { id: "dining", name: "Gastronomía", icon: <Coffee className="h-5 w-5" /> },
    { id: "fast-food", name: "Comida Rápida", icon: <Utensils className="h-5 w-5" /> },
    { id: "shopping", name: "Supermercado", icon: <ShoppingBag className="h-5 w-5" /> },
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
          src="/images/villa-urquiza-location-map.png"
          alt="Mapa de ubicación Villa Urquiza - Aizpurúa 2326"
          width={1200}
          height={800}
          className="w-full h-auto object-cover rounded-2xl"
        />

        {/* Project location highlight overlay */}
        <div className="aizpurua-bubble-name absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border-l-4 border-[#215977]">
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 text-[#215977] mr-2" />
            <h4 className="font-medium text-gray-900">Aizpurúa 2326</h4>
          </div>
          <p className="text-gray-600 text-sm">
            Ubicado en el corazón de Villa Urquiza, con excelente conectividad y todos los servicios.
          </p>
        </div>

        {/* Open in Google Maps button */}
        <div className="absolute top-6 right-6">
          <a
            href="https://www.google.com/maps/place/Aizpur%C3%BAa+2326,+C1431+Villa+Urquiza,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.5790921,-58.4942544,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb65b2bba8b7f:0xc20be62a6d4a8683!8m2!3d-34.5790921!4d-58.4916795!16s%2Fg%2F11c5p0y8qy"
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
                    : poi.type === "health"
                      ? "bg-red-100 text-red-700"
                      : poi.type === "dining"
                        ? "bg-amber-100 text-amber-700"
                        : poi.type === "fast-food"
                          ? "bg-orange-100 text-orange-700"
                          : poi.type === "shopping"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-700" // Default for unknown types
                }
              `}
              >
                {poi.type === "transport" ? (
                  <Train className="h-6 w-6" />
                ) : poi.type === "health" ? (
                  <Hospital className="h-6 w-6" />
                ) : poi.type === "dining" ? (
                  <Coffee className="h-6 w-6" />
                ) : poi.type === "fast-food" ? (
                  <Utensils className="h-6 w-6" />
                ) : poi.type === "shopping" ? (
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
                  {poi.distance && (
                    <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                      {poi.distance}
                    </span>
                  )}
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
            <div className="text-3xl font-light text-[#215977] mb-2">5</div>
            <div className="text-sm text-gray-600">Estaciones de transporte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-[#215977] mb-2">1</div>
            <div className="text-sm text-gray-600">Centros de salud</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-[#215977] mb-2">6</div>
            <div className="text-sm text-gray-600">Comercios y servicios</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-[#215977] mb-2">1</div>
            <div className="text-sm text-gray-600">Supermercados</div>
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
                    : category.id === "health"
                      ? "bg-red-500"
                      : category.id === "dining"
                        ? "bg-amber-500"
                        : category.id === "fast-food"
                          ? "bg-orange-500"
                          : category.id === "shopping"
                            ? "bg-purple-500"
                            : "bg-gray-500" // Default for unknown types
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
