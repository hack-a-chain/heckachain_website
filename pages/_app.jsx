import { useEffect, useState, useRef } from "react";

import "../styles/globals.css";
import "../styles/heroAnimate.css";
import "../styles/wave.css";
import "../styles/blockChainAnimate.css";
import "../styles/form.css";
import "aos/dist/aos.css";

import Header from "../src/components/Header";
import AOS from "aos";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  const [moveHeader, setMoveHeader] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollListener = () =>
      window.scrollY > 100 ? setShow(true) : setShow(false);
    window.addEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    const scrollListener = () =>
      window.scrollY > 10 ? setMoveHeader(true) : setMoveHeader(false);
    window.addEventListener("scroll", scrollListener);
  }, [moveHeader]);

  const progressBar = useRef(null);

  typeof window !== "undefined"
    ? (window.onscroll = () => {
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progressBar.current.style.height = progressHeight + "%";
      })
    : null;

  return (
    <div className="font-rubik">
      <Header move={moveHeader} />
      <div id="progressbar" ref={progressBar}></div>
      <div id="scrollPath"></div>
      <Component {...pageProps} />
      <img
        src="/telegram.svg"
        alt=""
        className={
          show
            ? "w-8 sm:w-12 shadow-xl cursor-pointer text-primary fixed bottom-5 right-5 bg-white rounded-full z-50 hover:animate-bounce transition-all delay-150 ease-in-out"
            : "hidden"
        }
      />
      <Footer />
    </div>
  );
}

export default MyApp;
