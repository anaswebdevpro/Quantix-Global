import React from 'react'
import Container from './ui/container'
import { SectionHeading } from './ui/SectionHeading'
import Button from './ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const SupportCTA = () => {
  return (
    <div>

      <section
        className="py-20  text-white relative overflow-hidden"
        style={{
            backgroundImage: "url(/assets/image/support.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
        <Container className="relative z-10">
          <div className=" flex flex-col gap-12">
            <div className="max-w-2xl pl-10">
              <SectionHeading className="text-white mb-6 text-center md:text-left ">
                Do you have any idea in your mind?{" "}
                <br className="hidden md:block" />
                We will convert your idea into
                <span className="text-[#09d0c6]"> reality</span>
              </SectionHeading>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-300 leading-relaxed text-xl font-semibold my-8"
              >
                Lets get connected
              </motion.p>

              <div className="flex justify-start md:justify-start">
                <Link href="/contact-us">
                  <Button
                    variants="outline"
                    className=""
                    >
                    Let's Discuss
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                      />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 w-full"></div>
          </div>
        </Container>
      </section>
                      </div>
  )
}

export default SupportCTA