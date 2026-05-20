"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Stats } from "@/components/home/stats"
import { Check, Award, Heart, Star, Utensils } from "lucide-react"

const values = [
  { icon: Star, title: "Quality", description: "We use only the finest ingredients sourced from trusted suppliers." },
  { icon: Heart, title: "Passion", description: "Our team puts love and care into every dish we create." },
  { icon: Utensils, title: "Service", description: "Exceptional service that makes every guest feel special." },
  { icon: Award, title: "Innovation", description: "Constantly evolving our menu with creative new dishes." },
]

const timeline = [
  { year: "2008", title: "The Beginning", description: "Luxe Dine was founded with a vision to create extraordinary dining experiences." },
  { year: "2012", title: "First Award", description: "Received our first Culinary Excellence Award from the National Restaurant Association." },
  { year: "2016", title: "Expansion", description: "Opened our second location and expanded our team of world-class chefs." },
  { year: "2024", title: "Today", description: "Continuing to serve exceptional cuisine and create memorable moments." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.pinimg.com/1200x/0c/ed/38/0ced38bcbd4b70db144a58959abf4e73.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <p className="font-serif italic text-[#F5A623] text-xl mb-4">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
            Food is not just eating — it&apos;s an experience.
          </h1>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://i.pinimg.com/1200x/d6/9b/5d/d69b5d83caed3009ca2bd3e2a2f7812f.jpg"
                alt="Our Chef"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-serif italic text-[#F5A623] text-lg mb-2">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Crafted with Passion, Served with Love
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Founded in 2008, Luxe Dine began as a small family restaurant with a big dream — 
                to create a dining experience that celebrates the art of fine cuisine. Over the years, 
                we have grown into a renowned establishment known for our commitment to quality, 
                innovation, and exceptional service.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our team of world-class chefs brings together diverse culinary traditions, creating 
                dishes that surprise and delight. Every ingredient is carefully selected, every dish 
                thoughtfully prepared, and every guest treated like family.
              </p>
              <ul className="space-y-3">
                {["Premium Ingredients", "Award-Winning Chefs", "Unforgettable Experience", "Sustainable Practices"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Our Values */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-[#1a1a1a] rounded-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#F5A623]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <span className="text-[#F5A623] font-bold text-xl">{item.year}</span>
                  <h3 className="font-serif text-xl font-semibold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F5A623] border-4 border-[#111111]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
