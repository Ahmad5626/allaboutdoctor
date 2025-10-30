import Link from 'next/link'
import React from 'react'

const Choose = () => {
  return (
    <div>
          {/* India vs Abroad */}
      <section className=" px-4 md:px-8 border-b border-primary/20">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}>
            MBBS in India & Abroad <span className='text-primary'>Choose Your Path</span> 
          </h1>
          <p className="text-lg text-foreground/80 mb-12">
            At All About Doctor Education Pvt. Ltd., we guide students toward the right MBBS program — in India or
            abroad — based on career goals and budget.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "MBBS in India",
                desc: "Study in top NMC-approved Indian medical colleges with expert faculty, strong hospital training, and recognised degrees.",
                details:
                  "Gain practical experience, complete your internship, and build a rewarding career within India's healthcare system.",
                  link: "/india/mbbs",
              },
              {
                title: "MBBS Abroad",
                desc: "Explore global opportunities with 850+ partner universities offering affordable, English-medium MBBS programs in:",
                details:
                  "Russia, Kazakhstan, Uzbekistan, Georgia, Nepal, Armenia, and Vietnam. Get world-class education, international exposure, and a globally recognised degree.",
                  link: "/abroad/mbbs",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border-2 border-primary/20 rounded-lg hover:border-primary/50 transition">
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground/80 mb-4">{item.desc}</p>
                <p className="text-foreground/80 mb-6">{item.details}</p>
                <Link href={item.link} className="text-primary font-semibold hover:text-primary/80 transition">Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section> 
    </div>
  )
}

export default Choose
