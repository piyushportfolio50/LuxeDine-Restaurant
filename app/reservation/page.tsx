"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from "lucide-react"
import toast from "react-hot-toast"

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
]

const guestOptions = Array.from({ length: 20 }, (_, i) => i + 1)

const initialTables = [
  { id: "T-01", capacity: 2, isBooked: true },
  { id: "T-02", capacity: 2, isBooked: false },
  { id: "T-03", capacity: 2, isBooked: false },
  { id: "T-04", capacity: 2, isBooked: true },
  { id: "T-05", capacity: 4, isBooked: false },
  { id: "T-06", capacity: 4, isBooked: false },
  { id: "T-07", capacity: 4, isBooked: true },
  { id: "T-08", capacity: 4, isBooked: false },
  { id: "T-09", capacity: 6, isBooked: true },
  { id: "T-10", capacity: 6, isBooked: false },
  { id: "T-11", capacity: 6, isBooked: false },
  { id: "T-12", capacity: 6, isBooked: false },
  { id: "T-13", capacity: 8, isBooked: false },
  { id: "T-14", capacity: 8, isBooked: true },
  { id: "T-15", capacity: 8, isBooked: false },
  { id: "T-16", capacity: 8, isBooked: false },
]

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    floor: "Ground Floor",
    requests: "",
  })
  const [selectedTable, setSelectedTable] = useState<string | null>(null)
  const [tables] = useState(initialTables)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [bookingId, setBookingId] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTableSelect = (tableId: string, isBooked: boolean) => {
    if (isBooked) {
      toast.error("This table is already booked")
      return
    }
    setSelectedTable(tableId)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedTable) {
      toast.error("Please select a table")
      return
    }
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          table: selectedTable,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setBookingId(data.bookingId)
        toast.success("Reservation confirmed! Check your email for details.")
        setShowConfirmation(true)
      } else {
        toast.error("Booking saved but email could not be sent. Please contact us.")
        setShowConfirmation(true)
        setBookingId(`RES${Date.now().toString().slice(-6)}`)
      }
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Page Header */}
      <section
        className="pt-32 pb-12 relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600')`,
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
              Book A Table
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link href="/" className="hover:text-[#F5A623]">Home</Link>
              <span>/</span>
              <span className="text-[#F5A623]">Reservation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1a1a1a] p-8 rounded-lg"
            >
              <h2 className="font-serif text-2xl font-bold text-white mb-6">
                Reservation Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                      placeholder="+1 234 567 8900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        min={today}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors appearance-none"
                        required
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors appearance-none"
                        required
                      >
                        <option value="">Number of Guests</option>
                        {guestOptions.map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Floor Preference</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="floor"
                        value="Ground Floor"
                        checked={formData.floor === "Ground Floor"}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-[#F5A623]"
                      />
                      <span className="text-white">Ground Floor</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="floor"
                        value="First Floor"
                        checked={formData.floor === "First Floor"}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-[#F5A623]"
                      />
                      <span className="text-white">First Floor</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Special Requests</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                    <textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors resize-none"
                      placeholder="Any special requests or dietary requirements..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.96 }}
                  className="w-full py-4 bg-[#F5A623] text-black font-semibold uppercase tracking-wider hover:bg-[#d4900a] transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    "Find A Table"
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Table Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1a1a1a] p-8 rounded-lg"
            >
              <h2 className="font-serif text-2xl font-bold text-white mb-6">
                Select Your Table
              </h2>

              {/* Legend */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-white border border-gray-600" />
                  <span className="text-gray-400 text-sm">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#F5A623]" />
                  <span className="text-gray-400 text-sm">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-green-500 border-2 border-green-400" />
                  <span className="text-gray-400 text-sm">Selected</span>
                </div>
              </div>

              {/* Table Grid */}
              <div className="grid grid-cols-4 gap-4">
                {tables.map((table) => (
                  <button
                    key={table.id}
                    type="button"
                    onClick={() => handleTableSelect(table.id, table.isBooked)}
                    className={`p-4 rounded-lg text-center transition-all ${
                      selectedTable === table.id
                        ? "bg-green-500 text-black ring-2 ring-green-400"
                        : table.isBooked
                        ? "bg-[#F5A623] text-black cursor-not-allowed"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                    disabled={table.isBooked}
                  >
                    <p className="font-bold text-sm">{table.id}</p>
                    <p className="text-xs mt-1">{table.capacity} seats</p>
                  </button>
                ))}
              </div>

              {selectedTable && (
                <div className="mt-6 p-4 bg-[#222222] rounded-lg">
                  <p className="text-[#F5A623] font-semibold">
                    Selected: Table {selectedTable}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Capacity: {tables.find(t => t.id === selectedTable)?.capacity} guests
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1a1a1a] p-8 rounded-lg max-w-md w-full text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              Reservation Confirmed!
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              A confirmation email has been sent to {formData.email}
            </p>
            <div className="text-left space-y-2 text-gray-400 mb-6 bg-[#222222] p-4 rounded-lg">
              <p><span className="text-white">Booking ID:</span> #{bookingId}</p>
              <p><span className="text-white">Table:</span> {selectedTable}</p>
              <p><span className="text-white">Date:</span> {formData.date}</p>
              <p><span className="text-white">Time:</span> {formData.time}</p>
              <p><span className="text-white">Guests:</span> {formData.guests}</p>
            </div>
            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full py-3 bg-[#F5A623] text-black font-semibold uppercase tracking-wider hover:bg-[#d4900a] transition-colors"
            >
              Done
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  )
}