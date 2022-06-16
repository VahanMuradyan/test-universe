import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-content">
          <p>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/"
            >
              Items
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/description"
            >
              Description
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/activity"
            >
              Activity
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
