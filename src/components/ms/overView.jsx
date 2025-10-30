import React from 'react'

const OverView = () => {
  return (
    <div>
      {/* Course Overview Table */}
      <section className="md:py-0 px-4 md:px-8 border-b border-primary/20 bg-primary/5">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-4xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            BHMS Course <span className="text-primary">Overview</span>
          </h1>

          <div className="overflow-x-auto py-6">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  { label: "Course Name", value: "Bachelor of Homeopathic Medicine and Surgery (BHMS)" },
                  { label: "Duration", value: "5.5 years (4.5 academic + 1 internship)" },
                  { label: "Eligibility", value: "10+2 with Physics, Chemistry, and Biology (minimum 50%)" },
                  { label: "Entrance Exam", value: "NEET-UG (mandatory in most AYUSH institutions)" },
                  { label: "Course Type", value: "Undergraduate – Professional" },
                  { label: "Degree Awarded By", value: "Recognized AYUSH University / Government Institution" },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-primary/5"}
                  >
                    <td className="px-6 py-4 font-semibold text-foreground border border-primary/20">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-foreground/80 border border-primary/20">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OverView
