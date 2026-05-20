"use client"

import { useState, useEffect } from "react" // useEffect add kiya script initialization ke liye
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChefHat, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import toast from "react-hot-toast"
import Script from "next/script" // Next.js Script component

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  // Google Sign-In response handler
  const handleGoogleResponse = async (response: any) => {
    setIsLoading(true)
    try {
      // Decode JWT token to get user info (or pass it to your backend)
      const base64Url = response.credential.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )

      const user = JSON.parse(jsonPayload)
      
      // user.name aur user.email Google se mil jayenge
      login(user.name, user.email)
      
      toast.success(`Welcome back, ${user.name}!`)
      router.push("/")
    } catch (error) {
      toast.error("Google Sign-In failed!")
    } finally {
      setIsLoading(false)
    }
  }

 // Google Sign-In initialization
  const initializeGoogleSignIn = () => {
    if ((window as any).google) {
      (window as any).google.accounts.id.initialize({
        client_id: "498232251545-eh8n3ks5vgj7vi1iqmop4nqjs704mt3g.apps.googleusercontent.com", // <-- Aapki ID yahan aa gayi
        callback: handleGoogleResponse,
      })
    }
  }

  // Custom button par click hone par Google Prompt kholne ke liye function
  const handleGoogleClick = () => {
    if ((window as any).google) {
      (window as any).google.accounts.id.prompt() // Yeh small overlay ya popup open karega
    } else {
      toast.error("Google SDK not loaded yet. Please try again.")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const name = formData.email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase())
    
    login(name, formData.email)
    
    toast.success(`Welcome back, ${name}!`)
    setIsLoading(false)
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-[#111111] flex">
      {/* Google Script Loader */}
      <Script 
        src="https://accounts.google.com/gsi/client" 
        onLoad={initializeGoogleSignIn} 
        strategy="afterInteractive"
      />

      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.openai.com/static-rsc-4/hIeGPtyPmaS2DiqgKzF55NkYwmNy9sBmfIbTmG3n-kymbuoyewFQ_aXLiwX4I7yfL5_-zPslUDc-HgF6LXdFWG4GF_kJK-m4comVbgunV54LtiKEqRNYliHloRSzUC9RfxRh23XEHe3iYMNvBPr7k8GYqqmE7dkfreB9blJ3Kd3hpDN1j6sno881R_ZQ9rJn?purpose=fullsize')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-center px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
                <ChefHat className="w-7 h-7 text-[#F5A623]" />
              </div>
              <span className="font-serif text-3xl text-white">Luxe Dine</span>
            </Link>
            <h1 className="font-serif text-4xl lg:text-5xl text-white leading-tight mb-4">
              Welcome Back to
              <br />
              <span className="text-[#F5A623]">Culinary Excellence</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Sign in to access your reservations, orders, and exclusive member benefits.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
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

          <h2 className="font-serif text-3xl text-white mb-2">Sign In</h2>
          <p className="text-gray-400 mb-8">
            {"Don't have an account? "}
            <Link href="/register" className="text-[#F5A623] hover:underline">
              Create one
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter your password"
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

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 bg-[#1a1a1a] text-[#F5A623] focus:ring-[#F5A623]"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-[#F5A623] hover:underline">
                Forgot Password?
              </Link>
            </div>

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
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            {/* Google Button - onClick add kiya hai */}
            <button 
              onClick={handleGoogleClick}
              className="flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white hover:border-[#F5A623] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg text-white hover:border-[#F5A623] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Back to Home */}
          <p className="text-center mt-8 text-gray-500 text-sm">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">
              Back to Home
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}