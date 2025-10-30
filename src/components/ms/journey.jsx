import React from "react";
import { Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";

const Journey = () => {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Begin Your <span className="text-secondary">MS Specialization</span> Journey Today
          </h2>

          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Take your surgical career to the next level with All About Doctor Education Pvt. Ltd. 
            Join thousands of MBBS graduates who achieved postgraduate success through our trusted guidance 
            and expert counselling.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-secondary" />
              <span className="font-semibold">+91 93510 18577</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="font-semibold">Head Office: Jaipur</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-secondary" />
              <span className="font-semibold">www.allaboutdoctor.in</span>
            </div>
          </div>

          <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:scale-105 transition text-lg">
            <Link href="/services">Get Free Counselling Now</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Journey;
