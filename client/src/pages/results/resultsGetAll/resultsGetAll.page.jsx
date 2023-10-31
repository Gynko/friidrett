import { useEffect, useState } from "react";
import Heading from "../../../components/heading/heading.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import InputRadio from "../../../components/inputRadio/inputRadio.component";
import "./resultsGetAll.styles.css";

export default function ResultsGetAll() {
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

  useEffect(() => {
    fetch("http://localhost/ga/members")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((fetchedData) => {
        console.log("data", fetchedData);
      });
  }, []);

  return (
    <PageContainer>
      <main className="results-get-all-main">
        <SectionTitle
          icon="results"
          titleTop="Results"
          titleBottom="management"
        />
        <Heading text="Get all results" />
      </main>
      <form className="result-form" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="last-name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputRadio
          list={radioListGender}
          onValueChange={handleGenderChange}
          selectedValue={selectedGender}
          label="Choose gender"
        />
        <input
          type="text"
          placeholder="Birth year"
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </PageContainer>
  );
}
