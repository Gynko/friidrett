import { useState, useEffect } from "react";
import "./raceFullList.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import Heading from "../../../components/heading/heading.component";



export default function RaceFullList() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost/ga/races")
      .then((response) => response.json())
      .then((data) => {
        setRaces(data);
        console.log("All race IDs:", data.map(race => race.id));
        console.log("Fetched races:", data);
      })
      .catch((error) => {
        console.error("There was an error fetching the races", error);
      });
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  return (
    <main className="race-full-list-main">
      <PageContainer>
        <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
        <Heading text="Full race list" />
        <ul>
        {races.map((race) => (
           <li key={`race-${race.id}`}>
              {race.raceNr}: {formatDate(race.raceDate)} - {race.distance} m
            </li>
          ))}
        </ul>
      </PageContainer>
    </main>
  );
}
