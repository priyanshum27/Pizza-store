import React from "react";
import { useNavigate } from "react-router-dom";
import pizzas from "./pizzas.js";
import "./ordernow.css";

const OrderComponent = () => {
    const navigate = useNavigate();

    const handleOrderClick = (id) => {
      navigate(`/order/${id}`);
    };

    return (
      <div className="grid-container">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.image} alt={pizza.title} />
            <h3>{pizza.title}</h3>
            <p>Rating: {pizza.rating}</p>
            <p>Price: ₹{pizza.price}</p>
            <button onClick={() => handleOrderClick(pizza.id)}>Order Now</button>
          </div>
        ))}
      </div>
    );
};

export default OrderComponent;
