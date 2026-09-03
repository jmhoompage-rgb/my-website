import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Testimonial } from "@/components/testimonial";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <About />
        <Testimonial />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
