import "./About.css";
import aboutmepic from "./../../assets/aboutmepic.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1 className="logo aboutme">About Me</h1>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={aboutmepic} alt="" className="aboutmepic" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Frontend Developer with extensive experience in
              building modern web applications using React, JavaScript, and
              other cutting-edge technologies.
            </p>
            <p>
              With my experience and and a keen eye for design and a focus on
              creating seamless user experiences, I strive to deliver
              responsive, performant, and visually appealing websites.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skillxy">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skillxy">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skillxy">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skillxy">
              <p>Next JS</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
          <div className="achievement">
            <div className="about-achievement">
              <h1>2+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>20+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>15+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
