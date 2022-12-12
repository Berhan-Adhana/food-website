import React from "react";
import "./special.css";
import specials from "./specials-data";
const Special = () => {
  return (
    <section id="speciality">
      <div className="container special__container">
        <div className="section__title">
          <h2>Our</h2>
          <h2 className="section__title-primary">Special</h2>
          <h2>Dishes</h2>
        </div>
        <div className="special__cards">
          {specials.map((special, index) => {
            return (
              <div className="special__card" key={index}>
                <div className="special__card-img">
                  <img src={special.image} alt="" />
                </div>
                <div className="special__card-icon">
                  <img src={special.icon} alt="" />
                </div>
                <h4 className="special__card-title">{special.name}</h4>
                <p>{special.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Special;
