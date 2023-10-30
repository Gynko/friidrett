import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Heading from "../../components/heading/heading.component";

export default function MemberFullList() {
  return (
    <main>
      <PageContainer>
        <SectionTitle
          icon="members"
          titleTop="Members"
          titleBottom="management"
        />
        <Heading text="Full member list" />
      </PageContainer>
    </main>
  );
}
