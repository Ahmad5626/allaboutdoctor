"use client"
import { useEffect, useRef } from "react"

export default function Modal({ open, onClose, title, children }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Close on ESC
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  const panelRef = useRef(null)

  if (!open) return null

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose?.()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onMouseDown={handleBackdrop}
    >
      <div ref={panelRef} className="w-full max-w-lg md:max-w-2xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b p-4 md:p-6">
          <h3 id="modal-title" className="text-lg md:text-xl font-semibold text-slate-900">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>
        <div className="p-4 md:p-6">{children}</div>
      </div>
    </div>
  )
}
