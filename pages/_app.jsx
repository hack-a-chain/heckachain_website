import { useEffect, useState, useRef } from "react";

import "../styles/globals.css";
import "../styles/heroAnimate.css";
import "../styles/wave.css";
import "../styles/blockChainAnimate.css";
import "../styles/form.css";
import "../styles/journey.css";

import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";

import Header from "../src/components/Header";
import AOS from "aos";
import Footer from "../src/components/Footer";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";
import NavLink from "../src/components/NavLink";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-rubik">
      <Header move={moveHeader} />
      <div id="progressbar" ref={progressBar}></div>
      <div id="scrollPath"></div>
      <Component {...pageProps} />

      <NavLink href="https://t.me/hackachain" target="blank">
        <img
          src="/telegram.svg"
          alt=""
          className={
            show
              ? "w-8 sm:w-10 shadow-xl cursor-pointer text-primary fixed bottom-20 right-5 bg-white rounded-full z-50 hover:animate-bounce transition-all delay-150 ease-in-out"
              : "hidden"
          }
        />
      </NavLink>

      <ArrowCircleUpIcon
        className={
          show
            ? "w-8 sm:w-10 cursor-pointer text-primary fixed bottom-5 right-5 bg-grayHack rounded-full z-50"
            : "hidden"
        }
        onClick={() => scrollToTop()}
      />

      <Footer />
    </div>
  );
}

export default MyApp;
