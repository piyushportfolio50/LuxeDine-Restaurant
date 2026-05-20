"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  ChefHat, 
  User, 
  ShoppingBag, 
  Calendar, 
  MapPin, 
  CreditCard, 
  Settings, 
  LogOut,
  Bell,
  ChevronRight,
  Clock,
  CheckCircle,
  Truck,
  Package
} from "lucide-react"
import { menuItems } from "@/lib/data"

const sidebarItems = [
  { icon: User, label: "Dashboard", href: "/dashboard", active: true },
  { icon: ShoppingBag, label: "My Orders", href: "/dashboard/orders" },
  { icon: Calendar, label: "Reservations", href: "/dashboard/reservations" },
  { icon: MapPin, label: "Addresses", href: "/dashboard/addresses" },
  { icon: CreditCard, label: "Payment Methods", href: "/dashboard/payments" },
  { icon: Settings, label: "Profile Settings", href: "/dashboard/settings" },
]

const recentOrders = [
  { id: "#ORD12345", date: "May 20, 2024", total: "$82.47", status: "Delivered" },
  { id: "#ORD12344", date: "May 18, 2024", total: "$65.20", status: "Completed" },
  { id: "#ORD12343", date: "May 15, 2024", total: "$45.99", status: "Completed" },
]

const upcomingReservations = [
  { id: 1, date: "May 25, 2024", time: "7:00 PM", guests: 4, table: "Table 5" },
  { id: 2, date: "June 2, 2024", time: "8:30 PM", guests: 2, table: "Table 12" },
]

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between px-4 lg:px-8 h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#F5A623] flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-[#F5A623]" />
            </div>
            <span className="font-serif text-xl text-white hidden sm:block">Luxe Dine</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#F5A623] rounded-full" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center">
                <span className="text-black font-semibold">JD</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white text-sm font-medium">John Doe</p>
                <p className="text-gray-500 text-xs">john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 bg-[#0a0a0a] border-r border-gray-800 p-6">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-[#F5A623]/10 text-[#F5A623]"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Logout</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="font-serif text-3xl text-white mb-2">Welcome, John Doe</h1>
              <p className="text-gray-400">{"Here's what's happening with your account"}</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">12</p>
                    <p className="text-gray-500 text-sm">Total Orders</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">2</p>
                    <p className="text-gray-500 text-sm">Upcoming Reservations</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">3</p>
                    <p className="text-gray-500 text-sm">Saved Addresses</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">2</p>
                    <p className="text-gray-500 text-sm">Payment Methods</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <h2 className="font-serif text-xl text-white">Recent Orders</h2>
                  <Link href="/dashboard/orders" className="text-[#F5A623] text-sm hover:underline flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="divide-y divide-gray-800">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
                          <Package className="w-5 h-5 text-[#F5A623]" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{order.id}</p>
                          <p className="text-gray-500 text-sm">{order.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{order.total}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "Delivered" 
                            ? "bg-green-500/10 text-green-500" 
                            : "bg-blue-500/10 text-blue-500"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Reservations */}
              <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <h2 className="font-serif text-xl text-white">Upcoming Reservations</h2>
                  <Link href="/dashboard/reservations" className="text-[#F5A623] text-sm hover:underline flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="divide-y divide-gray-800">
                  {upcomingReservations.map((res) => (
                    <div key={res.id} className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{res.date}</p>
                          <p className="text-gray-500 text-sm">{res.time} - {res.guests} Guests</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[#F5A623] text-sm">{res.table}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Favorite Items */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-white">Your Favorite Items</h2>
                <Link href="/menu" className="text-[#F5A623] text-sm hover:underline flex items-center gap-1">
                  Browse Menu <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {menuItems.slice(0, 4).map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -5 }}
                    className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800"
                  >
                    <div className="relative h-40">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium mb-1">{item.name}</h3>
                      <p className="text-[#F5A623] font-semibold">${item.price.toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Tracking Example */}
            <div className="mt-8 bg-[#1a1a1a] rounded-xl border border-gray-800 p-6">
              <h2 className="font-serif text-xl text-white mb-6">Track Your Order</h2>
              <div className="flex items-center justify-between max-w-2xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-sm text-green-500 font-medium">Order Placed</span>
                </div>
                <div className="flex-1 h-1 bg-green-500 mx-2" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#F5A623]/20 flex items-center justify-center mb-2">
                    <Clock className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <span className="text-sm text-[#F5A623] font-medium">Preparing</span>
                </div>
                <div className="flex-1 h-1 bg-gray-700 mx-2" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-2">
                    <Truck className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">On The Way</span>
                </div>
                <div className="flex-1 h-1 bg-gray-700 mx-2" />
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">Delivered</span>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">Estimated Delivery Time: <span className="text-white">30 - 40 Min</span></p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-gray-800 px-6 py-3">
        <div className="flex items-center justify-around">
          {sidebarItems.slice(0, 5).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 ${
                item.active ? "text-[#F5A623]" : "text-gray-500"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label.split(" ")[0]}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
