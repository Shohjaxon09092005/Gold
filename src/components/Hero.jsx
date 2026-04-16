import React from "react";
import '../styles/hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Eng Mazali Fast Food!</h2>
        <p>
          Siz uchun eng sifatli va mazali burgerlar, lavashlar va ichimliklar.
        </p>
        <button className="btn">Buyurtma Berish</button>
      </div>
    </section>
  );
}

export default Hero;