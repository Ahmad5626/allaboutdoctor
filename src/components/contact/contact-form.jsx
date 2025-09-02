"use client"

import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    await new Promise((r) => setTimeout(r, 800))
    setStatus("sent")
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
          />
        </div>
        <div>
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            placeholder="Subject*"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Enter your message*"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-md bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:opacity-70"
          aria-live="polite"
        >
          {status === "sending" ? "Submitting..." : status === "sent" ? "Submitted ✓" : "Submit"}
        </button>
      </form>
    </div>
  )
}
