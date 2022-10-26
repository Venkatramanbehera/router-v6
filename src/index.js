import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-apps" element={<Navigate replace to={"/learn"} />} />
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":id" element={<CourseId />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

function Home() {
  return (
    <div>
      <h1>Home components</h1>
    </div>
  );
}

function Courses() {
  const courseList = ["Java", "React", "NodeJs", "Angular"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses components</h1>
      <p>More Tests</p>
      <NavLink to={`/${randomCourseName}`}>{randomCourseName}</NavLink>
      <Outlet />
    </div>
  );
}

function CourseId() {
  const { id } = useParams();
  return (
    <div>
      <h1>URL Params -- {id ? id : "NO ID"} </h1>
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles components</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn Components</h1>
      <p>All learning apps</p>
      <Link to={"/learn/courses"}>Courses</Link>
      <Link to={"/learn/bundles"}>Bundle</Link>
      <Outlet />
    </div>
  );
}

reportWebVitals();
