import { useEffect } from "react";
import Hero from "../src/components/Hero";
import AOS from "aos";
import TechChain from "../src/components/TechChain";
import Products from "../src/components/Products";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Hero />
      <TechChain />
      <Products />
    </>
  );
}
