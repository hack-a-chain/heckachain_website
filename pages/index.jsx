import Hero from "../src/components/Hero";
import TechChain from "../src/components/TechChain";
import Services from "../src/components/Services";
import Products from "../src/components/Products";
import Customers from "../src/components/Customers";
import Form from "../src/components/Form";

export default function Home() {
  return (
    <>
      <Hero />
      <TechChain />
      <Services />
      {/* <Products /> */}
      <Customers />
      <Form />
    </>
  );
}
