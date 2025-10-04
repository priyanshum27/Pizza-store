import React, { useState } from 'react';
import Pizza from './Pizza.jsx';

export const App1 = () => {
  const pizzas = [
    {
      imageSrc: '/assets/pizza1.jpeg',
      title: 'Salami, Red Onion and Oregano Pizza',
      rating: 4.2,
      price: 410
    },
    {
      imageSrc: './assets/pizza2.jpeg',
      title: 'Margherita Pizza',
      rating: 4.8,
      price: 350
    },
  ];

  const [currentPizzaIndex, setCurrentPizzaIndex] = useState(0);

  const changePizza = () => {
    setCurrentPizzaIndex((prevIndex) => (prevIndex + 1) % pizzas.length);
  };

  const currentPizza = pizzas[currentPizzaIndex];

  console.log(currentPizza);

  return (
    <div>
      <Pizza
        imageSrc={currentPizza.imageSrc}
        title={currentPizza.title}
        rating={currentPizza.rating}
        price={currentPizza.price}
      />
      <button onClick={changePizza}>Change Pizza</button>
    </div>
  );
};

export default App1;
