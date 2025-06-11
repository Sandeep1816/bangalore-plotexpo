import Link from "next/link";
import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00620F] text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Top Row */}
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Logo (untouched) */}
          <div className="flex-shrink-0 -mt-14">
            <div className="p-3 rounded mb-4">
              <img
                src="/images/bpe-logo.png"
                alt="BPE Logo"
                className="h-26 w-auto object-contain"
              />
            </div>
          </div>

          {/* Footer Sections */}
          <div className="flex flex-wrap gap-10 justify-between flex-grow">
            {/* Event Information */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Event Information</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-green-200">About</Link></li>
                <li><Link href="/conference" className="hover:text-green-200">Conference</Link></li>
                <li><Link href="/exhibition" className="hover:text-green-200">Exhibition</Link></li>
                <li><Link href="/exhibitors" className="hover:text-green-200">Exhibitors</Link></li>
              </ul>
            </div>

            {/* Participants */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Participants</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/exhibition" className="hover:text-green-200">Exhibition</Link></li>
                <li><Link href="/exhibitors" className="hover:text-green-200">Exhibitors</Link></li>
              </ul>

              <h3 className="font-semibold text-lg mb-4 mt-6">Registration</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/registration" className="hover:text-green-200">Register as Exhibitor</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
  {/* Clickable Phone Number */}
  <p className="text-sm mb-4">
    <a href="tel:9845114655" className="hover:text-green-200">9845114655</a>
  </p>

  {/* Clickable Email Address */}
  <p className="text-sm mb-4">
    <a href="mailto:annu@mindsquaremedia.com" className="hover:text-green-200">annu@mindsquaremedia.com</a>
  </p>

              <div className="flex space-x-3 mb-6">
                <Link href="#" className="hover:text-green-200"><Twitter size={20} /></Link>
                <Link href="#" className="hover:text-green-200"><Instagram size={20} /></Link>
                <Link href="#" className="hover:text-green-200"><Linkedin size={20} /></Link>
                <Link href="#" className="hover:text-green-200"><MessageCircle size={20} /></Link>
              </div>

              <div className="p-2 rounded ml-[-9px] ">
                <img
                  src="/images/mind-square-logo W (1).png"
                  alt="Mindsquare Logo"
                  className="w-auto h-20 object-contain mt-10"
                />
              </div>


            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-10 pt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-center">
            <Link href="/terms" className="hover:text-green-200">Terms and Conditions</Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-green-200">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
