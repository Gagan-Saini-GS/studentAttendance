import "./App.css";
import Navbar from "../Navbar/Navbar";
import AddStudent from "../AddStudent/AddStudent";
import StudentCard from "../StudentCard/StudentCard";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  function showStudents(arr) {
    setStudents((prev) => {
      return [...prev, arr];
    });
  }

  return (
    <div className="app-container">
      <Navbar />
      <AddStudent showStudents={showStudents} />
      <div className="total-students-container">
        <div className="total-students">Total Students : {students.length}</div>
      </div>
      <div className="show-student-container">
        {students &&
          students.map((student, studentIndex) => {
            return <StudentCard key={studentIndex} student={student} />;
          })}
      </div>
    </div>
  );
}

export default App;
