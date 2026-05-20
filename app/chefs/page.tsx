"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Facebook, Twitter, Instagram } from "lucide-react"

const chefs = [
  {
    id: "1",
    name: "John Smith",
    role: "Head Chef",
    specialty: "French Cuisine & Grills",
    bio: "With over 20 years of culinary experience across Europe and Asia, Chef John brings passion and precision to every dish. His innovative approach to classic French cuisine has earned numerous accolades.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wovZVft02UBukoAN0TIJ7QYR8kq1P8.png",
  },
  {
    id: "2",
    name: "Michael Brown",
    role: "Sous Chef",
    specialty: "Italian & Pasta",
    bio: "Trained in Italy under master chefs, Michael specializes in authentic Italian cuisine and handmade pasta. His dedication to traditional techniques creates unforgettable flavors.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wovZVft02UBukoAN0TIJ7QYR8kq1P8.png",
  },
  {
    id: "3",
    name: "David Wilson",
    role: "Pastry Chef",
    specialty: "Desserts & Baking",
    bio: "David creates exquisite desserts that are both beautiful and delicious. His pastry creations have been featured in top culinary magazines and have won multiple awards.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wovZVft02UBukoAN0TIJ7QYR8kq1P8.png",
  },
]

const principles = [
  {
    title: "Fresh Ingredients",
    description: "We source the finest, freshest ingredients from local farmers and suppliers daily.",
  },
  {
    title: "Culinary Excellence",
    description: "Every dish is crafted with precision, creativity, and attention to detail.",
  },
  {
    title: "Guest Experience",
    description: "We believe in creating memorable dining experiences that exceed expectations.",
  },
]

export default function ChefsPage() {
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
              Our Expert Chefs
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Our Chefs</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#F5A623] text-black text-xs font-semibold uppercase mb-2">
                      {chef.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {chef.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#F5A623] text-sm font-medium mb-3">
                    Specialty: {chef.specialty}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {chef.bio}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Philosophy */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our Kitchen Philosophy
            </h2>
            <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-[#1a1a1a] rounded-lg"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
                  <span className="text-[#F5A623] font-serif text-2xl font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
