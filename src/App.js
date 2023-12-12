import React, { useState } from "react";
import { UserContext } from "./UseContext/UserContext";
import CardDesign from "./Components/shared/CardDesign";
import TopBar from "./Components/layout/TopBar";
import Footer from "./Components/layout/Footer";
import CardBodyData from "./Components/shared/DndDraggable/CardBodyData";
import NavBarData from "./Components/layout/NavBarData";
import ListButtonData from "./Components/shared/ListButton/ListButtonData";
import Test from "./Test";

function App() {
  const [cardFixed, setCardFixed] = useState(false);
  const [sortData, setSortData] = useState();
  const [confrimSort, setConfrimSort] = useState("demo");
  const [menuName, setMenuName] = useState("Home");
  const [navClick, setNavClick] = useState("");

  return (
    <UserContext.Provider
      value={{
        cardFixed,
        setCardFixed,
        sortData,
        setSortData,
        confrimSort,
        setConfrimSort,
        menuName,
        setMenuName,
        navClick,
        setNavClick,
      }}
    >
      <TopBar />
      <NavBarData />
      <ListButtonData />
      <CardBodyData />
      {/* <Test /> */}
    </UserContext.Provider>
  );
}

export default App;
