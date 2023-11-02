import { useState, useEffect } from "react";

import PageContainer from "../../../components/pageContainer/pageContainer.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import Heading from "../../../components/heading/heading.component";
import Button from "../../../components/button/button.component";
import InputText from "../../../components/inputText/inputText.component";
import "./resultsNew.styles.css";

export default function ResultsNew() {
  const [raceNr, setRaceNr] = useState("");
  const [memberNr, setMemberNr] = useState("");
  const [raceTime, setRaceTime] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const formData = {
      raceNr,
      memberNr,
      raceTime,
    };
    console.log("formdata", formData);
    // Send POST request to the server
    fetch(`/results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => {
        try {
          return JSON.parse(text);
        } catch (err) {
          console.error("Failed to parse as JSON:", text);
          throw err;
        }
      })
      .then((data) => {
        console.log("Success:", data);
        setRaceNr("");
        setMemberNr("");
        setRaceTime("");
        alert(`${memberNr} ran race ${raceNr} in ${raceTime}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <PageContainer>
      <main className="results-new-main">
        <SectionTitle
          icon="results"
          titleTop="Results"
          titleBottom="management"
        />
        <Heading text="Add result" />
        <form onSubmit={onFormSubmit}>
          <InputText
            placeholder="Race id"
            value={raceNr}
            onChange={(e) => setRaceNr(e.target.value)}
          />
          <InputText
            placeholder="Member id"
            value={memberNr}
            onChange={(e) => setMemberNr(e.target.value)}
          />
          <InputText
            placeholder="Race time"
            value={raceTime}
            onChange={(e) => setRaceTime(e.target.value)}
          />
          <Button type="submit" color="yellow" text="Submit" width="large" />
        </form>
      </main>
    </PageContainer>
  );
}
