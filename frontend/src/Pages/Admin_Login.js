import React,{useState} from "react";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import '../Styles/admin.css'
import {toast,ToastContainer}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import PublicLayout from "../components/PublicLayout";

const Admin_Login = () => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  
  const handleLogin =async(e)=>{
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/admin_login/',{
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({username,password})
    })
    const data =await response.json();

    if (response.status===200){
      toast.success(data.message);
      localStorage.setItem("adminUser",username);
        setTimeout(()=>{ 
          window.location.href='/admin_dashboard';
       },2000)
     }
     else{
      toast.error(data.message)
     }
  }
  return (
    <PublicLayout>
   
    <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundImage:"url('/images/adminbg.jpg')",backgroundSize:'cover'}}>
      <div
        className="formpage card p-4 shadow-lg rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h4 className="text-center mb-4">
          <FaUser className=" me-2 " />
          Admin Login
        </h4>
        
        <form className=" g-5 bg" onSubmit={handleLogin}>

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
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3"><FaSignInAlt className="icon_fix me-1"/>Login</button>
        </form>
      </div>
      <ToastContainer autoClose={2000} position="top-right"/> 
    </div>
    </PublicLayout>
  );
};

export default Admin_Login;
