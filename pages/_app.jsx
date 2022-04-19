import { useEffect, useState, useRef } from "react";
import { NextSeo } from "next-seo";
import "../styles/globals.css";
import "../styles/heroAnimate.css";
import "../styles/wave.css";
import "../styles/blockChainAnimate.css";
import "../styles/form.css";
import "../styles/journey.css";

import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";

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
      <NextSeo
        title="Hack a chain"
        description="We are Blockchain Specialists. More than a software service. All our business and technology knowledge working for you."
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-57x57.png",
            sizes: "57x57",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-60x60.png",
            sizes: "60x60",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-72x72.png",
            sizes: "72x72",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-76x76.png",
            sizes: "76x76",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-114x114.png",
            sizes: "114x114",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-120x120.png",
            sizes: "120x120",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-144x144.png",
            sizes: "144x144",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-152x152.png",
            sizes: "152x152",
          },
          {
            rel: "apple-touch-icon",
            href: "/favicon/apple-icon-180x180.png",
            sizes: "180x180",
          },

          {
            rel: "icon",
            type: "image/png",
            href: "/favicon/android-icon-192x192.png",
            sizes: "192x192",
          },
          {
            rel: "icon",
            type: "image/png",
            href: "/favicon/android-icon-192x192.png",
            sizes: "192x192",
          },
          {
            rel: "icon",
            type: "image/png",
            href: "/favicon/android-icon-32x32.png",
            sizes: "32x32",
          },
          {
            rel: "icon",
            type: "image/png",
            href: "/favicon/android-icon-96x96.png",
            sizes: "96x96",
          },
          {
            rel: "icon",
            type: "image/png",
            href: "/favicon/android-icon-16x16.png",
            sizes: "16x16",
          },
          {
            rel: "manifest",
            href: "/favicon/manifest.json",
          },
          {
            rel: "icon",
            type: "image/png",
            href: "/favicon/android-icon-16x16.png",
            sizes: "16x16",
          },
        ]}
        additionalMetaTags={[
          {
            name: "msapplication-TileColor",
            content: "#ffffff",
          },
          {
            name: "msapplication-TileImage",
            content: "/favicon/ms-icon-144x144.png",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
      />
      <Header move={moveHeader} />
      <div id="progressbar" ref={progressBar}></div>
      <div id="scrollPath"></div>
      <Component {...pageProps} />

      <NavLink href="https://t.me/hackachain" target="blank">
        <img
          src="/telegram.svg"
          alt=""
          className="w-8 sm:w-10 shadow-xl cursor-pointer text-primary fixed bottom-20 right-5 rounded-full z-50 hover:animate-bounce transition-all delay-150 ease-in-out"
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
