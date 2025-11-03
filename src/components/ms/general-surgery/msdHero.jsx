import React from "react";

export const MsHero = () => {
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
            MS (Master of Surgery) –{" "}
            <span className="text-primary">General Surgery</span>
          </h1>

          <p className="text-lg md:text-xl text-primary font-semibold">
            All About Doctor Education Pvt. Ltd. provides expert admission
            support and mentorship for students aiming to pursue MS in General
            Surgery, a postgraduate program dedicated to developing surgical
            expertise, clinical decision-making, and patient management skills.
          </p>

          <p className="mt-4 max-w-2xl text-sm/6 md:text-base/7 text-muted-foreground">
            This program focuses on diagnosing and treating a wide range of
            surgical conditions through advanced techniques, preoperative and
            postoperative care, and emergency management. Our experienced
            counselors guide you through every step — from NEET-PG preparation
            to university admission — ensuring a seamless pathway to your
            surgical career.
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
