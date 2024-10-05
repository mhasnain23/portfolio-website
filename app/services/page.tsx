"use client";

import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id aspernatur voluptates fuga",
    href: "",
  },
  {
    num: "02",
    title: "Project Management",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id aspernatur voluptates fuga",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id aspernatur voluptates fuga",
    href: "",
  },
  {
    num: "04",
    title: "Web Animations",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id aspernatur voluptates fuga",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                className="flex-1 flex-col flex justify-center gap-6 group px-5 xl:px-0 cursor-pointer"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#00ff99] transition-all duration-500 justify-center items-center flex cursor-pointer hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.desciption}</p>
                <div className="border border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
