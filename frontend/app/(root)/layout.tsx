import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import LandingHeader from "@/components/landing/Header";
import LandingFooter from "@/components/landing/Footer";


const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "Mentee",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <Suspense>
    <html lang="en">
      <body className={poppins.className}>
            <LandingHeader />
        {children}
        <LandingFooter/>
      </body>
    </html>
  );
}