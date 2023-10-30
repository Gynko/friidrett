import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Heading from "../../components/heading/heading.component";

export default function MemberFind() {
  return (
    <main>
      <PageContainer>
        <SectionTitle
          icon="members"
          titleTop="Members"
          titleBottom="management"
        />
        <Heading text="Find member" />
      </PageContainer>
    </main>
  );
}
