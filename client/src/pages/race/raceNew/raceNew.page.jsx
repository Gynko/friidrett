import React, { useState, useEffect } from "react";
import Button from "../../../components/button/button.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import InputText from "../../../components/inputText/inputText.component";
import Heading from "../../../components/heading/heading.component";
import InputDatePicker from "../../../components/inputDatePicker/inputDatePicker.component";
import "./raceNew.styles.css";

export default function NewRace() {
  const [formData, setFormData] = useState({
    raceDate: "",
    distance: "",
  });
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [showMembersList, setShowMembersList] = useState(false);
  const [members, setMembers] = useState ([]);

  useEffect(() => {
    fetch("/members")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((fetchedData) => {
        setMembers(fetchedData);
      })
      .catch((error) => {
        console.error("Fetching members failed:", error);
      });
  }, []);


  const handleMembers = (memberName) => {
    console.log(memberName);
    if (selectedMembers.includes(memberName)) {
      setSelectedMembers((prevMembers) =>
        prevMembers.filter((name) => name !== memberName)
      );
    } else {
      setSelectedMembers((prevMembers) => [...prevMembers, memberName]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullData = {
      ...formData,
      members: selectedMembers,
    };

    console.log("Sending data:", fullData);

    fetch("/races", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullData),
    })
      .then((response) => {
        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })

      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Unsupported by the server");
      });
  };

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
            placeholder="distance (m)"
            type="number"
            value={formData.distance}
            onChange={handleInputChange}
            name="distance"
            min="0"
            step="1.00"
          />
          <Button
            text="Add members"
            color="red"
            width="button-large"
            type="button"
            onClick={() => setShowMembersList(true)}
          />
          {showMembersList && (
            <div className="members-list">
              <ul>
                {members.map((member) => {
                  const memberName = `${member.firstName} ${member.lastName}`;
                  return (
                    <li key={memberName}>
                      <input
                        type="checkbox"
                        value={memberName}
                        checked={selectedMembers.includes(memberName)}
                        onChange={() => handleMembers(memberName)}
                      />
                      {`${member.firstName} ${member.lastName} ${member.birthYear}`}
                    </li>
                  );
                })}
              </ul>
              <Button
                text="Done"
                color="black"
                onClick={() => setShowMembersList(false)}
              />
            </div>
          )}
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
