import About from "@/components/landing/About";
import LandingFooter from "@/components/landing/Footer";
import GetStarted from "@/components/landing/GetStarted";
import LandingHeader from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";
import Image from "next/image";

export default function Home() {
  return <>
    <Hero />
    <About />
    <Testimonials />
    <GetStarted/>
    {/* <LandingFooter/> */}
  </>
}
