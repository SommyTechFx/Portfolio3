import "./Services.css";
import service_data from "./../../assets/services_data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Services = () => {
  return (
    <section className="services">
      <div className="services-title">
        <h1 className="logo">My Services</h1>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="service-container">
        {service_data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <MdKeyboardDoubleArrowRight className="arrow-img" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
