"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import toast from "react-hot-toast"

const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"]

const menuItems = [
  {
    id: "1",
    name: "Grilled Salmon",
    category: "Main Course",
    description: "Fresh Atlantic salmon with herb butter sauce",
    price: 1299,
    image: "https://i.pinimg.com/736x/53/2f/79/532f79cad4cbc4632ebb841a119af048.jpg",
  },
  {
    id: "2",
    name: "Shushi Platter",
    category: "Main Course",
    description: "Fresh, handcrafted sushi with salmon, tuna.",
    price: 899,
    image: "https://images.openai.com/static-rsc-4/V16Z-riuRCpE5fCnAyDRZ6AYklW73Y8eayRPFt1xbOIN8rK4IvGdWdIeLPmDQf_2aGwuGH-y89ONaKE8FLPS5zBWbwuZlFLKtOlltS6OXnlmGvsICgf8tLbjadt1a9R20rKSA2Grc1IR15sTuZtWcZOTSmtKURBUihYKnKLmO1k3TsAEQkVLFbrQrhGyGFF3?purpose=fullsize",
  },
  {
    id: "3",
    name: "Truffle Pasta",
    category: "Main Course",
    description: "Handmade pasta with black truffle cream sauce",
    price: 999,
    image: "https://i.pinimg.com/736x/64/e1/9f/64e19fb55198008010cee75e18e4e0cf.jpg",
  },
  {
    id: "4",
    name: "Burrata Salad",
    category: "Starters",
    description: "Fresh burrata with heirloom tomatoes and basil",
    price: 1099,
    image: "https://i.pinimg.com/1200x/0b/74/e9/0b74e9e4ffd466b39476723ed4bbcb00.jpg",
  },
  {
    id: "5",
    name: "Chocolate Lava Cake",
    category: "Desserts",
    description: "Warm chocolate cake with molten center",
    price: 399,
    image: "https://i.pinimg.com/1200x/89/84/a6/8984a61ab554d0eb6f0c1245480d1742.jpg",
  },
  {
    id: "6",
    name: "Mojito",
    category: "Drinks",
    description: "Classic Cuban cocktail with fresh mint",
    price: 199,
    image: "https://i.pinimg.com/236x/c1/24/62/c124627baf32df3c67952c5ecc4ee5c6.jpg",
  },
]

export function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const handleAddToCart = (itemName: string) => {
    toast.success(`loading...`)
  }

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Our Special Menu
          </h2>
          <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden group"
            >
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
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <span className="text-[#F5A623] font-bold text-lg">
                    ₹{item.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
               
               <a href="menu"> <button
                  onClick={() => handleAddToCart(item.name)}
                  className="w-full py-3 bg-transparent border border-[#F5A623] text-[#F5A623] font-semibold uppercase text-sm tracking-wider hover:bg-[#F5A623] hover:text-black transition-colors flex items-center justify-center gap-2"
                >
                 
    Show Menu
                </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-block px-8 py-3 bg-[#F5A623] text-black font-semibold uppercase text-sm tracking-wider hover:bg-[#d4900a] transition-colors"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
