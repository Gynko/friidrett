import React from "react";
import Button from "../../../components/button/button.component"
import "./raceNew.styles.css"
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";


function raceNew() {
    const buttonProps = {
        text: "Add members",
        width: "button-small",
        path: "/new-race" 
    }

return(
    <PageContainer>
    <SectionTitle icon="races" titleTop="Races" titleBottom="management" />

      <Link key={index} to={button.path}>
        <Button text={button.text} color="red" width={button.width} />
      </Link>

      <Link key={index} to={button.path}>
        <Button text={button.text} color="yellow" width={button.width} />
      </Link>
    
  </PageContainer>
)


}

