import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="fruit-by-the-foot">
        <div className="footer-left-links">
          <p>
            Follow Us!{" "}
            <a href="https://www.facebook.com/TaskRabbit">
              <i class="fab fa-facebook-square" />{" "}
            </a>
            <a href="https://twitter.com/taskrabbit">
              <i class="fab fa-twitter-square" />{" "}
            </a>
            <a href="https://www.instagram.com/taskrabbit/">
              <i class="fab fa-instagram" />
            </a>
          </p>
        </div>
        <div className="logo-image-footer">
          <Link to="/">
            <img
              width={150}
              src="https://assets.taskrabbit.com/v3/assets/web/logos/logo-h-b1502abe9deb95e9b28f6125aeee018f.svg"
            />
          </Link>
        </div>
        <div className="footer-right-links">
          <p>
            <Link to="/how-it-works">How It Works</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
