import React from "react";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">IELTSPro</h2>
          <p className="mt-2 text-sm">
            Get IELTS Ready! Boost your speaking, reading, writing, and
            listening scores.
          </p>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4 text-2xl">
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              className="hover:text-gray-200">
              <FaYoutube />
            </a>
            <a
              href="https://x.com/"
              aria-label="Twitter"
              className="hover:text-gray-200">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="hover:text-gray-200">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Middle Section – Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: support@ieltspro.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
        </div>

        {/* Right Section – Location */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p>India - Hyderabad</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-indigo-400 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} IELTSPro Institute. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
