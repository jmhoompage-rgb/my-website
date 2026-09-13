import Header from "@/components/header";
import Hero from "@/components/hero";
import SpecsBar from "@/components/specs-bar";
import Highlights from "@/components/highlights";
import Rooms from "@/components/rooms";
import Facility from "@/components/facility";
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
        <Rooms />
        <Facility />
        <HowTo />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
