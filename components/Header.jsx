import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8  xl:py-0 text-white bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Mahmoud Elkassas Logo"
            width={200}
            height={-1}
            className="hidden xl:block py-5 hover:scale-125 transition-transform duration-300 "
          />
        </Link>

        {/* Navigation for larger screens */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="hover:bg-opacity-90">Hire me</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
