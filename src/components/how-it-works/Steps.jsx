import React from "react";
import "./steps.css";
import steps from "./steps-data";
const Steps = () => {
  return (
    <section id="gallery">
      <div className="container steps__container">
        <div className="section__title">
          <h2>How it</h2>
          <h2 className="section__title-primary">Works</h2>
        </div>
        <div className="steps__wrapper">
          {steps.map((step, index) => {
            return (
              <div className="step" key={index}>
                <div className="step__image">
                  <img src={step.avator} alt="" />
                </div>
                <h4>
                  {step.text1} <br /> {step.text2}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
