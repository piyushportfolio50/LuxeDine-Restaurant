"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://meaningful-silver-6l9semq4rg.edgeone.app/heroimage.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif italic text-[#F5A623] text-xl md:text-2xl mb-4"
        >
          Welcome
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight"
        >
          DELICIOUS FOOD
          <br />
          FINEST EXPERIENCE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "200px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-[#F5A623] to-transparent my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-300 text-sm tracking-widest uppercase mb-8"
        >
          NEW FLAVOURS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/reservation"
            className="px-8 py-3 bg-[#F5A623] text-black font-semibold uppercase text-sm tracking-wider hover:bg-[#d4900a] transition-colors"
          >
            Book A Table
          </Link>
          <Link
            href="/menu"
            className="px-8 py-3 border border-white text-white font-semibold uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            Explore Menu
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-gray-400 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
