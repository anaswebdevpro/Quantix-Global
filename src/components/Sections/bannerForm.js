import React from "react";

const BannerForm = () => {
  return (
    <div className="w-full max-w-full sm:max-w-[400px] lg:max-w-[430px] justify-self-start lg:justify-self-end mx-auto lg:mx-0">
      {/* Contact form */}
      <form className="rounded-2xl border border-white/35 bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
        <div className="space-y-3 sm:space-y-4">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full h-12 sm:h-11 rounded-lg border border-gray-300 bg-white px-3 sm:px-4 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="w-full h-12 sm:h-11 rounded-lg border border-gray-300 bg-white px-3 sm:px-4 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
          />
          <select className="w-full h-12 sm:h-11 rounded-lg border border-gray-300 bg-white px-3 sm:px-4 text-sm text-[#556176] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25">
            <option>Services I want*</option>
          </select>
          <select className="w-full h-12 sm:h-11 rounded-lg border border-gray-300 bg-white px-3 sm:px-4 text-sm text-[#556176] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25">
            <option>Product I want*</option>
          </select>

          <div className="flex items-center rounded-lg border border-gray-300 bg-white px-3 sm:px-4 h-12 sm:h-11 transition focus-within:border-[#1cd1a1] focus-within:ring-2 focus-within:ring-[#1cd1a1]/25">
            <span className="mr-2 text-sm">🇮🇳</span>
            <span className="mr-2 text-sm text-[#2f3d4f]">+91</span>
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none"
            />
          </div>

          <textarea
            placeholder="Enter your message.."
            rows={3}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 sm:px-4 py-3 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none resize-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
          />

          <div className="rounded-lg border border-gray-300 bg-white px-3 sm:px-4 py-3 text-xs text-[#4f5d72]">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>I&apos;m not a robot</span>
              </label>
              <span className="text-[10px] text-gray-400">reCAPTCHA</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[#1cd1a1] to-[#15b999] py-3 sm:py-2.5 text-white font-semibold shadow-md shadow-teal-500/30 transition hover:brightness-105 text-sm sm:text-base"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BannerForm;
