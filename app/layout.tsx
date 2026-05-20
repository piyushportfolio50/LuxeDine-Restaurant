import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Luxe Dine | Premium Restaurant',
  description:
    'Experience the finest culinary artistry in every bite. Premium dining experience with exquisite cuisine and elegant ambiance.',
  keywords:
    'restaurant, fine dining, luxury restaurant, gourmet food, premium cuisine',

  icons: {
    icon: 'https://primary-blush-f2ygcah8l9.edgeone.app/my%20edit.png',
    shortcut: 'https://primary-blush-f2ygcah8l9.edgeone.app/my%20edit.png',
    apple: 'https://primary-blush-f2ygcah8l9.edgeone.app/my%20edit.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} dark bg-background`}>
      <body className="font-sans antialiased bg-[#111111] text-white">
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid #F5A623',
            },
          }}
        />
      </body>
    </html>
  )
}
