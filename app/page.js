import About from "@/components/About";
// import Design from "@/components/Design";
import GetInTouch from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import ServicesGrid from "@/components/Services";
import SupremeQuote from "@/components/SupremeQuote";


export default function Home() {
  return (
    <>
      <HeroSection />
      <SupremeQuote />
      {/* <Design/> */}
      <Portfolio/>
      <GetInTouch/>
      <ServicesGrid/>
    </>
  );
}
