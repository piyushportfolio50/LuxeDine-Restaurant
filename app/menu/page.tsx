"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ShoppingCart, Search, Star } from "lucide-react"
import { menuItems } from "@/data/menuData"
import { useCart } from "@/context/CartContext"
import toast from "react-hot-toast"

const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const { addToCart } = useCart()

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      image: item.image,
    })
    toast.success(`${item.name} added to cart!`)
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Page Header */}
      <section
        className="pt-32 pb-12 relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Our Special Menu
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Menu</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all ${
                    activeCategory === category
                      ? "bg-[#F5A623] text-black"
                      : "bg-[#1a1a1a] text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-80 pl-12 pr-4 py-3 bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#F5A623] transition-colors"
              />
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(245,166,35,0.15)" }}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden group"
              >
                <Link href={`/menu/${item.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#F5A623] text-black text-xs font-semibold uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <Link href={`/menu/${item.id}`}>
                      <h3 className="font-serif text-lg font-semibold text-white hover:text-[#F5A623] transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <span className="text-[#F5A623] font-bold">
                      ₹{item.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                    <span className="text-sm text-gray-400">{item.rating}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <motion.button
                    onClick={() => handleAddToCart(item)}
                    whileTap={{ scale: 0.96 }}
                    className="w-full py-2.5 bg-transparent border border-[#F5A623] text-[#F5A623] font-semibold uppercase text-xs tracking-wider hover:bg-[#F5A623] hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}