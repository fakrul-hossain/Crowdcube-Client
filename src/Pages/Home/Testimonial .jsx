import React, { useState } from "react";
import bannerImg1 from "../../assets/banner_img_1 (1).jpg";
import bannerImg2 from "../../assets/banner_img_1 (2).jpg";
import bannerImg3 from "../../assets/banner_img_1 (3).jpg";
import bannerImg4 from "../../assets/banner_img_1 (4).jpg";
import bannerImg5 from "../../assets/banner_img_1 (5).jpg";

const Testimonial = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <div>
      <section
        className="pt-20 pb-12 mx-auto lg:pt-[120px] lg:pb-[90px]"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Impact
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[30px]">
                  Stories of Warmth and Hope
                </h2>
                <p className="text-base text-body-color">
                  See how your generous contributions have helped us bring warmth
                  to communities in need during harsh winters. Each donation
                  transforms lives.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    All Stories
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("urban")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "urban"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    Urban Areas
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("rural")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "rural"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    Rural Communities
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("volunteer")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "volunteer"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    Volunteer Stories
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref={bannerImg1}
              category="urban"
              title="Bringing Warmth to Dhaka Slums"
              button="Read Story"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={bannerImg2}
              category="rural"
              title="Hope in Remote Villages"
              button="Read Story"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={bannerImg5}
              category="volunteer"
              title="Volunteer Heroes"
              button="Read Story"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={bannerImg4}
              category="urban"
              title="Warm Smiles in Urban Streets"
              button="Read Story"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={bannerImg5}
              category="rural"
              title="Transforming Lives in Rural Bangladesh"
              button="Read Story"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={bannerImg1}
              category="volunteer"
              title="Volunteers on the Frontline"
              button="Read Story"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-lg">
          <img src={ImageHref} alt={title} className="w-full" />
        </div>
        <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
          <span className="block mb-2 text-sm font-semibold text-primary">
            {category}
          </span>
          <h3 className="mb-4 text-xl font-bold text-dark">{title}</h3>
          <a
            href={buttonHref}
            className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};
