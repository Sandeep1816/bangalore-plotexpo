"use client"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
<nav className="relative bg-[#00620F] text-white px-4 py-2 z-10">
  <div className="container mx-auto flex items-center justify-between relative">
    
    {/* Left: Logo spacer */}
    <div className="w-[200px] h-[60px]" />

    {/* Center: Navigation links */}
    <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
      <Link href="/" className="hover:text-green-200 font-semibold transition-colors">
        Home
      </Link>
      <Link href="/about" className="hover:text-green-200 font-semibold transition-colors">
        About Us
      </Link>
      <Link href="/past-event" className="hover:text-green-200 font-semibold transition-colors">
        Past Event
      </Link>
    </div>

    {/* Right: CTA and mobile menu */}
    <div className="flex items-center ml-auto space-x-4">
      <div className="hidden md:block">
        <Button
          asChild
          className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-6"
        >
          <Link href="/registration">BOOK YOUR STALL</Link>
        </Button>
      </div>
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Logo that overflows below navbar */}
    <div className="absolute top-full left-0 mt-[-65px] h-[160px] w-[200px] z-20">
      <Link href="/">
        <img
          src="/images/bpe-logo.png"
          alt="BPE Logo"
          className="h-full w-auto object-contain"
        />
      </Link>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden mt-4 pb-4 px-4 space-y-4">
      <Link href="/" className="block hover:text-green-200" onClick={() => setIsMenuOpen(false)}>
        Home
      </Link>
      <Link href="/about" className="block hover:text-green-200" onClick={() => setIsMenuOpen(false)}>
        About Us
      </Link>
      <Link href="/past-event" className="block hover:text-green-200" onClick={() => setIsMenuOpen(false)}>
        Past Event
      </Link>
      <Button asChild className="bg-white text-green-700 hover:bg-gray-100 font-semibold w-fit">
        <Link href="/registration" onClick={() => setIsMenuOpen(false)}>
          BOOK YOUR STALL
        </Link>
      </Button>
    </div>
  )}
</nav>

  )
}
