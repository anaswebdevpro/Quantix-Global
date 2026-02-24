"use client";
import React, { useState } from "react";
import Container from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  RefreshCcw,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Lock,
  Scale,
  ExternalLink,
  History,
  AlertCircle,
} from "lucide-react";

const TermsPage = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const sections = [
    {
      id: "terms",
      title: "Terms & Conditions",
      shortDesc: "Rules and guidelines for using our platform",
      icon: <FileText className="w-5 h-5 text-[#153577]" />,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
            <h2 className="text-3xl font-bold text-[#153577]">
              Terms & Conditions
            </h2>
            <span className="text-sm text-gray-400 bg-gray-50 py-1 px-3 rounded-full">
              Effective Date: February 2026
            </span>
          </div>

          <div className="space-y-6 text-gray-600">
            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30 w-6 h-6 rounded-full flex items-center justify-center italic bg-blue-50">
                  01
                </span>
                Acceptance of Terms
              </h3>
              <p className="leading-relaxed">
                By accessing or using the Avner Global website or services, you
                agree to be bound by these Terms & Conditions. If you do not
                agree, please do not use our services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30 w-6 h-6 rounded-full flex items-center justify-center italic bg-blue-50">
                  02
                </span>
                Services
              </h3>
              <p className="leading-relaxed mb-4">
                Avner Global Inc. provides:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Blockchain development",
                  "Web3 solutions",
                  "Smart contract development",
                  "Software development",
                  "Technology consulting",
                ].map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100 group hover:border-[#00D9FF]/20 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></div>
                    <span className="text-sm font-medium text-gray-700">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                All services are subject to written agreements where applicable.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30 w-6 h-6 rounded-full flex items-center justify-center italic bg-blue-50">
                  03
                </span>
                No Financial or Investment Advice
              </h3>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-2xl space-y-3">
                <p className="leading-relaxed text-gray-700 font-semibold">
                  Avner Global provides technology development services only. We
                  do not provide:
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    • Investment advice
                  </span>
                  <span className="flex items-center gap-2">
                    • Financial advice
                  </span>
                  <span className="flex items-center gap-2">
                    • Trading services
                  </span>
                  <span className="flex items-center gap-2">
                    • Brokerage services
                  </span>
                </div>
                <p className="text-sm pt-2">
                  Clients are solely responsible for regulatory compliance of
                  their projects.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30 w-6 h-6 rounded-full flex items-center justify-center italic bg-blue-50">
                  04
                </span>
                Intellectual Property
              </h3>
              <p className="leading-relaxed mb-4">
                All website content, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                {["text", "graphics", "logos", "code", "design"].map(
                  (item, id) => (
                    <div
                      key={id}
                      className="text-center p-2 bg-gray-50 rounded-lg text-xs font-bold text-[#153577] border border-gray-100 uppercase tracking-tighter"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
              <p className="leading-relaxed">
                is the property of Avner Global Inc. unless otherwise stated.
                Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30 w-6 h-6 rounded-full flex items-center justify-center italic bg-blue-50">
                  05
                </span>
                Limitation of Liability
              </h3>
              <p className="leading-relaxed mb-4 font-medium italic">
                To the maximum extent permitted by law, Avner Global shall not
                be liable for:
              </p>
              <div className="space-y-2 mb-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                {[
                  "indirect or consequential damages",
                  "loss of profits",
                  "business interruption",
                  "data loss",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <AlertCircle className="w-4 h-4 text-orange-400" />
                    <span>
                      {item} arising from use of our website or services.
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30 w-6 h-6 rounded-full flex items-center justify-center italic bg-blue-50">
                  06
                </span>
                Third-Party Services
              </h3>
              <p className="leading-relaxed italic text-sm">
                Our solutions may integrate third-party platforms. We are not
                responsible for third-party performance or policies.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30 w-6 h-6 rounded-full flex items-center justify-center italic bg-blue-50">
                  07
                </span>
                Termination
              </h3>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate access to our
                website or services at our discretion.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-[#00D9FF] border border-[#00D9FF]/30 w-6 h-6 rounded-full flex items-center justify-center italic bg-blue-50">
                  08
                </span>
                Governing Law
              </h3>
              <p className="leading-relaxed">
                These Terms are governed by the laws of the Province of Alberta
                and the laws of Canada applicable therein.
              </p>
            </section>
          </div>
        </div>
      ),
    },
    {
      id: "refund",
      title: "Refund Policy",
      shortDesc: "Guidelines for payments and cancellations",
      icon: <RefreshCcw className="w-5 h-5 text-[#153577]" />,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
            <h2 className="text-3xl font-bold text-[#153577]">Refund Policy</h2>
            <span className="text-sm text-gray-400 bg-gray-50 py-1 px-3 rounded-full">
              Secure Payments
            </span>
          </div>

          <div className="space-y-8 text-gray-600">
            <section className="bg-gray-50 p-8 rounded-[40px] border border-gray-100">
              <h3 className="text-2xl font-bold text-[#153577] mb-4 italic">
                1. General Policy
              </h3>
              <p className="text-lg leading-relaxed">
                Due to the customized nature of blockchain and software
                development services,{" "}
                <span className="text-gray-900 font-bold underline decoration-[#00D9FF]/30">
                  Avner Global Inc. generally does not offer refunds once a
                  project has commenced.
                </span>
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                <h4 className="text-xl font-bold text-[#153577] mb-4">
                  2. Eligibility for Refund
                </h4>
                <p className="text-sm font-medium mb-4">
                  Refunds may be considered only if:
                </p>
                <ul className="space-y-3">
                  {[
                    "Work has not yet started",
                    "Duplicate payment was made",
                    "Required by applicable law",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100">
                <h4 className="text-xl font-bold text-[#153577] mb-4">
                  3. Milestone Payments
                </h4>
                <p className="text-sm leading-relaxed mb-4">
                  For milestone-based projects:
                </p>
                <div className="space-y-3">
                  <p className="text-xs bg-white p-3 rounded-xl border border-blue-100">
                    • Completed milestones are non-refundable
                  </p>
                  <p className="text-xs bg-white p-3 rounded-xl border border-blue-100">
                    • Future unpaid milestones may be canceled
                  </p>
                </div>
              </div>
            </div>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4">
                4. Chargebacks
              </h3>
              <p className="leading-relaxed bg-orange-50 p-6 rounded-2xl text-sm border-l-4 border-orange-200">
                Clients agree to contact Avner Global first to resolve any
                billing disputes before initiating chargebacks.
              </p>
            </section>
          </div>
        </div>
      ),
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      shortDesc: "How we protect and use your data",
      icon: <ShieldCheck className="w-5 h-5 text-[#153577]" />,
      content: (
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
            <h2 className="text-3xl font-bold text-[#153577]">
              Privacy Policy
            </h2>
            <span className="text-sm text-gray-400 bg-gray-50 py-1 px-3 rounded-full">
              PIPEDA Compliant
            </span>
          </div>

          <div className="space-y-8 text-gray-600">
            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4">
                1. Introduction
              </h3>
              <p className="leading-relaxed">
                Avner Global Inc. (“Avner Global”, “we”, “our”, or “us”)
                respects your privacy and is committed to protecting your
                personal information in accordance with applicable Canadian
                privacy laws, including the Personal Information Protection and
                Electronic Documents Act (PIPEDA). This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#153577] mb-4">
                2. Information We Collect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#153577] mb-3 text-sm uppercase italic">
                    Personal Information
                  </h4>
                  <ul className="text-xs space-y-2">
                    {[
                      "Full name",
                      "Email address",
                      "Phone number",
                      "Company name",
                      "Project requirements submitted via forms",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#153577] mb-3 text-sm uppercase italic">
                    Technical Information
                  </h4>
                  <ul className="text-xs space-y-2">
                    {[
                      "IP address",
                      "Browser type",
                      "Device information",
                      "Pages visited",
                      "Cookies and tracking data",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h4 className="text-xl font-bold text-[#153577] mb-4">
                3. How We Use Your Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  "Respond to inquiries and provide consultations",
                  "Deliver and improve our services",
                  "Communicate with you about projects or updates",
                  "Enhance website performance and user experience",
                  "Comply with legal obligations",
                ].map((item, i) => (
                  <div key={i} className="text-sm flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shrink-0 mt-2"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-bold text-[#153577] text-sm">
                We do not sell your personal information.
              </p>
            </section>

            <section>
              <h4 className="text-xl font-bold text-[#153577] mb-4">
                4. Information Sharing
              </h4>
              <p className="text-sm mb-4">
                We may share information only with:
              </p>
              <ul className="text-sm space-y-2 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <li>• Trusted service providers (hosting, analytics, CRM)</li>
                <li>• Legal or regulatory authorities when required</li>
                <li>• Professional advisors under confidentiality</li>
              </ul>
              <p className="mt-4 text-xs italic">
                All third parties are required to maintain data confidentiality.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-lg font-bold text-[#153577] mb-3">
                  5. Data Security
                </h4>
                <p className="text-xs leading-relaxed">
                  Avner Global implements industry-standard technical and
                  organizational safeguards to protect your data from
                  unauthorized access, loss, misuse, or alteration. However, no
                  internet transmission is 100% secure.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-lg font-bold text-[#153577] mb-3">
                  6. Data Retention
                </h4>
                <p className="text-xs leading-relaxed">
                  We retain personal information only as long as necessary for
                  business or legal purposes.
                </p>
              </div>
            </section>

            <section>
              <h4 className="text-xl font-bold text-[#153577] mb-4">
                7. Your Rights
              </h4>
              <div className="bg-blue-50 p-8 rounded-[40px] border border-blue-100">
                <p className="text-sm mb-6">
                  Under Canadian privacy laws, you may:
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    "Request access to your data",
                    "Request correction of inaccurate data",
                    "Withdraw consent (where applicable)",
                  ].map((right, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl text-xs font-bold text-[#153577] shadow-sm"
                    >
                      <Scale className="w-4 h-4 text-[#00D9FF]" /> {right}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-[#153577] mb-2 text-sm flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#00D9FF]" /> 8.
                  Third-Party Links
                </h4>
                <p className="text-xs">
                  Our website may contain links to third-party sites. We are not
                  responsible for their privacy practices.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-[#153577] mb-2 text-sm flex items-center gap-2">
                  <History className="w-4 h-4 text-[#00D9FF]" /> 9. Updates to
                  Policy
                </h4>
                <p className="text-xs">
                  We may update this Privacy Policy periodically. Updates will
                  be posted on this page with a revised effective date.
                </p>
              </div>
            </section>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 relative overflow-hidden">

      <Container className="py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-36 h-fit">
            <div className="space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full text-left p-6 rounded-[24px] border transition-all duration-300 group flex items-start gap-5 ${
                    activeTab === section.id
                      ? "bg-[#153577] border-[#153577] shadow-[0_20px_40px_rgba(21,53,119,0.15)]"
                      : "bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl transition-colors ${
                      activeTab === section.id ? "bg-white/10" : "bg-blue-50"
                    }`}
                  >
                    {React.cloneElement(section.icon, {
                      className: `w-5 h-5 ${activeTab === section.id ? "text-white" : "text-[#153577]"}`,
                    })}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-bold text-lg mb-1 ${activeTab === section.id ? "text-white" : "text-gray-800"}`}
                    >
                      {section.title}
                    </h3>
                    <p
                      className={`text-xs leading-tight ${activeTab === section.id ? "text-blue-100/70" : "text-gray-500"}`}
                    >
                      {section.shortDesc}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 mt-1 transition-transform ${
                      activeTab === section.id
                        ? "translate-x-1 text-white"
                        : "text-gray-300 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Quick Contact Card */}
            <div className="mt-8 p-8 rounded-[32px] bg-gray-50 border border-gray-100 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-6 text-[#153577]">
                  Contact Legal
                </h4>
                <div className="space-y-4">
                  <a
                    href="mailto:info@avnerglobal.com"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#153577] transition-all group/mail"
                  >
                    <Mail className="w-4 h-4 text-[#00D9FF] group-hover/mail:scale-110 transition-transform" />{" "}
                    info@avnerglobal.com
                  </a>
                  <div className="flex items-start gap-3 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-[#00D9FF] shrink-0" />
                    <span>Calgary, Alberta, Canada</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-blue-200/50 transition-colors"></div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8">
            <div className="bg-white border border-gray-100 rounded-[40px] p-6 md:p-12 shadow-[0_10px_60px_rgba(0,0,0,0.02)] min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {sections.find((s) => s.id === activeTab)?.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </Container>

      {/* Footer Disclaimer */}
      <footer className="py-12 border-t border-gray-100 bg-gray-50">
        <Container className="text-center text-gray-400 text-sm italic">
          <p>
            © {new Date().getFullYear()} Avner Global Inc. • Secure
            Infrastructure Experts • Registered in Alberta, Canada
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default TermsPage;
