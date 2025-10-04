import React from "react";
import { useParams } from "react-router-dom";
import pizzas from "./pizzas.js";
import "./Order.css"; // Import the external CSS

const Order = () => {
  const { id } = useParams();
  const pizza = pizzas.find((p) => p.id === parseInt(id));

  if (!pizza) {
    return <h2>Pizza not found! Please go back and select a pizza.</h2>;
  }

  const { image, title, rating, price, detail } = pizza;


  return (
    <div className="order-container">
      <div className="order-image">
        <img src={image} alt={title} />
      </div>

      <div className="order-details">
        <h2>{title}</h2>
        <h5>{detail}</h5>
        <p>
          <strong>Rating:</strong> <span className={rating > 3.0 ? "rating1" : "rating2"}>{rating}</span>
        </p>
        <p>
          <strong>Price:</strong> ₹{price}
        </p>
        <button onClick={ConfirmOrder}>Confirm Order</button>
      </div>
    </div>
  );
};

export default Order;
function ConfirmOrder() {
  console.log(alert("Your Order has been placed...."));
}