import Link from "next/link";

export default function StartYourMBBS() {
    return (
        <main className=" bg-white overflow-hidden my-20" >
            {/* Main Container */}
            <div className="flex items-start justify-between  px-8 pt-10 md:px-8 relative max-w-7xl mx-auto bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/img/bg2.png')" }}>
                {/* Left Section - Text Content */}
                <div className="w-full md:w-1/2 z-10 flex flex-col gap-6">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-4xl font-bold leading-tight text-secondary">
                        START YOUR MBBS JOURNEY WITH CONFIDENCE
                    </h1>

                    {/* Description Text */}
                    <p className="text-lg md:text-xl text-primary leading-relaxed">
                        Get trusted MBBS guidance, simplified NEET-based counselling,and complete admission support with All About
                        Doctor Education Pvt Ltd. Choose the right medical college with clarity and expert mentorship
                    </p>

                    {/* CTA Text */}
                    <div className="text-2xl md:text-2xl font-semibold text-secondary flex gap-6">
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

                {/* Right Section - Image */}
                <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-center relative">
                    <img
                        src="/assets/img/nbg.png"
                        alt="MBBS Doctors and Medical Professionals with Indian Architecture"
                        className="w-100 h-auto max-w-2xl object-contain"
                    />
                </div>

                {/* Decorative Wave Shape - Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-secondary opacity-90 -z-10 transform skew-y-2"></div>
            </div>
        </main>
    )
}
