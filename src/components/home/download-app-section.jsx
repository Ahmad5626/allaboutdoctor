import { Button } from "@/components/ui/button"
import { Smartphone, Download, Star } from "lucide-react"

export default function DownloadAppSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-rose-50 to-pink-50 max-w-7xl mx-auto my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Download Our Wedding Planning App</h2>
              <p className="text-lg text-slate-600 mb-6">
                Plan your dream wedding on the go with our mobile app. Access thousands of vendors, get instant quotes,
                and manage your wedding timeline from anywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Smartphone className="w-8 h-8 text-rose-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Easy Planning</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Star className="w-8 h-8 text-rose-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Top Vendors</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Download className="w-8 h-8 text-rose-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Free Download</p>
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
                <div className="rounded-2xl overflow-hidden">
                  <img src="https://image.wedmegood.com/resized/500X/images/banner/download_app.jpg" alt="Wedding Planning App" className="w-44 h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
