"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

export default function ConstituyentesInteractiveMap() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full">
      {/* Map container */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 mb-8">
        <Image
          src="/images/constituyentes-5151-location-map.png"
          alt="Mapa de ubicación Villa Urquiza - Constituyentes 5151"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />

        {/* Interactive overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 flex items-end justify-center p-8">
          <div className="text-center text-white transform translate-y-4 hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg font-medium">Constituyentes 5151</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Ubicado en Villa Urquiza, con excelente conectividad y servicios
            </p>
            <Button
              className="bg-white/20 hover:bg-white text-white hover:text-gray-900 backdrop-blur-sm border border-white/30 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=Constituyentes+5151,+Villa+Urquiza,+Buenos+Aires,+Argentina",
                  "_blank",
                )
              }
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver en Google Maps
            </Button>
          </div>
        </div>

        {/* Location highlight */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 whitespace-nowrap z-10 border border-gray-200">
              <div className="text-sm font-medium text-gray-900">Constituyentes 5151</div>
              <div className="text-xs text-gray-500">Villa Urquiza, Buenos Aires</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          )}
        </div>
      </div>

      {/* Location info cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-900">Transporte</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Excelente conectividad con estaciones de tren y subte cercanas, incluyendo la línea B del subte.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3">
              <MapPin className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-medium text-gray-900">Servicios</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Amplia variedad de comercios, restaurantes, cafeterías y servicios en la zona.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
              <MapPin className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-medium text-gray-900">Ubicación</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Villa Urquiza, un barrio residencial con calles arboladas y ambiente tranquilo.
          </p>
        </div>
      </div>
    </div>
  )
}
