import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="bg-base-300 py-6">
      <footer className="footer max-w-7xl mx-auto p-14  text-[--footerText]">
        <div>
          <Link to="/" className="text-3xl font-semibold text-info">
            {" "}
            Talk Space
          </Link>
          <p className="w-[250px] leading-6">
            We always try to stay with our best service.
          </p>

          <p className="flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/debabrata-saha-shuvo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="mr-4 text-[18px] hover:text-primary  transition-all duration-500"></FaFacebookF>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/debabrata-saha-shuvo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="mr-4 text-xl hover:text-primary  transition-all duration-500"></FaLinkedinIn>
            </a>
            <a
              href="https://www.linkedin.com/in/debabrata-saha-shuvo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="mr-4 text-xl hover:text-primary  transition-all duration-500"></FaTwitter>
            </a>
          </p>
        </div>

        <div className="text-[15px]">
          <span className="text-[18px] mb-[15px] mt-[10px] font-bold">
            Useful Links
          </span>
          <Link
            to="/"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            Media
          </Link>
          <Link
            to="/"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            Message
          </Link>
          <Link
            to="/"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            Profile
          </Link>
        </div>
        <div>
          <span className="text-[18px] mb-[15px] mt-[10px] font-bold">
            Contact Info
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="inline-block mr-3 text-xl"></FaMapMarkerAlt>{" "}
            Noakhali, Bangladesh
          </span>
          <span className="flex items-center my-2">
            <FaEnvelope className="inline-block mr-3 text-xl"></FaEnvelope>{" "}
            talkspace@gmail.com
          </span>
          <span className="flex items-center">
            <FaMobileAlt className="inline-block mr-3 text-xl"></FaMobileAlt>{" "}
            +880167777777
          </span>
        </div>
      </footer>
      <hr className=" border-t border-[#ffffff1a]" />
      <footer className="footer max-w-7xl mx-auto px-10 py-5  bg-base-200  ">
        <div className="flex-col md:flex md:flex-row justify-between items-center w-full">
          <p className="text-[14px]">
            © 2023 All Rights Reserved by Debabrata Saha
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
