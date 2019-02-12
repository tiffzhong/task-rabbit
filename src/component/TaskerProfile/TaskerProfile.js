import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser, createProfile } from "../../ducks/taskerReducer";
import "./TaskerProfile.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
import Autocomplete from "react-google-autocomplete";

class TaskerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      selfie: "",
      phone: "",
      place: "",
      about: "",
      mounting: false,
      mountingHourly: null,
      delivery: false,
      deliveryHourly: null,
      yard: false,
      yardHourly: null,
      home: false,
      homeHourly: null,
      moving: false,
      movingHourly: null,
      pet: false,
      petHourly: null,
      furniture: false,
      furnitureHourly: null,
      cleaning: false,
      cleaningHourly: null,
      cooking: false,
      cookingHourly: null,
      mountingtoggle: false,
      deliverytoggle: false,
      yardtoggle: false,
      hometoggle: false,
      movingtoggle: false,
      pettoggle: false,
      furnituretoggle: false,
      cleaningtoggle: false,
      cookingtoggle: false
    };
  }
  componentDidMount() {
    axios
      .get("/auth/user-data")
      .then(response => {
        this.props.setUser(response.data.user);
      })
      .then(() => {
        this.setState({
          name: this.props.user.name,
          email: this.props.user.email,
          selfie: this.props.user.picture
        });
      });
  }
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type !== "checkbox" ? target.value : target.checked;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit(event) {
    event.preventDefault();
  }

  mountingtoggle = event => {
    this.setState({
      mountingtoggle: !this.state.mountingtoggle
    });
  };

  deliverytoggle = event => {
    this.setState({
      deliverytoggle: !this.state.deliverytoggle
    });
  };
  yardtoggle = event => {
    this.setState({
      yardtoggle: !this.state.yardtoggle
    });
  };
  hometoggle = event => {
    this.setState({
      hometoggle: !this.state.hometoggle
    });
  };
  movingtoggle = event => {
    this.setState({
      movingtoggle: !this.state.movingtoggle
    });
  };
  pettoggle = event => {
    this.setState({
      pettoggle: !this.state.pettoggle
    });
  };
  furnituretoggle = event => {
    this.setState({
      furnituretoggle: !this.state.furnituretoggle
    });
  };
  cleaningtoggle = event => {
    this.setState({
      cleaningtoggle: !this.state.cleaningtoggle
    });
  };
  cookingtoggle = event => {
    this.setState({
      cookingtoggle: !this.state.cookingtoggle
    });
  };

  render() {
    console.log(this.props, "tasker props");
    console.log(this.state, "stater");
    const {
      name,
      email,
      selfie,
      phone,
      place,
      about,
      mounting,
      mountingHourly,
      delivery,
      deliveryHourly,
      yard,
      yardHourly,
      home,
      homeHourly,
      moving,
      movingHourly,
      pet,
      petHourly,
      furniture,
      furnitureHourly,
      cleaning,
      cleaningHourly,
      cooking,
      cookingHourly
    } = this.state;
    const { createProfile, user } = this.props;

    return (
      <div className="tasker-profile">
        <div className="profile-form-container">
          <span>
            <h3>Start Tasking.</h3>
            <h4>Earn money your way.</h4>
            <p>
              Be someone's hero today. Earn money by helping people with their
              everyday to-dos.
            </p>
          </span>
          <form onSubmit={event => this.onSubmit(event)}>
            <h2>Become a Tasker</h2>
            <input
              name="name"
              value={name}
              onChange={event => this.handleInput(event)}
            />

            <input
              name="email"
              value={email}
              onChange={event => this.handleInput(event)}
            />

            <input
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={event => this.handleInput(event)}
            />
            <div>
              <Autocomplete
                style={{ width: "510%", marginLeft: "-137px" }}
                onPlaceSelected={place => {
                  this.setState({
                    place: place.formatted_address
                  });
                }}
                types={["geocode"]}
              />
            </div>
            <textarea
              placeholder="Write some details about yourself"
              name="about"
              value={about}
              onChange={event => this.handleInput(event)}
            />
            <button>Continue</button>
          </form>
        </div>

        {/* =========== SKILL FORM SECTION =============== */}
        <div className="tasker-skill-form">
          <h2>Register to become a Tasker</h2>
          <form onSubmit={event => this.onSubmit(event)}>
            <span>
              <h6>Add Your Skills & Rates</h6>
              <p>
                Select your tasking categories and set your hourly rates. You
                can add or remove categories from your profile, or revise your
                rates, at any time.
              </p>
            </span>
            <div className="tasker-profile-container">
              <div className="tasker-display-text">
                <h3>Mounting & Installation</h3>

                <i onClick={this.mountingtoggle} class="fas fa-chevron-down" />

                <p>Mounting TVs, paintings, and art onto walls.</p>
              </div>

              <div
                className={
                  this.state.mountingtoggle ? "pop-a-roo" : "hide-a-roo"
                }
              >
                <section>
                  <h4>Scope of Task</h4>
                  <p>
                    <li>
                      Bathrooms: Scrubbing sink, toilet, and shower/bathtub
                      wiping mirrors.
                    </li>
                    <li>
                      Kitchen: Washing dishes; cleaning/wiping backsplash,
                      stove, counters, and appliances.
                    </li>
                    <li>Floors: Vacuuming, sweeping and/or mopping floors.</li>
                    <li>
                      Dusting: Furniture, hard surfaces, and window sills.
                    </li>
                    <li>Tidying: Straighten and organize. </li>
                    <li>
                      Taking out garbage/recycling and replacing trash bags.
                    </li>
                    <ul>
                      Clients typically expect you to clean the entire space and
                      bring your own cleaning supplies and tools (such as a
                      vacuum, mop, and cleaning sprays) to each task.
                    </ul>
                  </p>
                  <fieldset>
                    <input
                      type="checkbox"
                      name="mounting"
                      checked={this.state.mounting}
                      onChange={this.handleChange}
                    />
                    I have the skills and qualifications to task in this
                    category.
                  </fieldset>
                  <div className="tasker-rate-section">
                    <h4>Your Tasker Rate</h4>
                    <section>
                      $
                      {this.state.mounting ? (
                        <input
                          name="mountingHourly"
                          value={this.state.mountingHourly}
                          onChange={this.handleChange}
                        />
                      ) : (
                        <input
                          name="mountingHourly"
                          value=""
                          onChange={this.handleChange}
                          disabled
                        />
                      )}
                      <h3>Most Taskers with your experience hired at: </h3>
                      <p>$25/hr</p>
                    </section>
                  </div>
                </section>
              </div>
            </div>
            {/* =====DELIVERY CONTAINER===== */}
            <div className="task-container">
              <div className="tasker-display-text">
                <h3>Delivery Service</h3>
                <i onClick={this.deliverytoggle} class="fas fa-chevron-down" />
                <p>
                  Deliveries for food, clothing, documents, and other items.
                </p>
              </div>

              <div
                className={
                  this.state.deliverytoggle ? "pop-a-roo" : "hide-a-roo"
                }
              >
                <p>
                  Scope of Task Making deliveries of food, clothing, documents,
                  and other items. Note: You will not be reimbursed for travel
                  expenses such as gas, parking, or public transportation fees.
                  These costs should be included in your hourly rate.
                </p>
                <input
                  type="checkbox"
                  name="delivery"
                  checked={this.state.delivery}
                  onChange={this.handleChange}
                />
                <div className="tasker-rate-section">
                  Your Tasker Rate
                  {this.state.delivery ? (
                    <input
                      name="deliveryHourly"
                      value={this.state.deliveryHourly}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      name="deliveryHourly"
                      value=""
                      onChange={this.handleChange}
                      disabled
                    />
                  )}
                </div>
              </div>
            </div>
            {/* =====YARD WORK CONTAINER ======*/}
            <div className="task-container">
              <div className="tasker-display-text">
                <h3> Yard Work/Landscaping</h3>
                <i onClick={this.yardtoggle} class="fas fa-chevron-down" />
                <p>
                  Raking leaves, lawn mowing, gardening, landscaping, watering,
                  hauling of waste.
                </p>
              </div>

              <div
                className={this.state.yardtoggle ? "pop-a-roo" : "hide-a-roo"}
              >
                <p>
                  Scope of Task Raking leaves. Lawn mowing. Gardening.
                  Landscaping. Watering. Hauling of yard waste. Clients
                  typically expect you to clean the entire space and bring your
                  own supplies. Make sure to check with your Client if they have
                  their own tools (such as a lawn mower and rake or blower), or
                  if they expect you to bring your own to each task.
                </p>
                <input
                  type="checkbox"
                  name="yard"
                  checked={this.state.yard}
                  onChange={this.handleChange}
                />
                <div className="yard-tasker-rate">
                  Your Tasker Rate
                  {this.state.yard ? (
                    <input
                      name="yardHourly"
                      value={this.state.yardHourly}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      name="yardHourly"
                      value=""
                      onChange={this.handleChange}
                      disabled
                    />
                  )}
                </div>
              </div>
            </div>
            {/* =======HOME IMPROVEMENT CONTAINER====== */}
            <div className="task-container">
              <div className="tasker-display-text">
                <h3>Home Improvement</h3>

                <i onClick={this.hometoggle} class="fas fa-chevron-down" />

                <p>Repair and maintenance work around the home or office.</p>
              </div>
              <div
                className={this.state.hometoggle ? "pop-a-roo" : "hide-a-roo"}
              >
                <p>
                  Scope of Task • Putting up shelves. • Hanging curtains,
                  blinds, and picture frames. • Repairing holes in drywall. •
                  Taking care of small paint jobs. • Changing light bulbs. •
                  Repairing broken door handles. Before arriving, be sure you
                  have the right tools, such as a drill, screw driver, level,
                  stud finder, and check whether the Client needs special
                  supplies.
                </p>

                <input
                  type="checkbox"
                  name="home"
                  checked={this.state.home}
                  onChange={this.handleChange}
                />
                <div className="home-tasker-rate">
                  Your Tasker Rate
                  {this.state.home ? (
                    <input
                      name="homeHourly"
                      value={this.state.homeHourly}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      name="homeHourly"
                      value=""
                      onChange={this.handleChange}
                      disabled
                    />
                  )}
                </div>
              </div>
            </div>

            {/* =====MOVING AND PACKING CONTAINER==== */}
            <div className="task-container">
              <div className="tasker-display-text">
                <h3> Moving & Packing</h3>
                <i onClick={this.movingtoggle} class="fas fa-chevron-down" />

                <p>
                  Packing or un-packing boxes, or moving boxes and furniture.
                </p>
              </div>
              <div
                className={this.state.movingtoggle ? "pop-a-roo" : "hide-a-roo"}
              >
                <p>
                  Scope of Task Moving boxes and furniture into and out of
                  homes. Carrying boxes and furniture up and down stairs.
                  Helping with packing or unpacking items. It can help to ask
                  the Client in advance if there will be stairs, an elevator, or
                  a loading dock, and to inquire about stairwell and doorway
                  width. Make sure to check with Clients if they need supplies
                  such as packing tape, boxes, moving blankets, or a rented
                  hauling vehicle.
                </p>

                <input
                  type="checkbox"
                  name="moving"
                  checked={this.state.moving}
                  onChange={this.handleChange}
                />
                <div className="moving-tasker-rate">
                  Your Tasker Rate
                  {this.state.moving ? (
                    <input
                      name="movingHourly"
                      value={this.state.movingHourly}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      name="movingHourly"
                      value=""
                      onChange={this.handleChange}
                      disabled
                    />
                  )}
                </div>
              </div>
            </div>
            {/* ==========PET SERVICE CONTAINER======== */}
            <div className="task-container">
              <div className="tasker-display-text">
                <h3>Pet Service</h3>

                <i onClick={this.pettoggle} class="fas fa-chevron-down" />

                <p>Watching house pets while owners are out of town.</p>
              </div>
              <div
                className={this.state.pettoggle ? "pop-a-roo" : "hide-a-roo"}
              >
                <p>
                  Scope of Task Caring for animal's needs. Experienced in
                  handling animals.
                </p>
                <input
                  type="checkbox"
                  name="pet"
                  checked={this.state.pet}
                  onChange={this.handleChange}
                />
                <div className="pet-tasker-rate">
                  Your Tasker Rate
                  {this.state.pet ? (
                    <input
                      name="petHourly"
                      value={this.state.petHourly}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      name="petHourly"
                      value=""
                      onChange={this.handleChange}
                      disabled
                    />
                  )}
                </div>
              </div>
            </div>
            {/* =====FURNITURE=====  */}
            <div className="task-container">
              <div className="tasker-display-text">
                <h3>Furniture Assembly</h3>

                <i onClick={this.furnituretoggle} class="fas fa-chevron-down" />

                <p>
                  Putting together furniture from IKEA and other furniture
                  stores.
                </p>
              </div>
              <div
                className={
                  this.state.furnituretoggle ? "pop-a-roo" : "hide-a-roo"
                }
              >
                <p>
                  Scope of Task • Reading assembly instructions. • Assembling
                  furniture. • Carrying furniture up or down stairs. • Arranging
                  furniture in the Client's home, and securing it to the wall if
                  so indicated in assembly instructions. • Removing recycling
                  and garbage, such as empty boxes. It can help to get the brand
                  and item number from your Client upfront so you can scope what
                  tools are needed. Before arriving, be sure you have the right
                  tools, and check whether the Client needs special supplies.{" "}
                </p>
                Your Tasker Rate
                <input
                  type="checkbox"
                  name="furniture"
                  checked={this.state.furniture}
                  onChange={this.handleChange}
                />
                <div className="furniture-tasker-rate">
                  Your Tasker Rate
                  {this.state.furniture ? (
                    <input
                      name="furnitureHourly"
                      value={this.state.furnitureHourly}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      name="furnitureHourly"
                      value=""
                      onChange={this.handleChange}
                      disabled
                    />
                  )}
                </div>
              </div>
            </div>

            {/* ===========CLEANING CONTAINER========== */}
            <div className="task-container">
              <div className="tasker-display-text">
                <h3> Cleaning Service</h3>
                <i onClick={this.cleaningtoggle} class="fas fa-chevron-down" />
                <p>Cleaning an apartment, house, vacation home, or office.</p>
              </div>

              <div
                className={
                  this.state.cleaningtoggle ? "pop-a-roo" : "hide-a-roo"
                }
              >
                <p>
                  Scope of Task • Bathrooms: Scrubbing sink, toilet, and
                  shower/bathtub; wiping mirrors. • Kitchen: Washing dishes;
                  cleaning/wiping backsplash, stove, counters, and appliances. •
                  Floors: Vacuuming, sweeping and/or mopping floors. • Dusting:
                  Furniture, hard surfaces, and window sills. • Tidying:
                  Straighten and organize. • Taking out garbage/recycling and
                  replacing trash bags. Clients typically expect you to clean
                  the entire space and bring your own cleaning supplies and
                  tools (such as a vacuum, mop, and cleaning sprays) to each
                  task.
                </p>

                <input
                  type="checkbox"
                  name="cleaning"
                  checked={this.state.cleaning}
                  onChange={this.handleChange}
                />
                <div className="cleaning-tasker-rate">
                  Your Tasker Rate
                  {this.state.cleaning ? (
                    <input
                      name="cleaningHourly"
                      value={this.state.cleaningHourly}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      name="cleaningHourly"
                      value=""
                      onChange={this.handleChange}
                      disabled
                    />
                  )}
                </div>
              </div>
            </div>
            {/* ==============COOKING============ */}
            <div className="task-container">
              <div className="tasker-display-text">
                <h3> Cooking Service</h3>
                <i onClick={this.cookingtoggle} class="fas fa-chevron-down" />
                <p>Cooking up your Client's favorite dishes.</p>
              </div>
              <div
                className={
                  this.state.cookingtoggle ? "pop-a-roo" : "hide-a-roo"
                }
              >
                <p>
                  Scope of Task • Running errands (e.g., shopping). * Picking up
                  items (e.g. dry cleaning). • Shipping packages.
                </p>
                <input
                  type="checkbox"
                  name="cooking"
                  checked={this.state.cooking}
                  onChange={this.handleChange}
                />
                <div className="cooking-tasker-rate">
                  Your Tasker Rate
                  {this.state.cooking ? (
                    <input
                      name="cookingHourly"
                      value={this.state.cookingHourly}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      name="cookingHourly"
                      value=""
                      onChange={this.handleChange}
                      disabled
                    />
                  )}
                </div>
              </div>
            </div>

            <button
              className="submit-button"
              onClick={() =>
                createProfile(
                  name,
                  email,
                  selfie,
                  phone,
                  place,
                  about,
                  mounting,
                  mountingHourly,
                  delivery,
                  deliveryHourly,
                  yard,
                  yardHourly,
                  home,
                  homeHourly,
                  moving,
                  movingHourly,
                  pet,
                  petHourly,
                  furniture,
                  furnitureHourly,
                  cleaning,
                  cleaningHourly,
                  cooking,
                  cookingHourly,
                  user.auth0_id
                )
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  let { user } = state.tasker;
  return { user };
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP
})(TaskerProfile);

export default connect(
  mapStateToProps,
  { setUser, createProfile }
)(WrappedContainer);
