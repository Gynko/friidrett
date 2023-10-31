import { useState } from "react";
import Heading from "../../components/heading/heading.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import InputRadio from "../../components/inputRadio/inputRadio.component";
import InputDate from "../../components/inputDate/inputDate.component";
import "./memberNew.styles.css";
import InputText from "../../components/inputText/inputText.component";
import Button from "../../components/button/button.component";

export default function MemberNew() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [birthYear, setBirthYear] = useState("");
  const [email, setEmail] = useState("");

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  const radioListGender = [
    { value: "M", labelText: "M", name: "gender" },
    { value: "F", labelText: "F", name: "gender" },
  ];

  function onFormSubmit(event) {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      gender: selectedGender,
      birthYear: parseInt(birthYear),
      email,
    };
    console.log("formdata", formData);
    // Send POST request to the server
    fetch(`/members`, {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <PageContainer>
      <main className="member-new-main">
        <SectionTitle
          icon="members"
          titleTop="Members"
          titleBottom="management"
        />
        <Heading text="New member" />
        <form className="member-new-result-form" onSubmit={onFormSubmit}>
          <InputText
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputText
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputRadio
            list={radioListGender}
            onValueChange={handleGenderChange}
            selectedValue={selectedGender}
            label="Choose gender"
          />
          <InputDate onChange={(selectedYear) => setBirthYear(selectedYear)} />
          <InputText
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" color="yellow" text="Submit" width="large" />
        </form>
      </main>
    </PageContainer>
  );
}
