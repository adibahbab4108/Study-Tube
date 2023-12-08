import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Department from "./Components/Department/Department.jsx";
import departments from "./assets/departments.js";
import Home from "./Components/Home/Home.jsx";
import CSE from "./Components/CSE/CSE.jsx";
import EEE from "./Components/EEE/EEE.jsx";
import ETE from "./Components/ETE/ETE.jsx";
import CCE from "./Components/CCE/CCE.jsx"
import Semester from "./Components/Semester/Semester.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="" element={<Home />} />
      <Route path="department" element={<Department departments={departments} />}/>
      <Route path="/department/cse" element={<CSE department={departments[0]} />} />
      <Route path="/department/eee" element={<EEE department={departments[1]} />} />
      <Route path="/department/ete" element={<ETE department={departments[2]} />} />
      <Route path="/department/cce" element={<CCE department={departments[3]} />} />
      {/* <Route path="/semester/:semesterNumber"  /> */}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
