import React, { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";
import { data, Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const ManageFood = () => {
  const [foods, setFoods] = useState([]);
  const [allfoods, setAllFoods] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/foods/")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setAllFoods(data);
      });
  }, []);

  const handleSearch = (s) => {
    const keyword = s.toLowerCase();
    if (!keyword) {
      setFoods(allfoods);
    } else {
      const filtered = allfoods.filter((c) =>
        c.item_name.toLowerCase().includes(keyword),
      );

      setFoods(filtered);
    }
  };
  return (
    <AdminLayout>
      <div>
        <h3 className="mb-4 text-center text-primary">
          <i className="fas fa-list-alt me-1"></i>Manage Food Item
        </h3>

        <h5 className="text-end text-muted">
          <i className="fas fa-database me-1"></i>Total Food Item{" "}
          <span className="ms-2 badge bg-success">{foods.length}</span>
        </h5>

        <div className="mb-3 d-flex justify-content-between">
          
          {/* input Box */}
          <div className="position-relative w-50">
            {/* Search Icon */}
            <i
              className="fas fa-search position-absolute"
              style={{
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6c757d",
              }}
            ></i>

            <input
              type="text"
              className="form-control"
              placeholder="Search by food item name..."
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            />

            {/* Filter Icon */}
            <i
              className="fas fa-filter position-absolute"
              style={{
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6c757d",
                cursor: "pointer",
              }}
            ></i>
          </div>

          <CSVLink
            data={foods}
            className="btn btn-success "
            filename="foods_list.csv"
          >
            <i className="fas fa-file-csv me-2"></i>Export to CSV
          </CSVLink>
        </div>

        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Category Name</th>
              <th> Food Item mane</th>
              <th> Price / Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {foods.map((food, index) => (
              <tr key={food.id}>
                <td>{index + 1}</td>
                <td>{food.category_name}</td>
                <td>{food.item_name}</td>
                <td>
                  {food.item_price} / {food.item_quantity}
                </td>

                <td className="gap-m-5">
                  <Link className="btn btn-sm btn-primary me-2">
                    <i className="fas fa-edit me-1"></i>Edit
                  </Link>
                  <button className="btn btn-sm btn-danger">
                    <i className="fas fa-trash-alt me-1"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ManageFood;
