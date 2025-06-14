"use client";

import Image from "next/image";
import React from "react";

const sponsorLogos = [
  "/images/past-sponsor/sbi.png",
  "/images/past-sponsor/rd.png",
  "/images/past-sponsor/ts.png",
  "/images/past-sponsor/h.png",
  "/images/past-sponsor/gl.png",
  "/images/past-sponsor/log-1.png",
  "/images/past-sponsor/log-2.png",
  "/images/past-sponsor/log-3.png",
  "/images/past-sponsor/log-5.png",
  "/images/past-sponsor/log-6.png",
  "/images/past-sponsor/log-7.png",
  "/images/past-sponsor/log-8.png",
  "/images/past-sponsor/log-9.png",
  "/images/past-sponsor/log-10.png",
  "/images/past-sponsor/log-11.png",
  "/images/past-sponsor/log-12.png",
  "/images/past-sponsor/log-13.png",
  "/images/past-sponsor/log-14.png",
  "/images/past-sponsor/log-15.png",
  "/images/past-sponsor/log-16.png",
  "/images/past-sponsor/log-17.png",
  "/images/past-sponsor/log-18.png",
  "/images/past-sponsor/log-19.png",
  "/images/past-sponsor/log-20.png",
  "/images/past-sponsor/log-21.png",
  "/images/past-sponsor/log-22.png",
  "/images/past-sponsor/log-23.png",
];

export default function PastSponsors() {
  return (
    <div>
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00620F]">Past Exhibitors</h2>
      </div>

      {/* Scrolling Logos */}
      <section className="py-12 bg-[#00620F] overflow-hidden relative group">
        <div className="w-full whitespace-nowrap overflow-hidden">
          <div className="inline-flex gap-6 animate-marquee group-hover:paused">
            {[...sponsorLogos, ...sponsorLogos].map((src, index) => (
              <div
                key={index}
                className="bg-white p-3 md:p-4 rounded-md h-[120px] w-[120px] flex items-center justify-center shrink-0 transition-transform hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Sponsor ${index + 1}`}
                  width={120}
                  height={120}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 60s linear infinite;
          }

          .group:hover .animate-marquee {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 90s;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
