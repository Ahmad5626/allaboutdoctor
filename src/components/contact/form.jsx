"use client"

import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" })

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      topic: formData.get("topic")?.toString(),
      message: formData.get("message")?.toString().trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ state: "error", message: "Please fill name, email, and message." })
      return
    }

    try {
      setStatus({ state: "loading", message: "Sending..." })
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus({ state: "success", message: "Thanks! We’ll get back to you shortly." })
      form.reset()
    } catch (err) {
      setStatus({ state: "error", message: "Something went wrong. Please try again." })
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      <div className="col-span-1">
        <label htmlFor="name" className="block text-sm font-medium text-secondary">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full border border-input rounded-md px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="Your full name"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="email" className="block text-sm font-medium text-secondary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-input rounded-md px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="name@email.com"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="phone" className="block text-sm font-medium text-secondary">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-2 w-full border border-input rounded-md px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="+91 9XXXXXXXXX"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="topic" className="block text-sm font-medium text-secondary">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          className="mt-2 w-full border border-input rounded-md px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
          defaultValue="Admissions"
        >
          <option>Admissions</option>
          <option>Visa & Travel</option>
          <option>Collaboration</option>
          <option>Other</option>
        </select>
      </div>
      <div className="col-span-1 sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full border border-input rounded-md px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="How can we help?"
        />
      </div>
      <div className="col-span-1 sm:col-span-2 flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary px-4 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-live="polite"
        >
          {status.state === "loading" ? "Sending..." : "Send message"}
          <span aria-hidden>→</span>
        </button>
        <p className={`text-sm ${status.state === "error" ? "text-destructive" : "text-secondary"}`}>
          {status.message}
        </p>
      </div>
    </form>
  )
}
