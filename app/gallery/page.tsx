"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const categories = ["All", "Food", "Interior", "Events"]

const galleryImages = [
  { id: "1", src: "https://i.pinimg.com/736x/53/43/97/534397daa7e7644ce809651013a40b23.jpg", category: "Food", title: "Special Thali" },
  { id: "2", src: "https://i.pinimg.com/736x/48/98/3e/48983e3d343694dd9b780b9651e8793d.jpg", category: "Interior", title: "Seating Areas" },
  { id: "3", src: "https://i.pinimg.com/736x/d7/57/aa/d757aaadf9cb57a72ee0143984c7338b.jpg", category: "Food", title: "Famous Gulab Jamun" },
  { id: "4", src: "https://images.openai.com/static-rsc-4/wWEFDg8OIPAQMgJvHNbfXzUFBITyfIZf6KEpik4TpiiFR2PmwpiLjhcGq9DhnRV7V01XimtI1qkUger5OQLnyFof7kGiUzAbOErHQjJi1wHpr0H2qM8JTMzVQriLsuGb6Pb_eyef2BjFQ3EE5ZnI4FEktr2Dros59YcwILV304U?purpose=inline", category: "Events", title: "Private Dining" },
  { id: "5", src: "https://i.pinimg.com/736x/d3/80/9b/d3809bfeffa85090cbfe9028bc099f66.jpg", category: "Food", title: "Soft Panner Masala" },
  { id: "6", src: "https://i.pinimg.com/736x/7f/d5/bb/7fd5bb5cdc861b4b044b6e9770d66fb8.jpg", category: "Interior", title: "Family get-together Area" },
  { id: "7", src: "https://i.pinimg.com/736x/13/d4/e5/13d4e5777a92df586a9cc7de1aad488a.jpg", category: "Food", title: "Softed Khammand" },
  { id: "8", src: "https://images.openai.com/static-rsc-4/lzOpM8Ljr-XS6L0Ye3TrvciZkqgFKmcOI9XpXPtV8aPGRYBR05Ec3aEQ9EL0TDhU1a8CbbscUO3XpkV0RWZrOjgUnzBIDAgn9Nq0Nm-IZpxe9pwaondCegAHwbtfgxcyeLtktdi7FfLuTWfqmRmyrbpn1Vgp0k7FJRrpAo7WUlc?purpose=inline", category: "Events", title: "Birthday Party Halls" },
  { id: "9", src: "https://i.pinimg.com/736x/10/d7/48/10d7485fa9bac4a6f1b85d9f47407ac4.jpg", category: "Food", title: "Chef Special" },
  { id: "10", src: "https://i.pinimg.com/1200x/90/44/9f/90449fbfcf31924cd303d290a7b94f8e.jpg", category: "Interior", title: "Lounge Area" },
  { id: "11", src: "https://i.pinimg.com/1200x/ea/5c/c5/ea5cc5ccdb3abd8807c21b26fed3e4b5.jpg", category: "Food", title: "Special Idli plater" },
  { id: "12", src: "https://images.openai.com/static-rsc-4/JH-rWwS-VxzxCSm2JEk8uzeik1y7TLsX44m1_lfvMxwQIBADupfmPKSxUBk4IVD5mAKAdocoMO92jTWY0ZINrshpEx9BmUwrwZ1fYIsnqkEckNoaxpN_0gpR1MAdGbPLGOioEtSNSYPwDa3MhLkZFFUXdAJTxVWOqAacFq7sEqXazj_5bER-i1ZmaPkl2EUu?purpose=inline", category: "Events", title: "Live Music Night" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
    }
  }
  
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
    }
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Page Header */}
      <section
        className="pt-32 pb-12 relative"
        style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/4c/fc/cd/4cfccdae5f12b69084efa4d4a9c16e6a.jpg')`,
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
              Our Gallery
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Gallery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className={`relative ${index % 3 === 0 ? "h-80" : index % 3 === 1 ? "h-64" : "h-72"}`}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center">
                      <ZoomIn className="w-10 h-10 text-[#F5A623] mx-auto mb-2" />
                      <span className="px-3 py-1 bg-[#F5A623] text-black text-xs font-semibold uppercase">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white hover:text-[#F5A623] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 p-2 text-white hover:text-[#F5A623] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl h-[70vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-serif text-xl">{filteredImages[lightboxIndex].title}</h3>
                <span className="text-[#F5A623] text-sm">{filteredImages[lightboxIndex].category}</span>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 p-2 text-white hover:text-[#F5A623] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}