"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Star, Clock, Users, Flame, Minus, Plus, Heart, ShoppingCart } from "lucide-react"
import { menuItems, extras } from "@/data/menuData"
import { useCart } from "@/context/CartContext"
import toast from "react-hot-toast"

export default function MenuDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const [quantity, setQuantity] = useState(1)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const { addToCart } = useCart()
  
  const item = menuItems.find((i) => i.id === resolvedParams.id)

  if (!item) {
    notFound()
  }

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    )
  }

  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const extra = extras.find((e) => e.id === id)
    return sum + (extra?.price || 0)
  }, 0)

  const totalPrice = (item.price + extrasTotal) * quantity

  const handleAddToOrder = () => {
    // Add item to cart with extras price included
    const itemWithExtras = {
      id: `${item.id}-${Date.now()}`, // Unique ID for items with different extras
      name: item.name + (selectedExtras.length > 0 ? " (with extras)" : ""),
      category: item.category,
      price: item.price + extrasTotal,
      image: item.image,
    }
    
    // Add the item 'quantity' times
    for (let i = 0; i < quantity; i++) {
      addToCart(itemWithExtras)
    }
    
    toast.success(`${item.name} x${quantity} added to order!`)
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Link href="/" className="hover:text-[#F5A623]">Home</Link>
            <span>/</span>
            <Link href="/menu" className="hover:text-[#F5A623]">Menu</Link>
            <span>/</span>
            <span className="text-[#F5A623]">{item.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-1 bg-[#F5A623] text-black text-sm font-semibold uppercase mb-4">
                {item.category}
              </span>
              
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                {item.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(item.rating)
                          ? "text-[#F5A623] fill-[#F5A623]"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">({item.reviews} reviews)</span>
              </div>

              <p className="text-3xl font-bold text-[#F5A623] mb-6">
                ₹{item.price.toLocaleString()}
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Info Row */}
              <div className="flex flex-wrap gap-6 mb-8 p-4 bg-[#1a1a1a] rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#F5A623]" />
                  <div>
                    <p className="text-xs text-gray-500">Cooking Time</p>
                    <p className="text-white">{item.cookTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#F5A623]" />
                  <div>
                    <p className="text-xs text-gray-500">Serves</p>
                    <p className="text-white">{item.serves}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#F5A623]" />
                  <div>
                    <p className="text-xs text-gray-500">Calories</p>
                    <p className="text-white">{item.calories}</p>
                  </div>
                </div>
              </div>

              {/* Extras */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Add Extras:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {extras.map((extra) => (
                    <label
                      key={extra.id}
                      className={`flex items-center justify-between p-3 border cursor-pointer transition-colors ${
                        selectedExtras.includes(extra.id)
                          ? "border-[#F5A623] bg-[#F5A623]/10"
                          : "border-gray-700 hover:border-gray-500"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedExtras.includes(extra.id)}
                          onChange={() => toggleExtra(extra.id)}
                          className="w-4 h-4 accent-[#F5A623]"
                        />
                        <span className="text-white">{extra.name}</span>
                      </div>
                      <span className="text-[#F5A623]">+₹{extra.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-gray-700">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-800 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-16 text-center text-white font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-800 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <motion.button
                  onClick={handleAddToOrder}
                  whileTap={{ scale: 0.96 }}
                  className="flex-1 py-3 bg-[#F5A623] text-black font-semibold uppercase tracking-wider hover:bg-[#d4900a] transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Order — ₹{totalPrice.toLocaleString()}
                </motion.button>

                <button
                  className="p-3 border border-gray-700 hover:border-[#F5A623] transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
