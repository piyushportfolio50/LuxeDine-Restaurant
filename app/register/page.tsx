"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChefHat, Mail, Lock, Eye, EyeOff, ArrowRight, User, Phone } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import toast from "react-hot-toast"

export default function RegisterPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!")
      return
    }
    
    setIsLoading(true)

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Login using auth context
    login(formData.name, formData.email)
    
    toast.success(`Account created! Welcome, ${formData.name}!`)
    setIsLoading(false)
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-[#111111] flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
                <ChefHat className="w-7 h-7 text-[#F5A623]" />
              </div>
              <span className="font-serif text-2xl text-white">Luxe Dine</span>
            </Link>
          </div>

          <h2 className="font-serif text-3xl text-white mb-2">Create Account</h2>
          <p className="text-gray-400 mb-8">
            Already have an account?{" "}
            <Link href="/login" className="text-[#F5A623] hover:underline">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder:text-gray-500 focus:border-[#F5A623] focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder:text-gray-500 focus:border-[#F5A623] focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder:text-gray-500 focus:border-[#F5A623] focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-12 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder:text-gray-500 focus:border-[#F5A623] focus:outline-none transition-colors"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white placeholder:text-gray-500 focus:border-[#F5A623] focus:outline-none transition-colors"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 rounded border-gray-600 bg-[#1a1a1a] text-[#F5A623] focus:ring-[#F5A623]"
              />
              <span className="text-sm text-gray-400">
                I agree to the{" "}
                <Link href="#" className="text-[#F5A623] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#F5A623] hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3 bg-[#F5A623] text-black font-semibold rounded-lg hover:bg-[#D4900A] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Back to Home */}
          <p className="text-center mt-8 text-gray-500 text-sm">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">
              Back to Home
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-K31IstQpnyBEcDrI12PK1qROq51k2T.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-center items-end px-12 text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-8 justify-end">
              <span className="font-serif text-3xl text-white">Luxe Dine</span>
              <div className="w-12 h-12 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
                <ChefHat className="w-7 h-7 text-[#F5A623]" />
              </div>
            </Link>
            <h1 className="font-serif text-4xl lg:text-5xl text-white leading-tight mb-4">
              Join Our
              <br />
              <span className="text-[#F5A623]">Exclusive Community</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Create an account to enjoy exclusive offers, track your orders, and make reservations seamlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
