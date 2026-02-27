import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Container from "./../ui/container";

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
        // Reset success state after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-100 to-transparent -z-10" />
      <div className="absolute -left-24 top-24 w-96 h-96 bg-[#09d0c6]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -right-24 bottom-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#153577] mb-6 leading-tight">
                Talk to Our <span className="text-[#153577]">Experts</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                If you have any queries or doubts related to our services, don’t
                hesitate to get in touch with our experts. We're here to help
                you build the future.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#09d0c6]/10 flex items-center justify-center shrink-0 text-[#09d0c6]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#153577] mb-1">Visit Us</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Calgary, Alberta, Canada
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:info@avnerglobal.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-[#09d0c6] hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#09d0c6]/10 flex items-center justify-center shrink-0 text-[#09d0c6] group-hover:bg-[#09d0c6] group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#153577] mb-1">Email Us</h4>
                    <p className="text-gray-500 text-sm group-hover:text-[#09d0c6] transition-colors">
                      info@avnerglobal.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100 relative"
          >
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className={`w-full px-5 py-3  border rounded-lg focus:outline-none focus:border-[#09d0c6] focus:ring-4 focus:ring-[#09d0c6]/10 transition-all ${
                      errors.fullName ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    {...register("email", { required: "Email is required" })}
                    className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:border-[#09d0c6] focus:ring-4 focus:ring-[#09d0c6]/10 transition-all ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                    Service Interest
                  </label>
                  <select
                    {...register("service", {
                      required: "Service is required",
                    })}
                    className={`w-full px-5 py-3  order rounded-lg focus:outline-none focus:border-[#09d0c6] focus:ring-4 focus:ring-[#09d0c6]/10 transition-all text-gray-600 ${
                      errors.service ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select Service</option>
                    <option value="Website Designing">Website Designing</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Blockchain Development">
                      Blockchain Development
                    </option>
                  </select>
                  {errors.service && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.service.message}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                    Product Area
                  </label>
                  <select
                    {...register("product", {
                      required: "Product is required",
                    })}
                    className={`w-full px-5 py-3  border rounded-lg focus:outline-none focus:border-[#09d0c6] focus:ring-4 focus:ring-[#09d0c6]/10 transition-all text-gray-600 ${
                      errors.product ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select Product</option>
                    <option value="Blockchain Softwares">
                      Blockchain Softwares
                    </option>
                    <option value="Fintech Softwares">Fintech Softwares</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.product && (
                    <span className="text-red-500 text-xs ml-1">
                      {errors.product.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className={`w-full px-5 py-3  border rounded-lg focus:outline-none focus:border-[#09d0c6] focus:ring-4 focus:ring-[#09d0c6]/10 transition-all ${
                    errors.phone ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs ml-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project requirements..."
                  {...register("message")}
                  className="w-full px-5 py-3  border border-gray-200 rounded-lg focus:outline-none focus:border-[#09d0c6] focus:ring-4 focus:ring-[#09d0c6]/10 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 text-white font-bold rounded-lg shadow-lg transition-all transform flex items-center justify-center gap-2 ${
                  status === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : status === "success"
                      ? "bg-green-500 shadow-green-500/30"
                      : "bg-[#153577] shadow-[#09d0c6]/30 hover:shadow-xl hover:shadow-[#09d0c6]/40 hover:-translate-y-1"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 text-sm"
                >
                  <AlertCircle size={20} className="shrink-0" />
                  <p>{errorMessage}</p>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700 text-sm"
                >
                  <CheckCircle size={20} className="shrink-0" />
                  <p>
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
