import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";

export default function RaceManagement() {
  const raceButtons = [
    { text: "New race", width: "small", path: "/races/new" },
    { text: "Edit race", width: "small", path: "/races/edit" },
    { text: "Delete race", width: "small", path: "/races/delete" },
    { text: "Find race", width: "large", path: "/races/find" },
    { text: "Full race list", width: "large", path: "/races/fulllist" },
  ];

  return (
    <PageContainer>
      <main className="race-new-main">
        <SectionTitle icon="races" titleTop="Races" titleBottom="management" />

        {raceButtons.map((button, index) => (
          <Link key={index} to={button.path}>
            <Button text={button.text} color="black" width={button.width} />
          </Link>
        ))}
      </main>
    </PageContainer>
  );
}
