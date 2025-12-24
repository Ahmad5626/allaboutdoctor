export default function NeetReservationPolicyModern() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item">
          NEET UG Reservation Policy & Seat Quota System
        </h2>

        <p className="mt-6 text-lg text-muted-foreground max-w-4xl">
          Seat allocation follows central and state reservation guidelines,
          ensuring equal opportunities for all categories.
        </p>

        {/* Modern Table Card */}
        <div className="mt-12 rounded-2xl border border-border bg-white shadow-sm overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-2 bg-muted/60 px-8 py-5 text-sm font-semibold text-muted-foreground">
            <div>Category</div>
            <div>Reservation Type</div>
          </div>

          {/* Rows */}
          <TableRow
            category="General / UR"
            type="Unreserved"
            badge="default"
          />
          <TableRow
            category="OBC – NCL"
            type="Central Reservation"
            badge="info"
          />
          <TableRow
            category="SC / ST"
            type="Central Reservation"
            badge="warning"
          />
          <TableRow
            category="EWS"
            type="Economically Weaker Section"
            badge="success"
          />
          <TableRow
            category="PwD"
            type="Horizontal Reservation"
            badge="purple"
          />

        </div>

        {/* Note */}
        <p className="mt-8 text-base text-muted-foreground max-w-4xl">
          State-level counselling may also include{" "}
          <span className="font-medium text-foreground">Home State</span> and{" "}
          <span className="font-medium text-foreground">Other State</span>{" "}
          quota distinctions depending on domicile rules.
        </p>

      </div>
    </section>
  )
}

/* ---------- Row ---------- */

function TableRow({ category, type, badge }) {
  const badgeStyles = {
    default: "bg-gray-100 text-gray-700",
    info: "bg-blue-100 text-blue-700",
    warning: "bg-orange-100 text-orange-700",
    success: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  }

  return (
    <div className="grid grid-cols-2 px-8 py-5 border-t hover:bg-muted/40 transition">
      <div className="flex items-center gap-3 font-medium">
        <span
          className={`px-3 py-1 rounded-full text-xs ${badgeStyles[badge]}`}
        >
          {category}
        </span>
      </div>
      <div className="text-muted-foreground">
        {type}
      </div>
    </div>
  )
}
