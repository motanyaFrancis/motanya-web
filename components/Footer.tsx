import { Link } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-emerald-500 to-emerald-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Newsletter Section */}
        <div className="w-full mb-12">
          <div className="w-full flex flex-col md:grid md:grid-cols-[260px_1fr] gap-8 md:gap-20">

            {/* LEFT TEXT */}
            <div className="w-full">
              <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-50">
                Subscribe to our
              </p>

              <h2 className="text-2xl sm:text-3xl font-base text-white leading-tight uppercase mt-2 mb-6">
                Newsletter
              </h2>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full flex justify-start md:justify-end">
              <form className="w-full md:max-w-4xl">
                <div className="bg-white rounded-full flex items-center px-2 sm:px-4 py-0.5 shadow-xl transition-all duration-300 focus-within:shadow-2xl">
                  {/* INPUT */}
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base min-w-0"
                  />

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="px-5 sm:px-10 py-2.5 rounded-full border border-white bg-emerald-500 text-white text-xs sm:text-sm tracking-wide whitespace-nowrap hover:bg-emerald-600 transition"
                  >
                    SUBMIT
                  </button>

                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-50">

          {/* Column 1 */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white mb-3">Information</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Our Company</li>
              <li className="hover:text-white transition">Data</li>
              <li className="hover:text-white transition">Pricing</li>
              <li className="hover:text-white transition">Contact Us</li>
              <li className="hover:text-white transition">Support</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white mb-3">Application</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Download</li>
              <li className="hover:text-white transition">Bike Provider</li>
              <li className="hover:text-white transition">How to Use</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white mb-3">API</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Documentation</li>
              <li className="hover:text-white transition">Credentials</li>
              <li className="hover:text-white transition">Developer Info</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <h3 className="font-semibold text-white mb-3">Brand</h3>
            <p className="text-gray-50 text-sm">
              Professional tech solutions to build powerful digital products.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/50 mt-12 pt-6 flex flex-col md:flex-row 
        items-center justify-between gap-4 text-sm text-gray-50">

          <p>
            Copyright © {new Date().getFullYear()} All rights reserved
          </p>

          <p className="flex items-center gap-1">
            powered by
            <Image src="/logo-white.png" alt="Motanya Logo" width={100} height={20} />
          </p>
        </div>
      </div>
    </footer>
  );
}
