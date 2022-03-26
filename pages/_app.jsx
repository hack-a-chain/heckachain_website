import "../styles/globals.css";
import "../styles/heroAnimate.css";
import "../styles/wave.css";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import Header from "../src/components/Header";

function MyApp({ Component, pageProps }) {
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
            ? "w-12 shadow-xl cursor-pointer text-primary fixed bottom-8 right-5 bg-white rounded-full z-50 hover:animate-bounce transition-all delay-150 ease-in-out"
            : "hidden"
        }
      />
    </div>
  );
}

export default MyApp;
