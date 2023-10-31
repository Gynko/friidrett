import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Heading from "../../components/heading/heading.component";
import Button from "../../components/button/button.component";
import { useState } from "react";
import "./memberFind.styles.css";

export default function MemberFind() {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserdata] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost/ga/members");

    if (response.ok) {
      const data = await response.json();
      const filteredData = data.filter((user) =>
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
      setUserdata(filteredData);
    } else {
      console.error(`HTTP error! Status: ${response.status}`);
    }
  };

  return (
    <PageContainer>
      <SectionTitle
        icon="members"
        titleTop="Members"
        titleBottom="management"
      />
      <Heading text="Find member" />
      <main>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Name..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button type="submit" text="Find user" color="yellow" />
          </form>
        {userData && (
          <div className="results-container">
            <h3>Results:</h3>
            <ul>
              {userData.map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} {user.birthYear}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </PageContainer>
  );
}
