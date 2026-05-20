"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Navigation, Car } from "lucide-react"

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-32 pb-24 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: ` url('https://controlled-copper-ugw9krjnl7.edgeone.app/loccation%20background%20img.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
              Our Location
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-300 text-sm font-medium">
              <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
              <span className="text-gray-500">/</span>
              <span className="text-[white]">Location</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Close Page Header */}


      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 h-[500px] bg-[#1a1a1a] rounded-lg overflow-hidden relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.7727377529102!2d75.885416869543!3d22.76200573536957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302badb4c7e57%3A0x8830d55943704ae!2s91%2C%20Scheme%20No%2078%20-%20II%2C%20Scheme%20Number%2078%2C%20Vijay%20Nagar%2C%20Part%20II%2C%20Scheme%2078%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1779113210768!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              />
              <div className="absolute top-4 right-4">
                <a
                  // daddr (Destination Address) me aapki location ka address pass kiya hai
                  href="https://maps.google.com/?daddr=91,+Scheme+No+78+-+II,+Vijay+Nagar,+Indore,+Madhya+Pradesh+452010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#F5A623] text-black font-semibold text-sm flex items-center gap-2 hover:bg-[#d4900a] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h2 className="font-serif text-xl font-bold text-white mb-4">
                  Restaurant Name
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400">
                      123 Luxe Dine, Scheme 78,<br />
                      Vijay Nagar, Indore 452015
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#F5A623]" />
                    <p className="text-gray-400">+91 97520-07833</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#F5A623]" />
                    <p className="text-gray-400">narendrasingh@restaurant.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#F5A623]" />
                    <p className="text-gray-400">Mon - Sun : 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#F5A623]" />
                  Parking Information
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Complimentary valet parking available</li>
                  <li>• Public parking lot 50m away</li>
                  <li>• Street parking available after 6 PM</li>
                  <li>• Wheelchair accessible entrance</li>
                </ul>
              </div>


              {/* Open in Google Maps button */}

              <a
                // q (Query) parameter me pure address ko encode karke dala hai taaki exact location ka marker dikhe
                href="https://maps.google.com/?q=91,+Scheme+No+78+-+II,+Vijay+Nagar,+Indore,+Madhya+Pradesh+452010"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#F5A623] text-black font-semibold uppercase tracking-wider text-center hover:bg-[#d4900a] transition-colors"
              >
                Open in Google Maps
              </a>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours Table */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              Operating Hours
            </h2>
            <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
          </motion.div>

          <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {[
                  { day: "Monday", hours: "10:00 AM - 11:00 PM" },
                  { day: "Tuesday", hours: "10:00 AM - 11:00 PM" },
                  { day: "Wednesday", hours: "10:00 AM - 11:00 PM" },
                  { day: "Thursday", hours: "10:00 AM - 11:00 PM" },
                  { day: "Friday", hours: "10:00 AM - 12:00 AM" },
                  { day: "Saturday", hours: "10:00 AM - 12:00 AM" },
                  { day: "Sunday", hours: "10:00 AM - 11:00 PM" },
                ].map((item, index) => (
                  <tr key={item.day} className={index % 2 === 0 ? "bg-[#222222]" : ""}>
                    <td className="px-6 py-4 text-white font-medium">{item.day}</td>
                    <td className="px-6 py-4 text-[#F5A623] text-right">{item.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
