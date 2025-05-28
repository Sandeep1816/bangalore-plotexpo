"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Textarea } from "@/app/components/ui/textarea"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    industry: "",
    jobTitle: "",
    businessType: "",
    message: "",
    termsAccepted: false,
    marketingConsent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Form Section */}
        <div className="p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Fill the details below to enquire about the event</h1>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="workEmail">Work Email</Label>
                <Input
                  id="workEmail"
                  type="email"
                  placeholder="Work Email"
                  value={formData.workEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("workEmail", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">
                    <span className="text-sm text-gray-600">+91</span>
                  </div>
                  <Input
                    id="phoneNumber"
                    placeholder="Phone Number"
                    className="rounded-l-none"
                    value={formData.phoneNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select onValueChange={(value: string) => handleInputChange("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("jobTitle", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="businessType">Select Business Type</Label>
                <Select onValueChange={(value: string) => handleInputChange("businessType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Business Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="broker">Broker</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message (if any)</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={4}
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("message", e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked: boolean) => handleInputChange("termsAccepted", checked)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I confirm that I have read, understand and accept the event's{" "}
                    <a href="/terms" className="text-green-700 underline">
                      Terms and Conditions
                    </a>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked: boolean) => handleInputChange("marketingConsent", checked as boolean)}
                  />
                  <Label htmlFor="marketing" className="text-sm leading-relaxed">
                    BPE may contact you from time to time with updates and information about our events, products and
                    services that may be of interest. We may also pass your details to carefully selected third parties
                    so they can contact you about their products and services.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800"
                disabled={!formData.termsAccepted}
              >
                Submit Registration
              </Button>
            </form>
          </div>
        </div>

        {/* Background Image Section */}
<div className="hidden lg:block relative">
  <img
    src="/images/registration.png"
    alt="Registration"
    className="object-cover w-full h-full absolute inset-0"
  />
  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
</div>

      </div>
    </div>
  )
}
