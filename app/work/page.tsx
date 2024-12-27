"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "We are a dynamic, full-service creative agency specializing in a wide range of services to help your business thrive. From Logo Creation and Graphic Designing to innovative 3D Models, we craft visually stunning designs tailored to your brand. Our Digital Marketing strategies, Ecommerce solutions, and expert Web Design & Development ensure your online presence is impactful and engaging. We also offer cutting-edge Video Animation, T-Shirt Designs, and NFT creation for unique digital collectibles. Our Product Design and Product Packaging services help your products stand out, while our Software Development and Mobile Application Development teams create customized solutions to meet your business needs. We are dedicated to bringing your vision to life with creativity and innovation.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Typescript" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://digital-pencil.vercel.app/",
    github: "https://github.com/mhasnain23/dgital-pencil-project",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    stack: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "Tailwind css" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://jobportalnextapp2024.vercel.app/",
    github: "https://github.com/mhasnain23/nextjs-job-portal-2024",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "shadcn/ui" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://uiux-hackathon-2024.vercel.app/",
    github: "https://github.com/mhasnain23/uiux-hackathon",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Project 4",
    description:
      "A modern B2B wholesale marketplace built with Next.js 14. It allows vendors to sell products and buyers to make bulk purchases.",
    stack: [
      { name: "Next.js 14" },
      { name: "React.js 18" },
      { name: "Tailwind CSS" },
      { name: "Stripe" },
      { name: "Authentication/Authorization" },
      { name: "RBAC System" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://fullstackb2bmarketplace.vercel.app",
    github: "https://github.com/mhasnain23/recreating-marketplace",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update prject state based on current index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline text */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => {
                  return (
                    <li className="text-xl text-[#00ff99]" key={index}>
                      {stack.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="arrow left or right images"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#00ff99] hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-lg flex justify-center items-center transition-all duration-300"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
