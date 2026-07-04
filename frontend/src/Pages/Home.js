import React, { useState, useEffect } from "react";
import PublicLayout from "../components/PublicLayout";
import "../Styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/random_foods`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  return (
    <PublicLayout>
      <section
        className=" hero py-5 text-center"
        style={{ backgroundImage: "url('images/adminbg.jpg')" }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "40px 20px",
            borderRadius: "10px",
          }}
        >
          <h1 className="display-4">Quick & Hot Food, Delivered to You</h1>
          <p className="lead">
            Craving something tasty? Let's get it to your door!
          </p>
          <form
            method="GET"
            action="/search"
            className="d-flex"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <input
              type="text"
              name="q"
              placeholder="I would like to eat . . . "
              className="form-control"
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            ></input>
            <button
              className="btn btn-warning px-4"
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="py-5">
        <div className="container ">
          <h1 className="text-center mb-4">
            Most Loved Dishes This Month
            <span className="badge bg-danger ms-2">Top Picks</span>
          </h1>

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
                          <Link to={`/food/${food.id}`} className="btn btn-outline-primary ">
                            <i className="fas fa-shopping-basket me-1"></i>{" "}
                            Order Now
                          </Link>
                        ) : (
                          <div title="This food item in not available right now. Please try later.">
                            <button
                              to="#"
                              className="btn btn-outline-secondary "
                            >
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
      </section>

      <section className="py-5 text-white bg-dark">
        <div className="container text-center">
          <h2>Ordering in 3 Simple Steps</h2>

          <div className="row mt-4 g-4">
            <div className="col-md-4">
              <h4>1. Pick a dish you love</h4>
              <p>
                Explore hundreds of mouth-watering options and choose what you
                crave!
              </p>
            </div>

            <div className="col-md-4 border-start border-end border-3 border-warning px-4">
              <h4>2. Enjoy doorstep delivery</h4>
              <p>
                Relax while your meal arrives fast and fresh -- pay when it's
                delivered!
              </p>
            </div>

            <div className="col-md-4">
              <h4>3. Share your location</h4>
              <p>Tell us where you are, and we'll handle the rest.</p>
            </div>
          </div>

          <p className="mt-4">
            Pay easily with Cash on Delivery -- hassle-free!
          </p>
        </div>
      </section>

      <section className="py-5 bg-warning text-dark text-center">
        <h4>Ready to Satisfy Your Hunger?</h4>
        <Link to={""} className="btn btn-dark btn-lg"></Link>
      </section>
    </PublicLayout>
  );
};

export default Home;
