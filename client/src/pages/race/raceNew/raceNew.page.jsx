import React, { useState } from "react";
/* import { Link } from "react-router-dom"; */
import Button from "../../../components/button/button.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import InputText from "../../../components/inputText/inputText.component";
import Heading from "../../../components/heading/heading.component";


export default function NewRace() {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    raceDate: "",
    distance: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <PageContainer>
      <SectionTitle icon="races" titleTop="Races" titleBottom="management" />

      <Heading text="New Race" />
      <form onSubmit={handleSubmit}>
       
      <input 
      type="date"
      name="raceDate"
      value={formData.raceDate}
      onChange={handleInputChange} />

        <InputText
          placeholder="distance (km)"
          type="number"
          value={formData.distance}
          onChange={handleInputChange}
          name="distance"
          min="0"
          step="1.00"
        />

        {/* Må legge til rød knapp med modal */}
        {/*    <Button text="Add member" color="red" width="button-large" /> */}

        <Button
          text="Submit new race"
          color="yellow"
          width="button-large"
          type="submit"
        />
      </form>
    </PageContainer>
  );
}
