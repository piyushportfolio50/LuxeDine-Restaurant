"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import toast from "react-hot-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success("Successfully subscribed to newsletter!")
      setEmail("")
    }
  }

  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#1a1a1a] border border-[#F5A623]/30 flex items-center justify-center">
            <Mail className="w-8 h-8 text-[#F5A623]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-400 mb-8">
            Get exclusive offers, recipes, and the latest updates delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#F5A623] transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#F5A623] text-black font-semibold uppercase text-sm tracking-wider hover:bg-[#d4900a] transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
