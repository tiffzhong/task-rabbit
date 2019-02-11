import React from "react";
import "./NavBar.css";
// import Googlemap from "../Googlemap/Googlemap";
// import Autocompletesearch from "../Googlemap/Autocompletesearch";
import { Link } from "react-router-dom";

const NavBar_HowItWorks = () => {
  return (
    <div>
      <div className="fullpage">
        <div className="wholeitems">
          <h1>How It Works</h1>
          <div className="firstitem">
            <div className="firstparagraph">
              {/* <h3>1</h3> */}
              <p>1. Describe the task</p>
              <div className="words">
                Choose from a variety of home services and select the day and
                time you'd like a qualified Tasker to show up. Give us the
                details and we'll find you the help.
              </div>
            </div>
            <div className="firstimage">
              <img
                src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_1-59268ae9c0bf23d365715d3d974a0947.svg"
                alt="how"
              />{" "}
            </div>
          </div>
          <div className="seconditem">
            <div className="secondimage">
              <img
                src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_2-13d469cb04809cde3793a6bf2f6e8005.svg"
                alt="electrican"
              />
            </div>
            <div className="secondparagraph">
              {/* <h3>2</h3> */}
              <p> 2. Get matched</p>
              <div className="words">
                Select from a list of qualified and fully vetted Taskers for the
                job. Choose Taskers by their hourly rate and start chatting with
                them right in the app.
              </div>
            </div>
          </div>
          <div className="thirditem">
            <div className="thirdparagraph">
              {/* <h3>3</h3> */}
              <p> 3. Get it done</p>
              <div className="words">
                Just like that, your Tasker arrives and gets the job done. When
                your task is complete, payment will happen seamlessly and
                securely through the app.
              </div>
            </div>
            <div className="thirdimage">
              <img
                src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_3-fd7acee425e988dcc42adda5a79423dd.svg"
                alt="list"
              />
            </div>
          </div>
        </div>
      </div>
      <Link to="/confirmation">confirmation</Link>
    </div>
  );
};

export default NavBar_HowItWorks;
