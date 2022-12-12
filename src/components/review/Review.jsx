import React from "react";
import "./review.css";
import Profile1 from "../../assets/images/pic1.png";
import Profile2 from "../../assets/images/pic2.png";
import Profile3 from "../../assets/images/pic3.png";
import Rating from "../rating/Rating";
const Review = () => {
  return (
    <section id="review">
      <div className="container review__container">
        <div className="section__title">
          <h2> Our Customers </h2>
          <h2 className="section__title-primary">Review</h2>
        </div>
        <div className="review__cards">
          <div className="review__card">
            <div className="reviewer__profile-image">
              <img src={Profile1} alt="" />
            </div>
            <div className="reviewer__profile-name">
              <h2>John Deo</h2>
            </div>
            <Rating />
            <div className="reviewer__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                ipsa.
              </p>
            </div>
          </div>
          <div className="review__card">
            <div className="reviewer__profile-image">
              <img src={Profile2} alt="" />
            </div>
            <div className="reviewer__profile-name">
              <h2>John Deo</h2>
            </div>
            <Rating />
            <div className="reviewer__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                ipsa.
              </p>
            </div>
          </div>
          <div className="review__card">
            <div className="reviewer__profile-image">
              <img src={Profile3} alt="" />
            </div>
            <div className="reviewer__profile-name">
              <h2>John Deo</h2>
            </div>
            <Rating />
            <div className="reviewer__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                ipsa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
