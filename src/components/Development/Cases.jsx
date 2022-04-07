import { useState } from "react";
import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import NavLink from "../NavLink";
import Collapse from "@kunukn/react-collapse";

export default function Cases() {
  const [sliderRef, setSliderRef] = useState(null);
  const [open, setOpen] = useState(false);

  const testimonials = [
    {
      imageSrc: "/customers/classy.png",
      quote:
        "Kangaroo Coin Flip is a game inside Near Protocol. The story behind this project is that our clients, Classy Kangaroos, were late at their calendar to deliver the project to the community. They had only two weeks until the deadline, and we all know that keeping up with your roadmap is a very important thing to keep the confidence on your project. The problem is that the devs they had hired couldn’t keep the necessary pace. That’s when we met them and said we would work day and night so that they could keep their promise to the community. No sooner said than done! After 2 weeks, we had fully developed the smart contract logic, containing a special profit split feature between Classy Kangaroo NFT holders, deployed the contract and, besides that, helped the front-end team so that the project could be delivered on time! The result, of course, was awesome: the best coin flip game inside Near Protocol – and it’s not us saying that, but the whole community! You can see and play the game here!",
      customerName: "Kangaroo Coin Flip",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative px-8 bg-grayHack text-gray-100">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="/graphics/grafismo-01.png"
          alt="background"
        />
        <div
          className="absolute inset-0 bg-secondary mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div data-aos="fade-right" className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl text-white font-black tracking-wide text-center">
            Cases
          </h2>
        </div>
        <Slider
          className="flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg text-gray-900"
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          ref={setSliderRef}
          style={{
            border: "1px solid #e5ecf9",
            boxShadow:
              "35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              className="px-6 py-12 sm:px-20 sm:py-14 focus:outline-none flex flex-col justify-between h-full"
              key={index}
            >
              <div className="relative flex flex-col items-center">
                <svg
                  className="absolute opacity-40 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                  />
                </svg>
                <Collapse addState isOpen={open} collapseHeight="120px">
                  <blockquote className="font-medium sm:font-normal relative flex items-start text-sm sm:text-xl text-center sm:text-left text-primary">
                    {testimonial.quote}
                  </blockquote>
                </Collapse>

                <div className="mt-2">
                  {!open ? (
                    <button
                      className="text-primary font-semibold hover:underline"
                      onClick={() => setOpen(true)}
                    >
                      Read more
                    </button>
                  ) : (
                    <button
                      className="text-primary font-semibold hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      Read less
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left">
                <img
                  className="w-20 h-20"
                  src={testimonial.imageSrc}
                  alt={testimonial.customerName}
                />
                <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col text-primary">
                  <NavLink
                    href="https://kangaroocoinflip.io/#"
                    target="blank"
                    className="text-xl font-semibold"
                  >
                    {testimonial.customerName}
                  </NavLink>
                </div>
                <div className="sm:ml-auto flex">
                  <button
                    className="text-gray-600 hover:text-primary focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0"
                    onClick={sliderRef?.slickPrev}
                  >
                    <ArrowLeftIcon className="fill-current w-6" />
                  </button>
                  <button className="text-gray-600 hover:text-primary focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0">
                    <ArrowRightIcon
                      className="fill-current w-6"
                      onClick={sliderRef?.slickNext}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
