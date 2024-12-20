import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-22">
          {/* Left Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              Hello,I'm <br />
              <span className="text-accent inline-block overflow-hidden sm:whitespace-nowrap border-accent xl:animate-typing">
                Mahmoud Elkassas
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 overflow-hidden">
              A passionate Frontend Developer with a Bachelor's degree in
              Computer Engineering. I specialize in building modern,
              user-friendly web applications that combine clean code with
              seamless design. Let's collaborate to bring your vision to life!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download Button */}
              <a
                href="https://drive.google.com/file/d/16pRCieQnJ7eI6TeTR7WyvhqzvZLyq53i/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              {/* Social Icons */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base 
                  hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full xl:w-auto flex justify-center items-center">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
