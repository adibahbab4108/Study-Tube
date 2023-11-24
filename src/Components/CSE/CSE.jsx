import { useState } from "react";
import Semester from "../Semester/Semester";
import "../CSE/CSE.css";
const CSE = ({ department }) => {
  const { name, semesters } = department;
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
  };
  return (
    <div>
      <h1>Department Of Computer Science and Engineering</h1>
      <div className="semester-parent">
        {semesters.map((semester) => (
          <h3
            key={semester.number}
            className="semester-name"
            onClick={() => {
              handleSemesterClick(semester);
            }}
          >
            Semester {semester.number}
          </h3>
        ))}
      </div>
      <div>{selectedSemester && <Semester semester={selectedSemester} />}</div>
    </div>
  );
};

export default CSE;
