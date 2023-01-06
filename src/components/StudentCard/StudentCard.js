import React from "react";
import "./StudentCard.css";

export default function StudentCard(props) {
  return (
    <div className="student-card">
      <p>{props.student.name}</p>
      <p>{props.student.rollno}</p>
      <p>{props.student.checkinTime}</p>
      <p>{props.student.date}</p>
    </div>
  );
}
