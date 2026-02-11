"use client";
import { motion } from "framer-motion";
import Container from "./ui/container";

export default function ContactSection() {
  return (
    <section className="py-20 bg-[#f8f8f8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#333d47] mb-2">
              Talk to Our Experts
            </h3>
            <p className="text-gray-500 mb-6 text-sm">
              If you have any queries or doubts related with our services, don’t
              hesitate to get in touch with our experts.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#09d0c6] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#09d0c6] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#09d0c6] transition-colors text-gray-500">
                  <option>Services I want*</option>
                  <option>Website Designing</option>
                  <option>Mobile App Development</option>
                  <option>Blockchain Development</option>
                </select>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#09d0c6] transition-colors text-gray-500">
                  <option>Product I want*</option>
                  <option>Blockchain Softwares</option>
                  <option>Fintech Softwares</option>
                  <option>Other</option>
                </select>
              </div>

              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#09d0c6] transition-colors"
              />

              <textarea
                rows="4"
                placeholder="Enter your message.."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#09d0c6] transition-colors resize-none"
              ></textarea>

              <div className="g-recaptcha" data-sitekey="your-site-key"></div>

              <button
                type="submit"
                className="px-8 py-3 bg-[#09d0c6] text-white font-bold rounded shadow-lg hover:bg-[#08b8af] transition-all transform hover:-translate-y-1"
              >
                Submit
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href="https://wa.me/918699701099"
                target="_blank"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#128c7e] text-white font-bold rounded hover:bg-[#075e54] transition-colors w-full text-center"
              >
                Connect With Whatsapp
              </a>
            </div>
          </motion.div>

          {/* Calendly / Meeting */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-[#333d47] mb-4 text-center">
              Schedule A Meeting
            </h3>
            <p className="text-gray-600 mb-8 text-center max-w-md mx-auto">
              If you’re interested in our services, you can have a meeting
              scheduled with our professionals at any point in time.
            </p>

            <div className="flex-grow bg-white p-4 rounded-lg shadow-lg min-h-[500px] relative overflow-hidden">
              {/* Calendly iframe placeholder */}
              <iframe
                src="https://calendly.com/webcomsystems?primary_color=09d0c6"
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
