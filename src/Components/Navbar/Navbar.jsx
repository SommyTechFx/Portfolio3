import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./navbar.css";

import { Link } from "react-scroll";
// import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">Hello.</h3>

      <div className="desktopMenu">
        {/* <HiOutlineXMark className="nav-mob-close" /> */}
        <Link
          to={"intro"}
          smooth={true}
          offset={-50}
          duration={1000}
          spy={true}
          activeClass="active"
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          to={"about"}
          smooth={true}
          offset={10}
          duration={1000}
          spy={true}
          activeClass="active"
          className="desktopMenuListItem"
        >
          About Me
        </Link>
        <Link
          to={"services"}
          smooth={true}
          offset={20}
          duration={1000}
          spy={true}
          active="active"
          className="desktopMenuListItem"
        >
          Services
        </Link>
        <Link
          to={"work"}
          smooth={true}
          offset={20}
          duration={1000}
          spy={true}
          activeClass="active"
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          to={"contact"}
          smooth={true}
          offset={50}
          duration={1000}
          spy={true}
          activeClass="active"
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      <Link
        to={"contact"}
        smooth={true}
        offset={50}
        duration={1000}
        spy={true}
        activeClass="active"
      >
        <button className="desktopMenuBtn">Connect</button>
      </Link>
      {/* for burger menu */}
      <HiOutlineMenuAlt3
        className="nav-mob-open"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="  nav-menu"
        style={{ display: showMenu ? "flex" : "none" }}
        onClick={() => setShowMenu(false)}
      >
        {/* <HiOutlineXMark
          className="nav-mob-close"
          onClick={() => setShowMenu(showMenu)}
        /> */}
        <Link
          to={"intro"}
          smooth={true}
          offset={-50}
          duration={1000}
          spy={true}
          activeClass="active"
          className=" desktopMenuListItem ListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>

        <Link
          to={"about"}
          smooth={true}
          offset={10}
          duration={1000}
          spy={true}
          activeClass="active"
          className=" desktopMenuListItem  ListItem"
          onClick={() => setShowMenu(false)}
        >
          About Me
        </Link>
        <Link
          to={"services"}
          smooth={true}
          offset={20}
          duration={1000}
          spy={true}
          active="active"
          className=" desktopMenuListItem  ListItem"
          onClick={() => setShowMenu(false)}
        >
          Services
        </Link>
        <Link
          to={"work"}
          smooth={true}
          offset={20}
          duration={1000}
          spy={true}
          activeClass="active"
          className=" desktopMenuListItem  ListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          to={"contact"}
          smooth={true}
          offset={50}
          duration={1000}
          spy={true}
          activeClass="active"
          className=" desktopMenuListItem  ListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
