import React, { useEffect, useState } from "react";
import {
  FaCogs,
  FaFirstAid,
  FaHardHat,
  FaHeart,
  FaHome,
  FaRegHeart,
  FaShoppingCart,
  FaSignInAlt,
  FaSignOutAlt,
  FaTruck,
  FaUser,
  FaUserCircle,
  FaUserPlus,
  FaUserShield,
  FaUtensils,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/layout.css";

const PublicLayout = ({ children }) => {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [userName, setUserNsme] = useState("");

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const name = localStorage.getItem("userName");

  useEffect(() => {
    if (userId) {
      setIsloggedIn(true);
      setUserNsme(name);
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setIsloggedIn(false);
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="#">
            <FaUtensils className="me-2" />
            Food Ordering System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item mx-1">
                <Link className="nav-link active" to="/">
                  <FaHome className="me-1" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <FaUtensils className="me-2" />
                  Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <FaTruck className="me-2" />
                  Track
                </Link>
              </li>

              {!isloggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      <FaUserPlus className="me-2" />
                      Register
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      <FaSignInAlt className="me-2" />
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      <FaUserShield className="me-2" />
                      Admin
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" ><FaUser className="me-1"/>My Orders</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                    <FaShoppingCart className="me-1"/>
                      Cart
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                    <FaHeart className="me-1"/>
                      Wishlist
                    </Link>
                  </li>

                  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-capitalize" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
            <FaUserCircle className="me-1"/>
            {userName}
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="#"><FaUser className="me-1"/>Profile</Link></li>
            <li><Link class="dropdown-item" to="#"><FaCogs className="me-1"/>Settings</Link></li>
            <li><hr class="dropdown-divider" to="#"/></li>
            <li><button class="dropdown-item" to="#" onClick={handleLogout}><FaSignOutAlt className="me-1"/>Logout</button></li>
          </ul>
        </li>

                  <li className="nav-item">
  <Link
    className="nav-link d-flex align-items-center gap-2"
    to="#"
  >
    {/* User Initial Circle */}
    <div
      className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
      style={{
        width: "35px",
        height: "35px",
        fontWeight: "bold",
        fontSize: "14px",
        textTransform: "uppercase",
      }}
    >
      {userName?.charAt(0)}
    </div>

    {/* Full User Name */}
    {/* <span>{userName}</span> */}
  </Link>
</li>
                </>
              )}

              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="text-primary">{children}</div>

      <footer className="text-center py-3 mt-5">
        <div className="container">
          <p className="">
            &copy; 2025 Food Ordering System. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
