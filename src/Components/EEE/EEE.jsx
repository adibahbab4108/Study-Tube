import React, { useState } from "react";
import Semester from "../Semester/Semester";
import EEE_Data from "../../assets/EEE/1st/Electrical Circuits I/EC_I";
const EEE = () => {
  const [data,setData]=useState(EEE_Data);

  const handleClick = (sems) => {
    console.log(sems.courses + " clicked");
  };
  console.log(data[0].title);//worikih
  return (
    <>
      <Semester
        key={EEE_Data.id}
        semester={EEE_Data}
        handleClick={handleClick}
      />
    </>
  );
};

export default EEE;
