import { useState } from "react";
import Button from "../../../components/button/button.component";
import "./raceFind.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import Heading from "../../../components/heading/heading.component";

export default function RaceFind() {
  const [searchInput, setSearchInput] = useState("");
  const [raceData, setRacedata] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost/ga/races/${searchInput}`);

    if (response.ok) {
      const data = await response.json();
      setRacedata(data);
    } else {
      console.error(`HTTP error! Status: ${response.status}`);
      setRacedata(null);
    }
  };

  return (
    <PageContainer>
       <main className="race-find-main">
      <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
      <Heading text="Find race" />
     
        <form className="race-find-form" onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Race ID"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button type="submit" text="Find race" color="yellow" />
        </form>
        {raceData && (
          <div className="results-container">
            <h3>Results:</h3>
            <ul>
              <li>
                <p> Race date: {raceData.raceDate}</p>
                <p>Distance: {raceData.distance}</p>
              </li>
            </ul>
          </div>
        )}
      </main>
    </PageContainer>
  );
}
