import { Button } from "@/app/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-12">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Replaced Image with Video (larger size) */}
            <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/WhatsApp Video 2025-06-12 at 12.23.03.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">About Us</h1>
              <p className="text-gray-700 mb-4 text-lg">
                Welcome to the <strong className="text-[#00620F]">Bengaluru Plot Expo 2025</strong> — the city's largest and most exclusive real
                estate showcase dedicated entirely to plot and farmland investments.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                This two-day mega event is designed to bring together leading developers, land aggregators, and
                investors under one roof. Whether you're looking to showcase your plotted development, reach a premium
                audience, or connect with potential buyers, <strong className="text-[#00620F]">BPE 2025</strong> offers the perfect platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/about" passHref>
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Know More
                </Button>
                </Link>
                <Link href="/registration?type=exhibitor" passHref>
  <Button className="bg-green-700 hover:bg-green-800">Exhibit</Button>
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Event Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4">When & Where</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Date:</strong> 02 - 03 August 2025</p>
                  <p><strong>Venue:</strong> White House Convention Centre</p>
                  <p><strong>Location:</strong> HSR Layout Next to BDA Complex</p>
                  <p><strong>City:</strong> Bengaluru, Karnataka</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Event Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 35+ Expected Exhibitors</li>
                  <li>• Premium Plot Showcases</li>
                  <li>• Farmland Investment Opportunities</li>
                  <li>• Networking Sessions</li>
                  <li>• Expert Panel Discussions</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create the most comprehensive platform for plot and farmland investments in Bengaluru, connecting
                serious investors with verified developers and premium land opportunities. We aim to facilitate
                transparent, profitable, and sustainable real estate investments that contribute to the growth of
                Bengaluru's real estate ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
