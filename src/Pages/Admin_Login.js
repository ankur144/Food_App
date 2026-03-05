import React from "react";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import '../Styles/admin.css'

const Admin_Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage:"url('/images/adminbg.jpg')",backgroundSize:'cover'}}>
      <div
        className="formpage card p-4 shadow-lg rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h4 className="text-center mb-4">
          <FaUser className=" me-2 " />
          Admin Login
        </h4>
        <form className=" g-5 bg">
          <div>
            <label className="form-label">
              {" "}
              <FaUser className="icon_fix me-1" />
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter admin username"
              required
            />
          </div>

          <div>
            <label className="form-label">
              {" "}
              <FaLock className="icon_fix me-1" />
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3"><FaSignInAlt className="icon_fix me-1"/>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Admin_Login;
