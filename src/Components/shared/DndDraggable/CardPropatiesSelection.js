import React, { useState, useEffect, useContext } from "react";

import { UserContext } from "../../../UseContext/UserContext";

import Dnddraggable from "./Dnddraggable";
import FixedCardItem from "./FixedCardItem";

const CardPropatiesSelection = ({ allCardData }) => {
  const { cardFixed, setCardFixed } = useContext(UserContext);
  const [sortData1, setSortData1] = useState("");

  const mySortData = (value) => {
    setSortData1(value);
  };

  return (
    <div
      id="cardbody"
      style={{
        marginTop: 0,
        marginBottom: 20,
        minHeight: 300,
        maxHeight: "100%",
      }}
    >
      {cardFixed === false ? (
        <Dnddraggable checkDatadItem={allCardData} mySortData={mySortData} />
      ) : (
        <FixedCardItem checkDatadItem={sortData1} />
      )}
    </div>
  );
};

export default CardPropatiesSelection;
