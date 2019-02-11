import React from "react";
import "./LandingPage.css";

const LandingPage_Reviews = () => {
  return (
    <div className="reviewsContainer">
      <h1>Real People, Real Tasks</h1>
      <div className="inner-review-container">
        <div className="reviews">
          <img src="Images/sean.jpg" alt="" />
          <div className="review-text">
            <p>
              Using TaskTiger to have a new bookcase built was a great choice!
              Rick did wonderful work with a job that was much bigger than we
              anticipated.
            </p>
            <h6>Sean P.</h6>
            <p>Tampa, FL </p>
          </div>
        </div>

        <div className="reviews">
          <img src="Images/hunter.jpg" alt="" />
          <div className="review-text">
            <p>
              I'd been agonizing over how to get my new flat screen mounted to
              my wall. Nick arrived the same day with all the tools for the job
              and was just a super nice guy.
            </p>
            <h6>Hunter C.</h6>
            <p>Scottsdale, AZ</p>
          </div>
        </div>

        <div className="reviews">
          <img src="Images/michael.jpg" alt="" />
          <div className="review-text">
            <p>
              I finally have expertly installed shelves and additional storage
              in my tiny house, all thanks to my Tasker.{" "}
            </p>
            <h6>Michael K.</h6>
            <p>Phoenix, AZ</p>
          </div>
        </div>

        <div className="reviews">
          <img src="Images/josh.jpg" alt="" />
          <div className="review-text">
            <p>
              TaskTiger makes moving into your new apartment a 1 hr job instead
              of 1 day job! Moving was seamless!
            </p>
            <h6>Josh B.</h6>
            <p>Mesa, AZ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage_Reviews;
