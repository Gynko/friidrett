import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../components/pageContainer/pageContainer.component";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";

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
          <Link to="/members/new">
            <Button text="New member" color="black" width="button-small" />
          </Link>
          <Link to="/members/edit">
            <Button text="Edit member" color="black" width="button-small" />
          </Link>
          <Link to="/members/delete">
            <Button text="Delete member" color="black" width="button-small" />
          </Link>
          <Link to="/members/find">
            <Button text="Find race" color="black" width="button-large" />
          </Link>
          <Link to="/members/fulllist">
            <Button text="Full race list" color="black" width="button-large" />
          </Link>
        </div>
      </PageContainer>
    </main>
  );
}
