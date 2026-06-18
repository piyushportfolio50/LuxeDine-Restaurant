"use client"

import Link from "next/link"
import { ChefHat, Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservation", label: "Reservation" },
  { href: "/location", label: "Location" },
  { href: "/blog", label: "Blog" },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-[#F5A623]" />
              </div>
              <span className="font-serif text-xl text-white">Luxe Dine</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delicious Food. Finest Experience. Experience the culinary artistry that transforms every meal into a memorable journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F5A623] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#F5A623] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F5A623] font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+91 97520-07833</li>
              <li>Luxedinerestaurant@gamil.com</li>
              <li>123 Luxe Dine, Scheme 78,</li>
              <li>Vijay Nagar, Indore 452015</li>
              <li className="pt-2">Mon - Sun : 10:00 AM - 11:00 PM</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[#F5A623] font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61589812935906&sk=directory_links"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/luxedine.premium.restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Narendra's Restaurant. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <Link href="/menu" className="hover:text-[#F5A623] transition-colors">MENU</Link>
            <Link href="/gallery" className="hover:text-[#F5A623] transition-colors">GALLERY</Link>
            <Link href="/reservation" className="hover:text-[#F5A623] transition-colors">RESERVATION</Link>
            <Link href="/blog" className="hover:text-[#F5A623] transition-colors">BLOG</Link>
          </div>
          <div className="flex gap-3">
            <Facebook className="w-4 h-4 text-gray-500 hover:text-[#F5A623] cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 text-gray-500 hover:text-[#F5A623] cursor-pointer transition-colors" />
            <Heart className="w-4 h-4 text-gray-500 hover:text-[#F5A623] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  )
}
