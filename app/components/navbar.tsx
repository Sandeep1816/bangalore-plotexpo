"use client"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative bg-[#00620F] text-white px-4 py-3 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between relative">
        
        {/* Logo: Always visible */}
        <div className="absolute top-full left-0 mt-[-65px] h-[160px] w-[200px] z-50">
          <Link href="/">
            <img
              src="/images/bpe-logo.png"
              alt="BPE Logo"
              className="h-full w-auto object-contain"
            />
          </Link>
        </div>

        {/* Spacer to preserve layout */}
        <div className="w-[200px] h-[60px]" />

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="hover:text-green-200 font-semibold transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-200 font-semibold transition-colors">
            About Us
          </Link>
<Link
  href="/registration?type=exhibitor"
  className="block text-lg font-semibold hover:text-green-200"
  onClick={() => setIsMenuOpen(false)}
>
  Exhibitor Registration
</Link>

<Link
  href="/registration?type=visitor"
  className="block text-lg font-semibold hover:text-green-200"
  onClick={() => setIsMenuOpen(false)}
>
  Visitor Registration
</Link>

        </div>

        {/* Right: CTA & Toggle */}
        <div className="flex items-center ml-auto space-x-4">
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-6"
            >
              <Link href="/registration">BOOK YOUR STALL</Link>
            </Button>
          </div>
          <button
            className="md:hidden p-2 rounded hover:bg-green-700 transition"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — appears below logo, not covering it */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-[100px] bg-[#00500C] z-40 shadow-inner px-6 pb-6 space-y-4 relative">
          <Link
            href="/"
            className="block text-lg font-semibold hover:text-green-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg font-semibold hover:text-green-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/past-event"
            className="block text-lg font-semibold hover:text-green-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Past Event
          </Link>

          <Link
  href="/registration?type=exhibitor"
  className="block text-lg font-semibold hover:text-green-200"
  onClick={() => setIsMenuOpen(false)}
>
  Exhibitor Registration
</Link>

<Link
  href="/registration?type=visitor"
  className="block text-lg font-semibold hover:text-green-200"
  onClick={() => setIsMenuOpen(false)}
>
  Visitor Registration
</Link>
          <Button
            asChild
            className="w-full bg-white text-green-700 hover:bg-gray-100 font-semibold py-3"
          >
            <Link href="/registration" onClick={() => setIsMenuOpen(false)}>
              BOOK YOUR STALL
            </Link>
          </Button>
        </div>
      )}
    </nav>
  )
}
