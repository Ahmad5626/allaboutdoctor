import Image from "next/image"
import Link from "next/link"
import { doctors } from "@/components/about/doctor"

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }))
}

export default function DoctorProfile({ params }) {
  const doctor = doctors.find((d) => d.slug === params.slug)

  if (!doctor) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-muted-foreground">Doctor not found.</p>
        <Link href="/doctors" className="text-primary underline mt-4 inline-block">
          Back to all doctors
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/doctors" className="text-sm text-primary underline">
        Back to all doctors
      </Link>

      <section className="mt-4 grid gap-6 md:grid-cols-[160px_1fr]">
        <div className="relative h-40 w-40 rounded-full ring-2 ring-primary/20 overflow-hidden">
          <Image
            src={doctor.photo || `/placeholder.svg?height=256&width=256&query=doctor%20headshot`}
            alt={doctor.name}
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{doctor.name}</h1>
          <p className="mt-1 text-muted-foreground">{doctor.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{doctor.role}</p>
          <div className="mt-4 rounded-xl border border-border bg-card p-4">
            <p className="text-pretty">{doctor.bio}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
