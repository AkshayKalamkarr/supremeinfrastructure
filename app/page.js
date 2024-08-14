import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import SupremeQuote from "@/components/SupremeQuote";


export default function Home() {
  return (
    <>
      <HeroSection />
      <SupremeQuote />
      <Portfolio/>
      <GetInTouch/>
      <About/>
    </>
  );
}
