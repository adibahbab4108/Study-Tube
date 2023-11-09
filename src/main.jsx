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
import Home from "./Components/Home/Home.jsx";
import CSE from "./Components/CSE/CSE.jsx";
import EEE from "./Components/EEE/EEE.jsx";
import ETE from "./Components/ETE/ETE.jsx";
import ShowSemester from "./Components/ShowSemester/ShowSemester.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="cse">
        <Route index element={<CSE />} />
        <Route path="semester/:semesterId" element={<ShowSemester />} />
      </Route>
      <Route path="eee" element={<EEE />} />
      <Route path="ete" element={<ETE />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
