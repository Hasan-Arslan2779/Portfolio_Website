/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// İmages
import Image from "../assets/avatar.svg";
// İcons
import { FaGithub, FaInstagram, FaLinkedin, FaMailchimp } from "react-icons/fa";
// Type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section className="section min-h-[85vh] lg:min-h-[78vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              // eslint-disable-next-line no-undef
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              HASAN <span>ARSLAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              // eslint-disable-next-line no-undef
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[28px] gap-y-5 lg:text-[45px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-3 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Front End  Developer !",
                  2000,
                  "React Native Developer !",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              // eslint-disable-next-line no-undef
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8  max-w-lg mx-auto lg:mx-0 "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              molestiae aliquam accusamus, magnam dolores beatae non sequi.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              // eslint-disable-next-line no-undef
              viewport={{ once: false, amount: 0.7 }}
              className="gap-x-6 max-w-max mb-12 mx-auto lg:mx-0 flex items-center"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              // eslint-disable-next-line no-undef
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* İmage */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            // eslint-disable-next-line no-undef
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
