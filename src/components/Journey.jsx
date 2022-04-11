import { useEffect, useState } from "react";
import JourneyMobile from "./JourneyMobile";

export default function Journey() {
  const [showComponentDesktop, setShowComponentDesktop] = useState(true);
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  useEffect(() => {
    width < 760
      ? setShowComponentDesktop(false)
      : setShowComponentDesktop(true);
  }, [setShowComponentDesktop, width]);

  const [checked, setChecked] = useState(1);
  const [pause, setPause] = useState(false);

  const onPause = (index) => {
    return index === checked && setPause(true);
  };

  const onMove = (index) => {
    return index === checked && setPause(false);
  };

  useEffect(() => {
    if (!pause) {
      var timeout = setTimeout(() => {
        checked < 4 ? setChecked(checked + 1) : setChecked(1);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [checked, pause]);

  return (
    <div className="progress overflow-hidden relative h-full">
      <div
        data-aos="fade-left"
        className="relative text-center px-4 py-10 sm:py-24 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          <span className="block text-primary xl:inline">
            It doesn’t matter in which stage you are
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          we are here to help you all over your journey.
        </p>
      </div>

      <img
        src="/graphics/grafismo-03-invert.png"
        alt="grafismo"
        className="absolute opacity-20 sm:-top-5 left-5 overflow-hidden"
      />

      {showComponentDesktop ? (
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="progress_inner"
        >
          <div className="progress_inner__step">
            <label htmlFor="step-1">Idea</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-2">Conception</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-3">Development</label>
          </div>
          {/* <div className="progress_inner__step">
            <label htmlFor="step-4">Auditing</label>
          </div> */}
          <div className="progress_inner__step">
            <label htmlFor="step-4">Improvement</label>
          </div>

          <input
            checked={checked === 1}
            onChange={() => setChecked(1)}
            onClick={() => onPause(1)}
            id="step-1"
            type="radio"
          />
          <input
            checked={checked === 2}
            onChange={() => setChecked(2)}
            onClick={() => onPause(2)}
            id="step-2"
            type="radio"
          />
          <input
            checked={checked === 3}
            onChange={() => setChecked(3)}
            onClick={() => onPause(3)}
            id="step-3"
            type="radio"
          />
          <input
            checked={checked === 4}
            onChange={() => setChecked(4)}
            onClick={() => onPause(4)}
            id="step-4"
            type="radio"
          />
          {/* <input
            checked={checked === 5}
            onChange={() => setChecked(5)}
            onClick={() => onPause(5)}
            id="step-5"
            type="radio"
          /> */}

          <div className="progress">
            <div className="progress_inner">
              <div className="progress_inner__step">
                <label
                  htmlFor="step-1"
                  onMouseOver={() => onPause(1)}
                  onMouseLeave={() => onMove(1)}
                  onClick={() => {
                    setChecked(1);
                    onPause(1);
                  }}
                >
                  Idea
                </label>
              </div>
              <div className="progress_inner__step">
                <label
                  htmlFor="step-2"
                  onMouseOver={() => onPause(2)}
                  onMouseLeave={() => onMove(2)}
                  onClick={() => {
                    setChecked(2);
                    onPause(2);
                  }}
                >
                  Conception
                </label>
              </div>
              <div className="progress_inner__step">
                <label
                  htmlFor="step-3"
                  onMouseOver={() => onPause(3)}
                  onMouseLeave={() => onMove(3)}
                  onClick={() => {
                    setChecked(3);
                    onPause(3);
                  }}
                >
                  Development
                </label>
              </div>
              {/* <div className="progress_inner__step">
                <label
                  htmlFor="step-4"
                  onMouseOver={() => onPause(4)}
                  onMouseLeave={() => onMove(4)}
                  onClick={() => {
                    setChecked(4);
                    onPause(4);
                  }}
                >
                  Auditing
                </label>
              </div> */}
              <div className="progress_inner__step">
                <label
                  htmlFor="step-4"
                  onMouseOver={() => onPause(4)}
                  onMouseLeave={() => onMove(4)}
                  onClick={() => {
                    setChecked(4);
                    onPause(4);
                  }}
                >
                  Improvement
                </label>
              </div>

              <input
                checked={checked === 1}
                onChange={() => setChecked(1)}
                id="step-1"
                type="radio"
              />
              <input
                checked={checked === 2}
                onChange={() => setChecked(2)}
                id="step-2"
                type="radio"
              />
              <input
                checked={checked === 3}
                onChange={() => setChecked(3)}
                id="step-3"
                type="radio"
              />
              <input
                checked={checked === 4}
                onChange={() => setChecked(4)}
                id="step-4"
                type="radio"
              />
              <input
                checked={checked === 5}
                onChange={() => setChecked(5)}
                id="step-5"
                type="radio"
              />
              <input
                checked={checked === 6}
                onChange={() => setChecked(6)}
                id="step-6"
                type="radio"
              />
              <div className="progress_inner__bar" />
              <div className="progress_inner__bar--set" />
              <div className="relative transition duration-300 transform shadow-sm progress_inner__tabs hover:shadow-xl">
                <div className="tab tab-0 ">
                  <h1>Idea</h1>
                  <p>
                    Participating in the ideation phase is surely something
                    we’ll be happy to be with you. We can help you to better
                    understand your business and see the different approaches
                    you can have to it.
                  </p>
                </div>
                <div className="tab tab-1">
                  <h1>Conception</h1>
                  <p>
                    When you already have your idea, it’s time to understand
                    technologically how it will be built. And that’s what we are
                    specialized at.
                  </p>
                </div>
                <div className="tab tab-2">
                  <h1>Development</h1>
                  <p>
                    We have a talented team of engineers who can develop your
                    project with the best security and coding practices. The
                    technology development is at our own risk, and you can trust
                    we’ll deliver a high-quality product.
                  </p>
                </div>
                {/* <div className="tab tab-3">
                  <h1>Auditing</h1>
                  <p>
                    If you have already developed your project and just need
                    some good eyes to review it and make sure everything is
                    correct, we are at your disposal to audit your smart
                    contracts.
                  </p>
                </div> */}
                <div className="tab tab-3">
                  <h1>Improvement</h1>
                  <p>
                    Thinking about building a new version for your project?
                    That’s for sure something we can help you with.
                  </p>
                </div>
              </div>
              <div className="progress_inner__status">
                <img src="/productIcons/token.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <JourneyMobile />
      )}
    </div>
  );
}
