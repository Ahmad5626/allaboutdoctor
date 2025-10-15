const headOffice = {
  city: "Jaipur (Head Office)",
  name: "All About Doctor Education Pvt. Ltd.",
  address: ["G-07, First Floor, RTech Capital Highstreet,", "Mahal Road, Jagatpura, Jaipur, Rajasthan – 302017"],
  helpDesk: "+91 77373 67793",
}

const branches = [
  {
    city: "Lucknow",
    address: [
      "Second Floor, Heera Plaza, near Power House Chauraha,",
      "Sector 8, Vikas Nagar, Lucknow, Uttar Pradesh – 226022",
    ],
    helpDesk: "+91 9569936836",
  },
  {
    city: "Dehradun",
    address: [
      "First Floor, RAFAH EYE & ENT CENTRE Lane-12, Turner Road,",
      "Prakarti Vihar, near Welmed Hospital, Clement Town Cantt Area, Dehradun, Uttarakhand – 248002",
    ],
    helpDesk: "+91 98978 61170",
  },
  {
    city: "Pune",
    address: [
      "513, Tower A, 5th Floor, Nyati Empress, beside Sai Infra, opposite Phoenix Market City,",
      "Viman Nagar, Pune, Maharashtra – 411014",
    ],
    helpDesk: "+91 92097 21893",
  },
  {
    city: "Panipat",
    address: [
      "Ground Floor, 118-B, near Bansal X-Ray, Sukhdev Nagar,",
      "Old Housing Board Colony, Panipat, Haryana – 132103",
    ],
    helpDesk: "+91 77373 67793",
  },
  {
    city: "Patna",
    address: ["Ramnagri More, Ashiyana-Digha Road, opposite 9to9 Super Market, 4th Floor,", "Patna – 800025"],
    helpDesk: "+91 93510 18577",
  },
  {
    city: "Thane",
    address: [
      "Blue Pearl, 4th Floor, Office 401, Santhoshi Mata Road, Rambaug Lane No. 2,",
      "Kalyan West, Thane, Maharashtra – 421301",
    ],
    helpDesk: "+91 77373 67793",
  },
  {
    city: "Kota",
    address: [
      "LG-08, Bagherwal Four Seasons Building, near Axis Bank,",
      "Rajeev Gandhi Nagar, Instrumentation Limited Colony, Kota, Rajasthan – 324005",
    ],
    helpDesk: "+91 77373 67793",
  },
  {
    city: "Gurugram",
    address: ["212, DLF Galleria Road, Galleria Market Towers,", "DLF Phase IV, Gurugram, Haryana – 122009"],
    helpDesk: "+91 98997 89635",
  },
]

const upcoming = ["Indore", "Coimbatore", "Sikar", "Hyderabad", "Srinagar", "Kolkata", "Ahmedabad", "Chennai"]

function Card({ title, children, foot }) {
  return (
    <div className="border border-border border-l-2 border-l-primary rounded-lg p-4 md:p-5">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <div className="mt-2 text-sm">{children}</div>
      {foot ? <div className="mt-3 text-sm text-secondary">{foot}</div> : null}
    </div>
  )
}

export default function Offices() {
  return (
    <section aria-labelledby="offices">
      <h2 id="offices" className="text-2xl md:text-3xl font-semibold tracking-tight">
        Our Offices
      </h2>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-1">
          <Card title={headOffice.city} foot={`Help Desk: ${headOffice.helpDesk}`}>
            <p className="font-medium">{headOffice.name}</p>
            {headOffice.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </Card>
        </div>

        <div className="lg:col-span-2">
          {/* timeline list for branches */}
          <ul className="relative border-l border-border pl-4">
            {branches.map((b) => (
              <li key={b.city} className="relative pl-4 py-4 md:py-5">
                <span aria-hidden className="absolute -left-[5px] top-5 h-2 w-2 rounded-full border border-primary" />
                <div className="flex flex-col">
                  <h4 className="text-base md:text-lg font-semibold tracking-tight">{b.city}</h4>
                  <div className="mt-1 text-sm">
                    {b.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="mt-2 text-sm text-secondary">Help Desk: {b.helpDesk}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 md:mt-8">
        <h3 className="text-base font-semibold tracking-tight">Upcoming Branches</h3>
        <ul className="mt-3 flex flex-wrap items-center gap-2">
          {upcoming.map((city) => (
            <li key={city} className="text-sm font-medium text-primary border border-primary rounded-full px-3 py-1">
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
