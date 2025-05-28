"use client"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#00620F] text-white px-4 py-3 relative z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo that overflows below the navbar */}
        <div className="relative">
          <Link href="/">  
          <img
            src="/images/bpe-logo.png"
            alt="BPE Logo"
            className="h-28 w-auto object-contain -mb-12 z-20 relative"
          />
          </Link>
        </div>

        {/* Desktop Navigation... */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-green-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-200 transition-colors">
            About Us
          </Link>
          <Link href="/past-event" className="hover:text-green-200 transition-colors">
            Past Event
          </Link>
        </div>

        {/* Book Your Stall Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-6">
            <Link href="/registration">BOOK YOUR STALL</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="hover:text-green-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link
              href="/past-event"
              className="hover:text-green-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Past Event
            </Link>
            <Button asChild className="bg-white text-green-700 hover:bg-gray-100 font-semibold w-fit">
              <Link href="/registration" onClick={() => setIsMenuOpen(false)}>
                BOOK YOUR STALL
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
