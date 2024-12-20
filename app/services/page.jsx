"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const ServiceCard = [
  {
    num: "01",
    title: "Frontend Development",
    description:"Building modern, responsive, and user-friendly interfaces for seamless user experiences.",
    href: "/work",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    href: "/work",
  },
  {
    num: "03",
    title: "Odoo Development",
    description: "Customizing and implementing Odoo solutions for businesses.",
    href: "/work",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold px- mb-12 text-accent inline-block overflow-hidden sm:whitespace-nowrap  border-accent xl:animate-typing ">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {ServiceCard.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-secondary rounded-xl hover:shadow-lg hover:shadow-accent transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-accent mb-4">
                {service.num}
              </h3>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-white/80 mb-6">{service.description}</p>
              <Link href={service.href}>
                <div className="flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors duration-300">
                  Learn More <BsArrowDownRight />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
