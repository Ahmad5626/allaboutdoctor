import Link from "next/link";

export default function Leading() {
  return (
    <div className="min-h-screen bg-white py-4">
      {/* Main Container */}
      <div className="md:flex items-center justify-between px-8 pt-20 gap-12 max-w-7xl mx-auto bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('/assets/img/bg4.png')"}}>
        {/* Left Section */}
        <div className="flex-1 max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-5xl font-bold text-secondary leading-tight mb-8">
           Study MBBS Abroad in Leading Global Universities
          </h1>

          {/* Orange Rounded Box */}
          <div className="bg-gradient-to-br from-secondary via-white to-white rounded-3xl p-8 mb-8">
            <p className="text-lg text-primary leading-relaxed font-medium">
              Explore affordable fees, NMC-recognized medical colleges, and personalized admission guidance tailored to your NEET score and budget. Get complete support from application to arrival abroad.
            </p>
          </div>

          {/* Footer Links */}
           <div className="text-center text-primary text-sm font-bold flex gap-6 pb-8">
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

        {/* Right Section */}
        <div className="flex-1 relative h-96">
          {/* Cloud shapes */}
         

          {/* Purple World Map Background */}
          

          {/* Doctors Image Container */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src="/assets/img/man-woman.png"
              alt="Medical professionals"
              className="md:w-[510px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
