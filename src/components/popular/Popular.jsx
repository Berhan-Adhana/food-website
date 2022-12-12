import React from "react";
import "./popular.css";
import Rating from "../rating/Rating";
import populars from "./popular-data";
const Popular = () => {
  return (
    <section id="popular">
      <div className="container popular__container">
        <div className="section__title">
          <h2>Most</h2>
          <h2 className="section__title-primary">Popular</h2>
          <h2>Foods</h2>
        </div>
        <div className="popular__cards">
          {populars.map((popular, index) => {
            return (
              <div className="popular__card" key={index}>
                <div className="badge">{popular["price-range"]}</div>
                <div className="popular__image">
                  <img src={popular.image} alt="" />
                </div>
                <div className="popular__card-title">
                  <h4>{popular.name}</h4>
                </div>
                <Rating secondary rate={popular.rate} />
                <a href="#order" className="btn">
                  {popular["button-text"]}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
