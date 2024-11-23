import React, { useState } from 'react';
import overwatch from "./images/overwatch.jpg";
import minecraft from "./images/minecraft.jpg";
import fortnite from "./images/fortnite.jpg";

const items = [
  { id: 1, name: "overwatch", price: 1500, src: overwatch, alt: "overwatch" }, // Example price in INR
  { id: 2, name: "minecraft", price: 2400, src: minecraft, alt: "minecraft" }, // Example price in INR
  { id: 3, name: "fortnite", price: 4000, src: fortnite, alt: "fortnite" }, // Example price in INR
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((prev) => [...prev, item]);
  const removeFromCart = (item) => setCart((prev) => prev.filter(i => i.id !== item.id));
  const total = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Items</h1>
      {items.map(item => (
        <div key={item.id} style={itemStyle}>
          <img src={item.src} alt={item.alt} style={imgStyle} />
          <span>{`${item.name}: ₹${item.price}`}</span>
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      ))}
      <h1>Cart</h1>
      {cart.length > 0 ? (
        cart.map(item => (
          <div key={item.id} style={itemStyle}>
            <img src={item.src} alt={item.alt} style={imgStyle} />
            <span>{`${item.name}: ₹${item.price}`}</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h2>Total: ₹{total}</h2>
    </div>
  );
}

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 10,
  borderBottom: '1px solid #ccc'
};

const imgStyle = {
  width: 50,
  height: 50,
  marginRight: 10
};

export default App;
