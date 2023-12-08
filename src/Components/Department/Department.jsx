import { Link } from "react-router-dom";
import "./Department.css";
const Department = ({ departments }) => {
  return (
    <div className="container-xl department my-5 rounded shadow">
      <h1 className=" text-center">Departments</h1>
      <div className="dept-container row">
        {departments.map((department, index) => (
          <Link
            to={`/department/${department.name.toLowerCase()}`}
            className="text-decoration-none"
          >
            <div className="col-12 dept-list ">
              <div className={`card ${"card"+'-'+index}`}>
                <div className="card-body text-center">
                  <h5 className="card-title">{department.name}</h5>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;
