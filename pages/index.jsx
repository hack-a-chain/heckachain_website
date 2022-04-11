import Hero from "../src/components/Hero";
import TechChain from "../src/components/TechChain";
import Journey from "../src/components/Journey";
import Engagement from "../src/components/Development/Engagement";
import Services from "../src/components/Services";
import OurProcess from "../src/components/Development/OurProcess";
import Products from "../src/components/Products";
import Customers from "../src/components/Customers";
import Form from "../src/components/Form";
import Cases from "../src/components/Development/Cases";
import Testimonials from "../src/components/Testimonials";
import Team from "../src/components/Team";
import About from "../src/components/About";
 
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <TechChain />
      <div className="relative challenges overflow-scroll sm:overflow-none">
        <Journey />
      </div>
      <Customers />
      <Engagement />
      {/* <Services /> */}
      <OurProcess />
      <Products />
      <Cases />
      <Testimonials />
      <Team />
      <About />
      <Form />
    </div>
  );
}
