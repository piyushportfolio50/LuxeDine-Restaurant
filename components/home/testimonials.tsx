"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Critic",
    text: "The most exquisite dining experience I've had in years. Every dish was a masterpiece, and the ambiance was simply perfect.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    text: "Outstanding service and incredible food. This has become my go-to place for important client dinners. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Food Blogger",
    text: "From the appetizers to the desserts, everything was absolutely divine. The attention to detail is remarkable.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-[#F5A623]" />
              </div>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                {testimonials[current].text}
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F5A623] fill-[#F5A623]" />
                ))}
              </div>
              <h4 className="font-serif text-xl font-semibold text-white">
                {testimonials[current].name}
              </h4>
              <p className="text-[#F5A623]">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#F5A623] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#F5A623] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? "bg-[#F5A623]" : "bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
