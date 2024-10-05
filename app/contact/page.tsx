"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
// Import necessary components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ChangeEvent, FormEvent, useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 313 222 5220",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "codewithhasnainbro@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "karachi, shah faisal town sector 10, pakistan",
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed to send message.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  console.log(formData);

  return (
    // Centering the form container
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-[#00ff99]">let's work together</h3>
              <p className="text-white/60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                sequi doloremque ratione quod omnis nulla tenetur facilis.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  type="firstname"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />
                <Input
                  name="lastName"
                  type="lastname"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                />
                <Input
                  name="phone"
                  type="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Full-Stack Development</SelectItem>
                    <SelectItem value="cst">Creative Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#00ff99] rounded-[6px] flex items-center justify-center mt-4">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
