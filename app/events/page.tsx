"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const events = [
  {
    id: "1",
    title: "Weekend Special",
    description: "Get 20% off on all orders above ₹4,000",
    details: "Valid: Sat–Sun | Min order ₹4,000",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wovZVft02UBukoAN0TIJ7QYR8kq1P8.png",
  },
  {
    id: "2",
    title: "Live Music Night",
    description: "Enjoy live music every Friday evening",
    details: "7:00 PM – 11:00 PM | Entry Free with dining",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wovZVft02UBukoAN0TIJ7QYR8kq1P8.png",
  },
  {
    id: "3",
    title: "Happy Hours",
    description: "10% off on all cocktails & mocktails",
    details: "Mon–Thu: 4:00 PM – 7:00 PM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wovZVft02UBukoAN0TIJ7QYR8kq1P8.png",
  },
]

const upcomingEvents = [
  { date: "Jun 15", title: "Wine Tasting Evening", time: "6:00 PM" },
  { date: "Jun 22", title: "Chef's Table Experience", time: "7:00 PM" },
  { date: "Jul 1", title: "Summer BBQ Festival", time: "5:00 PM" },
  { date: "Jul 14", title: "Cooking Masterclass", time: "3:00 PM" },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Our Events & Offers
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Events</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Current Offers
            </h2>
            <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{event.description}</p>
                  <p className="text-[#F5A623] text-sm mb-4">{event.details}</p>
                  <Link
                    href="/reservation"
                    className="inline-block px-6 py-2 border border-[#F5A623] text-[#F5A623] font-semibold uppercase text-sm tracking-wider hover:bg-[#F5A623] hover:text-black transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
          </motion.div>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#F5A623] rounded-lg flex flex-col items-center justify-center">
                    <span className="text-black font-bold text-lg">{event.date.split(' ')[1]}</span>
                    <span className="text-black text-xs uppercase">{event.date.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                  </div>
                </div>
                <Link
                  href="/reservation"
                  className="hidden sm:flex items-center gap-2 text-[#F5A623] font-semibold hover:gap-3 transition-all"
                >
                  Reserve <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 text-[#F5A623] mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Host Your Private Event
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Looking for the perfect venue for your celebration? Our private dining spaces 
              are available for birthdays, anniversaries, corporate events, and more. 
              Let us create an unforgettable experience for you and your guests.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#F5A623] text-black font-semibold uppercase tracking-wider hover:bg-[#d4900a] transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
