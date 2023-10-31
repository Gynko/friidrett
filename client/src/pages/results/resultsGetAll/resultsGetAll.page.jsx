import Heading from "../../../components/heading/heading.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import "./resultsGetAll.styles.css";

export default function ResultsGetAll() {
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
    </PageContainer>
  );
}
