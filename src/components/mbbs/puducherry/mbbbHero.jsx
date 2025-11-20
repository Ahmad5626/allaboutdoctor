export default function PuducherryHero() {
  return (
    <section className="w-full">
      <div className="md:flex justify-between items-center mx-auto max-w-7xl px-6 py-10 md:py-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <span
              className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
              style={{ animationDelay: "40ms" }}
            >
              All About Doctor Education Pvt Ltd
            </span>

            <h1
              className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
              style={{ animationDelay: "100ms" }}
            >
              MBBS in Puducherry –{" "}
              <span className="text-primary">Complete Admission Guidance</span>
            </h1>

            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="pt-0 space-y-4">
            <p className="mt-4 text-muted-foreground text-lg md:text-xl">
              Pursuing MBBS in Puducherry is an excellent opportunity for medical aspirants
              seeking high academic standards, modern medical infrastructure, and strong 
              clinical exposure. The Union Territory is home to renowned NMC-approved 
              government, private, and deemed medical colleges known for advanced facilities, 
              experienced faculty, and excellent patient flow that supports real-time 
              clinical learning.
              <br /><br />
              With structured NEET counselling guidance and complete admission support, 
              All About Doctor Education Pvt Ltd helps students secure MBBS seats across 
              all major medical hubs in Puducherry.
              <br /><br />
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
