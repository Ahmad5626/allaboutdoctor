import Hero from "@/components/about/hero"
import Overview from "@/components/about/overview"
import Services from "@/components/about/services"
import Team from "@/components/our-team/team"
import Management from "@/components/our-team/management"
import Partners from "@/components/about/partners"
import Footer from "@/components/Footer"
import Header from "@/components/Hedaer"

export default function AboutAllAboutDoctorPage() {
  return (
    <main className="min-h-dvh">
    <Header/>
      <Hero />
      <Overview />
      <Services />
      <Team />
      <Management />
      <Partners />
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="rounded-xl ring-1 ring-primary/20 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
            
              <h3 className="text-pretty text-2xl md:text-3xl font-semibold">
               From  counseling to clinical training, All About Doctor Education Pvt Ltd
              </h3>
              <p className="mt-2 text-sm/6 md:text-base/6 text-muted-foreground">
                stands as a lifelong partner in every student’s journey — nurturing them into confident, competent, and compassionate medical professionals.
              </p>
            </div>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-secondary px-5 py-3 text-sm font-medium text-secondary hover:opacity-85 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
