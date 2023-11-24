import { Link } from "react-router-dom";
import "./Department.css";
const Department = ({ departments }) => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Departments</h1>
      <ul className="list-group">
        {departments.map((department, index) => (
          <li key={index} className="list-group-item">
            <Link
              to={`/department/${department.name.toLowerCase()}`}
              className="text-decoration-none"
            >
              {department.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Department;
