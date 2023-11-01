import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Heading from "../../components/heading/heading.component";
import Button from "../../components/button/button.component";
import InputText from "../../components/inputText/inputText.component";
import InputDate from "../../components/inputDate/inputDate.component";
import InputRadio from "../../components/inputRadio/inputRadio.component";
import "./memberEdit.styles.css";

export default function MemberEdit() {
  const [members, setMembers] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [birthYear, setBirthYear] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  function editMember(id) {
    fetch(`/members/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setSelectedGender(data.gender);
        setBirthYear(data.birthYear);
        setEmail(data.email);
        setId(data.memberNumber);
      });
  }
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
    fetch(`/members/${id}`, {
      method: "PATCH",
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
      <main className="member-edit-main">
        <SectionTitle
          icon="members"
          titleTop="Members"
          titleBottom="management"
        />
        <Heading text="Edit member" />
        {members.map((member, index) => {
          return (
            <div className="member-edit-container" key={index}>
              <p className="member-edit-name">{member.firstName}</p>
              <p className="member-edit-name">{member.lastName}</p>
              <Button
                color="yellow"
                text="Edit"
                onClick={() => {
                  console.log("editing");
                  editMember(member.memberNumber);
                }}
              />
            </div>
          );
        })}
      </main>
      {firstName ? (
        <form className="member-new-result-form" onSubmit={onFormSubmit}>
          <InputText
            value={firstName}
            placeholder={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputText
            value={lastName}
            placeholder={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputRadio
            list={radioListGender}
            value={selectedGender}
            onValueChange={handleGenderChange}
            selectedValue={selectedGender}
            label="Choose gender"
          />
          <InputDate
            value={birthYear}
            onChange={(selectedYear) => setBirthYear(selectedYear)}
          />
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button type="submit" color="yellow" text="Submit" width="large" />
        </form>
      ) : null}
    </PageContainer>
  );
}
