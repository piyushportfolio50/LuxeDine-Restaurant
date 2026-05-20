"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import toast from "react-hot-toast"

const faqs = [
  {
    question: "What are your operating hours?",
    answer: "We are open Monday through Sunday from 10:00 AM to 11:00 PM. Kitchen closes at 10:30 PM.",
  },
  {
    question: "Do you accept reservations?",
    answer: "Yes, we accept reservations both online and by phone. We recommend booking at least 24 hours in advance for the best availability.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer complimentary valet parking for our guests. There is also a public parking lot nearby.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Absolutely! Our chefs can accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and allergies. Please inform us when making your reservation.",
  },
  {
    question: "Can I host a private event at your restaurant?",
    answer: "Yes, we have private dining spaces available for events of various sizes. Please contact us for more information and availability.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent successfully! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Contact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1a1a1a] p-8 rounded-lg"
            >
              <h2 className="font-serif text-2xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors appearance-none"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="catering">Catering Services</option>
                    <option value="feedback">Feedback</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors resize-none"
                    placeholder="Write your message here..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#F5A623] text-black font-semibold uppercase tracking-wider hover:bg-[#d4900a] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-[#1a1a1a] p-8 rounded-lg">
                <h2 className="font-serif text-2xl font-bold text-white mb-6">
                  Our In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#F5A623]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Call Us</h3>
                      <p className="text-gray-400">+1 234 567 8900</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#F5A623]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email Us</h3>
                      <p className="text-gray-400">info@restaurant.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#F5A623]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Visit Us</h3>
                      <p className="text-gray-400">123 Food Street, Flavor Town,<br />Delicious City, DC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#F5A623]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Working Hours</h3>
                      <p className="text-gray-400">Mon - Sun : 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#F5A623] hover:border-[#F5A623] transition-colors">
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-0.5 bg-[#F5A623] mx-auto" />
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#F5A623] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
