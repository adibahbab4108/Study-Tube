import "../CSE/CSE.css";
import "../Semester/Semester.css";
const EEE = ({ department }) => {
  const { name, semesters } = department;
  return (
    <div className="">
      <h1>Department Of Electric and Electronic Engineering</h1>
      <div className="semester-parent">
        {semesters.map((semester) => (
          <div className="semester-child">
            <h3 key={semester.number}> Semester {semester.number}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EEE;
