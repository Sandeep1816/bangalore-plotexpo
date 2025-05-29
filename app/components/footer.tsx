import Link from "next/link";
import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#00620F] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start -mt-11">
            <div className="p-3 rounded mb-4">
              <img
                src="/images/bpe-logo.png"
                alt="BPE Logo"
                className="h-15 w-auto object-contain"
              />
            </div>
          </div>

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

          {/* Contact + Organised By */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-sm mb-4">xxxxxxxxx</p>

            <div className="flex space-x-3 mb-6">
              <Link href="#" className="hover:text-green-200"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-green-200"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-green-200"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-green-200"><MessageCircle size={20} /></Link>
            </div>

            <div className="text-sm">
              {/* <p className="mb-2">Organised By</p> */}
              <div className="p-2 rounded ml-[-8px]">
                <img
                  src="/images/mind-square-logo W (1).png
"
                  alt="Mindsquare Logo"
                  className="w-21 h-24 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-8 pt-4">
          <div className="flex flex-col justify-center items-center text-sm">
            <div className="flex space-x-4 text-center">
              <Link href="/terms" className="hover:text-green-200">Terms and Conditions</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-green-200">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
