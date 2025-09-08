import type { ReactNode } from "react"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="p-10 lg:p-12 border border-gray-100 hover:border-[#215977]/30 transition-all duration-500 hover-lift bg-white group text-center rounded-3xl shadow-lg hover:shadow-2xl">
      <div className="mb-8 transition-transform duration-500 group-hover:scale-110 flex justify-center">
        <div className="p-6 bg-gradient-to-br from-[#215977]/10 to-[#062b66]/10 rounded-2xl">{icon}</div>
      </div>

      <h3 className="text-2xl lg:text-3xl font-extralight mb-6 text-gray-900 group-hover:text-[#215977] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-600 font-light leading-relaxed text-lg">{description}</p>
    </div>
  )
}
