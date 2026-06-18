"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CreditCard, Smartphone, Building2, Banknote, Lock, ExternalLink } from "lucide-react"
import { useCart } from "@/context/CartContext"
import toast from "react-hot-toast"

const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", icon: Banknote },
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "card", label: "Credit/Debit Card", icon: CreditCard },
  { id: "netbanking", label: "Net Banking", icon: Building2 },
]

const banks = [
  { id: "sbi", name: "State Bank of India" },
  { id: "hdfc", name: "HDFC Bank" },
  { id: "icici", name: "ICICI Bank" },
  { id: "axis", name: "Axis Bank" },
  { id: "kotak", name: "Kotak Mahindra Bank" },
  { id: "pnb", name: "Punjab National Bank" },
  { id: "bob", name: "Bank of Baroda" },
  { id: "other", name: "Other Bank" },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, clearCart, cartTotal } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    instructions: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [showOrderPopup, setShowOrderPopup] = useState(false)

  // Card payment state
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvv, setCardCvv] = useState("")

  // UPI state
  const [upiId, setUpiId] = useState("")

  // Net Banking state
  const [selectedBank, setSelectedBank] = useState("")

  // Calculate totals from cart
  const subtotal = cartTotal
  const gst = subtotal * 0.18
  const deliveryFee = subtotal > 999 ? 0 : (subtotal > 0 ? 49 : 0)
  const total = Math.round(subtotal + gst + deliveryFee)

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    return parts.length ? parts.join(" ") : value
  }

  // Format expiry date
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  // Generate UPI link
  const generateUpiLink = () => {
    return `upi://pay?pa=8349400597-1@naviaxis&pn=LuxeDine&am=${total}&cu=INR&tn=LuxeDine+Order`
  }

  // Generate QR code URL
  const generateQrUrl = () => {
    const upiLink = encodeURIComponent(generateUpiLink())
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${upiLink}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!agreeTerms) {
      toast.error("Please agree to the terms and conditions")
      return
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty")
      return
    }

    // Validate based on payment method
    if (paymentMethod === "card") {
      if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        toast.error("Please fill in all card details")
        return
      }
      if (cardNumber.replace(/\s/g, "").length < 16) {
        toast.error("Please enter a valid card number")
        return
      }
    }

    if (paymentMethod === "netbanking" && !selectedBank) {
      toast.error("Please select a bank")
      return
    }

    // Clear cart after successful order
    clearCart()

    // Show popup then redirect to homepage
    setShowOrderPopup(true)
    setTimeout(() => {
      setShowOrderPopup(false)
      router.push("/")
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-[#111111]">

      {/* Order Success Popup */}
      <AnimatePresence>
        {showOrderPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-[#1a1a1a] border border-[#F5A623]/40 rounded-2xl px-10 py-10 flex flex-col items-center gap-4 shadow-2xl max-w-sm w-full mx-4"
            >
              <div className="text-6xl">🎉</div>
              <h2 className="font-serif text-2xl font-bold text-white text-center">
                Order Placed!
              </h2>
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                Your order has been placed successfully. <br />
                It will be delivered to you soon! 🛵✨
              </p>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="bg-[#F5A623] h-1 rounded-full"
                />
              </div>
              <p className="text-gray-500 text-xs">Redirecting to home...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-32 pb-24 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('https://gradual-amber-xhqrwpr97o.edgeone.app/ChatGPT%20Image%20May%2020,%202026,%2011_53_33%20AM%20(1).png')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">
              Check Out Page
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-300 text-sm font-medium">
              <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
              <span className="text-gray-500">/</span>
              <span className="text-[white]">Location</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Billing Details */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[#1a1a1a] p-8 rounded-lg"
                >
                  <h2 className="font-serif text-2xl font-bold text-white mb-6">
                    Billing Details
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Address Line 1</label>
                      <input
                        type="text"
                        value={formData.address1}
                        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                        className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Address Line 2</label>
                      <input
                        type="text"
                        value={formData.address2}
                        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                        className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">City</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">State</label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Zip Code</label>
                        <input
                          type="text"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Delivery Instructions (Optional)</label>
                      <textarea
                        value={formData.instructions}
                        onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 bg-[#222222] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors resize-none"
                        placeholder="Any special instructions for delivery..."
                      />
                    </div>

                    {/* Payment Method Selection */}
                    <div>
                      <h3 className="text-white font-semibold mb-4">Payment Method</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {paymentMethods.map((method) => (
                          <label
                            key={method.id}
                            className={`p-4 border cursor-pointer transition-colors flex flex-col items-center gap-2 ${
                              paymentMethod === method.id
                                ? "border-[#F5A623] bg-[#F5A623]/10"
                                : "border-gray-700 hover:border-gray-500"
                            }`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={method.id}
                              checked={paymentMethod === method.id}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              className="sr-only"
                            />
                            <method.icon className={`w-6 h-6 ${paymentMethod === method.id ? "text-[#F5A623]" : "text-gray-400"}`} />
                            <span className={`text-xs text-center ${paymentMethod === method.id ? "text-[#F5A623]" : "text-gray-400"}`}>
                              {method.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Payment Method Specific Content */}
                    <AnimatePresence mode="wait">
                      {/* COD Section */}
                      {paymentMethod === "cod" && (
                        <motion.div
                          key="cod"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.3 }}
                          className="p-4 bg-[#222222] rounded-lg border border-gray-700"
                        >
                          <div className="flex items-start gap-3">
                            <Banknote className="w-6 h-6 text-[#F5A623] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-white font-medium">Cash on Delivery</p>
                              <p className="text-gray-400 text-sm mt-1">
                                Pay ₹{total.toLocaleString()} cash at the time of delivery. Please keep exact change ready.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* UPI Section */}
                      {paymentMethod === "upi" && (
                        <motion.div
                          key="upi"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 bg-[#222222] rounded-lg border border-gray-700"
                        >
                          <div className="flex flex-col md:flex-row gap-6 items-center">
                            {/* QR Code */}
                            <div className="flex flex-col items-center">
                              <div className="bg-white p-3 rounded-lg">
                                <Image
                                  src={generateQrUrl()}
                                  alt="UPI QR Code"
                                  width={220}
                                  height={220}
                                  className="rounded"
                                />
                              </div>
                              <p className="text-gray-400 text-xs mt-2">Scan with GPay / PhonePe / Paytm</p>
                            </div>

                            {/* UPI Details */}
                            <div className="flex-1 w-full">
                              <p className="text-white font-semibold text-lg mb-2">
                                Amount: <span className="text-[#F5A623]">₹{total.toLocaleString()}</span>
                              </p>
                              <p className="text-gray-400 text-sm mb-4">
                                UPI ID: <span className="text-white">Pawan Baviskar
                                  <img
                                    src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"
                                    alt="UPI Icon"
                                    className="w-4 h-4 inline-block align-middle ml-1"
                                  />
                                </span>
                              </p>

                              <a
                                href={generateUpiLink()}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] text-black font-semibold rounded hover:bg-[#d4900a] transition-colors mb-4"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Open UPI App
                              </a>

                              <div className="mt-4">
                                <label className="block text-gray-400 text-sm mb-2">Or enter your UPI ID (Optional)</label>
                                <input
                                  type="text"
                                  value={upiId}
                                  onChange={(e) => setUpiId(e.target.value)}
                                  placeholder="yourname@upi"
                                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Card Section */}
                      {paymentMethod === "card" && (
                        <motion.div
                          key="card"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 bg-[#222222] rounded-lg border border-gray-700"
                        >
                          <div className="space-y-4">
                            <div>
                              <label className="block text-gray-400 text-sm mb-2">Card Number</label>
                              <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                placeholder="1234 5678 9012 3456"
                                maxLength={19}
                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-gray-400 text-sm mb-2">Cardholder Name</label>
                              <input
                                type="text"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-gray-400 text-sm mb-2">Expiry Date</label>
                                <input
                                  type="text"
                                  value={cardExpiry}
                                  onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                                  placeholder="MM/YY"
                                  maxLength={5}
                                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                                />
                              </div>
                              <div>
                                <label className="block text-gray-400 text-sm mb-2">CVV</label>
                                <input
                                  type="password"
                                  value={cardCvv}
                                  onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                                  placeholder="***"
                                  maxLength={4}
                                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm pt-2">
                              <Lock className="w-4 h-4" />
                              <span>Secured by SSL encryption</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Net Banking Section */}
                      {paymentMethod === "netbanking" && (
                        <motion.div
                          key="netbanking"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 bg-[#222222] rounded-lg border border-gray-700"
                        >
                          <p className="text-gray-400 text-sm mb-4">Select your bank:</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {banks.map((bank) => (
                              <button
                                key={bank.id}
                                type="button"
                                onClick={() => setSelectedBank(bank.id)}
                                className={`p-3 border text-sm transition-colors ${
                                  selectedBank === bank.id
                                    ? "border-[#F5A623] bg-[#F5A623]/10 text-[#F5A623]"
                                    : "border-gray-700 text-gray-400 hover:border-gray-500"
                                }`}
                              >
                                {bank.name}
                              </button>
                            ))}
                          </div>
                          {selectedBank && (
                            <p className="text-gray-400 text-sm mt-4">
                              You will be redirected to {banks.find(b => b.id === selectedBank)?.name}&apos;s secure portal to complete the payment.
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[#1a1a1a] p-6 rounded-lg sticky top-24"
                >
                  <h2 className="font-serif text-xl font-bold text-white mb-6">
                    Your Order
                  </h2>

                  {/* Order Items */}
                  <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <p className="text-gray-400 text-sm">Your cart is empty</p>
                    ) : (
                      cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-gray-400">
                            {item.name} x{item.quantity}
                          </span>
                          <span className="text-white">₹{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Summary Lines */}
                  <div className="space-y-3 pt-4 border-t border-gray-700">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>GST (18%)</span>
                      <span>₹{Math.round(gst).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Delivery Fee</span>
                      <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-700 flex justify-between">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-[#F5A623] font-bold text-xl">
                        ₹{total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-3 mt-6 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-1 accent-[#F5A623]"
                    />
                    <span className="text-gray-400 text-sm">
                      I agree to the{" "}
                      <Link href="#" className="text-[#F5A623] hover:underline">
                        Terms & Conditions
                      </Link>
                    </span>
                  </label>

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.96 }}
                    className="w-full mt-6 py-4 bg-[#F5A623] text-black font-semibold uppercase tracking-wider hover:bg-[#d4900a] transition-colors"
                  >
                    Place Order
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}