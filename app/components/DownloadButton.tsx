'use client'

import { Download } from 'lucide-react'

export default function DownloadButton() {
  return (
    <div
      className="
        fixed
        z-50
        right-4
        bottom-4
        md:top-24 md:right-6 md:bottom-auto
        w-14 h-14 md:w-56 md:h-14
      "
    >
      <a
        href="/BPE Post Event Docket (2).pdf"
        download
        className="
          flex items-center justify-center gap-2
          w-full h-full
          bg-green-700 hover:bg-green-800
          text-white rounded-full md:rounded-lg
          shadow-lg transition-all duration-300
          text-xs md:text-base
        "
      >
        <Download size={20} className="md:w-6 md:h-6 w-5 h-5" />
        <span className="hidden md:inline">Download Docket</span>
      </a>
    </div>
  )
}
