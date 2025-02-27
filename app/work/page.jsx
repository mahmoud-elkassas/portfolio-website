"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "Shoexpo-Website",

    title: "Project 1",
    description:
      "Sheoxpo – Stylish & Comfortable Footwear Discover high-quality, trendy, and durable shoes at Sheoxpo. Enjoy a seamless shopping experience with secure payments and fast delivery. Step up your style today!",
    stack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
    image: "/assets/work/shoexpo.jpeg",
    live: "https://shoexpo0-01-z2iu.vercel.app/",
    github: "https://github.com/mahmoud-elkassas/Shoexpo0.01",
  },
  {
    num: "02",
    category: "Notion-Clone",

    title: "Project 1",
    description:
      "A full-stack productivity app inspired by Notion. Features include a rich text editor, dynamic pages, and responsive design. Built with React.js, Node.js, MongoDB, and deployed on Vercel.",
    stack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
    image: "/assets/work/image (3).jpeg",
    live: "https://note-notion-app.vercel.app/",
    github: "https://github.com/mahmoud-elkassas/Notion-Clone",
  },
  {
    num: "03",
    category: "Ecommerce Website",
    title: "Project 2",
    description:
      "A full-stack eCommerce platform featuring user authentication, product management, shopping cart functionality, and order tracking. Built with React.js, Node.js, Express.js, and MongoDB, it offers a responsive and seamless shopping experience",
    stack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
    image: "/assets/work/image (1).jpeg",
    live: "https://monumental-haupia-f18605.netlify.app/",
    github: "https://github.com/mahmoud-elkassas/Ecommerce-website",
  },
  {
    num: "04",
    category: "Restaurant Website",
    title: "Project 3",
    description:
      "A responsive and interactive restaurant website showcasing menu items, online reservations, and contact details. Built with HTML, CSS, and JavaScript, it offers a modern design and seamless user experience.",
    stack: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
    image: "/assets/work/2re.PNG",
    live: "https://restaurant-website11.netlify.app/",
    github:
      "https://github.com/mahmoud-elkassas/Restaurant-Website?tab=readme-ov-file",
  },
  {
    num: "05",
    category: "Car Marketplace",
    title: "Project 4",
    description:
      "A modern platform for browsing, buying, and selling cars. Key features include detailed car listings, advanced search filters, and secure user authentication. Built with Next.js, Drizzle ORM, and MongoDB, ensuring scalability and a responsive user experience",
    stack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },

      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
    image: "/assets/work/image.jpeg",
    live: "https://car-marketplace.tubeguruji.com/",
    github: "https://github.com/mahmoud-elkassas/CarMarketeplace",
  },
  {
    num: "06",
    category: "Amazon-Clone",
    title: "Project 5",
    description:
      "A full-stack Amazon-inspired eCommerce platform featuring user authentication, product browsing, shopping cart functionality, and order management. Built with React.js, Node.js, Express.js, and MongoDB to deliver a seamless online shopping experience.",
    stack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
    image: "/assets/work/image (2).jpeg",
    live: "https://amaqzon-clone.vercel.app/",
    github: "https://github.com/mahmoud-elkassas/Amazon-Clone",
  },
  {
    num: "07",
    category: "Airbnb-Clone",
    title: "Project 6",
    description:
      "A full-stack clone of Airbnb featuring property listings, user authentication, booking functionality, and image uploads. Built with Next.js, Prisma, MongoDB, and Cloudinary for a responsive and scalable experience.",
    stack: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
    ],
    image: "/assets/work/image (5).jpeg",
    live: "https://adadada-asa.vercel.app/",
    github: "https://github.com/mahmoud-elkassas/Airbnb-clone",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <div className="container mx-auto">
      <div className="w-full xl:grid xl:grid-cols-9 xl:gap-6 gap-8 right-0 ">
        <div className="w-full xl:col-span-6 col-span-9 xl:order-2 ">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xL:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      {/* <div className="relative w-[1000px] h-[400px]"> */}
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            {/* slider buttons */}
            <WorkSliderBtns
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </div>
        <div className="w-full xl:col-span-3 col-span-9 xl:order-1">
          <div className="flex flex-col gap-[30px]">
            {/* outline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
              {project.num}
            </div>
            {/* project category */}
            <h2 className="text-[42x] font-black  leading-none text-accent-hover group-hover:text-accent transition-all duration-500 capitalize ">
              {project.category} project
            </h2>
            {/* project description */}
            <p className=" text-white/60">{project.description}</p>
            {/* stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.icon}

                    {index !== project.stack.length - 1}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className="border border-white/20"></div>
            {/* buttons */}
            <div className="flex items-center gap-4">
              {/* live project button */}
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <RiLiveLine className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github project button */}
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="">Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
