import React, { useState } from "react";
import {
  FaBars,
  FaBell,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminHeader = ({ toggleSidebar, sidebarOpen }) => {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/admin_login");
  };

  const handleBellHover = () => {
    let count = 0;

    const interval = setInterval(() => {
      setRotation((prev) => (prev === 15 ? -15 : 15));
      count++;

      if (count >= 6) {
        clearInterval(interval);
        setRotation(0);
      }
    }, 100);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3 shadow-sm">
      <button className="sidebar-toggle-btn me-3" onClick={toggleSidebar}>
        {sidebarOpen ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
      </button>

      <span className="navbar-brand fw-semibold">
        <i className="fas fa-utensils me-2"></i>Food Ordering System
      </span>

      <button className="navbar-toggler border-0 ms-auto">
        <FaBars />
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto align-items-center gap-3">
          <li className="nav-item">
            <button
              className="btn btn-outline-secondary"
              onMouseEnter={handleBellHover}
            >
              <FaBell
                style={{
                  display: "inline-block",
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.1s linear",
                }}
              />
            </button>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-outline-danger"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="me-1" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminHeader;