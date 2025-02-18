import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import { CartProvider } from '@/lib/cart-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ModernThreads - Your Fashion Destination',
  description: 'Discover the latest trends in clothing and accessories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}