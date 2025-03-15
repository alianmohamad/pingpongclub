import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <header className="game-table">
      <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
        Welcome to Rapid PingPong Club
      </h1>
      <div className="net"></div>
      <p className="handwriting">Join us for an exciting game experience!</p>
      <div className="pingpong-button">
        <a href="#about">
          <i className="fas fa-arrow-down"></i>
        </a>
      </div>
    </header>
  );
};

export default Hero;