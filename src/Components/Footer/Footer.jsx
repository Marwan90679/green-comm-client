import React from "react";
import { Link } from "react-router";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import logo from "/Adobe Express - file (3).png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-green-900 text-green-100 p-10">
      {/* Logo & description */}
      <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-6">
        <img src={logo} alt="Green Commandos Logo" className="w-40 md:w-60 drop-shadow-2xl" />
        <p className="text-lg font-bold">Green Commandos</p>
        <p className="text-green-300">On mission of Greenery</p>
        <p className="text-sm text-green-400">&copy; {new Date().getFullYear()} - All rights reserved</p>

        {/* Social Links */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-green-400 transition-transform hover:scale-110"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-green-400 transition-transform hover:scale-110"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-green-400 transition-transform hover:scale-110"
          >
            <FaFacebookF size={28} />
          </a>
        </div>
      </div>

      {/* Services */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="#" className="link link-hover">Branding</Link>
        <Link to="#" className="link link-hover">Design</Link>
        <Link to="#" className="link link-hover">Marketing</Link>
        <Link to="#" className="link link-hover">Advertisement</Link>
      </nav>

      {/* Company */}
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="#" className="link link-hover">About us</Link>
        <Link to="#" className="link link-hover">Contact</Link>
        <Link to="#" className="link link-hover">Jobs</Link>
        <Link to="#" className="link link-hover">Press kit</Link>
      </nav>

      {/* Legal */}
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="#" className="link link-hover">Terms and Conditions</Link>
      </nav>

      {/* Newsletter */}
      <form className="w-full max-w-xs">
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-full">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered join-item w-full"
            />
            <button type="submit" className="btn btn-primary join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
