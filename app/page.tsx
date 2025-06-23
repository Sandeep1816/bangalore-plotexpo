'use client';

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, ChevronRight, UserPlus, Megaphone, Layers, Building, Eye, Users2 } from "lucide-react";
import { zenTokyoZoo } from './fonts'; // adjust path if needed
import { motion } from "framer-motion";
import StatsSection from "./components/StatsSection";
import PastSponsors from "./components/PastSponsors";
import AboutPage from "./about/page";

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
        <div className="absolute inset-0"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start pt-28">
          <div className="max-w-2xl ml-0 md:ml-20 px-4 md:px-0">
<h1
  className={`${zenTokyoZoo.className} text-[36px] sm:text-[64px] md:text-[96px] lg:text-[128px] leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#008815] inline-block whitespace-normal sm:whitespace-nowrap`}
>
  Bengaluru Plot Expo 2025
</h1>

            <div className="text-white mb-8 mt-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">02 - 03 August 2025</h2>
              <p className="text-md sm:text-lg">White House Convention Centre</p>
              <p className="text-md sm:text-lg">HSR Layout Next to BDA Complex</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
              <img src="/images/about.png" alt="About BPE 2025" className="rounded-lg w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00620F] mb-6">About Us</h2>
              <p className="text-gray-700 mb-4">
                Welcome to the <strong className="text-[#00620F]">Bengaluru Plot Expo 2025</strong> — the city's largest and most exclusive real estate showcase dedicated entirely to plot and farmland investments.
              </p>
              <p className="text-gray-700 mb-6">
                This two-day mega event is designed to bring together leading developers, land aggregators, and investors under one roof. Whether you're looking to showcase your plotted development, reach a premium audience, or connect with potential buyers, <strong className="text-[#00620F]">BPE 2025</strong> offers the perfect platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="outline" className="border-[#00620F] text-[#00620F] hover:bg-green-50">Know More</Button>
                <Button className="bg-[#00620F] hover:bg-[#004d0c]">Exhibit</Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <AboutPage />

      {/* Stats Section */}

      <StatsSection />

      {/* Why Exhibit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00620F] text-center mb-10">
            Why Exhibit at BPE 2025?
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
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
                className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                {point.icon}
                <h3 className="font-semibold text-[#00620F] mb-2">{point.title}</h3>
                <p className="text-gray-700">{point.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              Whether you're a developer aiming to boost project visibility or an investor seeking your next great opportunity, <span className="font-semibold text-[#00620F]">#BPE 2025</span> is where connections are made and dreams take shape.
            </p>
          </div>
        </div>
      </section>



      <PastSponsors />

      {/* Past Events Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">Past Event</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {['bpe1.png', 'bpe2.png', 'bpe3.png', 'bpe4.png', 'bpe5.png', 'bpe6.png'].map((img, i) => (
        <div key={i} className="rounded-lg overflow-hidden aspect-square">
          <img src={`/images/past-events/${img}`} alt={`Event ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    <div className="text-center mt-10">
      <Link href="/past-event" passHref>
        <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md">
          View All
        </Button>
      </Link>
    </div>
  </div>
</section>

    </div>
  );
}
