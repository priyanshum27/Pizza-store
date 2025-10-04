import React from 'react';
import './Home.css';
import PizzaCard from './PizzaCard.jsx';
import './Store.css'; 
const Home = () => {
  return (
    <>
      <div className='Home-page'>
        <div className="backimage">
          
            <Store1 />
        </div> 
        <div>
          <Restorent />
        </div>
        
      </div>
    </>
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
      title: "Pepperoni Pizza",
      rating: 4.5,
      price: 399
    },
    {
      id: 2,
      image: "../../public/drink-7.jpg",
      title: "Lemon Soda Juice",
      rating: 4.8,
      price: 200
    },
    {
      id: 3,
      image: "../../public/burger-1.jpg",
      title: "Vegetarian Burger",
      rating: 5.2,
      price: 250
    },
    {
      id: 4,
      image: "../../public/pasta-1.jpg",
      title: "Pasta",
      rating: 3.8,
      price: 420
    },
    
  ];
  return (
    <>
      <div className="grid-container">
        <div className="pizza">
          {pizzas1.map((pizzaItem,index)=>{
            return <PizzaCard id ={pizzaItem.id} img={pizzaItem.image} title={pizzaItem.title} rating={pizzaItem.rating} price={pizzaItem.price}/>
          })}
        </div>

      </div>
    </>
  );
};
export default Home;
