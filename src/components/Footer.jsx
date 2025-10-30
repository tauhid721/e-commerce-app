import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
     <footer className="bg-black text-gray-400 pt-12 pb-6 px-6 lg:px-16 border-t border-gray-800">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-800">
        {/* Column 1: Brand + Subscribe */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">TM Shop</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Subscribe to our Email alerts to receive early discount offers, and
            new products info.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email Address*"
              className="px-4 py-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-red-500 text-white flex-1"
            />
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-medium transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Column 2: Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Track Order</a></li>
            <li><a href="#" className="hover:text-white">Cancel Order</a></li>
            <li><a href="#" className="hover:text-white">Return Order</a></li>
            <li><a href="#" className="hover:text-white">Warranty Info</a></li>
          </ul>
        </div>

        {/* Column 3: Policies */}
        <div>
          <h3 className="text-white font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
            <li><a href="#" className="hover:text-white">Sitemap</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Service Centres</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Affiliates</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} | TM Shop. All Rights Reserved. Built by{" "}
          <span className="text-white">Tauhid Mahfuz</span>
        </p>

        <div className="flex space-x-4 mt-4 sm:mt-0 text-gray-400 text-lg">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
