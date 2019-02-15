import React from "react";
import "./NavBar.css";
// import Googlemap from "../Googlemap/Googlemap";
// import Autocompletesearch from "../Googlemap/Autocompletesearch";
import { Link } from "react-router-dom";

const NavBar_HowItWorks = () => {
  return (
    <div className="how-it-works-window">
      <h1>How It Works</h1>

      <div className="how-it-works-container">
        <div className="how-it-works-one-container">
          <div className="step-1-image">
            <img
              src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_1-59268ae9c0bf23d365715d3d974a0947.svg"
              alt="step-1"
            />
          </div>
          <div className="how-it-works-one-text">
            <h2>1</h2>
            <h3>Describe the task</h3>
            <p>
              Choose from a variety of home services and select the day and time
              you'd like a qualified Tasker to show up. Give us the details and
              we'll find you the help.
            </p>
          </div>
        </div>

        <div className="how-it-works-one-container">
          <div className="how-it-works-one-text">
            <h2>2</h2>
            <h3>Get matched</h3>
            <p>
              Select from a list of qualified and fully vetted Taskers for the
              job. Choose Taskers by their hourly rate and start chatting with
              them right in the app.
            </p>
          </div>
          <div className="step-1-image">
            <img
              src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_2-13d469cb04809cde3793a6bf2f6e8005.svg"
              alt="step-2"
            />
          </div>
        </div>

        <div className="how-it-works-one-container">
          <div className="step-1-image">
            <img
              src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_3-fd7acee425e988dcc42adda5a79423dd.svg"
              alt="list"
            />
          </div>
          <div className="how-it-works-one-text">
            <h2>3</h2>
            <h3>Get it done</h3>
            <p>
              Just like that, your Tasker arrives and gets the job done. When
              your task is complete, payment will happen seamlessly and securely
              through the app.
            </p>
          </div>
        </div>

        {/* <Link to="/review">review</Link>
        <Link to="/confirmation">confirmation</Link> */}
      </div>
    </div>
  );
};

export default NavBar_HowItWorks;
