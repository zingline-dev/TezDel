import type { Metadata } from "next";
import { Sora, Nunito, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-logo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TezDel Partners | Grow With Bhubaneswar's Next Hyperlocal Network",
  description: "Join TezDel as a restaurant, home chef, kirana partner, or delivery captain. Odisha's next-generation local commerce platform with zero-commission options.",
  keywords: "restaurant partner Bhubaneswar, delivery jobs Odisha, home chef platform Odisha, grocery delivery partner, ONDC restaurant onboarding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${nunito.variable} ${syne.variable} antialiased bg-background`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
