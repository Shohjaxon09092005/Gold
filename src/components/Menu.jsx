import React from "react";
import '../styles/menu.css'
const menuData = [
  {
    name: "Cheeseburger",
    price: "25 000 so'm",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    name: "Lavash",
    price: "30 000 so'm",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    name: "Hot Dog",
    price: "20 000 so'm",
    image: "https://images.unsplash.com/photo-1612392062798-2b6f1eaa8d1b"
  },
  {
    name: "Fri Kartoshka",
    price: "15 000 so'm",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f"
  }
];

function Menu() {
  return (
    <section className="menu" id="menu">
      <h2>Menyu</h2>
      <div className="menu-container">
        {menuData.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="btn">Sotib olish</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;