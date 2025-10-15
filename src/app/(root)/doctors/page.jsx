import DoctorCard from "@/components/doctor-card"
import { doctors } from "@/components/about/doctor"

export const metadata = { title: "Doctors — All About Doctor Education Pvt Ltd" }

export default function DoctorsIndex() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Our Doctors</h1>
        <p className="text-sm text-muted-foreground">Click any profile to view details.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((d) => (
          <DoctorCard key={d.slug} doctor={d} />
        ))}
      </section>
    </main>
  )
}
