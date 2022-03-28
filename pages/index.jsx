import Hero from "../src/components/Hero";
import TechChain from "../src/components/TechChain";
import Services from "../src/components/Services";
import Products from "../src/components/Products";
import Customers from "../src/components/Customers";
import Form from "../src/components/Form";
import Testimonials from "../src/components/Testimonials";
import Team from "../src/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <TechChain />
      <Services />
      {/* <Products /> */}
      <Customers />
      {/* <Testimonials /> */}
      <Team />
      <Form />
    </>
  );
}
