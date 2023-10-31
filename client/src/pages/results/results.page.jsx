import "./results.styles.css";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";

export default function ResultsManagement() {
  return (
    <PageContainer>
      <main className="main-container">
        <SectionTitle
          icon="results"
          titleTop="Results"
          titleBottom="management"
        />
        <div className="results-button-container">
          <Link to="/results/new">
            <Button color="black" text="Add result" />
          </Link>
          <Link to="/results/getall">
            <Button color="black" text="Get all results" />
          </Link>
        </div>
      </main>
    </PageContainer>
  );
}
