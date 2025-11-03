import React from "react";
import { Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";

const Journey = () => {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Start Your  <span className="text-secondary"> Journey</span> Today
          </h2>

          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
       Ready to build your career in Dermatology and Aesthetic Medicine?
 Let All About Doctor Education Pvt. Ltd. guide you through every step — from counseling to successful admission — with complete, expert-led support.
          </p>

         

          <button className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:scale-105 transition text-lg">
            <Link href="/courses/ms">Read More about MS Courses</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Journey;
