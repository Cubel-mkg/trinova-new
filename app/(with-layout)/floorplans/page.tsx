import Link from "next/link"
import Image from "next/image"

export default function FloorplansPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-light text-center mb-12">FLOORPLANS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={`/placeholder.svg?height=400&width=600&query=apartment+floorplan+${item}`}
                alt={`Floorplan ${item}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-light mb-2">Unit Type {String.fromCharCode(64 + item)}</h3>
              <p className="text-gray-600 mb-4">
                {item + 1} Bedroom | {(item % 2) + 1} Bath | {800 + item * 100} sq ft
              </p>
              <Link
                href={`/floorplans/${item}`}
                className="inline-block bg-[#062b66] text-white px-6 py-2 hover:bg-[#041d47] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
