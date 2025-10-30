import React from 'react'

const WhatIsMs = () => {
  return (
    <div>
      {/* What is MS Program */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            What is an <span className="text-primary">MS Program?</span>
          </h1>

          <div className="space-y-6 text-foreground/80 text-lg">
            <p className="text-foreground leading-relaxed py-6">
              The Master of Surgery (MS) is a postgraduate professional degree that focuses on advanced training 
              in surgical sciences and operative techniques. This program equips medical graduates with in-depth 
              knowledge of human anatomy, patient management, and specialized surgical procedures.
            </p>

            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li><strong>Duration:</strong> 3 Years (after MBBS)</li>
              <li><strong>Eligibility:</strong> MBBS from an NMC-recognized university + NEET-PG qualification</li>
              <li><strong>Course Type:</strong> Postgraduate – Professional</li>
              <li><strong>Degree Awarded By:</strong> Recognized Medical University / Government Institution</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsMs
