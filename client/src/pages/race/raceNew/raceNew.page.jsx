import React, { useState } from "react"; 
import Button from "../../../components/button/button.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import InputText from "../../../components/inputText/inputText.component";
import Heading from "../../../components/heading/heading.component";
import InputDatePicker from "../../../components/inputDatePicker/inputDatePicker.component";
import "./raceNew.styles.css"

export default function NewRace() {
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
    
    console.log("Sending the following data to the server:", formData);

    fetch('/races', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })

.then((response) => {
  if(!response.ok) {
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
})
.catch((error) => {
  console.error("Error:", error);
});
}

  return (
    <PageContainer>
        <main className="race-new-main">
      <SectionTitle icon="races" titleTop="Races" titleBottom="management" />

      <Heading text="New Race" />
      <form className="race-new-result-form" onSubmit={handleSubmit}>
        <InputDatePicker
          name="raceDate"
          value={formData.raceDate}
          onChange={handleInputChange}
        />

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

    {/*     <Button
          text="Add members"
          color="red"
          width="button-large"
          type="submit"
        /> */}

        <Button
          text="Submit new race"
          color="yellow"
          width="button-large"
          type="submit"
        />
      </form>
      </main>
    </PageContainer>
  );
}
