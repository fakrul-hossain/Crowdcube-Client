import React from "react";
import logo from "../../assets/winter_donation_.png";
import { Typography } from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter,IoLogoLinkedin } from "react-icons/io";



const Footer = () => {
  return (
    <div className="mx-auto " data-aos="zoom-out-up" data-aos-duration="2000">
      <footer className="relative mx-auto z-10 bg-white pt-20 pb-1">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10">
                <a href="/#" className="mb- inline-block max-w-[160px]">
                  <img src={logo} alt="logo" className="max-w-[100px]" />
                </a>
                <p className="text-base mb-7 text-body-color">
                  Winter Donation connects kind hearts with underprivileged communities, making it easy to contribute warm clothes and essentials to those in need.
                </p>
                <p className="flex items-center text-sm font-medium text-dark">
                  <span className="mr-3 text-primary">
                    <svg
                      width={19}
                      height={21}
                      viewBox="0 0 19 21"
                      className="fill-current"
                    >
                      <path d="..." />
                    </svg>
                  </span>
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>

            {/* Link Group: Resources */}
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-dark">Resources</h4>
                <ul>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Event Development
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Our Plans
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      User Flow
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      User Strategy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Link Group: Company */}
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-dark">Company</h4>
                <ul>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Contact & Support
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Link Group: Quick Links */}
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-dark">Quick Links</h4>
                <ul>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Premium Support
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Our Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Meet Our Team
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="text-base text-body-color hover:text-primary">
                      Download App
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-dark">Follow us On</h4>
                <div className="flex items-center mb-6">
                  <a
                    href="/#"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <FaFacebook />

                  </a>
                  <a
                    href="/#"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <IoLogoTwitter />

                  </a>
                  <a
                    href="/#"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-dark hover:border-primary hover:bg-primary hover:text-white"
                  >
                   <IoLogoLinkedin />

                  </a>
                </div>
                <p className="text-sm text-body-color">Stay connected with us on social media!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-body-color mt-10 py-6">
          <Typography variant="small" className="text-center text-body-color">
            &copy; 2024 Winter Donation. All rights reserved.
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
