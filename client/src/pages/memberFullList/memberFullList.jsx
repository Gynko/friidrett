import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Heading from "../../components/heading/heading.component";
import { useEffect, useState } from "react";
import "./memberFullList.styles.css";

export default function MemberFullList() {
  const [members, setMembers] = useState([]);

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
      });
  }, []);
  return (
    <PageContainer>
      <main className="member-full-list-main">
        <SectionTitle
          icon="members"
          titleTop="Members"
          titleBottom="management"
        />
        <Heading text="Full member list" />
        <ul>
          {members.map((member, index) => (
            <li key={index}>
              {`${member.firstName}
              ${member.lastName}
              ${member.birthYear}`}
            </li>
          ))}
        </ul>
      </main>
    </PageContainer>
  );
}
