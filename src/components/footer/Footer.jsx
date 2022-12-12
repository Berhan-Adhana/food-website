import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <section id="footer">
      <div className="footer__container">
        <div className="footer__social-icons">
          <a href="" className="btn  footer-btn">
            Facebook
          </a>
          <a href="" className="btn footer-btn">
            Twitter
          </a>
          <a href="" className="btn footer-btn">
            Instagram
          </a>
          <a href="" className="btn footer-btn">
            LinkedIn
          </a>
          <a href="" className="btn footer-btn">
            Pintrest
          </a>
        </div>
        <p>All rights Reserved &copy; {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default Footer;
