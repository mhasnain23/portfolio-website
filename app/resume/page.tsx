"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I’m a Full-Stack Web Developer with 1 year of experience building fast, responsive websites using Next.js, React.js, and Tailwind CSS. I love creating clean, user-friendly designs backed by strong, efficient code.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Hasnain",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 313 222 5220",
    },
    {
      fieldName: "Experince",
      fieldValue: "1 year",
    },
    {
      fieldName: "Email",
      fieldValue: "codewithhasnainbro@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};

const experince = {
  icon: "/assets/resume/badge.png",
  title: "My Experince",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quas. Tempora quas blanditiis doloremque laborum?",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quas. Tempora quas blanditiis doloremque laborum? Nam provident eaque molestiae beatae, aliquam libero amet",
  items: [
    {
      institution: "Onsite IT Course",
      degree: "Full Stack Web Developement Bootcamp",
      duration: "2024 - Present",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quas. Tempora quas blanditiis doloremque laborum? Nam provident eaque molestiae beatae, aliquam libero amet, minima quos ad natus illo laboriosam earum.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
  ],
};

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience"); // Default tab

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="experience"
              className={`${
                activeTab === "experience"
                  ? "bg-[#00ff99] text-primary"
                  : "text-white"
              }`}
            >
              Experince
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className={`${
                activeTab === "education"
                  ? "bg-[#00ff99] text-primary"
                  : "text-white"
              }`}
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className={`${
                activeTab === "skills"
                  ? "bg-[#00ff99] text-primary"
                  : "text-white"
              }`}
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className={`${
                activeTab === "about"
                  ? "bg-[#00ff99] text-primary"
                  : "text-white"
              }`}
            >
              About me
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              {/* Experince */}
              {activeTab === "experience" && (
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2 className="text-4xl font-bold">{experince.title}</h2>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experince.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experince.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center"
                          >
                            <span className="text-[#00ff99]">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] bg-[#00ff99] rounded-full"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              )}
            </TabsContent>
            <TabsContent value="education" className="w-full">
              {/* education */}
              {activeTab === "education" && (
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2 className="text-4xl font-bold">{education.title}</h2>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center"
                          >
                            <span className="text-[#00ff99]">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] bg-[#00ff99] rounded-full"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              )}
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              {activeTab === "skills" && (
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] px-4 xl:px-0">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl items-center justify-center flex group">
                                <div className="text-6xl group-hover:text-[#00ff99] transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              {activeTab === "about" && (
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((info, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60 text-[12px]">
                            {info.fieldName}
                          </span>
                          <span className="text-lg">{info.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
