"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"

export default function EnrollmentForm({ fade }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    console.log("Form submitted:", formData)

    setTimeout(() => {
      setFormData({ fullName: "", email: "", phone: "", course: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className={`${fade ? "fade-item" : ""}`}>
      <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary  p-[1px]">
        <div className="rounded-3xl p-8 shadow-2xl">

          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white  ">
              Start Your Medical Journey
            </h2>
            <p className="mt-2 text-sm text-white">
              Free expert guidance • No spam • 24h response
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50/70 dark:bg-green-950/40 p-6 text-center animate-in fade-in zoom-in">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-green-700 dark:text-green-300">
                Request Submitted
              </h3>
              <p className="text-sm text-green-600 dark:text-green-400">
                Our counselor will contact you shortly
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Input */}
              {[
                { label: "Full Name", name: "fullName", type: "text" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground outline-none transition focus:border-secondary focus:bg-background"
                  />
                  <label
                    className="pointer-events-none absolute left-4 top-3 text-sm text-muted-foreground transition-all
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
                    peer-focus:-top-2 peer-focus:text-xs peer-focus:text-secondary
                    peer-[-not(:placeholder-shown)]:-top-2 peer-[-not(:placeholder-shown)]:text-xs bg-background px-1"
                  >
                    {field.label}
                  </label>
                </div>
              ))}

              {/* Select */}
              <div className="relative">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground outline-none focus:border-secondary focus:bg-background"
                >
                  <option value="">Select Interested Program</option>
                  <option value="neet">NEET Preparation</option>
                  <option value="next">NExT Guidance</option>
                  <option value="abroad">Study Abroad</option>
                </select>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-secondary to-secondary/80 py-4 font-semibold text-secondary-foreground shadow-lg transition hover:shadow-xl hover:scale-[1.02]"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-white">
                🔒 Your details are safe & confidential
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
