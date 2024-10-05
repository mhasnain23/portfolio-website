import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mhasnain23" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/muhammad-hasnain-776h86/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/igxhasnain/" },
  //   { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyle }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            target="_blank"
            className={iconStyle}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
