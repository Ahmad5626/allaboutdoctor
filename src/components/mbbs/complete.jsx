import { CheckCircle2, FileText, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Complete() {
  return (
    <div className=" bg-gray-50 flex items-center justify-center p-2">
      <div className="max-w-7xl w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/assets/img/bg5.png')"}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Card Section */}
          <div className="flex justify-center lg:justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-primary via-white to-white rounded-4xl p-8 shadow-2xl">
              {/* Header */}
              <div className="mb-4">
                <h1 className="text-4xl font-bold text-secondary mb-1 leading-tight">Complete Guidance</h1>
                <p className="text-xl text-orange-400 font-medium">For MBBS Apirants</p>
              </div>

              {/* Feature Boxes */}
              <div className="space-y-5 mb-8">
                {/* College Recommendations */}
                <div className="bg-secondary border-3 border-orange-600 rounded-2xl p-5 flex items-center gap-4">
                  <GraduationCap className="w-7 h-7 text-slate-800 flex-shrink-0" />
                  <span className="text-slate-800 font-medium text-lg">Expert Mentorship</span>
                </div>

                {/* Admission Guidance */}
                <div className="bg-secondary border-3 border-orange-600 rounded-2xl p-5 flex items-center gap-4">
                  <CheckCircle2 className="w-7 h-7 text-blue-500 flex-shrink-0" />
                  <span className="text-slate-800 font-medium text-lg">College Shortlisting</span>
                </div>

                {/* Documentation Support */}
                <div className="bg-secondary border-3 border-orange-600 rounded-2xl p-5 flex items-center gap-4">
                  <FileText className="w-7 h-7 text-slate-800 flex-shrink-0" />
                  <span className="text-slate-800 font-medium text-lg">Admission Insights</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-primary hover:bg-blue-950 text-secondary font-bold text-2xl py-4 px-6 rounded-2xl transition-colors duration-200 mb-8 border-2 border-primary">
                Get Started
              </button>

              {/* Footer Links */}
              <div className="text-center text-primary text-sm font-bold flex gap-6">
                <Link href="">
                            Read More |
                        </Link>
                        <Link href="">
                            Click Now |
                        </Link>
                        <Link href="">
                           Download PDF
                        </Link>
                
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center lg:justify-start" >
            <div className="relative w-full max-w-2xl">
              <img
                src="/assets/img/png-01.png"
                alt="Healthcare professionals in front of building"
                className="w-[440px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
