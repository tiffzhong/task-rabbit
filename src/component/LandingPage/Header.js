import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const Header = () => {
  return (
    <header>
      <div className="header-main-text">
        <h1>What task do you need help with today?</h1>
      </div>
      <div className="header-links">
        <span>
          <Link to="/">
            <p>Mounting & Installation</p>
          </Link>
          <Link to="/">
            <p>Delivery Service</p>
          </Link>
          <Link to="/">
            <p>Yardwork/Landscaping</p>
          </Link>
        </span>
        <span>
          <Link to="/">
            <p>Home Improvement</p>
          </Link>
          <Link to="/">
            <p>Moving & Packing</p>
          </Link>
          <Link to="/">
            <p>Pet Service</p>
          </Link>
        </span>
        <span>
          <Link to="/">
            <p>Furniture Assembly</p>
          </Link>
          <Link to="/">
            <p>Cleaning Service</p>
          </Link>
          <Link to="/">
            <p>Cooking Service</p>
          </Link>
        </span>
      </div>
    </header>
  );
};
export default Header;
