import Link from "next/link";

export default function CompleteGuide() {
  return (
    <div className="min-h-screen bg-white py-4">
      {/* Main Container */}
      <div className="md:flex items-center justify-between px-8 pt-20 gap-12 max-w-7xl mx-auto bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('/assets/img/bg1.png')"}}>
        {/* Left Section */}
        <div className="flex-1 max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-5xl font-bold text-secondary leading-tight mb-8">
           Your Complete Guide to MBBS Abroad
          </h1>

          {/* Orange Rounded Box */}
          <div className="bg-gradient-to-br from-secondary via-white to-white rounded-3xl p-8 mb-8">
            <p className="text-lg text-primary leading-relaxed font-medium">
              From university shortlisting to visa processing, All About Doctor Education Pvt Ltd ensures a smooth, transparent, and successful admission journey for Indian students aspiring to study medicine overseas
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

              <div className=" ">
                <img src="/assets/img/png-02.png" className="w-100" alt="" />
              </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative h-96">
          {/* Cloud shapes */}
         

          {/* Purple World Map Background */}
          

          {/* Doctors Image Container */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src="/assets/img/nbg.png"
              alt="Medical professionals"
              className="md:w-[630px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
