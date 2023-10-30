import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Heading from "../../components/heading/heading.component";
import inputDate from "../../components/inputDate/inputDate.component";

export default function MemberNew() {
  return (
    <main>
      <PageContainer>
        <SectionTitle
          icon="members"
          titleTop="Members"
          titleBottom="management"
        />
        <Heading text="New member" />
        <inputDate />
      </PageContainer>
    </main>
  );
}
