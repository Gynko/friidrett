import React, { useState, useEffect } from "react";
import "./raceEdit.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import Heading from "../../../components/heading/heading.component";
import InputText from "../../../components/inputText/inputText.component";
import Button from "../../../components/button/button.component";

export default function RaceEdit() {
  const [races, setRaces] = useState([]);
  const [raceDate, setRaceDate] = useState("");
  const [distance, setDistance] = useState("");
  const [raceNr, setRaceNr] = useState("");

  useEffect(() => {
    fetch("/races")
        .then((res) => res.json())
        .then((data) => {
            setRaces(data);
            console.log(data);  // Legg til denne linjen
        });
}, []);

  const handleEditClick = (race) => {
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

    fetch(`/races/${raceNr}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 405) {
          throw new Error ("Function not supported by the server")
        }
        return response.json();
      })

      .then((data) => {
        console.log("Race updated:", data);
        return fetch("/races");
      })
      .then((res) => res.json())
      .then((data) => {
        setRaces(data);
      })
      .catch((error) => {
        if (error.message === "Function not supported by the server"){
          alert(error.message);
        }
        console.error("Error:", error);
      });
  }
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); 
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <PageContainer>
      <main className="race-edit-main">
        <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
        <Heading text="Edit race" />

        {races.map((race) => (
          <div className="race-edit-container" key={race.raceNr}>
              <div className="race-info"> <p className="race-edit-number">{race.raceNr}</p>
            <p className="race-edit-date">{formatDate(race.raceDate)}</p>
            <p className="race-edit-distance">{race.distance} m</p>
            <Button
              color="yellow"
              text="Edit"
              onClick={() => handleEditClick(race)}
             
            />
          </div>
      
        {raceNr === race.raceNr && (
          <form onSubmit={onFormSubmit} className="race-edit-form">
            <p>Date</p>
            <InputText
              type="date"
              value={raceDate}
              onChange={(e) => setRaceDate(e.target.value)}
            />
                  <p>Distance</p>
            <InputText
              type="number"
              value={distance}
              placeholder="Distance (m)"
              onChange={(e) => setDistance(e.target.value)}
            />

            <Button className="race-edit-button" type="submit" color="yellow" text="Update race" />
          </form>
        )}
        </div>
        ))}
      </main>
    </PageContainer>
  );
}
