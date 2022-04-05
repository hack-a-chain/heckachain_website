import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div className="absolute top-0 h-full flex items-end md:items-center z-20 right-10">
    <button
      {...props}
      className="text-white hover:text-secondary focus:outline-none transition duration-300 hover:scale-125 transform -translate-y-2/3 md:translate-y-0"
    >
      <ArrowRightIcon className="w-8" />
    </button>
  </div>
);

const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <div className="absolute top-0 h-full flex items-end md:items-center z-20 left-10">
    <button
      {...props}
      className="text-white hover:text-secondary focus:outline-none transition duration-300 hover:scale-125 transform -translate-y-2/3 md:translate-y-0"
    >
      <ArrowLeftIcon className="w-8" />
    </button>
  </div>
);

export default function TestimonialSection() {
  const testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote:
        "Hackachain provides an in-depth review of core development principles and strategies executed; their team is extremely professional and provide great detail during the smart contract auditing process.",
      customerName: "Sahil Jain",
      customerTitle: "Founder, Deliq Finance",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "Hack-a-Chain stepped up and took over development of Kangaroo Coin Flip when we needed help the most. Quickly they built out the KCF backend and fully integrated the existing front end. Comments from our auditors: 'without a doubt the best contract we've audited so far'.",
      customerName: "David",
      customerTitle: "Founder, Classy Kangaroos",
    },
  ];

  return (
    <div className="relative bg-gradient-to-t from-primary via-indigo-300 to-indigo-500">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div data-aos="fade-right" className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl text-white font-black tracking-wide text-center">
            What our customers say
          </h2>
        </div>
        <div
          className="mt-14"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <Slider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <div
                className="flex flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none"
                key={index}
              >
                <div className="md:mx-3 lg:mx-6 w-1/3 md:w-1/6 rounded flex items-center max-w-xs md:max-w-none">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.customerName}
                    className="rounded-xl"
                  />
                </div>
                <div className="md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between">
                  <div className="relative p-6 mt-4 md:mt-0">
                    <blockquote className="text-grayHack text-center md:text-left font-medium text-xl lg:text-2xl">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                  <div className="px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0">
                    <h5 className="font-bold text-lg lg:text-xl xl:text-2xl text-grayHack">
                      {testimonial.customerName}
                    </h5>
                    <p className="font-medium text-sm text-grayHack">
                      {testimonial.customerTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
