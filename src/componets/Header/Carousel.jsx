import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg1 from "../../assets/banner_img_1 (1).jpg";
import bannerImg2 from "../../assets/banner_img_1 (2).jpg";
import bannerImg3 from "../../assets/banner_img_1 (3).jpg";
import bannerImg4 from "../../assets/banner_img_1 (4).jpg";
import bannerImg5 from "../../assets/banner_img_1 (5).jpg";

export default function SimpleSlider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[93%] container mx-auto mt-4" data-aos="flip-left" data-aos-duration="2000">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="h-[600px] w-full rounded-xl overflow-hidden relative">
          <img
            className="h-[600px] object-cover w-full rounded-xl"
            src={bannerImg1}
            alt="Support Creative Ideas"
          />
          <div className="absolute top-0 h-full flex flex-col justify-center items-center bg-teal-900 w-full bg-opacity-60 rounded-xl">
            <h3 className="text-4xl font-semibold text-center text-white">
              Empower Creative Ideas.
            </h3>
            <p className="mt-4 text-lg text-center text-white">
              Help innovators bring their dreams to life with your support.
            </p>
            <div className="flex gap-7 mt-12">
              <button className="bg-teal-600 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-medium text-white hover:bg-teal-700 sm:px-10 lg:px-8 xl:px-10">
                View Campaigns
              </button>
              <button className="bg-gray-800 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-medium text-white hover:bg-gray-700 sm:px-10 lg:px-8 xl:px-10">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Repeat for all other slides */}
        {[
          {
            src: bannerImg2,
            title: "Support Startups for a Better Future.",
            description: "Help entrepreneurs turn their vision into reality.",
            buttons: ["Explore Startups", "Get Involved"],
          },
          {
            src: bannerImg3,
            title: "Join Hands to Tackle Emergencies.",
            description: "Your donation can save lives in critical situations.",
            buttons: ["Donate Now", "Learn More"],
          },
          {
            src: bannerImg4,
            title: "Fund Medical Emergencies.",
            description: "Make a difference by funding essential medical care.",
            buttons: ["Start Donating", "See Campaigns"],
          },
          {
            src: bannerImg5,
            title: "Support Rural Communities.",
            description: "Help uplift underprivileged areas with your contribution.",
            buttons: ["View Programs", "Make a Donation"],
          },
        ].map((slide, index) => (
          <div key={index} className="h-[600px] w-full rounded-xl overflow-hidden relative">
            <img
              className="h-[600px] object-cover w-full rounded-xl"
              src={slide.src}
              alt={slide.title}
            />
            <div className="absolute top-0 h-full flex flex-col justify-center items-center bg-teal-900 w-full bg-opacity-60 rounded-xl">
              <h3 className="text-4xl font-semibold text-center text-white">
                {slide.title}
              </h3>
              <p className="mt-4 text-lg text-center text-white">
                {slide.description}
              </p>
              <div className="flex gap-7 mt-12">
                {slide.buttons.map((button, idx) => (
                  <button
                    key={idx}
                    className={`${
                      idx === 0 ? "bg-teal-600" : "bg-gray-800"
                    } inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-medium text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10`}
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
