import React from 'react';
import './Hero.css'; // 👈 Import CSS

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src="/Hero.jpg" alt="FOTO" className="hero-photo" />
        <h1 className="hero-title">Welcome to Jago Universe</h1>
        <p className="hero-subtitle">Where your ideas turn into reality. 🚀</p>
        <a href="/CV-Bro.pdf" className="hero-btn" download>
        Download CV </a>
      </div>
    </section>
  );
}

export default Hero;
