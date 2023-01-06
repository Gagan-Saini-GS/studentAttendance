import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">Student Attendance</div>
      <div className="menu-bar">
        <ul className="menu-list">
          <li className="menu-list-item">Home</li>
          <li className="menu-list-item">About</li>
          <li className="menu-list-item">Contact</li>
        </ul>
      </div>
    </div>
  );
}
