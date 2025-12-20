"use client"

import Image from "next/image"
import { useEffect, useState } from "react";
import EnrollmentForm from "./EnrollmentForm";

export default function HeroSection() {
  const [show, setShow] = useState(false);


  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {

            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    document.querySelectorAll(".fade-item").forEach((item) => {
      observer.observe(item);
    });
  }, []);
  return (

    <>


      <main className="relative overflow-hidden" id="form">

        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">

          <div className="absolute inset-0 bg-background" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              background: "radial-gradient(700px 340px at 80% 25%, currentColor, transparent 60%)",
              color: "hsl(var(--primary))",
            }}
          />
        </div>

        <section className="mx-auto max-w-7xl px-4 py-12 md:py-10">
          <div className="grid grid-cols-1  gap-10 lg:grid-cols-2">

            <div className="space-y-6 fade-section fade-section">
              <span
                className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
                style={{ animationDelay: "40ms" }}
              >
                All About Doctor Education Pvt Ltd
              </span>

              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
                style={{ animationDelay: "100ms" }}
              >
                From NEET to NExT <span className="">Your Global Medical</span> Future Begins Here

              </h1>

              <p
                className="max-w-xl text-muted-foreground leading-relaxed poppins-regular  fade-item"
                style={{ animationDelay: "180ms" }}
              >
                At <b>All About Doctor</b> , we redefine the medical education journey. With Doctor-Led Mentorship and <b>Smart Education Technology</b>, we empower aspiring medical professionals to navigate every milestone with confidence — from NEET to NExT, in India or abroad.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "260ms" }}>
                <a
                  href="#get-started"
                  className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Your Free Plan
                </a>
                <a
                  href="#talk"
                  className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-white to-white text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Talk to a Counsellor
                </a>
              </div>





            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-md ring-1 ring-border md:p-8">

                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border-2 border-primary/30 animate-spin-slow"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -left-6 bottom-10 h-24 w-24 rounded-full border border-primary/20"
                  aria-hidden="true"
                />
                <EnrollmentForm fade="fade-item" />
                {/* Main Illustration */}
                {/* <div className="relative z-10 mt-2 flex items-end justify-center h-[450px]">
               <img
                  src="/assets/img/desktopGirlImg.webp"
                  alt="Student with laptop and AI assistant"
                 
                  className="max-w-full animate-float drop-shadow-md w-full h-full object-cover rounded-3xl"
                  
                />
              </div> */}

                {/* Floating badges */}
                {/* <FloatingBadge className="left-4 top-4" delay="120ms" text="1:1 Live Meeting " />
              <FloatingBadge className="right-4 top-20" delay="220ms" text="Scholarship Guidance" /> */}
              </div>
            </div>
          </div>
        </section>


        <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-up { opacity: 0; animation: fadeUp 700ms ease forwards; }
        .animate-float { animation: floaty 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 24s linear infinite; }

        .fade-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.fade-item.show {
  opacity: 1;
  transform: translateY(0);
}

 .reveal {
          opacity: 0;
          transform: translateY(64px);
        }

        .show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Added new entrance and scroll animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes button-entrance {
          0% {
            transform: scale(0.95) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 7s linear infinite;
        }

        .animate-button-entrance {
          animation: button-entrance 0.8s ease-out forwards;
        }

        .show .animate-button-entrance {
          animation: button-entrance 0.8s ease-out;
        }
          .fade-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.fade-item.show {
  opacity: 1;
  transform: translateY(0);
}
      `}</style>
      </main>




      {show && (
       <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

  <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl overflow-hidden animate-fadeIn ">

    {/* CLOSE */}
    <button
      onClick={() => setShow(false)}
      className="absolute right-5 top-5 text-2xl font-bold text-gray-500 hover:text-black transition"
    >
      ×
    </button>

    <div className="">

      {/* LEFT CONTENT */}
    

      {/* RIGHT FORM */}
      <div className="px-8 py-12 lg:px-12">

        <h3 className="text-2xl font-bold text-[#003b99] text-center">
         START YOUR MBBS  JOURNEY WITH CONFIDENCE
        </h3>

        <p className="mt-1 text-sm text-gray-500 text-center">
          SECURE ADMISSION IN TOP MEDICAL UNIVERSITIES IN INDIA & ABROAD
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Student Name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#0057ff] focus:ring-2 focus:ring-[#0057ff]/30 transition"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#0057ff] focus:ring-2 focus:ring-[#0057ff]/30 transition"
          />
 <input
            type="text"
            placeholder="State"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#0057ff] focus:ring-2 focus:ring-[#0057ff]/30 transition"
          />
          {/* NEET SCORE */}
          <input
            type="number"
            placeholder="Neet Attempt"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#0057ff] focus:ring-2 focus:ring-[#0057ff]/30 transition"
          />

        </div>

        {/* CTA */}
        <button className="mt-8 w-full rounded-2xl bg-[#f68b1e] py-4 text-lg font-bold text-white shadow-lg hover:scale-[1.03] transition">
          Get Expert Counselling →
        </button>

        <p className="mt-3 text-xs text-gray-400 text-center">
          100% free • No spam • Counsellor call within 24 hours
        </p>

      </div>
    </div>
  </div>
</div>


      )}
    </>
  )
}


