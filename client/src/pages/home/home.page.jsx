import { useContext, useState } from "react";
import { UserContext } from "../../App";
import "./home.styles.css";
import BigLogo from "../../components/bigLogo/bigLogo.component";
import IconLink from "../../components/iconLink/iconLink.component";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  function onChangeInputs(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function onSubmitForm(event) {
    event.preventDefault();
    if (formData.username === "admin" && formData.password === "admin") {
      setUser("admin");
    } else alert("Wrong admin credentials");
  }
  return user !== "admin" ? (
    <main className="page__main">
      <BigLogo />
      <h1 className="page__title">The app to organise competitions</h1>
      <div className="page__separator"></div>
      <h2 className="page__title">Please login</h2>
      <form className="page__form" onSubmit={onSubmitForm}>
        <input
          className="page__form-input-text"
          type="text"
          name="username"
          onChange={onChangeInputs}
          placeholder="Username"
        />
        <input
          className="page__form-input-text"
          type="password"
          name="password"
          onChange={onChangeInputs}
          placeholder="Password"
        />
        <input
          className="page__form-input-submit"
          type="submit"
          value="Submit"
        />
      </form>
    </main>
  ) : (
    <main className="page__main">
      <BigLogo />
      <h1 className="page__title">The app to organise competitions</h1>
      <div className="page__separator"></div>
      <div className="page__icon-links-container">
        <IconLink icon="members" text="Members" />
        <IconLink icon="races" text="Races" />
        <IconLink icon="results" text="Results" />
      </div>
    </main>
  );
}
