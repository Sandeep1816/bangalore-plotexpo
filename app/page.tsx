'use client';

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { zenTokyoZoo } from './fonts'; // adjust path if needed
import { motion } from "framer-motion";

import {
  UserPlus,
  Megaphone,
  Layers,
  Building,
  Eye,
  Users2,
} from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};



export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bpe-hero.jpg')" }}
      >
        <div className="absolute inset-0 "></div>
<div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start pt-28">
  <div className="max-w-2xl ml-20">
<h1
  className={`${zenTokyoZoo.className} whitespace-nowrap text-[128px] leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#008815] inline-block px-4`}
>
  Bangalore Plot Expo 2025
</h1>

    <div className="text-white mb-8 mt-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">26-27 July 2025</h2>
      <p className="text-lg">White House Convention Centre</p>
      <p className="text-lg">HSR Layout Next to BDA Complex</p>
    </div>
    {/* <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-8 py-3">
      <Link href="/registration">BOOK YOUR STALL</Link>
    </Button> */}
  </div>
</div>


      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/about.png" alt="About BPE 2025" className="rounded-lg w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00620F] mb-6">About Us</h2>
              <p className="text-gray-700 mb-4">
                Welcome to the <strong>Bengaluru Plot Expo 2025</strong> — the city's largest and most exclusive real
                estate showcase dedicated entirely to plot and farmland investments.
              </p>
              <p className="text-gray-700 mb-6">
                This two-day mega event is designed to bring together leading developers, land aggregators, and
                investors under one roof. Whether you're looking to showcase your plotted development, reach a premium
                audience, or connect with potential buyers, <strong>BPE 2025</strong> offers the perfect platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="border-[#00620F] text-[#00620F] hover:bg-green-50">
                  Know More
                </Button>
                <Button className="bg-[#00620F] hover:bg-[#004d0c]">Exhibit</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#00620F]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-white rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">EXPECTED NUMBERS</h3>
              <div className="text-6xl font-bold">35</div>
            </div>
            <div className="border border-white rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">SPONSORS</h3>
              <div className="text-6xl font-bold">03</div>
            </div>
          </div>
        </div>
      </section>

{/* Why Exhibit Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-[#00620F] text-center mb-12">
      Why Exhibit at BPE 2025?
    </h2>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
    >
      {[
        {
          icon: <UserPlus className="text-[#00620F] w-8 h-8 mb-4" />,
          title: "Lead Generation Opportunity",
          text: "Connect with a high-intent audience of business owners and salaried professionals.",
        },
        {
          icon: <Megaphone className="text-[#00620F] w-8 h-8 mb-4" />,
          title: "Cost-Effective Advertising",
          text: "Promote your projects directly to a focused and affluent crowd.",
        },
        {
          icon: <Layers className="text-[#00620F] w-8 h-8 mb-4" />,
          title: "Diverse Plot Categories",
          text: "Farm lands, villa plots, society plots – all in one place.",
        },
        {
          icon: <Building className="text-[#00620F] w-8 h-8 mb-4" />,
          title: "Project Showcasing & Liquidation",
          text: "Move inventory and attract serious buyers.",
        },
        {
          icon: <Eye className="text-[#00620F] w-8 h-8 mb-4" />,
          title: "Brand Visibility",
          text: "Increase recognition among Bengaluru's real estate investment community.",
        },
        {
          icon: <Users2 className="text-[#00620F] w-8 h-8 mb-4" />,
          title: "Networking",
          text: "Meet investors, partners, and potential collaborators.",
        },
      ].map((point, index) => (
        <motion.div
          key={index}
          variants={item}
          className="flex flex-col items-center text-center p-4"
        >
          {point.icon}
          <h3 className="font-semibold text-[#00620F] mb-2">{point.title}</h3>
          <p className="text-gray-700">{point.text}</p>
        </motion.div>
      ))}
    </motion.div>

    <div className="text-center max-w-3xl mx-auto">
      <p className="text-gray-700 mb-4">
        Whether you're a developer aiming to boost project visibility or an investor seeking your next great
        opportunity, <span className="font-semibold text-[#00620F]">#BPE 2025</span> is where connections are made
        and dreams take shape.
      </p>
    </div>
  </div>
</section>



{/* Past Sponsors Section */}
{/* Heading outside the green background */}
<div className="text-center mb-6">
  <h2 className="text-3xl md:text-4xl font-bold text-[#00620F]">Past Sponsors</h2>
</div>

<section className="py-12 bg-[#00620F]">
  <div className="container mx-auto px-2">
    <div className="relative">
      <div className="flex items-center justify-between">
        <button className="text-white hover:text-green-200">
          <ChevronLeft size={28} />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 flex-1 mx-4">
          {[
            '/images/past-sponsor/sbi.png',
            '/images/past-sponsor/rd.png',
            '/images/past-sponsor/ts.png',
            '/images/past-sponsor/h.png',
            '/images/past-sponsor/gl.png',
          ].map((src, index) => (
            <div
              key={index}
              className="bg-white p-2 rounded-md aspect-square flex items-center justify-center"
            >
              <img src={src} alt={`Sponsor ${index + 1}`} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>

        <button className="text-white hover:text-green-200">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  </div>
</section>



{/* Past Events Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">Past Event</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded-lg overflow-hidden aspect-square">
        <img src="/images/past-events/bpe1.png" alt="Event 1" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-lg overflow-hidden aspect-square">
        <img src="/images/past-events/bpe2.png" alt="Event 2" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-lg overflow-hidden aspect-square">
        <img src="/images/past-events/bpe3.png" alt="Event 3" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-lg overflow-hidden aspect-square">
        <img src="/images/past-events/bpe4.png" alt="Event 4" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-lg overflow-hidden aspect-square">
        <img src="/images/past-events/bpe5.png" alt="Event 5" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-lg overflow-hidden aspect-square">
        <img src="/images/past-events/bpe6.png" alt="Event 6" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
