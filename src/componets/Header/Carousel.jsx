import React from "react";
import Slider from "react-slick";
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
    <div className="w-[93%] mx-auto mt-4" data-aos="flip-left" data-aos-duration="2000">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="h-[600px] w-full rounded-xl overflow-hidden relative">
          <img
            className="h-[600px] object-cover w-full rounded-xl"
            src={bannerImg1}
            alt="Donate Warm Clothes"
          />
          <div className="absolute top-0 h-full flex-col flex justify-center items-center bg-blue-gray-900 w-full bg-opacity-60 rounded-xl">
            <h3 className="text-4xl font-medium text-center text-blue-gray-50">
              Donate Warm Clothes, Spread Warmth.
            </h3>
            <p className="mt-4 text-lg text-center text-blue-gray-100">
              Help the less fortunate stay warm this winter.
            </p>
            <div className="flex gap-7 mt-12">
              <button className="bg-primary cursor-pointer inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10">
                View Campaigns
              </button>
              <button className="bg-purple-700 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10">
                How to Help
              </button>
            </div>
          </div>
        </div>
        
        {/* Repeat for all other slides */}
        {[
          { src: bannerImg2, title: "Join Our Mission to Fight the Cold.", description: "Together, we can make a difference.", buttons: ["Start Donating", "Learn More"] },
          { src: bannerImg3, title: "Become a Volunteer Today.", description: "Join hands to distribute warmth and love.", buttons: ["Volunteer Now", "See Stories"] },
          { src: bannerImg4, title: "Winter Relief Programs for Rural Communities.", description: "Your support can save lives in remote areas.", buttons: ["Support Programs", "Donate Now"] },
          { src: bannerImg5, title: "Spread Smiles with Your Generosity.", description: "Brighten someone's winter with a small act of kindness.", buttons: ["Make a Donation", "Get Involved"] },
        ].map((slide, index) => (
          <div key={index} className="h-[600px] w-full rounded-xl overflow-hidden relative">
            <img
              className="h-[600px] object-cover w-full rounded-xl"
              src={slide.src}
              alt={slide.title}
            />
            <div className="absolute top-0 h-full flex-col flex justify-center items-center bg-blue-gray-900 w-full bg-opacity-60 rounded-xl">
              <h3 className="text-4xl font-medium text-center text-blue-gray-50">
                {slide.title}
              </h3>
              <p className="mt-4 text-lg text-center text-blue-gray-100">
                {slide.description}
              </p>
              <div className="flex gap-7 mt-12">
                {slide.buttons.map((button, idx) => (
                  <button
                    key={idx}
                    className={`${
                      idx === 0 ? "bg-primary" : "bg-purple-700"
                    } cursor-pointer inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10`}
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