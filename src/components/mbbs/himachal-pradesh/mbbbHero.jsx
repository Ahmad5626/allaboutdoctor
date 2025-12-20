import EnrollmentForm from "@/components/home/EnrollmentForm";

export default function HimachalHero() {
  return (
    <section className="w-full">
      <div className="md:flex justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
              All About Doctor Education Pvt Ltd
            </span>

            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-blue-200 to-secondary bg-clip-text text-transparent animate-shimmer fade-item"
              style={{ animationDelay: "100ms" }}
            >
              MBBS in Himachal Pradesh
<span > Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4">
            <h2 className="mt-4 text-muted-foreground text-lg md:text-xl fade-item" >
              Pursuing MBBS in Himachal Pradesh is an excellent choice for medical
              aspirants seeking quality education, peaceful academic environments,
              and strong clinical exposure. The state is home to several NMC-approved
              medical colleges that offer modern medical infrastructure, structured
              learning, and reliable patient flow.
              <br /><br />
              With expert support and transparent counseling guidance, All About Doctor
              Education Pvt Ltd helps students secure MBBS admissions across top
              medical cities in Himachal Pradesh.
            </h2>
          </div>
        </div>
             <div className="relative">
                   <div className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-md ring-1 ring-border md:p-8">
                     {/* rotating ring accent */}
                     <div
                       className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border-2 border-primary/30 animate-spin-slow"
                       aria-hidden="true"
                     />
                     <div
                       className="pointer-events-none absolute -left-6 bottom-10 h-24 w-24 rounded-full border border-primary/20"
                       aria-hidden="true"
                     />
       <EnrollmentForm fade="fade-item"/>
                   
                   </div>
                 </div>
      </div>
    </section>
  );
}
