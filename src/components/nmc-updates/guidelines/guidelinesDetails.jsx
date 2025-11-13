"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Hedaer";
import { useParams, useRouter } from "next/navigation";

export default function GuidelinesDetails() {
  const router = useRouter();
  const { id } = useParams();
  

  // In a real setup, fetch article details from API or CMS here
  const newsData = {
    1: {
      title:
        "Health Ministry Asks NMC To Review Uniform Stipend For MBBS Interns In Govt And Private Colleges",
      author: "Anshika Mishra",
      date: "11 Nov 2025",
      time: "5:36 PM",
      image: "/assets/img/letest-img1.webp",
      content: `
        The long-pending issue of stipend disparity between MBBS interns in Government
        and Private medical colleges may soon end as the Union Ministry has requested
        the National Medical Commission (NMC) to review and issue uniform stipend
        regulations.

        According to officials, the Ministry aims to ensure fair compensation for
        all MBBS interns regardless of college ownership. The decision follows growing
        demands from students and state medical associations to standardize internship
        stipends across India.
      `,
    },
    2: {
      title: "Health Bulletin 11/November/2025",
      author: "Anshika Mishra",
      date: "11 Nov 2025",
      time: "5:26 PM",
      image: "/assets/img/letest-img2.webp",
      content: `
        Today's key highlights: Health Ministry asks NMC to review stipend policies,
        AIIMS updates its postgraduate schedule, and MCC announces tentative NEET PG
        Round 2 dates. Stay tuned for more verified updates from official sources.
      `,
    },
  };

  const article = newsData[id];

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <p className="text-lg text-muted-foreground">
          Sorry, this news article could not be found.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full bg-card/40">
    <Navbar/>
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <button
          onClick={() => router.back()}
          className="mb-6 px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
        >
          ← Back to Latest Updates
        </button>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-foreground leading-snug">
            {article.title}
          </h1>
          <p className="text-xs text-muted-foreground">
            {article.author} • {article.date} • {article.time}
          </p>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-100 object-contain rounded-lg shadow-md my-4"
          />
          <div className="prose prose-sm md:prose-base text-foreground/80 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
