import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MBBS Admission Support for Students | All About Doctor",
  description:
    "All About Doctor offers expert MBBS admission support, university shortlisting, documentation and visa help. Start your medical journey—apply now with confidence.",
  icons: {
    icon: "/icon.png", // public folder ke andar favicon file honi chahiye
  },
  alternates: {
    canonical: "https://www.allaboutdoctor.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <AuthProvider>

        {children}
      </AuthProvider>
      </body>
    </html>
  );
}


