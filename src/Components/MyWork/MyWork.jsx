import "./MyWork.css";
import mywork_data from "./../../assets/mywork_data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1 className="logo">My Work</h1>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_link} // Add the link to redirect
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature for external links
            >
              <img src={work.w_img} alt={work.w_name} />{" "}
              {/* Display the image */}
            </a>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <MdKeyboardDoubleArrowRight className="arrow-img2" />
      </div>
    </div>
  );
};

export default MyWork;
