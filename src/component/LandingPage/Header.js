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
          <Link to="/mounting_form">
            <button>Mounting & Installation</button>
          </Link>
          <Link to="/delivery_form">
            <button>Delivery Service</button>
          </Link>
          <Link to="/yardwork_form">
            <button>Yardwork/Landscaping</button>
          </Link>
        </span>
        <span>
          <Link to="/home_form">
            <button>Home Improvement</button>
          </Link>
          <Link to="/moving_form">
            <button>Moving & Packing</button>
          </Link>
          <Link to="/pet_form">
            <button>Pet Service</button>
          </Link>
        </span>
        <span>
          <Link to="/furniture_form">
            <button>Furniture Assembly</button>
          </Link>
          <Link to="/cleaning_form">
            <button>Cleaning Service</button>
          </Link>
          <Link to="/cooking_form">
            <button>Cooking Service</button>
          </Link>
        </span>
      </div>
    </header>
  );
};
export default Header;
