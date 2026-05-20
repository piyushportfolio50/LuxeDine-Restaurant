"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

const features = [
  "Premium Ingredients",
  "Award-Winning Chefs",
  "Unforgettable Experience",
]

export function AboutTeaser() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://i.pinimg.com/736x/b5/67/ac/b567ac65e2ab190fb8d909dafaf958ee.jpg"
              alt="Our Chef"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-serif italic text-[#F5A623] text-lg mb-2">
              Welcome To Our Restaurant
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Food is not just eating — it&apos;s an experience.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              At Luxe Dine, we believe that every meal should be a celebration of flavors, 
              crafted with passion and precision. Our chefs bring years of expertise to create 
              dishes that not only satisfy your hunger but also create lasting memories.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From sourcing the finest ingredients to presenting each dish with artistic flair, 
              we ensure that your dining experience is nothing short of extraordinary.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center">
                    <Check className="w-4 h-4 text-black" />
                  </span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-[#F5A623] text-black font-semibold uppercase text-sm tracking-wider hover:bg-[#d4900a] transition-colors"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
