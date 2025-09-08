import ContactSection from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-light text-center mb-12">CONTACT US</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-light mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Contact us to schedule a tour or learn more about Atlantic Square.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#215977] mr-4" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">123 Atlantic Avenue, Miami, FL 33139</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-[#215977] mr-4" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">305-709-4027</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-[#215977] mr-4" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@atlanticsquareliving.com</p>
              </div>
            </div>
          </div>
        </div>

        <ContactSection/>
      </div>
    </div>
  )
}
