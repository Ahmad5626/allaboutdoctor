"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    color: "bg-blue-500",
    title: "Apply",
    desc: "We are connected to several NMC-approved universities and guide our candidates to get admission.",
    icon: "/assets/img/work/work-1.png",
  },
  {
    number: 2,
    color: "bg-green-500",
    title: "Receive Offer",
    desc: "As you finish your MBBS course, we guide you ahead for further studies.",
    icon: "/assets/img/work/work-2.png",
  },
  {
    number: 3,
    color: "bg-yellow-500",
    title: "Accept and Pay",
    desc: "We help you manage tuition fees, food expenses, and air tickets.",
    icon: "/assets/img/work/work-3.png",
  },
  {
    number: 4,
    color: "bg-red-500",
    title: "Invitation Letter",
    desc: "Our faculty checks your educational details and helps find the right university.",
    icon: "/assets/img/work/work-4.png",
  },
  {
    number: 5,
    color: "bg-pink-500",
    title: "Apply for Visa",
    desc: "We assist you with course details and guide you to apply for a visa.",
    icon: "/assets/img/work/work-5.png",
  },
  {
    number: 6,
    color: "bg-indigo-500",
    title: "Ready to Fly",
    desc: "We help you book flight tickets and find accommodations near the university.",
    icon: "/assets/img/work/work-6.png",
  },
  {
    number: 7,
    color: "bg-cyan-500",
    title: "Pay Tuition Fee & Hostel",
    desc: "We are connected to NMC-approved universities and guide our candidates to get admission.",
    icon: "/assets/img/work/work-7.png",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden py-20 
  bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-secondary bg-clip-text text-transparent animate-shimmer">
           How We Work
            
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
         A clear, student‑first process from application to arrival.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden lg:block">

          {/* Dotted Curve */}
          <svg
            className="absolute top-1/2 left-0 w-full -translate-y-1/2"
            viewBox="0 0 1200 300"
            fill="none"
          >
            <path
              d="M50 150 C250 20, 450 20, 650 150 C850 280, 1050 280, 1150 150"
              stroke="#1f3b2c"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.4"
            />
          </svg>

          {/* Cards */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-6 shadow-xl hover:translate-2 transition-all"
              >
                {/* Number */}
                <div
                  className={`absolute -top-6 left-6 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {step.number}
                </div>

                <h3 className="mt-6 font-semibold text-gray-800 text-sm">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Paper Plane */}
          <div className="absolute -right-6 top-1/3 -translate-y-1/2 text-[#1f3b2c]">
            ✈️
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl p-5 shadow-lg"
            >
              <div
                className={`absolute -top-5 left-5 w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-white font-bold`}
              >
                {step.number}
              </div>
              <h3 className="mt-6 font-semibold text-gray-800 text-sm">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
