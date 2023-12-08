import "../CSE/CSE.css";
import { useState } from "react";
import "../Semester/Semester.css";
import Semester from "../Semester/Semester";
const EEE = ({ department }) => {
  const { name, semesters } = department;
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showMessage, setShowMessage] = useState(true);
  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
    setShowMessage(false);
  };
  return (
    <div>
      <h1 className="text-center">
        Department Of Electric and Electronic Engineering
      </h1>
      <div className="semester-parent">
        {semesters.map((semester) => (
          <div className="semester-child">
            <h5
              key={semester.number}
              className="semester-name"
              onClick={() => {
                handleSemesterClick(semester);
              }}
            >
              Semester {semester.number}
            </h5>
          </div>
        ))}
      </div>
      <div>{selectedSemester && <Semester semester={selectedSemester} />}</div>
      {showMessage && (
        <p className="user-alert-msg border shadow">Select your semester</p>
      )}
    </div>
  );
};
export default EEE;
