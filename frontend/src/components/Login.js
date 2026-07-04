import React, { useState } from "react";
import PublicLayout from "./PublicLayout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    emailcont: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailcont, password } = formData;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailcont, password }),
      });

      const result = await response.json();

      if (response.status === 200) {
        toast.success(result.message || "Login Successful");

        localStorage.setItem("userId", result.userId);
        localStorage.setItem("userName", result.userName);

        setFormData({
          emailcont: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(result.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error connecting to server");
    }
  };

  return (
    <PublicLayout>
      <ToastContainer autoClose={2000} position="top-right" />

      <div className="container py-4">
        <div className="row align-items-center ">
          <div className="col-md-6 p-4">
            <h3 className="text-center mb-4">
              <FaSignInAlt className="me-2" />
              User Login
            </h3>

            <form className="card p-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  name="emailcont"
                  type="text"
                  className="form-control"
                  placeholder="Email or Mobile Number"
                  value={formData.emailcont}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex justify-content-between">
                <button className="btn btn-primary  ">
                  <FaSignInAlt className="me-2" />
                  Login
                </button>

                <button
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/register")}
                >
                  <FaUserPlus className="me-2" />
                  Register
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-center ">
              <img
                src="/images/Login3.png"
                className="img-fluid rounded-3 "
                style={{ maxHeight: "400px" }}
                alt="registration"
              />
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Login;
