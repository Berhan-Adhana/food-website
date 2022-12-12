import React from "react";
import "./gallery.css";
import galleries from "./gallery-data";
const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container gallery__container">
        <div className="section__title">
          <h2>Our Food</h2>
          <h2 className="section__title-primary">Gallery</h2>
        </div>
        <div className="gallery__cards">
          {galleries.map((gallery, index) => {
            return (
              <div className="gallery__card">
                <div className="gallery__image">
                  <img src={gallery.image} alt="" />
                </div>
                <div className="gallery__content">
                  <div className="gallery__title">
                    <h2>{gallery.name}</h2>
                  </div>
                  <p>{gallery.text}</p>
                  <a href="#order" className="btn">
                    {gallery["button-text"]}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
