import React from "react";
import "./Semester.css";
import { Link } from "react-router-dom";

const Semester = ({ semester }) => {
  return (
    <div className="semester-container col">
      <Link to={`/cse/semester/${semester.id}`}>
        <h3>{semester.name}</h3>
      </Link>
    </div>
  );
};

export default Semester;

