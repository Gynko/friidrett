import { useState, createContext } from "react";
import "./globalStyles/remedy.css";
import "./globalStyles/globalVariables.css";
import Routing from "./routing.component";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");
  const [visibleMenuMobile, setVisibleMenuMobile] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        visibleMenuMobile,
        setVisibleMenuMobile,
        visibleModal,
        setVisibleModal,
      }}
    >
      <Routing />
    </UserContext.Provider>
  );
}

export default App;
