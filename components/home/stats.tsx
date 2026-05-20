"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, Smile, Trophy } from "lucide-react"

const stats = [
  { value: 15, suffix: "+", label: "Years Experience", icon: Award },
  { value: 50, suffix: "+", label: "Master Chefs", icon: Users },
  { value: 10, suffix: "K+", label: "Happy Customers", icon: Smile },
  { value: 25, suffix: "+", label: "Awards Won", icon: Trophy },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1a1a1a] border border-[#F5A623]/30 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-[#F5A623]" />
              </div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-[#F5A623] mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
