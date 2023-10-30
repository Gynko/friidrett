import React from "react";
import Button from "../../../components/button/button.component";
import "./raceFind.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import { Link } from "react-router-dom";

export default function RaceFind() {
  return (
    <PageContainer>
      <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
    </PageContainer>
  );
}
