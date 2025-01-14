import { useState } from "react";
import "./Services.css";
import service_data from "./../../assets/services_data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Services = () => {
  const [expanded, setExpanded] = useState(
    Array(service_data.length).fill(false)
  );

  const toggleReadMore = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section id="services" className="services">
      <div className="services-title">
        <h1 className="logo">My Services</h1>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="service-container">
        {service_data.map((service, index) => {
          const isExpanded = expanded[index];
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p
                className={`service-desc ${
                  isExpanded ? "expanded" : "collapsed"
                }`}
              >
                {service.s_desc}
              </p>
              <div
                className="services-readmore"
                onClick={() => toggleReadMore(index)}
                style={{ cursor: "pointer", color: "white" }}
              >
                <p>{isExpanded ? "Show Less" : "Read More"}</p>
                <MdKeyboardDoubleArrowRight
                  className={`arrow-img ${isExpanded ? "rotated" : ""}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
