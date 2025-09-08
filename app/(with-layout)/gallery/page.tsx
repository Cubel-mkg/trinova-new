import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    { src: "/images/building-exterior.jpg", alt: "Fachada del edificio" },
    { src: "/images/lobby-entrance.jpg", alt: "Hall de entrada" },
    { src: "/images/apartment-living.jpg", alt: "Living comedor" },
    { src: "/images/terrace-outdoor.jpg", alt: "Terraza exterior" },
    { src: "/images/apartment-dining.png", alt: "Comedor integrado" },
    { src: "/images/studio-loft.png", alt: "Loft moderno" },
    { src: "/images/kitchen-modern.jpg", alt: "Cocina contemporánea" },
    { src: "/images/apartment-living.jpg", alt: "Ambiente integrado" },
    { src: "/images/lobby-entrance.jpg", alt: "Espacios comunes" },
  ]

  return (
    <div>
      <div className="relative h-64">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Gallery" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl text-white font-light">GALLERY</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
