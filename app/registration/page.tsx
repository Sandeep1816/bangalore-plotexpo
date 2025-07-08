

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

