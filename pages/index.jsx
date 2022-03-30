import Hero from "../src/components/Hero";
import TechChain from "../src/components/TechChain";
import Journey from "../src/components/Journey";
import Services from "../src/components/Services";
import Products from "../src/components/Products";
import Customers from "../src/components/Customers";
import Form from "../src/components/Form";
import Testimonials from "../src/components/Testimonials";
import Team from "../src/components/Team";
import Faq from "../src/components/Faq.";
import BlockChainAnimate from "../src/components/BlockChainAnimate";

export default function Home() {
  return (
    <>
      <Hero />
      <TechChain />
      <div className="relative challenges overflow-scroll sm:overflow-non">
        <Journey />
      </div>
      {/* <BlockChainAnimate /> */}
      <Services />
      <Products />
      <Customers />
      <Testimonials />
      <Team />
      <Faq />
      <Form />
    </>
  );
}
