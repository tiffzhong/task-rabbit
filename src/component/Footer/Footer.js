import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
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
        <Link to="/">
          <p>Logo</p>
        </Link>
        <p>
          <Link to="/how-it-works">How It Works</Link> |{" "}
          <Link to="/tasker-profile">Become a Tasker</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
