'use client'

import Image from 'next/image'
import DownloadButton from '../components/DownloadButton'

const pastEventImages = [
  '/images/2020events/bpe-2.jpg',
  '/images/2020events/bpe-4.jpg',
  '/images/2020events/bpe-6.jpg',
  '/images/2020events/bpe-7.jpg',
  '/images/2020events/bpe-9.jpg',
  '/images/2020events/bpe-12.jpg',
  '/images/2020events/bpe-13.jpg',
  '/images/2020events/bpe-14.jpg',
  '/images/2020events/bpe-18.jpg',
  '/images/2020events/bpe-20.jpg',
  '/images/2020events/bpe-21.jpg',
  '/images/2020events/bpe-22.jpg',
  '/images/2020events/bpe-23.jpg',
  '/images/2020events/bpe-26.jpg',
  '/images/2020events/bpe-27.jpg',
  '/images/2020events/bpe-28.jpg',
  '/images/2020events/bpe-29.jpg',
  '/images/2020events/bpe-30.jpg',
]

export default function PastEventPage() {
  return (
    <div className="min-h-screen py-16 relative">
      {/* Download button fixed at top right */}
      <DownloadButton />

      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-12">
          Past Event
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pastEventImages.map((src, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Event ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Previous Event Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Event Statistics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 30+ Exhibitors participated</li>
                <li>• 500+ Visitors attended</li>
                <li>• 15+ Plot projects showcased</li>
                <li>• 10+ Farmland opportunities</li>
                <li>• 95% Exhibitor satisfaction rate</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Success Stories
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Multiple plot bookings on-site</li>
                <li>• New partnerships formed</li>
                <li>• Successful investor connections</li>
                <li>• Media coverage and recognition</li>
                <li>• Positive feedback from participants</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our previous event was a tremendous success, bringing together the
              best in Bengaluru's real estate industry. The positive response and
              successful outcomes have motivated us to make BPE 2025 even bigger
              and better.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
