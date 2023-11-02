import React, { useEffect, useState } from "react";
import Button from "../../../components/button/button.component";
import "./raceDelete.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import Heading from "../../../components/heading/heading.component";

export default function RaceDelete() {
  const [races, setRaces] = useState([]);

  function fetchRace() {
    fetch("/races")
      .then((res) => res.json())
      .then((data) => {
        setRaces(data);
      })
      .catch((err) => console.error("Failed to fetch members:", err));
  }

  function deleteRace(id) {
    fetch(`/races/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchRace();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function formatDate(dateString) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    fetchRace();
  }, []);

  return (
    <PageContainer>
      <main className="race-delete-main">
        <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
        <Heading text="Delete race" />
        <div className="results-delete-container">
          {races.map((race, index) => {
            return (
              <div className="race-delete-container" key={index}>
                <p className="race-delete-category">
                  {formatDate(race.raceDate)}
                </p>
                <p className="race-delete-category-distance">{`${race.distance}m`}</p>
                <Button
                  color="yellow"
                  text="Delete"
                  onClick={() => {
                    deleteRace(race.raceNr);
                  }}
                />
              </div>
            );
          })}
        </div>
      </main>
    </PageContainer>
  );
}
