import { MapPin } from "lucide-react";
import React from "react";

const TopCityKerala = () => {
  const cities = [
    "Thiruvananthapuram", "Alappuzha", "Kollam", "Pathanamthitta (Thiruvalla/Adoor/Konni)",
    "Kottayam", "Ernakulam", "Thrissur", "Kozhikode (Calicut)",
    "Malappuram", "Wayanad", "Palakkad", "Idukki", "Kannur", "Kasaragod"
  ];

  return (
    <section className="px-4 md:px-8 border-b border-primary/20 bg-primary/5">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-14">

        <h1
          className="text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
          style={{ animationDelay: "100ms" }}
        >
          Top Cities for MBBS in <span className="text-primary">Kerala</span>
        </h1>

        <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
          Thiruvananthapuram, Alappuzha, Kollam, Pathanamthitta (Thiruvalla/Adoor/Konni), 
          Kottayam, Ernakulam, Thrissur, Kozhikode (Calicut), Malappuram, Wayanad, 
          Palakkad, Idukki, Kannur, Kasaragod
          <br /><br />
          These cities offer top-tier hospitals, strong academic environments, and excellent 
          clinical training opportunities for MBBS students.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 p-4 bg-white border border-primary/20 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-foreground/80 font-medium">{city}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopCityKerala;
