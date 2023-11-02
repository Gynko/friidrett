import { useState } from "react";
import Button from "../../../components/button/button.component";
import "./raceFind.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import Heading from "../../../components/heading/heading.component";

export default function RaceFind() {
  const [searchInput, setSearchInput] = useState("");
  const [raceData, setRacedata] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/races/${searchInput}`);

    if (response.ok) {
      const data = await response.json();
      setRacedata(data);
      setErrorMessage(null);
    } else if (response.status === 500) {
      setErrorMessage("Race number not found");
      setRacedata(null);
    } else {
      console.error(`HTTP error! Status: ${response.status}`);
      setRacedata(null);
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <PageContainer>
      <main className="race-find-main">
        <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
        <Heading text="Find race" />

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Race ID"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button type="submit" text="Find race" color="yellow" />
        </form>

        <div className="results-container">
          {raceData ? (
            <ul>
              <li>
                {raceData.raceNr}. {formatDate(raceData.raceDate)}{" "}
                {raceData.distance} m
              </li>
            </ul>
          ) : errorMessage ? (
            <div className="error-message">{errorMessage}</div>
          ) : null}
        </div>
      </main>
    </PageContainer>
  );
}
