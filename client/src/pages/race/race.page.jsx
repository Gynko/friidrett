import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import "./race.page.css";
import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";


export default function RaceManagement() {
  const raceButtons = [
    { text: "New race", width: "button-small", path: "/new-race" },
    { text: "Edit race", width: "button-small", path: "/edit-race" },
    { text: "Delete race", width: "button-small", path: "/delete-race" },
    { text: "Find race", width: "button-large", path: "/find-race" },
    { text: "Full race list", width: "button-large", path: "/race-list" },
  ];


  return (
    <main>
    <PageContainer>
      <SectionTitle icon="races" titleTop="Races" titleBottom="management" />

      {raceButtons.map((button, index) => (
        <Link key={index} to={button.path}>
          <Button text={button.text} color="black" width={button.width} />
        </Link>
      ))}
    
    </PageContainer>
    </main>
  );
}
