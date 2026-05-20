"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "1",
    title: "The Art of Fine Dining",
    excerpt: "Discover the secrets behind creating an unforgettable dining experience that engages all your senses and creates lasting memories.",
    author: "Admin",
    date: "May 28, 2024",
    readTime: "5 Min Read",
    category: "Food",
    image: "https://plastic-harlequin-falzqb7xv7.edgeone.app/5aa044f8-60d4-41b0-843c-2fbd2e3c9e20.png",
    featured: true,
  },
  {
    id: "2",
    title: "10 Secrets to a Perfect Steak",
    excerpt: "Learn the techniques that our chefs use to create the perfect steak every time, from selection to seasoning to searing.",
    author: "Chef John",
    date: "May 25, 2024",
    readTime: "4 Min Read",
    category: "Tips",
    image: "https://convincing-amaranth-vbowjc0qic.edgeone.app/51409a82-8ae2-4dba-9d5b-7372fc1fbed0.jpg",
    featured: false,
  },
  {
    id: "3",
    title: "Healthy Eating Tips",
    excerpt: "Maintaining a healthy diet without compromising on taste. Our nutritionist shares the best practices for balanced meals.",
    author: "Nutritionist",
    date: "May 20, 2024",
    readTime: "3 Min Read",
    category: "Health",
    image: "https://busy-green-zcdd9y1coh.edgeone.app/7d7d2b91-b516-4735-8c2d-0b9900fad287.jpg",
    featured: false,
  },
  {
    id: "4",
    title: "Wine Pairing Guide",
    excerpt: "Master the art of pairing wines with your meals. A comprehensive guide for both beginners and enthusiasts.",
    author: "Sommelier",
    date: "May 18, 2024",
    readTime: "6 Min Read",
    category: "Drinks",
    image: "https://fashionable-olive-wsenhwofnt.edgeone.app/08b11099-cea3-41c0-8dce-d59400367731.jpg",
    featured: false,
  },
  {
    id: "5",
    title: "Behind the Scenes",
    excerpt: "Take a peek into our kitchen and discover how our team prepares your favorite dishes with passion and precision.",
    author: "Admin",
    date: "May 15, 2024",
    readTime: "4 Min Read",
    category: "Events",
    image: "https://swift-maroon-zfxtrpxpha.edgeone.app/5f930aa4-2fd3-441e-bba5-cfae8dd7de20.jpg",
    featured: false,
  },
  {
    id: "6",
    title: "Seasonal Ingredients",
    excerpt: "Why we source seasonal ingredients and how it makes a difference in the quality and taste of our dishes.",
    author: "Chef Michael",
    date: "May 12, 2024",
    readTime: "3 Min Read",
    category: "Food",
    image: "https://explicit-coral-qir20fy0rf.edgeone.app/843a156e-1158-48b3-ad3e-8288ed0e2502.jpg",
    featured: false,
  },
]

const categories = ["All", "Food", "Tips", "Health", "Drinks", "Events"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Page Header */}
      <section
        className="pt-32 pb-12 relative"
        style={{
          backgroundImage: `url('https://okay-maroon-qhi7anchgo.edgeone.app/bannner%20blog.jpg')`,
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
              Our Latest Blog
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Blog</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              {featuredPost && (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <Link href={`/blog/${featuredPost.id}`}>
                    <div className="relative h-80 rounded-lg overflow-hidden group">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 bg-[#F5A623] text-black text-xs font-semibold uppercase mb-3">
                          {featuredPost.category}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                          {featuredPost.title}
                        </h2>
                        <div className="flex items-center gap-4 text-gray-300 text-sm">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {featuredPost.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {featuredPost.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              )}

              {/* Regular Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#1a1a1a] rounded-lg overflow-hidden group"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#F5A623] text-black text-xs font-semibold uppercase">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>by {post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <h3 className="font-serif text-xl font-semibold text-white mb-3 hover:text-[#F5A623] transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-[#F5A623] text-sm font-semibold hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-white mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button className="w-full text-left py-2 px-3 text-gray-400 hover:text-[#F5A623] hover:bg-[#222222] transition-colors rounded">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold text-white mb-4">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex gap-3 group"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-medium group-hover:text-[#F5A623] transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-gray-500 text-xs mt-1">{post.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}