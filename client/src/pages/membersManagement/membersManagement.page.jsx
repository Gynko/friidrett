import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Button from "../../components/button/button.component";

export default function MembersManagement() {
  return (
    <main>
      <PageContainer>
        <SectionTitle
          icon="members"
          titleTop="Members"
          titleBottom="management"
        />
        <div className="page-container">
          <Button text="New member" color="black" width="button-small" />

          <Button text="Edit member" color="black" width="button-small" />

          <Button text="Delete member" color="black" width="button-small" />
          <Button text="Find race" color="black" width="button-large" />

          <Button text="Full race list" color="black" width="button-large" />
        </div>
      </PageContainer>
    </main>
  );
}
