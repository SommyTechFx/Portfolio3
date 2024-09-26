import "./navbar.css";
import logo from "./../../assets/logo.png";
import contact from "./../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopMenu"></div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
