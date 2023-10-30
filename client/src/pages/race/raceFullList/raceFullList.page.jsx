import React from "react";
import Button from "../../../components/button/button.component";
import "./raceFullList.styles.css";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import { Link } from "react-router-dom";

export default function RaceFullList() {
  return (
    <PageContainer>
      <SectionTitle icon="races" titleTop="Races" titleBottom="management" />
    </PageContainer>
  );
}
