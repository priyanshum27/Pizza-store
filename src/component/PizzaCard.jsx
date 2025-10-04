import { useNavigate } from "react-router-dom";
import "./Pizza.css";

function PizzaCard({ img, title, rating, price, id }) {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate(`/order/${id}`, {
      state: { img, title, rating, price }, 
    });
  };

  return (
    <div className="pizza-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
      <p>Price: ₹{price}</p>
      <button className="btn" onClick={handleOrderClick}>
        Order Now
      </button>
    </div>
  );
}

export default PizzaCard;
