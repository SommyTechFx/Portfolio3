import "./Contact.css";

import { FaFacebook, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiLocationArrowOutline } from "react-icons/ti";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h1 className="logo">Get In Touch</h1>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1 className="logo lets-talk">let&#39;s Talk</h1>
          <p>
            Bring your vision to life with a responsive, visually stunning
            website let&#39;s connect to create an exceptional user experience
            for your audience!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <TfiEmail className="contact-img" />
              <p>aningwuchisom@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FiPhoneCall className="contact-img" />
              <p>08169887054</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot className="contact-img" /> <p>Remote</p>
            </div>
            <div className="socials">
              <FaInstagramSquare className="img" />
              <FaFacebook className="img" />
              <FaLinkedin className="img" />
              <IoLogoWhatsapp className="img" />
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>

          <button className="contact-submit">
            Submit
            <span>
              <TiLocationArrowOutline className="submit-img" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
