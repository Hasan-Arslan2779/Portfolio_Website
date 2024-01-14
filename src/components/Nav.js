import React from "react";
// İmport İcons
import {
  BiChat,
  BiHome,
  BiHomeAlt,
  BiSolidContact,
  BiSquare,
  BiUser,
} from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsFillChatSquareTextFill,
  BsChatSquareText,
} from "react-icons/bs";

// Link
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden  z-50">
      <div className="container mx-auto">
        {/* nav innner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl items-center text-white/50">
          <Link
            to="home"
            offset={-200}
            spy={true}
            smooth={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] items-center justify-center flex"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] items-center justify-center flex"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] items-center justify-center flex"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            smooth={true}
            spy={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] items-center justify-center flex"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] items-center justify-center flex"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
