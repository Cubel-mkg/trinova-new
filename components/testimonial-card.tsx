interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="p-10 lg:p-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#215977]/50 transition-all duration-500 hover-lift group rounded-3xl shadow-2xl">
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#215977]/60 transition-all duration-500 group-hover:text-[#215977] group-hover:scale-110"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>

      <p className="mb-10 text-white/90 font-light leading-relaxed text-lg lg:text-xl">"{quote}"</p>

      <div className="border-t border-white/20 pt-6">
        <p className="font-medium text-white text-lg lg:text-xl mb-2">{author}</p>
        <p className="text-[#215977] font-light text-base text-white">{role}</p>
      </div>
    </div>
  )
}
