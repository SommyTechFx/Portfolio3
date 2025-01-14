import "./Intro.css";
import mainpic from "./../../assets/main pic.png";
import { Link } from "react-scroll";
import btnimg from "./../../assets/hireme.png";
import resumeFile from "./../../assets/MyResume.pdf"; // Path to your resume file

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="introtext">
          I&#39;m <span className="introname">Chisom </span>
          <br />
          Frontend Developer &
          <h6>
            <span className="introname">UI/UX </span>Designer
          </h6>
        </span>
        <p className="intropara">
          Passionate Frontend Developer and UI/UX Designer skilled in creating
          responsive
          <br /> web applications and intuitive interfaces using HTML5, CSS3,
          JavaScript, React.js, <br /> and Figma. I excel at uniting design and
          development to deliver seamless, user-focused digital experiences.
        </p>
        <div>
          <Link to={"contact"} smooth={true} offset={50} duration={1000}>
            <button className="btn">
              <img src={btnimg} alt="" className="hire-icon" />
              Hire me
            </button>
          </Link>

          {/* Resume Button */}
          <a href={resumeFile} target="_blank" rel="noopener noreferrer">
            <button className="btn resume">Resume</button>
          </a>
        </div>
      </div>
      <img src={mainpic} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
