import React from "react";
import Button from "../../../components/button/button.component";
import "./raceNew.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import { Link } from "react-router-dom";

export default function RaceNew() {
  const buttonProps = {
    text: "Add members",
    width: "button-small",
    path: "/new-race",
  };

  return (
    <PageContainer>
      <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
    </PageContainer>
  );
}
