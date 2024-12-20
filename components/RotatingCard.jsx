"use client";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const RotatingCard = ({ project }) => {
  return (
    <div className="group perspective hover:rotate-y-180 duration-500 relative w-72 h-96">
      {/* Front Side */}
      <div className="absolute backface-hidden w-full h-full rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={288} // Adjust based on your width
          height={384} // Adjust based on your height
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 bg-black/70 text-white text-center p-3 w-full">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <p className="text-sm">{project.category} Project</p>
        </div>
      </div>

      {/* Back Side */}
      <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-gray-900 text-white rounded-lg p-5 shadow-lg">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-sm mb-4 text-gray-300">{project.description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, index) => (
            <li
              key={index}
              className="text-sm bg-gray-800 px-2 py-1 rounded-lg text-accent"
            >
              {tech.name}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {project.live && (
            <Link href={project.live} target="_blank">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-full hover:bg-accent-hover transition duration-300">
                <BsArrowUpRight className="text-white text-xl" />
              </div>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-full hover:bg-accent-hover transition duration-300">
                <BsGithub className="text-white text-xl" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RotatingCard;
