"use client"

import { motion } from "framer-motion"

export function SpecialOffer() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#F5A623] to-[#d4900a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-2">
            Weekend Special — 20% off on all orders above ₹4,000
          </h2>
          <p className="text-black/80">
            Valid every Saturday and Sunday. Minimum order ₹4,000.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
