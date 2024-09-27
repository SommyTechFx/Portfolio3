import "./Intro.css";
import mainpic from "./../../assets/main pic.png";
import { Link } from "react-scroll";
import btnimg from "./../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <div></div>

        <span className="introtext">
          1&#39;m <span className="introname">Chisom </span>
          <br />
          Frontend Developer
        </span>
        <p className="intropara">
          I&#39;m a Skilled Frontend developer with experience crafting
          seamless, visually appealing, and
          <br /> user-centric web experiences. With a strong foundation in HTML,
          CSS, JavaScript, and modern frameworks like React, I focus on building
          responsive, high-performance websites and applications that engage
          users across all devices.
        </p>
        <Link>
          <div>
            <button className="btn">
              <img src={btnimg} alt="" />
              Hire me
            </button>
            <button className="btn resume">Resume</button>
          </div>
        </Link>
      </div>
      <img src={mainpic} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
