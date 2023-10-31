import PageContainer from "../../../components/pageContainer/pageContainer.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import Heading from "../../../components/heading/heading.component";
import "./resultsNew.styles.css";

export default function ResultsNew() {
  return (
    <PageContainer>
      <main className="results-new-main">
        <SectionTitle
          icon="results"
          titleTop="Results"
          titleBottom="management"
        />
        <Heading text="Add result" />
        <p>Result new</p>
      </main>
    </PageContainer>
  );
}
