import React, { useState } from "react";
import "./nav.css";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="container nav__container">
      <div className="logo">
        <BiRestaurant className="logo__icon" />
        <a href="#">
          <h3 className="logo__text">Food</h3>
        </a>
      </div>
      <ul
        className="menu mobile-menu"
        style={open ? { left: "0" } : { left: "-100%" }}
      >
        <AiOutlineClose
          className="close-icon"
          onClick={() => {
            setOpen(!open);
          }}
        />
        <li className="menu__items">
          <a href="#" className="menu__link" key="1">
            Home
          </a>
        </li>
        <li className="menu__items">
          <a href="#speciality" className="menu__link" key="2">
            Speciality
          </a>
        </li>
        <li className="menu__items">
          <a href="#popular" className="menu__link" key="3">
            Popular
          </a>
        </li>
        <li className="menu__items">
          <a href="#gallery" className="menu__link" key="4">
            Gallary
          </a>
        </li>
        <li className="menu__items">
          <a href="#review" className="menu__link" key="5">
            Review
          </a>
        </li>
        <li className="menu__items">
          <a href="#order" className="menu__link" key="6">
            Order
          </a>
        </li>
      </ul>

      {open ? (
        ""
      ) : (
        <AiOutlineMenu
          className="menu-bars"
          onClick={() => {
            setOpen(!open);
          }}
        />
      )}
    </nav>
  );
};

export default Nav;
