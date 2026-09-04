import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Philosophy from "@/components/philosophy";
import Services from "@/components/services";
import Process from "@/components/process";
import Doctor from "@/components/doctor";
import Location from "@/components/location";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Philosophy />
        <Services />
        <Process />
        <Doctor />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
