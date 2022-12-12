import React from "react";
import "./order.css";
import OrderBanner from '../../assets/images/order-img.jpg'
const Order = () => {
  return (
    <section id="order">
      <div className="container order__container">
        <div className="section__title">
          <h2 className="section__title-primary">Order</h2>
          <h2>Now</h2>
        </div>

        <div className="order__wrapper">
            <div className="order__left">
              <div className="order__banner">
                <img src={OrderBanner} alt="" />
              </div>
            </div>
            <div className="order__right">
              <form action="">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Enter your email" />
                <input type="phone" placeholder="12345678" />
                <input type="text" placeholder="Your Order" />
                <textarea name="" id="" placeholder="Address" className="order__right-address" rows={4} />
                <button type="submit" className="btn">
                  Order Now
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
