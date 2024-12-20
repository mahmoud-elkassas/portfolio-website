"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+02) 01020405204 ",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "moelkassas8@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Cairo, Egypt",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
      formData, // Form data object
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-4xl font-bold text-accent inline-block overflow-hidden sm:whitespace-nowrap border-accent xl:animate-typing">
              Let's work together
            </h3>
            <p className="text-white/60">
              I’m excited to collaborate on web development projects! Let’s
              connect at moelkassas8@gmail.com to create something amazing
              together!
            </p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="firstname"
                placeholder="Firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="lastname"
                placeholder="Lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a Service</SelectLabel>
                  <SelectItem
                    value="Web Development"
                    onClick={() =>
                      setFormData({ ...formData, service: "Web Development" })
                    }
                  >
                    Web Development
                  </SelectItem>
                  <SelectItem
                    value="UI/UX Design"
                    onClick={() =>
                      setFormData({ ...formData, service: "UI/UX Design" })
                    }
                  >
                    UI/UX Design
                  </SelectItem>
                  <SelectItem
                    value="Odoo Development"
                    onClick={() =>
                      setFormData({ ...formData, service: "Odoo Development" })
                    }
                  >
                    Odoo Development
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea
              className="h-[100px]"
              name="message"
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleChange}
              required
            />
            {/* btn */}
            <Button size="md" className="max-w-40" type="submit">
              Send message
            </Button>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
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
  );
};

export default Contact;
