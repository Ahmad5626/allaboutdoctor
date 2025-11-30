import React from 'react'

const extra = () => {
  return (
    <div>
      
      <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden px-10 pt-10 ">
          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Content */}
            <div className="flex-1 z-10 ">
              <p className="text-primary italic text-lg mb-4">All About Doctor – Global Medical Admission Program</p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6">
                {"India's Trusted MBBS Admission Guidance Platform"}
              </h1>

              <p className="text-primary text-lg mb-1">Secure admission in top medical universities</p>
              <p className="text-primary text-lg mb-4">In India & Abroad with expert counselling and full support</p>

              <p className="text-primary text-sm mb-4">
                Start your MBBS journey with confidence, guidance & transparency
              </p>

              <p className="text-orange-500 font-semibold text-sm mb-2">Get Admission Support For</p>
              <p className="text-orange-500 text-sm mb-8">
                Russia • Uzbekistan • Kazakhstan • Georgia • Nepal • Bangladesh • India & more
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-6">
                {/* Badge 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-2">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <circle cx="24" cy="20" r="8" fill="#3B82F6" />
                      <path d="M24 28 C16 28 12 34 12 38 L36 38 C36 34 32 28 24 28" fill="#3B82F6" />
                      <circle cx="24" cy="8" r="4" fill="#F97316" />
                      <path d="M20 6 L24 2 L28 6" stroke="#F97316" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <p className="text-xs text-blue-800 font-medium leading-tight">
                    15,000+ Successful
                    <br />
                    Admissions
                  </p>
                </div>

                {/* Badge 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-2">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <text x="8" y="16" fontSize="10" fill="#F97316">
                        ★★★
                      </text>
                      <rect x="8" y="22" width="8" height="18" fill="#3B82F6" />
                      <rect x="20" y="28" width="8" height="12" fill="#F97316" />
                      <rect x="32" y="25" width="8" height="15" fill="#EF4444" />
                    </svg>
                  </div>
                  <p className="text-xs text-blue-800 font-medium leading-tight">
                    Rated 4.9/5 by
                    <br />
                    Students & Parents
                  </p>
                </div>

                {/* Badge 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-2">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <circle cx="16" cy="20" r="6" fill="#F97316" />
                      <circle cx="32" cy="20" r="6" fill="#3B82F6" />
                      <path d="M20 26 L28 26" stroke="#F97316" strokeWidth="3" />
                      <path d="M22 32 L26 32" stroke="#3B82F6" strokeWidth="3" />
                    </svg>
                  </div>
                  <p className="text-xs text-blue-800 font-medium leading-tight">
                    Official University
                    <br />
                    Collaboration
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex-1 flex items-end justify-center relative">
              <img src="/assets/img/Gemini_Generated.png" alt="Medical students" className="w-full max-w-lg object-contain" />
            </div>

            {/* Right Content */}
            <div className="lg:w-72 p-8 flex flex-col items-center justify-center gap-6">
              {/* Orange Starburst Badge */}
              <div className="relative">
                <svg viewBox="0 0 200 200" className="w-44 h-44">
                  <path
                    d="M100 10 L115 40 L145 25 L140 58 L175 60 L155 85 L190 100 L155 115 L175 140 L140 142 L145 175 L115 160 L100 190 L85 160 L55 175 L60 142 L25 140 L45 115 L10 100 L45 85 L25 60 L60 58 L55 25 L85 40 Z"
                    fill="#F97316"
                  />
                  <text x="100" y="75" textAnchor="middle" fill="white" fontSize="16" fontStyle="italic">
                    Starting From
                  </text>
                  <text x="100" y="105" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
                    ₹3.5 Lacs/Year
                  </text>
                  <text x="100" y="130" textAnchor="middle" fill="white" fontSize="14" fontStyle="italic">
                    (Country-wise)
                  </text>
                </svg>
              </div>

              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">ENROLL NOW</h2>
                <p className="text-gray-600 text-sm">& take the first step towards your</p>
                <p className="text-gray-600 text-sm">medical career</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default extra
