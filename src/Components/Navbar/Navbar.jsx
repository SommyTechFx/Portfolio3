// import { useState } from "react";
import "./navbar.css";
// import logo from "./../../assets/logo.png";
// import contact from "./../../assets/contact.png";

import { Link } from "react-scroll";

const Navbar = () => {
  // const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar">
      <h3 className="logo">Hello.</h3>
      {/* <img src={logo} alt="" /> */}
      <div className="desktopMenu">
        <Link
          to={"intro"}
          smooth={true}
          offset={-50}
          duration={1000}
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          to={"about"}
          smooth={true}
          offset={10}
          duration={1000}
          className="desktopMenuListItem"
        >
          About Me
        </Link>
        <Link
          to={"services"}
          smooth={true}
          offset={20}
          duration={1000}
          className="desktopMenuListItem"
        >
          Services
        </Link>
        <Link
          to={"work"}
          smooth={true}
          offset={20}
          duration={1000}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          to={"contact"}
          smooth={true}
          offset={50}
          duration={1000}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      <Link to={"contact"} smooth={true} offset={50} duration={1000}>
        <button className="desktopMenuBtn">Connect</button>
      </Link>
    </nav>
  );
};

export default Navbar;
