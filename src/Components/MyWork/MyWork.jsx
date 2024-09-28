import "./MyWork.css";
import mywork_data from "./../../assets/mywork_data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1 className="logo">My Latest Work</h1>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
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
