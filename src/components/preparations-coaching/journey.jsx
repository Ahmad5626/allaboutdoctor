import Link from 'next/link'
import React from 'react'

const Journey = () => {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Start Your Admission Journey Today</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
       Boost your knowledge, confidence, and exam performance with All About Doctor Education Pvt Ltd. Join our test preparation programs and take the first step toward a successful medical career.

          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:scale-105 transition text-lg">
          <Link href="/services">

          Enroll Now
          </Link>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Journey
