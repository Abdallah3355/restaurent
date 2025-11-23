import React from 'react';
import burgerImg from '../assets/burger.jpg';
import pizzaImg from '../assets/pizza.jpg';
import saladImg from '../assets/salad.jpg';
import friesImg from '../assets/fries.jpg';
import steakImg from '../assets/steak.jpg';
import pastaImg from '../assets/pasta.jpg';
import drinkImg from '../assets/drink.jpg';
import dessertImg from '../assets/dessert.jpg';

const menuItems = [
  { name: 'Classic Burger', img: burgerImg, price: '$8.99', description: "Juicy grilled beef patty with cheddar, lettuce, tomato and onion." },
  { name: 'Italian Pizza', img: pizzaImg, price: '$12.99', description: "Wood-fired pizza with fresh mozzarella, pepperoni, peppers and olives." },
  { name: 'Fresh Garden Salad', img: saladImg, price: '$7.50', description: "Crisp greens, cucumbers, tomatoes, onion, and house vinaigrette." },
  { name: 'Golden Fries', img: friesImg, price: '$3.99', description: "Crispy golden fries, salted to perfection." },
  { name: 'Grilled Steak', img: steakImg, price: '$18.99', description: "Succulent, flame-grilled steak with steakhouse sides." },
  { name: 'Creamy Pasta', img: pastaImg, price: '$10.50', description: "Classic penne pasta with rich creamy Alfredo sauce." },
  { name: 'Refreshing Drink', img: drinkImg, price: '$2.50', description: "Your choice of soft drinks or fresh juice." },
  { name: 'Chocolate Dessert', img: dessertImg, price: '$5.00', description: "Decadent chocolate dessert to finish your meal." },
];

function MenuPage() {
  return (
    <div>
      <h1>Menu</h1>
      <div className="row">
        {menuItems.map((item, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <img 
                src={item.img} 
                className="card-img-top" 
                alt={item.name} 
                style={{height: '200px', objectFit: 'cover', borderRadius: '12px 12px 0 0'}}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text fw-bold">{item.price}</p>
                <button className="btn btn-primary w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;