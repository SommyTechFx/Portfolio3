import "./navbar.css";
// import logo from "./../../assets/logo.png";
// import contact from "./../../assets/contact.png";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">Hello.</h3>
      {/* <img src={logo} alt="" /> */}
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>

        <Link className="desktopMenuListItem">About Me</Link>
        <Link className="desktopMenuListItem">Services</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Contact</Link>
      </div>
      <button className="desktopMenuBtn">Connect With Me</button>
    </nav>
  );
};

export default Navbar;
