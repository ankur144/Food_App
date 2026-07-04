import React, { useState, useEffect } from "react";
import PublicLayout from "../components/PublicLayout";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom"
import 'react-medium-image-zoom/dist/styles.css';

const FoodDetail = () => {
  const userId = localStorage.getItem("userId");

  const [food, setFood] = useState([null]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/foods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, []);
  if (!food) return <div>Loading...</div>;
  return (
    <PublicLayout>
      <div className="py-5 container">
        <div className="row">
          <div className="col md-5 text-center">

            <Zoom>
                <img
              src={`http://127.0.0.1:8000${food.image}`}
              style={{ width: "100%", mxheight: "300px" }}
            />
            </Zoom>
          </div>

          <div className="col md-7 ">
            <h2>{food.item_name}</h2>
            <p className="text-muted">{food.item_description}</p>
            <p>
              <strong>Category : </strong>
              {food.category_name}
            </p>
            <h4>₹{food.item_price}</h4>
            <p className="mt-3">
              Shipping : <strong>Free</strong>
            </p>

            {food.is_available ? (
              <button
                
                className="btn btn-warning btn-lg mt-3 px-4"
              >
                <i className="fas fa-cart-plus  me-1"></i> Add to Cart
              </button>
            ) : (
              <div title="This food item in not available right now. Please try later.">
                <button to="#" className="btn btn-outline-secondary ">
                  <i className="fas fa-times-circle me-1"></i> Currently
                  Unavlailable
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default FoodDetail;
