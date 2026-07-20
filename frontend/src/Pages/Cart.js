import React, { useState, useEffect } from "react";
import PublicLayout from "../components/PublicLayout";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaMinus, FaPlus, FaShoppingBag, FaShoppingCart, FaTrash } from "react-icons/fa";
// import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const userId = localStorage.getItem("userId");
  const [cartItems, setCartItems] = useState([]);
  const [grandtotal, setGrandtotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    fetch(`http://127.0.0.1:8000/api/cart/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        const total = data.reduce(
          (sum, item) => sum + item.food.item_price * item.quantity,
          0,
        );
        setGrandtotal(total);
      });
  }, [userId]);
  return (
    <PublicLayout>
      <ToastContainer autoClose={2000} position="top-right" />
      <div className="py-5 container">
        <h2 className="mb-4 text-center">
          <FaShoppingCart className="me-2" />
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-muted">Your cart is empty</p>
        ) : (
        //   <>
        //     <div className="row">
        //       <div className="col-lg-8">
        //         {cartItems.map((item) => (
        //           <div
        //             key={item.id}
        //             className="card shadow-lg border-0 rounded-4 mb-4 overflow-hidden"
        //             style={{
        //               transition: "0.4s",
        //               cursor: "pointer",
        //             }}
        //             onMouseEnter={(e) => {
        //               e.currentTarget.style.transform = "translateY(-6px)";
        //               e.currentTarget.style.boxShadow =
        //                 "0 15px 35px rgba(0,0,0,0.2)";
        //             }}
        //             onMouseLeave={(e) => {
        //               e.currentTarget.style.transform = "translateY(0)";
        //               e.currentTarget.style.boxShadow =
        //                 "0 8px 18px rgba(0,0,0,0.1)";
        //             }}
        //           >
        //             <div className="row g-0 align-items-center p-3">
        //               {/* Image */}
        //               <div className="col-md-3 text-center">
        //                 <img
        //                   src={`http://127.0.0.1:8000${item.food.image}`}
        //                   alt={item.food.item_name}
        //                   className="img-fluid rounded-3"
        //                   style={{
        //                     height: "140px",
        //                     width: "140px",
        //                     objectFit: "cover",
        //                   }}
        //                 />
        //               </div>

        //               {/* Food Details */}
        //               <div className="col-md-6 mt-3 mt-md-0">
        //                 <h4 className="fw-bold">{item.food.item_name}</h4>

        //                 <p className="text-muted mb-2">
        //                   {item.food.description}
        //                 </p>

        //                 <h5 className="text-success">
        //                   ₹{item.food.item_price}
        //                 </h5>

        //                 <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
        //                   Qty : {item.quantity}
        //                 </span>
        //               </div>

        //               {/* Right Side */}
        //               <div className="col-md-3 text-center mt-4 mt-md-0">
        //                 <h5 className="fw-bold text-primary">
        //                   ₹{item.food.item_price * item.quantity}
        //                 </h5>

        //                 <button className="btn btn-danger rounded-pill px-4 mt-3">
        //                   <FaTrash className="me-2" />
        //                   Remove
        //                 </button>
        //               </div>
        //             </div>
        //           </div>
        //         ))}
        //       </div>

        //       {/* Grand Total */}
        //       <div className="col-lg-4">
        //         <div
        //           className="card border-0 shadow-lg rounded-4 p-4"
        //           style={{
        //             position: "sticky",
        //             top: "90px",
        //           }}
        //         >
        //           <h3 className="fw-bold text-center mb-4">Order Summary</h3>

        //           <div className="d-flex justify-content-between mb-3">
        //             <span>Items</span>
        //             <span>{cartItems.length}</span>
        //           </div>

        //           <div className="d-flex justify-content-between mb-3">
        //             <span>Total</span>
        //             <span className="fw-bold">₹{grandtotal}</span>
        //           </div>

        //           <hr />

        //           <button className="btn btn-success btn-lg rounded-pill w-100">
        //             <FaShoppingBag className="me-2" />
        //             Checkout
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </>
            <>
              <div className="row">
                {cartItems.map((item) => (
                  <div className="col-md-6 md-4 ">
                    <div className="cart shadow-sm">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                          src={`http://127.0.0.1:8000${item.food.image}`}
                          alt={item.food.item_name}
                          className="img-fluid rounded-start"
                          style={{minHeight:'200px'}}
                        />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body mb-2">
                            <h5 className="card-title">{item.food.item_name}</h5>
                            <p className="card-text text-muted small ">{item.food.item_description}</p>
                            <p className="fw-bold text-success small ">₹ {item.food.item_price}</p>
                            

                                <div className="d-flex align-items-center mb-2">
                                    <button className="btn btn-sm btn-outline-secondary me-2" disabled={item.quantity<=1}><FaMinus/></button>
                                    <span className="fw-bold px-2 mb-2">{item.food.item_quantity}</span>
                                    <button className="btn btn-sm btn-outline-secondary ms-2" ><FaPlus/></button>
                                </div>
                                <button className="btn btn-sm btn-outline-danger px-2 ">
                                  <FaTrash className="me-2"/>Remove
                                </button>

                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
        )}
      </div>
    </PublicLayout>
  );
};

export default Cart;
