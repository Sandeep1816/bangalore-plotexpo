"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegistrationForm({ type }: { type: string }) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      workEmail: "",
      companyName: "",
      industry: "",
      jobTitle: "",
      businessType: "",
      budget: "",
      bangalorePart: "",
      message: "",
      termsAccepted: true,
      marketingConsent: true,
      type: type || "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      phoneNumber: Yup.string()
        .matches(/^\d+$/, "Phone Number must contain only digits")
        .min(10, "Phone Number must be at least 10 digits")
        .max(15, "Phone Number must be at most 15 digits")
        .required("Phone Number is required"),
      workEmail:
        type === "visitor" || type === "exhibitor"
          ? Yup.string().email("Invalid email").required("Email is required")
          : Yup.string().email("Invalid email"),
      industry:
        type === "exhibitor"
          ? Yup.string().required("Industry is required")
          : Yup.string(),
      termsAccepted: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await fetch(`/api/registration?type=${type}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.ok) {
          toast.success("Form submitted successfully!");
          router.push(`/registration/thankyou?type=${type}`);
        } else {
          toast.error(data.error || "Submission failed.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = formik;

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-12 mt-20 mb-16 bg-gradient-to-br from-gray-100 via-white to-gray-100 rounded-xl shadow-xl p-4 md:p-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          {/* FORM SECTION */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 lg:bg-transparent lg:shadow-none lg:border-none transition-all duration-300">
            <h1 className="text-xl lg:text-2xl font-semibold text-black mb-6">
              {type === "exhibitor" && "Exhibitor Registration"}
              {type === "visitor" && "Visitor Registration"}
              {type === "delegate" && "Delegate Registration"}
              {type === "enquiry" && "Enquiry Form"}
              {!type && "General Enquiry Form"}
            </h1>

            {/* Name */}
            <div>
              <Label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
              />
              {touched.name && errors.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <Label htmlFor="phoneNumber">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={values.phoneNumber}
                onChange={(e) => {
                  const numeric = e.target.value.replace(/\D/g, "");
                  setFieldValue("phoneNumber", numeric);
                }}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <p className="text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Email */}
            {(type === "visitor" || type === "exhibitor") && (
              <div>
                <Label htmlFor="workEmail">
                  {type === "visitor" ? "Email" : "Work Email"}{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  placeholder="Email Address"
                  value={values.workEmail}
                  onChange={handleChange}
                />
                {touched.workEmail && errors.workEmail && (
                  <p className="text-sm text-red-600">{errors.workEmail}</p>
                )}
              </div>
            )}

            {/* Visitor Fields */}
            {type === "visitor" && (
              <>
                <div>
                  <Label htmlFor="budget">Budget</Label>
                  <Input
                    id="budget"
                    name="budget"
                    placeholder="Your budget"
                    value={values.budget}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label>Select Area in Bangalore</Label>
                  <Select
                    value={values.bangalorePart}
                    onValueChange={(val) =>
                      setFieldValue("bangalorePart", val)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white">
                      <SelectItem value="east">East Bangalore</SelectItem>
                      <SelectItem value="west">West Bangalore</SelectItem>
                      <SelectItem value="north">North Bangalore</SelectItem>
                      <SelectItem value="south">South Bangalore</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {/* Exhibitor Fields */}
            {type === "exhibitor" && (
              <>
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="Company Name"
                    value={values.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={values.jobTitle}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label>
                    Industry <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={values.industry}
                    onValueChange={(val) => setFieldValue("industry", val)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent className="z-50 bg-white">
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="farmland">Farmland</SelectItem>
                      <SelectItem value="builder">Builder</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="channel-partner">
                        Channel Partner (CP)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {touched.industry && errors.industry && (
                    <p className="text-sm text-red-600">{errors.industry}</p>
                  )}
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <Label htmlFor="message">Message (if any)</Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Your message..."
                value={values.message}
                onChange={handleChange}
              />
            </div>

            {/* Terms and Consent */}
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Checkbox
                  id="termsAccepted"
                  checked={values.termsAccepted}
                  onCheckedChange={(checked) =>
                    setFieldValue("termsAccepted", checked)
                  }
                />
                <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                  I accept the{" "}
                  <a href="/terms" className="text-green-700 underline">
                    Terms and Conditions
                  </a>
                </Label>
              </div>
              {touched.termsAccepted && errors.termsAccepted && (
                <p className="text-sm text-red-600">{errors.termsAccepted}</p>
              )}

              <div className="flex items-start gap-2">
                <Checkbox
                  id="marketingConsent"
                  checked={values.marketingConsent}
                  onCheckedChange={(checked) =>
                    setFieldValue("marketingConsent", checked)
                  }
                />
                <Label htmlFor="marketingConsent" className="text-sm leading-relaxed">
                  BPE may contact you with updates & offers. Your data may be
                  shared with selected third parties.
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </div>

          {/* BANNER SECTION - HIDDEN ON MOBILE */}
          <div className="hidden lg:flex w-full h-full justify-center items-start">
            <div className="w-full h-[700px] overflow-hidden rounded-xl shadow-md border border-gray-200 bg-white">
              <img
                src="/images/registration.png"
                alt="Bangalore Palace"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
