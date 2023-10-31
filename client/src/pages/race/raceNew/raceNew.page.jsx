import React, { useState } from "react";
/* import { Link } from "react-router-dom"; */
import Button from "../../../components/button/button.component";
import SectionTitle from "../../../components/sectionTitle/sectionTitle.component";
import PageContainer from "../../../components/pageContainer/pageContainer.component";
import InputText from "../../../components/inputText/inputText.component";
import Heading from "../../../components/heading/heading.component"


function NewRace() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <PageContainer>
            <SectionTitle icon="races" titleTop="Races" titleBottom="management" />

            <Heading text="New Race" />

            <InputText 
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                name="firstName"
            />

            <InputText 
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                name="lastName"
            />

            <InputText 
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
                type="email"
            />

<Button text="Edit member" color="yellow" width="button-large" />
  </PageContainer>
    );
}

export default NewRace;
