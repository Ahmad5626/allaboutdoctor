import React from 'react'

const WhatIsMbbs = () => {
  return (
    <div>
      {/* What is MBBS */}
      <section className="w-full">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>What is <span className='text-primary'>MBBS?</span> </h1>
          <div className="space-y-6 text-foreground/80 text-lg">
            <p className='text-foreground leading-relaxed py-6'>
              MBBS stands for{" "}
              <span className="font-semibold text-foreground">Bachelor of Medicine, Bachelor of Surgery</span> — a
              professional undergraduate degree that qualifies you to practise as a doctor. It combines the study of
              human anatomy, physiology, pathology, pharmacology, and surgery with real-world clinical experience.
            </p>
              <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
            Get free counselling, personalised guidance, and complete support — from admission to graduation.
          </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsMbbs
