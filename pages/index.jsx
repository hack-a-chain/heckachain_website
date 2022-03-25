import { useEffect } from "react";
import Hero from "../src/components/Hero";
import AOS  from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh();
  }, []);

  return (
    <div className="relatve h-[400vh]">
      <Hero />
      
    </div>
  );
}
