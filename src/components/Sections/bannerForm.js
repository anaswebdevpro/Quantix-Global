import React from "react";

const BannerForm = () => {
  return (
    <div className="w-full max-w-full sm:max-w-[350px] lg:max-w-[380px] justify-self-start lg:justify-self-end mx-auto lg:mx-0">
      {/* Contact form */}
      <form className="rounded-2xl border border-white/35 bg-white/95 backdrop-blur-sm p-3 sm:p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
        <div className="space-y-2 sm:space-y-3">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
          />
          <select className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#556176] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25">
            <option>Services I want*</option>
          </select>
          <select className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-[#556176] outline-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25">
            <option>Product I want*</option>
          </select>

          <div className="flex items-center rounded-lg border border-gray-300 bg-white px-3 h-10 transition focus-within:border-[#1cd1a1] focus-within:ring-2 focus-within:ring-[#1cd1a1]/25">
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none"
            />
          </div>

          <textarea
            placeholder="Enter your message.."
            rows={2}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-[#2f3d4f] placeholder:text-[#7a8699] outline-none resize-none transition focus:border-[#1cd1a1] focus:ring-2 focus:ring-[#1cd1a1]/25"
          />

          <div className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-[#4f5d72]">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-3.5 w-3.5" />
                <span>I&apos;m not a robot</span>
              </label>
              <span className="text-[10px] text-gray-400">reCAPTCHA</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[#1cd1a1] to-[#15b999] py-2 text-white font-semibold shadow-md shadow-teal-500/30 transition hover:brightness-105 text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BannerForm;
