import React from "react";
import "./hero.css";
import HeroImg from "../../assets/images/home-img.png";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero__container">
        <div className="hero__info">
          <h3>Food Made With Love</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            commodi ullam maiores molestiae enim, repellat ipsum unde a vel
            alias quasi placeat labore sequi perspiciatis accusamus quod aliquam
            laboriosam? Impedit necessitatibus placeat hic modi neque! Aut quo
            consequuntur neque vero.
          </p>
          <a href="#order" className="btn">
            Order Now
          </a>
        </div>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
