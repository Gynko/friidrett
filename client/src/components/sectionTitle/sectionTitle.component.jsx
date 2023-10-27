import "./sectionTitle.styles.css";
import members from "../../assets/graphics/members.png";
import races from "../../assets/graphics/races.png";
import results from "../../assets/graphics/results.png";

export default function SectionTitle({ icon, titleTop, titleBottom }) {
  function imageChanger() {
    if (icon === "members") return members;
    else if (icon === "races") return races;
    else if (icon === "results") return results;
  }

  return (
    <div className="section-title-container">
      <img src={imageChanger()} height="70px" width="64px"></img>
      <div className="section-title-wrapper">
        <h1 className="section-title-text">
          {titleTop} {"\n"} {titleBottom}
        </h1>
      </div>
    </div>
  );
}
