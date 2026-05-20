"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, User, Clock, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "1",
    title: "The Art of Fine Dining",
    content: `Fine dining is more than just food—it's an experience that engages all your senses and creates lasting memories. From the moment you step through our doors, every detail is carefully orchestrated to provide an unforgettable journey.

The ambiance plays a crucial role in fine dining. Soft lighting, elegant décor, and carefully curated music create an atmosphere of sophistication and comfort. Our staff is trained to provide attentive yet unobtrusive service, ensuring your needs are anticipated before you even realize them.

At the heart of fine dining is, of course, the cuisine. Our chefs approach each dish as a work of art, balancing flavors, textures, and visual presentation. Every ingredient is selected for its quality and freshness, sourced from trusted suppliers who share our commitment to excellence.

The dining experience extends beyond the plate. Wine pairings are carefully selected to complement each course, enhancing the flavors and creating harmonious combinations. Our sommelier is always available to guide you through our extensive wine list.

Fine dining is also about pace. Unlike casual dining, where the focus is on efficiency, fine dining encourages you to slow down and savor each moment. Multiple courses allow you to experience a range of flavors, each building upon the last.

We believe that fine dining should be accessible to everyone seeking an elevated experience. Whether you're celebrating a special occasion or simply treating yourself, we invite you to discover the art of fine dining at Luxe Dine.`,
    author: "Admin",
    date: "May 28, 2024",
    readTime: "5 Min Read",
    category: "Food",
    image: "https://plastic-harlequin-falzqb7xv7.edgeone.app/5aa044f8-60d4-41b0-843c-2fbd2e3c9e20.png",
  },
  {
    id: "2",
    title: "10 Secrets to a Perfect Steak",
    content: `A perfectly cooked steak is the hallmark of any great steakhouse, and achieving that restaurant-quality result at home is entirely possible with the right techniques.

1. Start with quality: The foundation of a great steak is quality meat. Look for well-marbled cuts with good fat distribution.

2. Room temperature: Always let your steak come to room temperature before cooking. This ensures even cooking throughout.

3. Season generously: Don't be shy with salt and pepper. Season your steak liberally on both sides.

4. High heat: Use a cast-iron skillet or grill at high heat. You want to hear that satisfying sizzle when the steak hits the pan.

5. Don't move it: Resist the urge to flip your steak constantly. Let it develop a beautiful crust before turning.

6. Use a thermometer: For consistent results, use an instant-read thermometer to check doneness.

7. Butter basting: In the final minutes, add butter, garlic, and herbs to the pan and baste your steak for extra flavor.

8. Rest your steak: This is crucial. Let your steak rest for 5-10 minutes after cooking to allow the juices to redistribute.

9. Slice against the grain: When cutting, always slice against the grain for maximum tenderness.

10. Season after resting: A final sprinkle of flaky salt before serving adds texture and flavor.

Master these techniques, and you'll be serving steakhouse-quality meat in no time.`,
    author: "Chef John",
    date: "May 25, 2024",
    readTime: "4 Min Read",
    category: "Tips",
    image: "https://convincing-amaranth-vbowjc0qic.edgeone.app/51409a82-8ae2-4dba-9d5b-7372fc1fbed0.jpg",
  },
]

const relatedPosts = [
  { id: "2", title: "10 Secrets to a Perfect Steak", date: "May 25, 2024", image: "https://convincing-amaranth-vbowjc0qic.edgeone.app/51409a82-8ae2-4dba-9d5b-7372fc1fbed0.jpg" },
  { id: "3", title: "Healthy Eating Tips", date: "May 20, 2024", image: "https://busy-green-zcdd9y1coh.edgeone.app/7d7d2b91-b516-4735-8c2d-0b9900fad287.jpg" },
  { id: "4", title: "Wine Pairing Guide", date: "May 18, 2024", image: "https://fashionable-olive-wsenhwofnt.edgeone.app/08b11099-cea3-41c0-8dce-d59400367731.jpg" },
]

export default function BlogDetailPage() {
  const params = useParams()
  const post = blogPosts.find((p) => p.id === params.id) || blogPosts[0]

  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-3 py-1 bg-[#F5A623] text-black text-xs font-semibold uppercase mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </motion.article>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <span className="text-white font-semibold">Share:</span>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 bg-[#1a1a1a] rounded-lg flex gap-6">
            <div className="w-20 h-20 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
              <User className="w-10 h-10 text-black" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white">{post.author}</h3>
              <p className="text-gray-400 text-sm mt-2">
                A passionate writer and food enthusiast dedicated to sharing culinary knowledge and inspiring others to explore the world of fine dining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-white mb-8">
            Related Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-xs mb-2">{relatedPost.date}</p>
                    <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#F5A623] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[#F5A623] text-sm mt-3">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
