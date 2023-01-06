import React from "react";
import "./AddStudent.css";

export default function AddStudent(props) {
  function addStduent(e) {
    e.preventDefault();
    const today = new Date();
    const currStudent = {
      name: document.querySelector(".student-name").value,
      rollno: document.querySelector(".student-rollno").value,
      checkinTime: today.toLocaleTimeString(),
      date: today.toLocaleDateString(),
      // checkinTime: document.querySelector(".checkin-time").value,
      // checkoutTime: document.querySelector(".checkout-time").value,
    };

    props.showStudents(currStudent);
  }
  return (
    <div className="add-student-container">
      <form className="add-student-form">
        <div className="form-item">
          <p>Name</p>
          <input type="text" className="student-name" placeholder="Name" />
        </div>
        <div className="form-item">
          <p>Roll no</p>
          <input type="text" className="student-rollno" placeholder="Roll no" />
        </div>
        {/* <div className="form-item">
          <p>Checkin time</p>
          <input type="time" className="checkin-time" />
        </div>
        <div className="form-item">
          <p>Checkout time</p>
          <input type="time" className="checkout-time" />
        </div> */}
        <div className="form-item">
          <button type="submit" onClick={addStduent}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
