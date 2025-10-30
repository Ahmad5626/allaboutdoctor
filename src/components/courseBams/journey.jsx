import React from 'react'
import { Phone, MapPin, Globe } from "lucide-react"
import Link from 'next/link'

const Journey = () => {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Start Your <span className="text-secondary">BAMS Journey</span> with All About Doctor Education Pvt. Ltd.
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Turn your passion for holistic healing into a rewarding career with All About Doctor Education Pvt. Ltd. 
            Join thousands of students who have successfully built their future in Ayurveda through our trusted admission guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-secondary" />
              <span className="font-semibold">+91 93510 18577</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="font-semibold">Head Office: Jaipur</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-secondary" />
              <span className="font-semibold">www.allaboutdoctor.in</span>
            </div>
          </div>

          <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:scale-105 transition text-lg">
            <Link href="/services">
              Get Free Counselling Now
            </Link>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Journey
