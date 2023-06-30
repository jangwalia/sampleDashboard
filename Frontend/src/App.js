import React from "react";
import Home from "./components/Home";
import StudentList from "./components/student/StudentList";
import TeacherList from "./components/teacher/TeacherList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className=" w-3/4  ml-auto mt-12 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/teachers" element={<TeacherList />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
