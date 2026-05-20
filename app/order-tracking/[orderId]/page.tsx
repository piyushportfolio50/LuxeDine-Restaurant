"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle, Clock, Bike, Home, Copy, Phone, Star } from "lucide-react"
import toast from "react-hot-toast"

const orderSteps = [
  { id: 1, label: "Order Placed", icon: CheckCircle, completed: true },
  { id: 2, label: "Preparing", icon: Clock, completed: true },
  { id: 3, label: "On The Way", icon: Bike, completed: false },
  { id: 4, label: "Delivered", icon: Home, completed: false },
]

const orderItems = [
  { name: "Grilled Salmon", quantity: 1, price: 1999 },
  { name: "Ribeye Steak", quantity: 1, price: 2499 },
  { name: "Truffle Pasta", quantity: 2, price: 3198 },
]

export default function OrderTrackingPage() {
  const params = useParams()
  const orderId = params.orderId as string
  const [rating, setRating] = useState(0)
  const [showRating] = useState(false)

  const copyOrderId = () => {
    navigator.clipboard.writeText(`#${orderId}`)
    toast.success("Order ID copied!")
  }

  const currentStep = 2 // Simulating "Preparing" step

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
              Track Your Order
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Order Tracking</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Order ID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a1a1a] p-6 rounded-lg mb-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <div>
              <p className="text-gray-400 text-sm">Order ID:</p>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl">#{orderId}</span>
                <button
                  onClick={copyOrderId}
                  className="p-2 text-gray-400 hover:text-[#F5A623] transition-colors"
                  aria-label="Copy order ID"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-sm">Estimated Delivery Time:</p>
              <p className="text-[#F5A623] font-bold text-xl">30 - 40 Min</p>
            </div>
          </motion.div>

          {/* Progress Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a1a1a] p-8 rounded-lg mb-8"
          >
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep - 1) / (orderSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[#F5A623]"
                />
              </div>

              {/* Steps */}
              <div className="relative flex justify-between">
                {orderSteps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                        index < currentStep
                          ? "bg-[#F5A623]"
                          : index === currentStep
                          ? "bg-[#F5A623] animate-pulse"
                          : "bg-gray-700"
                      }`}
                    >
                      <step.icon className={`w-8 h-8 ${index <= currentStep ? "text-black" : "text-gray-500"}`} />
                    </motion.div>
                    <span className={`mt-3 text-sm font-medium ${index <= currentStep ? "text-[#F5A623]" : "text-gray-500"}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Order Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#1a1a1a] p-6 rounded-lg"
            >
              <h2 className="font-serif text-xl font-bold text-white mb-4">
                Order Details
              </h2>
              <div className="space-y-3">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="text-white">₹{item.price.toLocaleString()}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex justify-between text-gray-400">
                    <span>GST (18%)</span>
                    <span>₹1,385</span>
                  </div>
                  <div className="flex justify-between text-gray-400 mt-2">
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-700 flex justify-between">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-[#F5A623] font-bold">₹9,081</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#1a1a1a] p-6 rounded-lg"
            >
              <h2 className="font-serif text-xl font-bold text-white mb-4">
                Delivery Address
              </h2>
              <p className="text-gray-400 mb-4">
                123 Food Street, Flavor Town,<br />
                Delicious City, DC 12345
              </p>
              <p className="text-gray-400 mb-6">
                <span className="text-white">Payment:</span> Cash on Delivery
              </p>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-2">Need Help?</p>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-[#F5A623] font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  +1 234 567 8900
                </a>
              </div>
            </motion.div>
          </div>

          {/* Rating Section (shown after delivery) */}
          {showRating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-[#1a1a1a] p-6 rounded-lg text-center"
            >
              <h2 className="font-serif text-xl font-bold text-white mb-4">
                Rate Your Experience
              </h2>
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? "text-[#F5A623] fill-[#F5A623]"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <textarea
                placeholder="Share your feedback (optional)"
                rows={3}
                className="w-full max-w-md mx-auto px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors resize-none"
              />
              <button className="mt-4 px-8 py-3 bg-[#F5A623] text-black font-semibold uppercase tracking-wider hover:bg-[#d4900a] transition-colors">
                Submit Review
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
