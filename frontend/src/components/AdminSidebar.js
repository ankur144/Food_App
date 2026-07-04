import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaEdit, FaFile, FaSearch, FaStar, FaThLarge, FaUsers } from "react-icons/fa";
import { useState } from "react";

const AdminSidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    category: false,
    food: false,
    orders: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  return (
    <div className="sidebar bg-dark text-white">
      <div className="text-center p-3 border-bottom">
        <img
          src="/images/Admin_image.webp"
          alt="Admin image"
          width="70"
          className="img-fluid rounded-circle mb-2"
        ></img>
        <h6 className="mb-0">Admin </h6>
      </div>

      <div className=" list-group list-group-flush ">
        <Link className="list-group-item list-group-item-action bg-dark text-white ">
          <FaThLarge className="m-2 icon_fix" />
          Dashboard
        </Link>
        <div className=" list-group list-group-flush ">
          <Link className="list-group-item list-group-item-action bg-dark text-white ">
            <FaUsers className="m-2 icon_fix" />
            Reg Users
          </Link>
        </div>

        <button
          onClick={() => toggleMenu("category")}
          className="list-group-item list-group-item-action bg-dark text-white ps-4"
        >
          <FaEdit /> Food Category {openMenus.category ? <FaChevronUp/> : <FaChevronDown/>}
        </button>
        {openMenus.category && (
          <div className="ps-4">
            <Link to='/add_category' className="list-group-item list-group-item-action bg-dark text-white ">
              Add Category
            </Link>
            <Link to='/manage-category' className="list-group-item list-group-item-action bg-dark text-white ">
              Manage Category
            </Link>
          </div>
        )}

        <button
          onClick={() => toggleMenu("food")}
          className="list-group-item list-group-item-action bg-dark text-white ps-4"
        >
          <FaEdit /> Food Item {openMenus.food ? <FaChevronUp/> : <FaChevronDown/>}
        </button>
        {openMenus.food && (
          <div className="ps-4">
            <Link to ='/add-food' className="list-group-item list-group-item-action bg-dark text-white ">
              Add Food Item
            </Link>
            <Link to='/manage-food' className="list-group-item list-group-item-action bg-dark text-white ">
              Manage Food Item
            </Link>
          </div>
        )}


        <button
          onClick={() => toggleMenu("orders")}
          className="list-group-item list-group-item-action bg-dark text-white ps-4"
        >
          <FaEdit/> Orders {openMenus.orders ? <FaChevronUp/> : <FaChevronDown/>}
        </button>

        {openMenus.orders && (
          <div className="ps-4">
            <Link className="list-group-item list-group-item-action bg-dark text-white">
              All Orders
            </Link>

            <Link className="list-group-item list-group-item-action bg-dark text-white">
              Confirmed
            </Link>

            <Link className="list-group-item list-group-item-action bg-dark text-white">
              Not Confirmed
            </Link>

            <Link className="list-group-item list-group-item-action bg-dark text-white">
              Being Prepared
            </Link>

            <Link className="list-group-item list-group-item-action bg-dark text-white">
              Food Pickup
            </Link>

            <Link className="list-group-item list-group-item-action bg-dark text-white">
              Delivered Orders
            </Link>

            <Link className="list-group-item list-group-item-action bg-dark text-white">
              Cancelled Orders
            </Link>
          </div>
        )}
        <div className=" list-group list-group-flush ">
          <Link className="list-group-item list-group-item-action bg-dark text-white ">
            <FaFile className="m-2 icon_fix" />
            B/W Dates Report
          </Link>
        </div>

        <div className=" list-group list-group-flush ">
          <Link className="list-group-item list-group-item-action bg-dark text-white ">
            <FaSearch className="m-2 icon_fix" />
            Search
          </Link>
        </div>

        

        <div className=" list-group list-group-flush ">
          <Link className="list-group-item list-group-item-action bg-dark text-white ">
            <FaStar className="m-2 icon_fix" />
            Manage Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
