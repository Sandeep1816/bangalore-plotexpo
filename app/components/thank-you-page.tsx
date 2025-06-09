"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

const ThankYouPage = () => {
  const [showCheckmark, setShowCheckmark] = useState(false)
  const searchParams = useSearchParams()
  const type = (searchParams.get("type") ?? "").toLowerCase()

  const validTypes = ["exhibitor", "visitor", "sponsor", "enquiry", "registration"]
  const titleMap: Record<string, string> = {
    exhibitor: "Exhibitor",
    visitor: "Visitor",
    sponsor: "Sponsor",
    enquiry: "Enquiry",
    registration: "Registration",
  }

  const heading = titleMap[type] || "Registration"

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && type === "exhibitor") {
      window.gtag("event", "conversion_event_submit_lead_form_1")
    }

    const timer = setTimeout(() => {
      setShowCheckmark(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [type])

  if (!type || !validTypes.includes(type)) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Invalid Registration Type</h1>
        <p className="text-gray-700 mb-4">The registration type provided in the URL is not recognized.</p>
        <Link href="/register" className="text-[#406E24] underline hover:text-[#2d4f1a]">
          Go back to registration
        </Link>
      </div>
    )
  }

  const messages: Record<string, { title: string; bold: string; description: string; date: string; venue: string }> = {
    exhibitor: {
      title: "Thank You For Your Exhibitor Registration!",
      bold: "You are now part of the Bangalore Plot Expo 2025 community",
      description: "Our team will be in touch with you soon to discuss your exhibition requirements.",
      date: "26-27 July 2025",
      venue: "White House Convention Centre, HSR Layout Next to BDA Complex",
    },
    visitor: {
      title: "Thank You For Your Visitor Registration!",
      bold: "You are now registered for Bangalore Plot Expo 2025",
      description: "We look forward to seeing you at the event. You will receive further details via email.",
      date: "26-27 July 2025",
      venue: "White House Convention Centre, HSR Layout Next to BDA Complex",
    },
    sponsor: {
      title: "Thank You For Your Sponsorship Interest!",
      bold: "You are now part of the Bangalore Plot Expo 2025 community",
      description: "Our sponsorship team will contact you shortly to discuss partnership opportunities.",
      date: "26-27 July 2025",
      venue: "White House Convention Centre, HSR Layout Next to BDA Complex",
    },
    enquiry: {
      title: "Thank You For Your Enquiry!",
      bold: "We have received your message about Bangalore Plot Expo 2025",
      description: "Our team will get back to you within 24 hours with the information you requested.",
      date: "26-27 July 2025",
      venue: "White House Convention Centre, HSR Layout Next to BDA Complex",
    },
    registration: {
      title: "Thank You For Your Registration!",
      bold: "You are now registered for Bangalore Plot Expo 2025",
      description: "Our team will be in touch with you soon with further details.",
      date: "26-27 July 2025",
      venue: "White House Convention Centre, HSR Layout Next to BDA Complex",
    },
  }

  const { title, bold, description, date, venue } = messages[type]

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center px-4 py-12 bg-white mt-8">
      {/* Header Card */}
      <div className="w-full max-w-2xl rounded-t-lg py-4 text-white font-bold text-2xl bg-[#406E24] mt-8">
        Bangalore Plot Expo 2025 - {heading}
      </div>

      {/* Checkmark */}
      <div
        className={`bg-[#406E24] rounded-full w-24 h-24 flex items-center justify-center mt-6 mb-6 transition-opacity duration-500 ${
          showCheckmark ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M5 13l4 4L19 7"
            strokeDasharray="22"
            strokeDashoffset={showCheckmark ? "0" : "22"}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
      </div>

      {/* Messages */}
      <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-lg font-semibold text-gray-800 mb-1">{bold}</p>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Event Details */}
      <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto mb-8">
        <h4 className="text-lg font-semibold text-[#406E24] mb-2">Event Details</h4>
        <p className="text-gray-700 font-medium">{date}</p>
        <p className="text-gray-600 text-sm mt-1">{venue}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-6 mt-6 flex-wrap justify-center">
        <Link
          href="/exhibitors"
          className="flex items-center gap-2 text-[#406E24] font-medium hover:text-[#2d4f1a] transition-colors"
        >
          <div className="bg-green-100 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#406E24]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path
                fillRule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          View Exhibitors
        </Link>

        <Link
          href="/schedule"
          className="flex items-center gap-2 text-[#406E24] font-medium hover:text-[#2d4f1a] transition-colors"
        >
          <div className="bg-green-100 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#406E24]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          Event Schedule
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-2 text-[#406E24] font-medium hover:text-[#2d4f1a] transition-colors"
        >
          <div className="bg-green-100 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#406E24]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          Contact Us
        </Link>
      </div>

      {/* Additional Information */}
      <div className="mt-12 max-w-2xl mx-auto text-center">
        <p className="text-sm text-gray-500 mb-2">
          For any queries, please contact us at{" "}
          <a href="mailto:info@bangaloreplotexpo.com" className="text-[#406E24] hover:underline">
            info@bangaloreplotexpo.com
          </a>
        </p>
        <p className="text-sm text-gray-500">
          Follow us on social media for the latest updates about Bangalore Plot Expo 2025
        </p>
      </div>
    </div>
  )
}

export default ThankYouPage
