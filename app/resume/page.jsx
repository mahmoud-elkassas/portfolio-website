"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import ScrollAreaWithAnimation from "@/components/ScrollAreaWithAnimation";
import TabsContentWithAnimation from "@/components/TabsContentWithAnimation";

const Resume = () => {
  const about = {
    title: "About Me",
    description:
      "I am Mahmoud Elkassas, a passionate Frontend Developer with a Bachelor's degree in Computer Engineering from Al-Azhar University, Cairo. I specialize in building interactive, scalable, and user-friendly web applications. With expertise in modern technologies like React.js, Next.js, and Tailwind CSS, I focus on creating seamless user experiences.",
    info: [
      { fieldName: "Name", fieldValue: "Mahmoud Elkassas" },
      { fieldName: "Phone", fieldValue: "(+02) 01020405204" },
      { fieldName: "Experience", fieldValue: "+1 year" },
      { fieldName: "Nationality", fieldValue: "Egyptian" },
      { fieldName: "Freelance", fieldValue: "Available" },
      { fieldName: "Address", fieldValue: "Cairo,Egypt" },
      { fieldName: "Languages", fieldValue: "Arabic, English" },
      { fieldName: "Email", fieldValue: "moelkassas8@gmail.com" },
    ],
  };

  const skills = {
    title: "My Skills",
    description: "Here are some technologies I've worked with:",
    skilllist: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaFigma />, name: "Figma" },
      { icon: <FaPython />, name: "Python" },
    ],
  };

  const experience = {
    title: "My Experience",
    description:
      "I’ve worked with various clients on responsive and interactive web applications.",
    items: [
      {
        company: "Upwork.com",
        position: "Freelance Frontend Developer",
        duration: "March 2023 - Present",
      },
    ],
  };

  const education = {
    title: "Education",
    description:
      "Bachelor's degree in Computer Engineering Al-Azhar University",

    items: [
      {
        institution: "Meta Front-End Developer Professional Certificate",
        degree: "Coursera",
        duration: "2023",
      },
      {
        institution: "Frontend Engineering with React",
        degree: "Manara",
        duration: "2024",
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <Tabs
        defaultValue="about"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about">About Me</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>

        <div className="min-h-[70vh] w-full">
          {/* About */}

          <TabsContent value="about">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-accent inline-block overflow-hidden sm:whitespace-nowrap  border-accent xl:animate-typing ">
                {about.title}
              </h3>
              <TabsContentWithAnimation>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </TabsContentWithAnimation>
            </div>
          </TabsContent>

          {/* Skills */}

          <TabsContent value="skills">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-accent inline-block overflow-hidden sm:whitespace-nowrap  border-accent xl:animate-typing ">
                {skills.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
              <TabsContentWithAnimation>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => (
                    <TooltipProvider key={index} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group bg-secondary  hover:shadow-lg hover:shadow-accent transition-all duration-300">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </ul>
              </TabsContentWithAnimation>
            </div>
          </TabsContent>

          {/* Experience */}
          <TabsContent value="experience">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-accent inline-block overflow-hidden sm:whitespace-nowrap  border-accent xl:animate-typing ">
                {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollAreaWithAnimation>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <p className="text-white/60">{item.company}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </ScrollAreaWithAnimation>
            </div>
          </TabsContent>

          {/* Education */}
          <TabsContent value="education">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-accent inline-block overflow-hidden sm:whitespace-nowrap  border-accent xl:animate-typing ">
                {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollAreaWithAnimation>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <p className="text-white/60">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </ScrollAreaWithAnimation>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Resume;
