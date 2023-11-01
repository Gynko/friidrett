import React, { useState, useEffect } from "react";
import "./raceEdit.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import Heading from "../../../components/heading/heading.component";
import InputText from "../../../components/inputText/inputText.component";
import Button from "../../../components/button/button.component";

export default function RaceEdit() {
  const [races, setRaces] = useState([]);
  const [raceId, setRaceId] = React.useState("");
  const [raceDate, setRaceDate] = useState("");
  const [distance, setDistance] = useState("");
  const [raceNr, setRaceNr] = useState("");

  useEffect(() => {
    fetch("/races")
      .then((res) => res.json())
      .then((data) => setRaces(data));
  }, []);

  const handleEditClick = (race) => {
    setRaceId(race.id);
    setRaceNr(race.raceNr);
    setRaceDate(race.raceDate);
    setDistance(race.distance.toString());
  };

  function onFormSubmit(event) {
    event.preventDefault();
    const formData = {
      raceNr,
      raceDate,
      distance: parseInt(distance),
    };

    fetch(`races/${raceId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Race updated:", data);
        return fetch("/races");
      })
      .then((res) => res.json())
      .then((data) => {
        setRaces(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <PageContainer>
      <main className="race-edit-main">
        <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
        <Heading text="Edit race" />

        {races.map((race) => (
          <div className="race-edit-container" key={race.id}>
               <p className="race-edit-name">{race.raceNr}</p>
            <p className="race-edit-name">{formatDate(race.raceDate)}</p>
            <p className="race-edit-name">{race.distance} m</p>
            <Button
              color="yellow"
              text="Edit"
              onClick={() => handleEditClick(race)}
            />
          </div>
        ))}
        {raceId && (
          <form onSubmit={onFormSubmit} className="race-edit-form">
            <InputText
              type="date"
              value={raceDate}
              placeholder="Race date"
              onChange={(e) => setRaceDate(e.target.value)}
            />
            <InputText
              type="number"
              value={distance}
              placeholder="Distance (m)"
              onChange={(e) => setDistance(e.target.value)}
            />

            <Button type="submit" text="Update race" />
          </form>
        )}
      </main>
    </PageContainer>
  );
}
