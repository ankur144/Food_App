import React, { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";
import { data, Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const ManageCategory = () => {
  const [categories, setcategories] = useState([]);
  const [allcategories, setAllcategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/")
      .then((res) => res.json())
      .then((data) => {
        setcategories(data);
        setAllcategories(data);
      });
  }, []);

  const handleSearch = (s) => {
    const keyword = s.toLowerCase();
    if (!keyword) {
      setcategories(allcategories);
    } else {
      const filtered = allcategories.filter((c) =>
        c.category_name.toLowerCase().includes(keyword),
      );

      setcategories(filtered);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h3 className="mb-4 text-center text-primary">
          <i className="fas fa-list-alt me-1"></i>Manage Food Category
        </h3>

        <h5 className="text-end text-muted">
          <i className="fas fa-database me-1"></i>Total Category{" "}
          <span className="ms-2 badge bg-success">{categories.length}</span>
        </h5>

        <div className="mb-3 d-flex justify-content-between">
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
              placeholder="Search by category name..."
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
            data={categories}
            className="btn btn-success "
            filename="categories_list.csv"
          >
            <i className="fas fa-file-csv me-2"></i>Export to CSV
          </CSVLink>
        </div>

        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Category Name</th>
              <th>Creation Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>{cat.category_name}</td>
                <td>{new Date(cat.creation_date).toLocaleDateString()}</td>

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

export default ManageCategory;
