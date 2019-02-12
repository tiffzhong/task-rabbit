import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { connect } from 'react-redux';
import { updateTaskType } from "../../ducks/clientReducer";

const Header = () => {
  return (
    <header>
      <div className="header-main-text">
        <h1>
          The convenient & affordable way to get things done around the home
        </h1>
        <p>
          Choose from over 140,000 vetted Taskers for help without breaking the
          bank.
        </p>
      </div>
      <div className="header-links">
        <span>
          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Mounting & Installation')} >Mounting & Installation</button>
          </Link>
          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Delivery Service')}>Delivery Service</button>
          </Link>
          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Yardwork/Landscaping')}>Yardwork/Landscaping</button>
          </Link>

          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Home Improvement')}>Home Improvement</button>
          </Link>
          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Moving & Packing')}>Moving & Packing</button>
          </Link>
          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Pet Service')}>Pet Service</button>
          </Link>

          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Furniture Assembly')} >Furniture Assembly</button>
          </Link>
          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Cleaning Service')}>Cleaning Service</button>
          </Link>
          <Link to="/clientForm">
            <button onClick={()=>this.props.updateTaskType('Cooking Service')}>Cooking Service</button>
          </Link>
        </span>
      </div>
    </header>
  );
};

const mapStateToProps = state => {

}

const mapDispatchToProps = {
  updateTaskType: updateTaskType
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
