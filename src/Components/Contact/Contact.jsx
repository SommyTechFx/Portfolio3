import "./Contact.css";

import { FaFacebook, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nigxg7q",
        "template_h5zvhsj", // Use your actual template ID
        formData,
        "F4lJ4SV6ilEJfvkug" // Use your actual user ID
      )
      .then((response) => {
        console.log("Email successfully sent:", response); // Optional: Log the response for debugging
        setResult("Email sent successfully");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setResult("Failed to send email");
        console.error("Email sending error:", error);
        setLoading(false); // Stop loading
      });
  };

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
        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="contact-submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Submit"}
            <span>
              <TiLocationArrowOutline className="submit-img" />
            </span>
          </button>
          <span
            style={{
              color:
                result === "Email sent successfully"
                  ? "rgb(255, 94, 0)"
                  : "White",
              marginTop: "10px",
              display: "flex",
            }}
          >
            {result}
          </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
