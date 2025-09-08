"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { MapPin, Calendar, Home } from "lucide-react"

interface ProjectCardProps {
  title: string
  location: string
  image: string
  status: string
  completion: string
  units: string
  href?: string
}

export default function ProjectCard({ title, location, image, status, completion, units, href }: ProjectCardProps) {
  const router = useRouter()

  const handleNavigation = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault()
      // Scroll to top immediately
      window.scrollTo(0, 0)
      // Navigate to the page
      router.push(href)
    }
  }

  const CardContent = () => (
    <div className="group overflow-hidden bg-white rounded-3xl shadow-xl hover-lift transition-all duration-700 border border-gray-100">
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-6 left-6 bg-[#215977] text-white px-4 py-2 text-sm font-medium tracking-wide rounded-full shadow-lg">
          {status}
        </div>
        <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-2xl lg:text-3xl font-light text-white mb-2">{title}</h3>
          <div className="flex items-center text-white/90">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-light">{location}</span>
          </div>
        </div>
      </div>

      <div className="p-8 lg:p-10">
        <div className="flex items-center text-gray-500 mb-6 group-hover:text-[#215977] transition-colors duration-300">
          <MapPin className="h-5 w-5 mr-3" />
          <span className="text-base font-light tracking-wide">{location}</span>
        </div>

        <h3 className="text-3xl lg:text-4xl font-extralight mb-8 text-gray-900 group-hover:text-[#215977] transition-colors duration-300 leading-tight">
          {title}
        </h3>

        <div className="grid grid-cols-2 gap-6 text-base">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-[#215977] mr-3 mt-1" />
            <div>
              <p className="text-gray-500 font-light mb-1 text-sm">Finalización</p>
              <p className="font-medium text-lg text-gray-900">{completion}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Home className="h-5 w-5 text-[#215977] mr-3 mt-1" />
            <div>
              <p className="text-gray-500 font-light mb-1 text-sm">Tipologías</p>
              <p className="font-medium text-lg text-gray-900">{units}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <div onClick={handleNavigation} className="block cursor-pointer">
        <CardContent />
      </div>
    )
  }

  return <CardContent />
}
