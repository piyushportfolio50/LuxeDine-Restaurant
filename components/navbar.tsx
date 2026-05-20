"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  ChefHat,
  Facebook,
  Instagram,
  LogOut
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"
import { useAuth } from "@/context/AuthContext"

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/menu", label: "MENU" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/reservation", label: "RESERVATION" },
  { href: "/location", label: "LOCATION" },
  { href: "/blog", label: "BLOG" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { cartCount } = useCart()
  const { user, logout } = useAuth()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    setShowDropdown(false)
    router.push("/")
  }

  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase()
  }

  const getFirstName = (name: string) => {
    return name.split(" ")[0]
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-[#F5A623]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#F5A623]",
                  pathname === link.href ? "text-[#F5A623]" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative p-2 hover:text-[#F5A623] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#F5A623] text-black text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </motion.span>
              )}
            </Link>

            {/* Auth Section */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 p-2 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-full bg-[#F5A623] text-black font-bold flex items-center justify-center">
                    {getInitials(user.name)}
                  </div>
                  <span className="text-white text-sm hidden xl:block">{getFirstName(user.name)}</span>
                </button>
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -8 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 top-full mt-2 w-56 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-xl overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-gray-700">
                        <p className="text-white font-medium truncate">{user.name}</p>
                        <p className="text-gray-400 text-sm truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 flex items-center gap-3 text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href="/login" className="p-2 hover:text-[#F5A623] transition-colors">
                <User className="w-5 h-5" />
              </Link>
            )}

            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-gray-700">
              <a href="https://www.facebook.com/profile.php?id=61589812935906&sk=directory_linkshttps://www.facebook.com/profile.php?id=61589812935906&sk=directory_links" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#F5A623] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/luxedine.premium.restaurant/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#F5A623] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-[#F5A623]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors hover:text-[#F5A623]",
                    pathname === link.href ? "text-[#F5A623]" : "text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <Link href="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm hover:text-[#F5A623]">
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#F5A623] text-black text-xs font-bold rounded-full flex items-center justify-center">
                        {cartCount > 99 ? "99+" : cartCount}
                      </span>
                    )}
                  </div>
                  Cart
                </Link>
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout ({getFirstName(user.name)})
                  </button>
                ) : (
                  <Link href="/login" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm hover:text-[#F5A623]">
                    <User className="w-5 h-5" />
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
