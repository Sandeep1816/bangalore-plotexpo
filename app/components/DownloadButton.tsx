'use client'

import { Download } from 'lucide-react'

export default function DownloadButton() {
  return (
    <div className="fixed top-25 right-4 z-40 w-44 h-14 ">
      <a
        href="/BPE Post Event Docket (2).pdf"
        download
        className="flex items-center justify-center gap-2 w-full h-full bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-300"
      >
        <Download size={40} />
        Download Past Event Docket
      </a>
    </div>
  )
}
