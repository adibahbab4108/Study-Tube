import { useState } from "react";
import "../CSE/CSE.css";
import coverImg from "../../assets/CSE/CSE.jpeg";
import semesters from "../../assets/semester";
import Semester from "../Semester/Semester";
const CSE = () => {
  const [data, setData] = useState(semesters);

  const handleClick = (sems) => {
    console.log(sems.courses + " clicked");
  };

  return (
    <>
      <div className="container">
        <div className="cse-cover">
          <img src={coverImg} alt="cover" />
        </div>
        <div className="my-3 text-center row">
          {data.map((semester) => (
            <Semester
              key={semester.id}
              semester={semester}
              handleClick={handleClick}
            ></Semester>
          ))}
        </div>
      </div>
    </>
  );
};

export default CSE;
