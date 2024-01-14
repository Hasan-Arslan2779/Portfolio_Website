import React from "react";
// motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <section className="lg:section py-14" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* Text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start "
          >
            <input
              className="bg-transparent border-b py-3 placeholder:text-white outline-none w-full focus:border-accent transition-all"
              type="text"
              placeholder="Your name?"
            />
            <input
              className="bg-transparent border-b py-3 placeholder:text-white outline-none w-full focus:border-accent transition-all"
              type="text"
              placeholder="Your email adrress?"
            />
            <textarea
              className="bg-transparent border-b py-12 placeholder:text-white outline-none w-full focus:border-accent transition-all mb-12 resize-none"
              placeholder="Your message?"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
