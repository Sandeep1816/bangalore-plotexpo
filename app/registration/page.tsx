// 'use client'

// import React, { useState, useEffect } from "react"
// import { useSearchParams } from "next/navigation"
// import { Button } from "@/app/components/ui/button"
// import { Input } from "@/app/components/ui/input"
// import { Label } from "@/app/components/ui/label"
// import { Textarea } from "@/app/components/ui/textarea"
// import { Checkbox } from "@/app/components/ui/checkbox"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/app/components/ui/select"

// export default function RegistrationPage() {
//   const searchParams = useSearchParams()
//   const type = searchParams.get("type") || "" // e.g., "exhibitor" or "visitor"

//   const [formData, setFormData] = useState({
//     name: "",
//     workEmail: "",
//     phoneNumber: "",
//     companyName: "",
//     industry: "",
//     jobTitle: "",
//     businessType: "",
//     message: "",
//     termsAccepted: true,
//     marketingConsent: true,
//     type: "", // <- add type field to form data
//   })

//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     // Set the type from URL to formData when component mounts
//     if (type) {
//       setFormData(prev => ({ ...prev, type }))
//     }
//   }, [type])

//   const handleInputChange = (field: string, value: string | boolean) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
// const res = await fetch(`/api/registration${window.location.search}`, {

//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })

//       const data = await res.json()
//       if (res.ok) {
//         window.location.href = "/registration/thankyou"
//       } else {
//         alert("Submission failed: " + data.error)
//       }
//     } catch (error) {
//       alert("An error occurred. Please try again later.")
//       console.error("Submission error:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20 mb-16">
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
//         <div className="relative z-50">
//           <h1 className="text-xl lg:text-2xl font-semibold text-black mb-6">
//             {type === "exhibitor" && "Exhibitor Registration"}
//             {type === "visitor" && "Visitor Registration"}
//             {!type && "Fill the details below to enquire about the event"}
//           </h1>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange("name", e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="workEmail">Work Email</Label>
//               <Input
//                 id="workEmail"
//                 type="email"
//                 placeholder="Work Email Address"
//                 value={formData.workEmail}
//                 onChange={(e) => handleInputChange("workEmail", e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="phoneNumber">Phone Number</Label>
//               <div className="flex">
//                 <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-100 text-sm text-gray-600 rounded-l-md">
//                   +91
//                 </span>
//                 <Input
//                   id="phoneNumber"
//                   placeholder="Phone Number"
//                   className="rounded-l-none"
//                   value={formData.phoneNumber}
//                   onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <Label htmlFor="companyName">Company Name</Label>
//               <Input
//                 id="companyName"
//                 placeholder="Company Name"
//                 value={formData.companyName}
//                 onChange={(e) => handleInputChange("companyName", e.target.value)}
//                 required
//               />
//             </div>

//             <div className="relative z-40">
//               <Label>Industry</Label>
//               <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select Industry" />
//                 </SelectTrigger>
//                 <SelectContent className="z-50 bg-white">
//                   <SelectItem value="real-estate">Real Estate</SelectItem>
//                   <SelectItem value="construction">Construction</SelectItem>
//                   <SelectItem value="finance">Finance</SelectItem>
//                   <SelectItem value="other">Other</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label htmlFor="jobTitle">Job Title</Label>
//               <Input
//                 id="jobTitle"
//                 placeholder="Job Title"
//                 value={formData.jobTitle}
//                 onChange={(e) => handleInputChange("jobTitle", e.target.value)}
//                 required
//               />
//             </div>

//             <div className="relative z-40">
//               <Label>Select Request Type</Label>
//               <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select Request Type" />
//                 </SelectTrigger>
//                 <SelectContent className="z-50 bg-white">
//                   <SelectItem value="developer">Developer</SelectItem>
//                   <SelectItem value="investor">Investor</SelectItem>
//                   <SelectItem value="broker">Broker</SelectItem>
//                   <SelectItem value="other">Other</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label htmlFor="message">Message (if any)</Label>
//               <Textarea
//                 id="message"
//                 placeholder="Your message..."
//                 rows={3}
//                 value={formData.message}
//                 onChange={(e) => handleInputChange("message", e.target.value)}
//               />
//             </div>

//             <div className="space-y-3">
//               <div className="flex items-start gap-2">
//                 <Checkbox
//                   id="terms"
//                   checked={formData.termsAccepted}
//                   onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
//                 />
//                 <Label htmlFor="terms" className="text-sm leading-relaxed">
//                   I confirm that I have read, understand and accept the event's{" "}
//                   <a href="/terms" className="text-green-700 underline">Terms and Conditions</a>
//                 </Label>
//               </div>

//               <div className="flex items-start gap-2">
//                 <Checkbox
//                   id="marketing"
//                   checked={formData.marketingConsent}
//                   onCheckedChange={(checked) => handleInputChange("marketingConsent", checked as boolean)}
//                 />
//                 <Label htmlFor="marketing" className="text-sm leading-relaxed">
//                   BPE may contact you with updates & offers. Your data may be shared with selected third parties.
//                 </Label>
//               </div>
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-green-700 hover:bg-green-800"
//               disabled={!formData.termsAccepted || loading}
//             >
//               {loading ? "Submitting..." : "Submit Registration"}
//             </Button>
//           </form>
//         </div>

//         <div className="w-full h-full flex justify-center items-start">
//           <div className="w-full h-[1000px] overflow-hidden rounded-lg">
//             <img
//               src="/images/registration.png"
//               alt="Bangalore Palace"
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import React, { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import RegistrationForm from "@/app/components/RegistrationForm"

function RegistrationWrapper() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || ""
  return <RegistrationForm type={type} />
}

export default function RegistrationPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <RegistrationWrapper />
    </Suspense>
  )
}

