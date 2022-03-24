import "../styles/globals.css";
import { useEffect, useState, useRef } from "react";
import Header from '../src/components/Header'

function MyApp({ Component, pageProps }) {
  const [moveHeader, setMoveHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () =>
      window.scrollY > 10 ? setMoveHeader(true) : setMoveHeader(false);
    window.addEventListener("scroll", scrollListener);
  }, [moveHeader]);

  return (
    <>
      <Header move={moveHeader} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
