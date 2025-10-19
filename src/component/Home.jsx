import React from 'react';
import ModernHero from './ModernHero.jsx';
import ModernProductCard from './ModernProductCard.jsx';
import './Home.css';
import './Store.css';

const Home = () => {
  return (
    <div className="home-page">
      <ModernHero />
      <Store1 />
    </div>
  );
};

export const Restorent=()=>{
  return (
    <>
      <div className='main-container'>
        <img src="/public/about.jpg" alt="tables" />
        <img src="/public/gallery-1.jpg" alt="customer" />
        <img src="/public/gallery-4.jpg" alt="business" />
      </div>
    </>
  );
}

const Store1 = () => {
  const pizzas1 = [
    {
      id: 1,
      image: "../../public/pizza1.jpeg",
      title: "Pepperoni Supreme",
      rating: 4.8,
      price: 450,
      category: "pizza",
      subcategory: "premium",
      detail: "Our signature Pepperoni Supreme features hand-tossed dough, San Marzano tomato sauce, premium mozzarella, and authentic Italian pepperoni.",
      ingredients: ["Hand-tossed dough", "San Marzano tomatoes", "Premium mozzarella", "Italian pepperoni"],
      prepTime: "15-20 minutes",
      spiceLevel: "Medium",
      calories: 320,
      popular: true,
      new: false
    },
    {
      id: 2,
      image: "../../public/drink-7.jpg",
      title: "Sparkling Lemonade",
      rating: 4.3,
      price: 140,
      category: "drink",
      subcategory: "soda",
      detail: "Refreshing sparkling lemonade made with fresh lemon juice, sparkling water, and natural sweetener.",
      ingredients: ["Fresh lemon juice", "Sparkling water", "Natural sweetener"],
      prepTime: "2-3 minutes",
      spiceLevel: "None",
      calories: 80,
      popular: false,
      new: true
    },
    {
      id: 3,
      image: "../../public/burger-1.jpg",
      title: "Classic Beef Deluxe",
      rating: 4.6,
      price: 320,
      category: "burger",
      subcategory: "beef",
      detail: "Premium Angus beef patty grilled to perfection, topped with aged cheddar, crispy bacon, and fresh vegetables.",
      ingredients: ["Angus beef patty", "Aged cheddar", "Crispy bacon", "Fresh vegetables"],
      prepTime: "12-15 minutes",
      spiceLevel: "Mild",
      calories: 680,
      popular: true,
      new: false
    },
    {
      id: 4,
      image: "../../public/pasta-1.jpg",
      title: "Spaghetti Carbonara",
      rating: 4.8,
      price: 420,
      category: "pasta",
      subcategory: "classic",
      detail: "Authentic Roman pasta with eggs, pancetta, aged pecorino cheese, and black pepper.",
      ingredients: ["Fresh spaghetti", "Eggs", "Pancetta", "Pecorino cheese"],
      prepTime: "12-15 minutes",
      spiceLevel: "Mild",
      calories: 580,
      popular: true,
      new: false
    },
    {
      id: 5,
      image: "../../public/pizza-2.jpg",
      title: "Margherita Classica",
      rating: 4.9,
      price: 380,
      category: "pizza",
      subcategory: "classic",
      detail: "The timeless Margherita celebrates simplicity with fresh San Marzano tomatoes and buffalo mozzarella.",
      ingredients: ["San Marzano tomatoes", "Buffalo mozzarella", "Fresh basil"],
      prepTime: "12-15 minutes",
      spiceLevel: "Mild",
      calories: 280,
      popular: true,
      new: false
    },
    {
      id: 6,
      image: "../../public/drink-2.jpg",
      title: "Tropical Mango Smoothie",
      rating: 4.6,
      price: 200,
      category: "drink",
      subcategory: "smoothie",
      detail: "Creamy mango smoothie blended with Greek yogurt, honey, and a hint of vanilla.",
      ingredients: ["Fresh mango", "Greek yogurt", "Honey", "Vanilla"],
      prepTime: "3-5 minutes",
      spiceLevel: "None",
      calories: 180,
      popular: false,
      new: true
    },
    {
      id: 7,
      image: "../../public/burger-2.jpg",
      title: "Chicken Deluxe Supreme",
      rating: 4.5,
      price: 360,
      category: "burger",
      subcategory: "chicken",
      detail: "Crispy chicken breast marinated in buttermilk, topped with Swiss cheese and avocado.",
      ingredients: ["Crispy chicken breast", "Swiss cheese", "Avocado", "Chipotle mayo"],
      prepTime: "15-18 minutes",
      spiceLevel: "Medium",
      calories: 720,
      popular: false,
      new: true
    },
    {
      id: 8,
      image: "../../public/pasta-2.jpg",
      title: "Penne Arrabbiata",
      rating: 4.6,
      price: 380,
      category: "pasta",
      subcategory: "spicy",
      detail: "Spicy penne pasta with garlic, red chili peppers, and San Marzano tomatoes.",
      ingredients: ["Penne pasta", "Garlic", "Red chili peppers", "San Marzano tomatoes"],
      prepTime: "10-12 minutes",
      spiceLevel: "Hot",
      calories: 450,
      popular: false,
      new: true
    }
  ];
  
  return (
    <div className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Featured Items</h2>
          <p>Discover our most popular dishes</p>
        </div>
        <div className="featured-grid">
          {pizzas1.map((pizzaItem,index)=>{
            return <ModernProductCard 
              key={pizzaItem.id} 
              id={pizzaItem.id} 
              img={pizzaItem.image} 
              title={pizzaItem.title} 
              rating={pizzaItem.rating} 
              price={pizzaItem.price}
              detail={pizzaItem.detail}
              ingredients={pizzaItem.ingredients}
              prepTime={pizzaItem.prepTime}
              spiceLevel={pizzaItem.spiceLevel}
              calories={pizzaItem.calories}
              subcategory={pizzaItem.subcategory}
              popular={pizzaItem.popular}
              new={pizzaItem.new}
            />
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
