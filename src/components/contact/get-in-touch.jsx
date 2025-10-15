export default function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-b from-background to-muted/40 py-16">
      <div className="max-w-7xl mx-auto   grid md:grid-cols-2 gap-10">
        
        {/* Left Info Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            We’re here to guide you at every step of your MBBS journey abroad.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">📞</span>
              <div>
                <p className="font-medium text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold leading-tight">
                  +91 93510 18577 <br /> +91 77373 67793
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">📧</span>
              <div>
                <p className="font-medium text-sm text-muted-foreground">Email</p>
                <a href="mailto:info@allaboutdoctor.in" className="text-primary font-semibold hover:underline">
                  info@allaboutdoctor.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">⏰</span>
              <div>
                <p className="font-medium text-sm text-muted-foreground">Office Hours</p>
                <p className="font-semibold leading-tight">
                  Mon – Sat: 10:00 AM – 06:00 PM <br /> Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatBox number="95%" label="Admission success rate" />
            <StatBox number="850+" label="Global partner universities" />
            <StatBox number="10,000+" label="Successful students" />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
          <h3 className="text-2xl font-semibold mb-2">Send us a message</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Share your details and our counsellors will reach out shortly with tailored guidance.
          </p>

         <form className="space-y-5 bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all">

  {/* Row 1 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div className="relative">
      <label className="text-sm font-medium text-muted-foreground mb-1 block">Full Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="form-input rounded-md p-1 px-1"
      />
      <span className="absolute right-3 top-9 text-muted-foreground/50">👤</span>
    </div>

    <div className="relative">
      <label className="text-sm font-medium text-muted-foreground mb-1 block">Email</label>
      <input
        type="email"
        placeholder="name@email.com"
        className="form-input rounded-md p-1 px-1"
      />
      <span className="absolute right-3 top-9 text-muted-foreground/50 ">📧</span>
    </div>
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div className="relative">
      <label className="text-sm font-medium text-muted-foreground mb-1 block">Phone</label>
      <input
        type="tel"
        placeholder="+91 9XXXXXXXXX"
        className="form-input rounded-md p-1 px-1"
      />
      <span className="absolute right-3 top-9 text-muted-foreground/50">📞</span>
    </div>

    <div className="relative">
      <label className="text-sm font-medium text-muted-foreground mb-1 block">Topic</label>
      <select className="form-input appearance-none pr-8">
        <option>Admissions</option>
        <option>Visa Support</option>
        <option>Documentation</option>
        <option>General Query</option>
      </select>
      <span className="absolute right-3 top-9 text-muted-foreground/50">⬇️</span>
    </div>
  </div>

  {/* Message */}
  <div>
    <label className="text-sm font-medium text-muted-foreground mb-1 block">Message</label>
    <textarea
      rows="4"
      placeholder="How can we help?"
      className="form-input resize-none w-full px-2"
    ></textarea>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:scale-[1.02] hover:shadow-md transition-all flex items-center justify-center gap-2"
  >
    <span>Send Message</span> →
  </button>
</form>

        </div>
      </div>
    </section>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="border border-border rounded-xl p-4 text-center bg-background hover:shadow-sm transition-all">
      <h4 className="text-2xl font-bold text-primary">{number}</h4>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

/* Tailwind CSS helper class */
const inputField =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all";
