"use client"

import { useEffect } from "react"
import { Check } from "lucide-react"

interface DownloadToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export function DownloadToast({ message, isVisible, onClose }: DownloadToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="flex items-center gap-3 bg-[#1A1525] text-white px-5 py-3 rounded-xl shadow-lg border border-white/10">
        <div className="w-6 h-6 rounded-full bg-[#009784] flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  )
}
