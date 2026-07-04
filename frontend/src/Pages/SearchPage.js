import React, { useState, useEffect } from "react";
import PublicLayout from "../components/PublicLayout";
import { Link, useLocation } from "react-router-dom";
import "../Styles/home.css";

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get("q") || "";
  const [foods, setFoods] = useState([]);
  // useLocation().search -->?q=burger
  useEffect(() => {
    if (query) {
      fetch(`http://127.0.0.1:8000/api/food_search/?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
        });
    }
  }, [query]);
  return (
    <PublicLayout>
      <div className="container py-4 mb-5  ">
        <h3 className="text-primary text-center">Results For: "{query}"</h3>
        <div className="row mt-4">
          {foods.length === 0 ? (
            <p className="text-center">No food found</p>
          ) : (
            foods.map((food, index) => (
              <div className="col-md-4 mb-4">
                <div className="card hovereffect">
                  <img
                    src={`http://127.0.0.1:8000${food.image}`}
                    className="card-img-top imagehovereffect"
                    style={{ height: "180px" }}
                  />
                  <div className="card-body ">
                    <h5 className="card-title">
                      <Link to="#" className="">
                        {food.item_name}
                      </Link>
                    </h5>
                    <p className="card-text text-muted">
                      {food.item_description?.slice(0, 41)}.....
                    </p>
                    <div className="d-flex justify-content-between align-items-center btn-sm">
                      <span className="fw-bold">₹ {food.item_price}</span>
                      {food.is_available ? (
                        <Link to="#" className="btn btn-outline-primary ">
                          <i className="fas fa-shopping-basket me-1"></i> Order
                          Now
                        </Link>
                      ) : (
                        <div title="This food item in not available right now. Please try later.">
                          <button to="#" className="btn btn-outline-secondary ">
                            <i className="fas fa-times-circle me-1"></i>{" "}
                            Currently Unavlailable
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </PublicLayout>
  );
};

export default SearchPage;
