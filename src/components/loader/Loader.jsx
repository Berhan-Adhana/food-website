import React from "react";
import "./loader.css";
import LoaderImg from "../../assets/images/loader.gif";
const Loader = () => {
  const loader = () => {
    document.querySelector(".loader-container").classList.add("fade-out");
  };

  const fadeOut = () => {
    setInterval(loader, 3000);
  };
  window.addEventListener("load", () => {
    fadeOut();
  });

  return (
    <div class="loader-container">
      <img src={LoaderImg} alt="" />
    </div>
  );
};

export default Loader;
