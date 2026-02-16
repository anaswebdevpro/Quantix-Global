"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./../ui/container";
import { SectionHeading } from "./../ui/SectionHeading";

const testimonials = [
  {
    name: "Martin Hodges",
    role: "Blockchain In Healthcare Solutions",
    img: "/assets/image/martin.png",
    quote:
      "I am extremely satisfied with the services provided by Quantix Global, I hired the company for Blockchain In Healthcare Solutions. Their expertise in blockchain technology and healthcare solutions was high in the quality of the blockchain app they developed for me.",
  },
  {
    name: "Angena",
    role: "Retail App Development",
    img: "/assets/image/angena.png",
    quote:
      "As a retail industry professional, I recently hired Quantix Global to develop a retail app using blockchain technology. I am extremely satisfied with their services and would highly recommend them to anyone looking for reliable and professional blockchain development solutions.",
  },
  {
    name: "Daniel Richie",
    role: "Agriculture App",
    img: "/assets/image/daniel.png",
    quote:
      "Quantix Global provided solutions that perfectly met my business requirements. They took the time to understand the specific needs of the agriculture industry and developed a retail app that fit my goals.",
  },
  {
    name: "Eric",
    role: "Blockchain Consulting",
    img: "/assets/image/eric.png",
    quote:
      "I appreciate Webcom System's one-on-one consulting approach and thorough evaluation of my current business model and identification of the best blockchain solutions for my needs.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading>
            What Our <span className="text-[#09d0c6]">Client</span> Say
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg relative pt-12 text-center"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-500 italic mb-4 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              <h4 className="font-bold text-[#333d47]">{testimonial.name}</h4>
              <span className="text-xs text-[#09d0c6] font-semibold block mt-1">
                {testimonial.role}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
