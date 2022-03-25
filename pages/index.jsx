import { useEffect } from "react";
import Hero from "../src/components/Hero";
import AOS from "aos";
import TechChain from "../src/components/TechChain";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <div className="relatve">
      <Hero />
      <TechChain />
    </div>
  );
}
