import { useState } from "react";
import Slider from "react-slick";
import Collapse from "@kunukn/react-collapse";

export default function TestimoniesDevelopment() {
  const [open, setOpen] = useState(false);

  const testimonials = [
    {
      //   imageSrc:
      //     "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      quote: `Hack-a-Chain has blown us away with their unmatched combination of expertise, professionalism, and work ethic. They stepped in and took over development of our project when the initial dev team could not deliver. Hack-a-Chain went above and beyond at every stage and executed perfectly on their scope of  work. In a third party audit, the smart contract Hack-a-Chain developed for us was noted as “the best contract they had audited to date.” This is a testament to the professional work that Hack-a-Chain delivers.  Additionally, they are excellent communicators that can effectively explain complex technical concepts. Hack-a-Chain provided us with an easy to use CLI and detailed instructions which allows us to operate and adjust app functions without any coding knowledge needed. Hack-a-Chain enables us to succeed as Founders without a background in software development. Hack-a-Chain is now a trusted partner of ours and they will be leading development on our next major project; a Decentralized Exchange on NEAR Protocol. We could not ask for a better team to help us bring this vision to life!`,
      customerName: "David Leer",
      customerTitle: "Co-Founder, Jump Dex & Trove Labs",
    },
  ];

  const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <div className="absolute bottom-14 sm:top-0 h-full flex items-end md:items-center z-20 right-10">
      <button
        {...props}
        className="text-white hover:text-secondary focus:outline-none transition duration-300 hover:scale-125 transform -translate-y-2/3 md:translate-y-0"
      >
        <ArrowRightIcon className="w-8" />
      </button>
    </div>
  );

  const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
    <div className="absolute bottom-14 sm:top-0 h-full flex items-end md:items-center z-20 left-10">
      <button
        {...props}
        className="text-white hover:text-secondary focus:outline-none transition duration-300 hover:scale-125 transform -translate-y-2/3 md:translate-y-0"
      >
        <ArrowLeftIcon className="w-8" />
      </button>
    </div>
  );

  return (
    <div className="relative bg-black">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-10"
          src="/graphics/grafismo-06.png"
          alt="background"
        />
        <div
          className="absolute inset-0 bg-primary mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div data-aos="fade-right" className="flex flex-col items-center z-50">
          <h2 className="text-4xl px-5 sm:text-5xl text-white font-black tracking-wide text-center">
            Testimonies
          </h2>
        </div>
        <div
          className="mt-6 sm:mt-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <Slider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <div
                className="flex flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none"
                key={index}
              >
                {/* <div className="md:mx-3 lg:mx-6 w-1/3 md:w-1/6 rounded flex items-center max-w-xs md:max-w-none">
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.customerName}
                      className="rounded-xl"
                    />
                  </div> */}
                <div className="md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between">
                  <div className="px-5 text-center md:text-left mt-4 md:mt-0">
                    <h5 className="font-bold text-lg lg:text-xl xl:text-2xl text-primary">
                      {testimonial.customerName}
                    </h5>
                    <p className="font-medium text-sm text-primary">
                      {testimonial.customerTitle}
                    </p>
                  </div>
                  <div className="relative flex flex-col items-center p-6">
                    <Collapse addState isOpen={open} collapseHeight="140px">
                      <blockquote className="text-gray-200 text-center md:text-left font-medium text-xl">
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
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
