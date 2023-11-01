import Heading from "../../../components/heading/heading.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import { useEffect, useState } from "react";
import "./resultsGetAll.styles.css";

export default function ResultsGetAll() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("/results")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((fetchedData) => {
        setMembers(fetchedData);
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
        <ul>
          {members.map((member, index) => (
            <li
              key={index}
            >{`${member.firstName} ${member.distance} m ${member.raceTime}`}</li>
          ))}
        </ul>
      </main>
    </PageContainer>
  );
}
