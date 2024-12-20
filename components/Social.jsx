import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const social = [
  {
    icon: <FaGithub />,
    url: "https://github.com/mahmoud-elkassas",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/mahmoud-elkassas-4a8050181/",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/mahmoud.elassas.79/",
  },
  {
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/mahmoud-elkassas/",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/+0201020405204",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link
            href={item.url}
            key={index}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
