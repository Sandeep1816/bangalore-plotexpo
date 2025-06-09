"use client"
import { Button } from "@/app/components/ui/button"
import { CheckCircle, Info, CalendarCheck } from "lucide-react"

export default function RegistrationThankYou() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <div className="flex flex-col justify-center min-h-[600px]">
          {/* Header */}
          <div className="bg-[#00620F] text-white text-center py-8 rounded-t-lg mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold">Enquiry</h1>
          </div>

          {/* Main content */}
          <div className="bg-white text-center space-y-6 px-8 pb-8 rounded-b-lg">
            {/* Checkmark icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#00620F] rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Thank You For Your Enquiry!
            </h2>

            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              You are now part of the Bengaluru Plot Expo 2025
            </h3>

            <div className="space-y-4 text-gray-600">
              <p className="text-base">Our team will be in touch with you soon.</p>
              <p className="text-base">
                We look forward to welcoming you at the White House Convention Centre HSR Layout Next to BDA Complex
              </p>
              <p className="text-base font-medium">26 July - 27 July 2025</p>
            </div>

            {/* Updated buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                className="bg-[#00620F] hover:bg-[#004F0C] text-white px-6 py-3 rounded-full flex items-center gap-2"
                onClick={() => (window.location.href = "/about")}
              >
                <Info className="w-4 h-4" />
                About Us
              </Button>
              <Button
                className="bg-[#00620F] hover:bg-[#004F0C] text-white px-6 py-3 rounded-full flex items-center gap-2"
                onClick={() => (window.location.href = "/past-event")}
              >
                <CalendarCheck className="w-4 h-4" />
                Past Events
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-start">
          <div className="w-full h-[1000px] overflow-hidden rounded-lg">
            <img
              src="/images/registration.png"
              alt="Event Venue"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
