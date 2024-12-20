"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Import next/image
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo Section */}

        {/* Name Section */}
        <div className="mt-3 mb-30  text-center text-2xl">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Mahmoud Elkassas Logo"
              width={200}
              height={5} 
              className=" mx-4 object-contain object-center transition-all duration-300 hover:scale-110"
              loading="lazy"
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
