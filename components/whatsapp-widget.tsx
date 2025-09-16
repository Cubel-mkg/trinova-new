"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    window.open("http://wa.link/4mydj5", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </button>
    </div>
  )
}