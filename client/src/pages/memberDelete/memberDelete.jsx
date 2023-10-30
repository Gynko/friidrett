import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Heading from "../../components/heading/heading.component";

export default function MemberDelete() {
  return (
    <main>
      <PageContainer>
        <SectionTitle
          icon="members"
          titleTop="Members"
          titleBottom="management"
        />
        <Heading text="Delete member" />
      </PageContainer>
    </main>
  );
}
