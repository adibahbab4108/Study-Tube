import "../CSE/CSE.css";
const EEE = ({ department }) => {
  const { name, semesters } = department;
  return (
    <div>
      <h1>Department Of Electric and Electronic Engineering</h1>
      <div>
        {semesters.map((semester) => (
          <h3 key={semester.number}> Semester  {semester.number}</h3>
        ))}
      </div>
    </div>
  );
  
};

export default EEE;
