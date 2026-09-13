import Header from "@/components/header";
import Hero from "@/components/hero";
import SpecsBar from "@/components/specs-bar";
import Highlights from "@/components/highlights";
import Zones from "@/components/zones";
import Facility from "@/components/facility";
import Menu from "@/components/menu";
import HowTo from "@/components/how-to";
import Location from "@/components/location";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SpecsBar />
        <Highlights />
        <Zones />
        <Facility />
        <Menu />
        <HowTo />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
