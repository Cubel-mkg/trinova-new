import Image from "next/image"

export default function AmenitiesPage() {
  const amenities = [
    { name: "Resort-Style Pool", icon: "pool" },
    { name: "State-of-the-Art Fitness Center", icon: "fitness" },
    { name: "Resident Lounge", icon: "lounge" },
    { name: "Outdoor Grilling Area", icon: "grill" },
    { name: "Pet Friendly", icon: "pet" },
    { name: "Concierge Services", icon: "concierge" },
    { name: "Covered Parking", icon: "parking" },
    { name: "Business Center", icon: "business" },
  ]

  return (
    <div>
      <div className="relative h-64">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Amenities" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl text-white font-light">AMENITIES</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Luxury Living Experience</h2>
          <p className="text-gray-600">
            Atlantic Square offers an unparalleled living experience with premium amenities designed for comfort,
            convenience, and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-4">
                <Image
                  src={`/placeholder.svg?height=60&width=60&query=${amenity.icon}+icon`}
                  alt={amenity.name}
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-light mb-2">{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
