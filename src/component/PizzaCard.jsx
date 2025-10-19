import { useNavigate } from "react-router-dom";
import "./Pizza.css";

function PizzaCard({ img, title, rating, price, id, detail, ingredients, prepTime, spiceLevel, calories, subcategory }) {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate(`/order/${id}`, {
      state: { img, title, rating, price, detail, ingredients, prepTime, spiceLevel, calories, subcategory }, 
    });
  };

  const getSpiceIcon = (level) => {
    switch(level) {
      case 'None': return '';
      case 'Mild': return '🌶️';
      case 'Medium': return '🌶️🌶️';
      case 'Hot': return '🌶️🌶️🌶️';
      case 'Medium-Hot': return '🌶️🌶️🌶️';
      default: return '';
    }
  };

  return (
    <div className="pizza-card">
      <img src={img} alt={title} />
      <div className="content">
        <div className="card-header">
          <h3>{title}</h3>
          {subcategory && <span className="subcategory">{subcategory}</span>}
        </div>
        
        <div className="rating-section">
          <div className="rating">⭐ {rating}</div>
          <div className="price">₹{price}</div>
        </div>

        <div className="product-info">
          <div className="info-item">
            <span className="info-label">Prep Time:</span>
            <span className="info-value">{prepTime}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Spice Level:</span>
            <span className="info-value">{getSpiceIcon(spiceLevel)} {spiceLevel}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Calories:</span>
            <span className="info-value">{calories}</span>
          </div>
        </div>

        {detail && (
          <div className="description">
            <p>{detail}</p>
          </div>
        )}

        {ingredients && ingredients.length > 0 && (
          <div className="ingredients">
            <h4>Key Ingredients:</h4>
            <div className="ingredients-list">
              {ingredients.slice(0, 3).map((ingredient, index) => (
                <span key={index} className="ingredient-tag">{ingredient}</span>
              ))}
              {ingredients.length > 3 && (
                <span className="ingredient-tag more">+{ingredients.length - 3} more</span>
              )}
            </div>
          </div>
        )}

        <button className="btn" onClick={handleOrderClick}>
          Order Now
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;
