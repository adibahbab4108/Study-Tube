import "../CSE/CSE.css";
const ETE = ({ department }) => {
  const { name, semesters } = department;
  return (
    <div>
      <h1>Department Of Electric and Telecommunication and Engineering</h1>
      <div>
        {semesters.map((semester) => (
          <h3 key={semester.number}> Semester  {semester.number}</h3>
        ))}
      </div>
    </div>
  );
  
};

export default ETE;
