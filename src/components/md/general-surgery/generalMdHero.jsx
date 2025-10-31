import React from "react";

export const GeneralMdHero = () => {
  return (
    <div>
      <header className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-10">
          <span
            className="inline-flex items-center rounded-full border border-border/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground animate-fade-up"
            style={{ animationDelay: "40ms" }}
          >
            All About Doctor Education Pvt. Ltd.
          </span>

          <h1
            className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl animate-fade-up my-4"
            style={{ animationDelay: "100ms" }}
          >
            MD (Doctor of Medicine) –{" "}
            <span className="text-primary">General Surgery</span>
          </h1>

          <p className="text-lg md:text-xl text-primary font-semibold">
            All About Doctor Education Pvt. Ltd. provides complete guidance and
            support for pursuing MD in General Surgery, a postgraduate program
            designed to train medical graduates in surgical principles, patient
            management, and operative techniques.
          </p>

          <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
            This specialization focuses on diagnosing and surgically treating
            diseases related to the abdomen, breast, head and neck, soft tissues,
            and trauma care. Through hands-on training and expert mentorship,
            students gain the clinical confidence and surgical skills required to
            excel in hospitals, research, and academic institutions worldwide.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border bg-secondary px-5 py-3 text-sm font-medium text-white hover:opacity-85 transition"
            >
              Get Free Counselling
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

function Stat({ label, value }) {
  return (
    <div className="rounded-lg p-4 ring-1 ring-border">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-lg md:text-xl font-semibold">{value}</div>
    </div>
  );
}
