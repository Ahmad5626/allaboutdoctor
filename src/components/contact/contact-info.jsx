export default function ContactInfo() {
  const sections = [
    {
      title: "Vendors",
      body: "If you are a registered vendor or a business looking to promote your brand on our portal, please send in your queries at",
      email: "vendors@wedmegood.com",
    },
    {
      title: "Marketing Collaborations",
      body: "For brand collaborations – sponsored content, social media activations etc., please write to",
      email: "partnerships@wedmegood.com",
    },
    {
      title: "Wedding Submissions",
      body: "We feature weddings across cultures, styles and budgets. To submit your wedding, kindly email us 15–20 photos at",
      email: "submissions@wedmegood.com",
    },
    {
      title: "Careers",
      body: "We are a team of passionate young minds looking to reinvent the wedding space. Please check our careers page for current openings and email us at",
      email: "hr@wedmegood.com",
    },
    {
      title: "Customers",
      body: "We love to hear from our precious users. For any feedback or queries simply write in to",
      email: "info@wedmegood.com",
    },
  ]

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      {sections.map((s, idx) => (
        <section key={s.title} className="p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {s.body}{" "}
            <a
              href={`mailto:${s.email}`}
              className="font-medium text-rose-600 underline decoration-rose-300 underline-offset-2 hover:text-rose-700"
            >
              {s.email}
            </a>
          </p>
          {idx < sections.length - 1 && <hr className="mt-4 border-slate-200" />}
        </section>
      ))}
    </div>
  )
}
