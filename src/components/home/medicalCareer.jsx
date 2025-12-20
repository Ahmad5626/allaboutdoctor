
"use client"
import { ArrowBigLeft, ArrowBigRight, ArrowRight, ArrowUpRightFromSquare } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

const MedicalCareer = () => {

    useEffect(() => {
  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        // REMOVE on scroll out → animation repeats every time
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2, // 20% visible → animate
  }
);

document.querySelectorAll(".fade-item").forEach((item) => {
  observer.observe(item);
});
}, []);
  return (
  <main className=" bg-gradient-to-b from-sky-100 to-white p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col lg:flex-row items-center justify-between bg-white rounded-3xl shadow-sm p-6 md:p-10 lg-px-10 lg:pb-0 lg-pt-10">
          {/* Left Content */}
          <div className="flex-1 max-w-xl z-10">
            <h2 className="text-3xl md:text-3xl font-bold text-secondary leading-tight mb-4 fade-item">
              Your Medical Career Needs the Right Guidance That Works Like Magic!
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-3 fade-item">
              To Secure MBBS Admission in Top Universities (India & Abroad)
            </h3>
            <h4 className="text-gray-500 mb-6 leading-relaxed fade-item">
              Get expert counselling, university shortlisting, documentation & visa support to start your medical
              journey with confidence
            </h4>
            <Link href="/services/admissions" className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors">
              {"Let's Begin Your Admission"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Center Image */}
          <div className="flex-1 flex justify-between my-8 lg:my-0 fade-item">
            <img
              src="/assets/img/nbnb.png"
              alt="Medical students studying together"
              className="w-full max-w-md object-contain"
            />
          </div>



          {/* Right Features */}
          <div className="flex flex-col gap-6  lg:right-8 lg:top-1/2 lg:-translate-y-1/2">
            {/* Feature 1 */}
            <div className="flex items-center gap-3 fade-item">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-12 h-12">
                  <circle cx="20" cy="28" r="8" fill="#FFB347" />
                  <circle cx="44" cy="28" r="8" fill="#4A90D9" />
                  <path d="M28 36 L36 44 L28 52" stroke="#FFB347" strokeWidth="3" fill="none" />
                  <path d="M36 36 L28 44 L36 52" stroke="#4A90D9" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-blue-800 leading-tight ">
                Government Authorized &<br />
                Recognized Consultancy
              </h4>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3 fade-item">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-12 h-12">
                  <rect x="16" y="40" width="32" height="6" fill="#8B4513" />
                  <rect x="18" y="34" width="28" height="6" fill="#4A90D9" />
                  <rect x="20" y="28" width="24" height="6" fill="#FFB347" />
                  <path d="M32 8 L24 20 L40 20 Z" fill="#1E3A5F" />
                  <rect x="30" y="20" width="4" height="8" fill="#1E3A5F" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-blue-800 leading-tight">
                Official University Tie-Ups
                <br />
                Across 12+ Countries
              </h4>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3 fade-item">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-12 h-12">
                  <text x="8" y="20" fontSize="14" fill="#FFB347">
                    ★★★
                  </text>
                  <rect x="12" y="28" width="8" height="24" fill="#4A90D9" />
                  <rect x="24" y="36" width="8" height="16" fill="#FFB347" />
                  <rect x="36" y="32" width="8" height="20" fill="#E74C3C" />
                  <circle cx="16" cy="24" r="4" fill="#FFB347" />
                  <circle cx="28" cy="32" r="4" fill="#4A90D9" />
                  <circle cx="40" cy="28" r="4" fill="#E74C3C" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-blue-800 leading-tight">
                Rated 4.9/5 by Students
                <br />& Parents
              </h4>
            </div>
          </div>
        </div>
      </div>

        <style jsx>{
        `
        .fade-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.fade-item.show {
  opacity: 1;
  transform: translateY(0);
}`}</style>
    </main>
  )
}

export default MedicalCareer
