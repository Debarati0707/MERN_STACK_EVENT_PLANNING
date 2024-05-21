import React from "react";
import { Link } from "react-scroll";
const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/ress.jpg" alt="res" />
      <div className="item">
        <h3>GalaCraft</h3>
        <div>
          <h1>"Turning Dreams into Events."</h1>
          <p>
            "Crafting Unforgettable Moments: Your Journey to Perfect Events
            Starts Here!"
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
