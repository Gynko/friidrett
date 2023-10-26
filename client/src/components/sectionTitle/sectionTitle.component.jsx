import members from "../../assets/graphics/members.png";
import races from "../../assets/graphics/races.png";
import results from "../../assets/graphics/results.png";

export default function SectionTitle({ membersIcon }) {
  return (
    <div>
      <img src={membersIcon} height="64px" width="64px"></img>
      <img src={members} height="64px" width="64px"></img>
      <img src={races} height="64px" width="64px"></img>
      <img src={results} height="64px" width="64px"></img>
    </div>
  );
}
