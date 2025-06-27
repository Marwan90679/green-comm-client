import React from "react";
import { Link } from "react-router";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import logo from "/Adobe Express - file (3).png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div>
          <img src={logo} alt="Green Commandos logo" className="w-32 mb-3" />
          <h2 className="text-2xl font-bold text-emerald-500 mb-2">
            Green Commandos
          </h2>
          <p className="text-sm text-gray-400">
            On a mission of Greenery—empowering communities to grow greener,
            one plant at a time.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-emerald-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore-gardeners" className="hover:text-emerald-400">
                Explore Gardeners
              </Link>
            </li>
            <li>
              <Link to="/browse-tips" className="hover:text-emerald-400">
                Browser Tips
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:greencommandos@fakeemail.com"
                className="text-emerald-400"
              >
                greencommandos@fakeemail.com
              </a>
            </li>
            <li>Phone: +880-1234-567890</li>
            <li>Location: Sylhet, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-transform hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-transform hover:scale-110"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-transform hover:scale-110"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Green Commandos. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
