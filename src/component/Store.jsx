import React from 'react';
import PizzaCard from './PizzaCard.jsx';
import './Store.css';
import OrderComponent from './Ordernow.jsx'; // Renamed the import to avoid conflict
import pizzas from './pizzas.js';

const Store = () => {
  return (
    <>
      <div className="grid-container">
        <div className="pizza">
        {pizzas.map((pizzaItem, index) => {
          return (
            <>
              <PizzaCard key={index} id={index} img={pizzaItem.image} title={pizzaItem.title} rating={pizzaItem.rating} price={pizzaItem.price} />;
            </>
          );
          })}
        </div>
      </div>
    </>
  );
};

export default Store;

