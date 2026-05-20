"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Minus, Plus, Trash2, Tag, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import toast from "react-hot-toast"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
    toast.success("Item removed from cart")
  }

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      const discountAmount = subtotal * 0.1
      setDiscount(discountAmount)
      toast.success("Coupon applied! 10% discount")
    } else {
      toast.error("Invalid coupon code")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const gst = subtotal * 0.18
  const deliveryFee = subtotal > 999 ? 0 : 49
  const total = subtotal + gst + deliveryFee - discount

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#111111]">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-bold text-white mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-gray-400 mb-8">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link
                href="/menu"
                className="inline-block px-8 py-3 bg-[#F5A623] text-black font-semibold uppercase tracking-wider hover:bg-[#d4900a] transition-colors"
              >
                Explore Menu
              </Link>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Page Header */}
      <section
        className="pt-32 pb-12 relative"
        style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/9c/ea/31/9cea31e4288df51ce52c051b0257856a.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "280px",
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
              Your Cart
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Cart</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ delay: index * 0.1, duration: 0.25 }}
                    layout
                    className="bg-[#1a1a1a] p-4 rounded-lg flex gap-4"
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="text-gray-500 text-sm">{item.category}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-gray-700">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-800 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-800 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-[#F5A623] font-bold text-lg">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#1a1a1a] p-6 rounded-lg sticky top-24"
              >
                <h2 className="font-serif text-xl font-bold text-white mb-6">
                  Order Summary
                </h2>

                {/* Coupon */}
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon code"
                      className="w-full pl-10 pr-4 py-3 bg-[#222222] border border-gray-700 text-white text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
                    />
                  </div>
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-3 bg-[#222222] border border-gray-700 text-white text-sm font-semibold hover:border-[#F5A623] transition-colors"
                  >
                    Apply
                  </button>
                </div>

                {/* Summary Lines */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>GST (18%)</span>
                    <span>₹{gst.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-500">
                      <span>Discount</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-gray-700 flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-[#F5A623] font-bold text-xl">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full py-4 bg-[#F5A623] text-black font-semibold uppercase tracking-wider text-center hover:bg-[#d4900a] transition-colors"
                >
                  Proceed to Checkout
                </Link>

                <p className="text-gray-500 text-xs text-center mt-4">
                  Free delivery on orders above ₹999
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}