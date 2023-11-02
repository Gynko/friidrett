import { useState, useEffect } from "react";
import "./raceFullList.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import Heading from "../../../components/heading/heading.component";

export default function RaceFullList() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch("/races")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRaces(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the races", error);
      });
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <PageContainer>
      <main className="race-full-list-main">
        <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
        <Heading text="Full race list" />
        <ul>
          {races.map((race) => (
            <li key={`race-${race.raceNr}`}>
              {race.raceNr}: {formatDate(race.raceDate)} - {race.distance} m
            </li>
          ))}
        </ul>
      </main>
    </PageContainer>
  );
}
