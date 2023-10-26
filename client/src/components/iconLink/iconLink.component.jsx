import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import "./iconLink.styles.css";
import Members from "../../assets/graphics/members.png";
import Races from "../../assets/graphics/races.png";
import Results from "../../assets/graphics/results.png";

export default function IconLink({ icon, text }) {
  const { setVisibleMenuMobile } = useContext(UserContext);
  function hideMenu() {
    setVisibleMenuMobile(false);
  }

  function chooseIcon() {
    if (icon === "members") {
      return Members;
    } else if (icon === "races") return Races;
    else if (icon === "results") return Results;
  }

  return (
    <Link className="icons-container" to={`/${icon}`} onClick={hideMenu}>
      {<img src={chooseIcon()} width="52" alt={icon} />}
      <p>{text}</p>
    </Link>
  );
}
