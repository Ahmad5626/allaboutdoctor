"use client"
import { Button } from "@/components/ui/button"
import { Smartphone, Download, Star, ArrowUpRightFromSquare } from "lucide-react"
import { useEffect } from "react";

export default function DownloadAppSection() {


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
    <section className="py-12  max-w-7xl mx-auto my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 fade-item"> Our Mobile App</h2>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 fade-item"> Plan Your Medical Future, Anytime!</h3>
              <h4 className="text-lg text-slate-600 mb-6 fade-item">
              Download All About Doctor App — End-to-end  medical education support , study material, NEET coaching, and expert doctors to guide your journey.
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Smartphone className="w-8 h-8 text-rose-600" />
                </div>
                <h4 className="text-sm font-medium text-slate-700 fade-item">Download on Google Play</h4>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Star className="w-8 h-8 text-rose-600" />
                </div>
                <h4 className="text-sm font-medium text-slate-700 fade-item">Download on App Store</h4>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Download className="w-8 h-8 text-rose-600" />
                </div>
                <h4 className="text-sm font-medium text-slate-700 fade-item">Free Download</h4>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-slate-800 text-white px-8 py-3 rounded-lg flex items-center gap-2">
                Download on the App Store
              </Button>
              {/* <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg flex items-center gap-2">
                <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-8" />
              </Button> */}
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className=" p-2 shadow-2xl">
                <div className="rounded-2xl overflow-hidden ">
                  <img src="/assets/img/4.png" alt="Wedding Planning App" className="w-100 h-auto " />


                </div>
              </div>
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
    </section>
  )
}
