import React from "react";
import Button from "../../components/button/button.component";
import "./race.page.css";

function Race() {
  const buttonNewRace = () => {
    alert("New race");
  };
  const buttonEditRace = () => {
    alert("Edit race");
  };
  const buttonDeleteRace = () => {
    alert("Delete race");
  };
  const buttonFindRace = () => {
    alert("Find race");
  };

  const buttonFullRaceList = () => {
    alert("Full race list");
  };

  return (
    <div className="page-container">
      <Button
        text="New race"
        color="black"
        width="button-small"
        onClick={buttonNewRace}
      />

      <Button
        text="Edit race"
        color="black"
        width="button-small"
        onClick={buttonEditRace}
      />

      <Button
        text="Delete race"
        color="black"
        width="button-small"
        onClick={buttonDeleteRace}
      />
      <Button
        text="Find race"
        color="black"
        width="button-large"
        onClick={buttonFindRace}
      />

      <Button
        text="Full race list"
        color="black"
        width="button-large"
        onClick={buttonFullRaceList}
      />
    </div>
  );
}

export default Race;
