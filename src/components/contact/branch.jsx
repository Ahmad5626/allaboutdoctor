import { MapPin, Phone } from "lucide-react"

const branches = [
  {
    city: "Jaipur – Head Office",
    address:
      "Ramnagri More, Ashiyana-Digha Road, opposite 9to9 Super Market, 4th Floor, Jaipur, Rajasthan – 800025",
    phone: "+91 93510 18577",
  },
  {
    city: "Lucknow",
    address:
      "Second Floor, Heera Plaza, near Power House Chauraha, Sector 8, Vikas Nagar, Lucknow, Uttar Pradesh – 226022",
    phone: "+91 95699 36836",
  },
  {
    city: "Dehradun",
    address:
      "First Floor, RAFAH EYE & ENT CENTRE Lane-12, Turner Road, Prakarti Vihar, near Welmed Hospital, Clement Town Cantt Area, Dehradun, Uttarakhand – 248002",
    phone: "+91 98978 61170",
  },
  {
    city: "Pune",
    address:
      "513, Tower A, 5th Floor, Nyati Empress, beside Sai Infra, opposite Phoenix Market City, Viman Nagar, Pune, Maharashtra – 411014",
    phone: "+91 92097 21893",
  },
  {
    city: "Panipat",
    address:
      "Ground Floor, 118-B, near Bansal X-Ray, Sukhdev Nagar, Old Housing Board Colony, Panipat, Haryana – 132103",
    phone: "+91 77373 67793",
  },
  {
    city: "Thane",
    address:
      "Blue Pearl, 4th Floor, Office 401, Santhoshi Mata Road, Rambaug Lane No. 2, Kalyan West, Thane, Maharashtra – 421301",
    phone: "+91 77373 67793",
  },
  {
    city: "Kota",
    address:
      "LG-08, Bagherwal Four Seasons Building, near Axis Bank, Rajeev Gandhi Nagar, Instrumentation Limited Colony, Kota, Rajasthan – 324005",
    phone: "+91 77373 67793",
  },
  {
    city: "Gurugram",
    address:
      "212, DLF Galleria Road, Galleria Market Towers, DLF Phase IV, Gurugram, Haryana – 122009",
    phone: "+91 98997 89635",
  },
];


export default function Branches() {
  return (
    <section id="branches" className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-semibold leading-tight sm:text-4xl">
            Our Key <span className="text-primary">Branches</span>
          </h2>
          <p className="mt-2 text-sm/6 md:text-base/6 text-muted-foreground">
            Visit our offices across major cities for in-person guidance and student support.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {branches.map((b) => (
            <div
              key={b.city}
              className="group border border-border rounded-xl p-5 bg-white hover:shadow-lg hover:border-primary/40 transition-all"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                <MapPin className="text-primary size-5" /> {b.city}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{b.address}</p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <Phone className="size-4" /> {b.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
