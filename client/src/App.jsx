import { useState, createContext } from "react";
import "./globalStyles/remedy.css";
import "./globalStyles/globalVariables.css";
import Routing from "./routing.component";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("admin");
  const [visibleMenuMobile, setVisibleMenuMobile] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, visibleMenuMobile, setVisibleMenuMobile }}
    >
      <Routing />
    </UserContext.Provider>
  );
}

export default App;
