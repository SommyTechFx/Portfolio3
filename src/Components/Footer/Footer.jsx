import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="footer-line" />
      <div className="footer-container">
        <div className="footer-left">
          <p>@ 2024 Aningwu Chisom. All rights</p>
        </div>
        <div className="footer-right">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
