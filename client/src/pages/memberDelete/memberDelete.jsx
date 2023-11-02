import { useEffect, useState } from "react";

import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Heading from "../../components/heading/heading.component";
import Button from "../../components/button/button.component";

export default function MemberDelete() {
  const [members, setMembers] = useState([]);

  function fetchMembers() {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => console.error("Failed to fetch members:", err));
  }

  useEffect(() => {
    fetchMembers();
  }, []);

  function deleteMember(id) {
    fetch(`/members/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchMembers();
      })
      .catch((err) => {
        console.error(err);
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
        <Heading text="Delete member" />
        {members.map((member, index) => {
          return (
            <div className="member-edit-container" key={index}>
              <p className="member-edit-name">{member.firstName}</p>
              <p className="member-edit-name">{member.lastName}</p>
              <p className="member-edit-name">{member.memberNumber}</p>

              <Button
                color="yellow"
                text="Delete"
                onClick={() => {
                  console.log("deleting");
                  deleteMember(member.memberNumber);
                }}
              />
            </div>
          );
        })}
      </main>
    </PageContainer>
  );
}
