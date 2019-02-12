import axios from "axios";

const INITIAL_STATE = {
  user: null,
  taskerProfile: []
};

const SET_USER = "SET_USER";
const CREATE_PROFILE = "CREATE_PROFILE";
const GET_PROFILE = "GET_PROFILE";
const EDIT_PROFILE = "EDIT_PROFILE";
const ERROR = "ERROR";
const CONFIRMATION = "CONFIRMATION";

export default function taskerReducer(
  state = INITIAL_STATE,
  action = { payload: "" }
) {
  // console.log("REDUCER HIT(Tasker): Action =>", action);
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case GET_PROFILE:
      return { ...state, taskerProfile: action.payload };
    case `${CREATE_PROFILE}_FULFILLED`:
      return { ...state };
    case `${EDIT_PROFILE}_FULFILLED`:
      return { ...state };
    case ERROR:
      alert("Please complete every field");
      return { ...state };
    case CONFIRMATION:
      return { ...state };
    default:
      return { ...state };
  }
}

//dispatching actions
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}
export function getProfile(tasker_id) {
  return {
    type: GET_PROFILE,
    payload: tasker_id
  };
}
// export function getPlace
export function createProfile(
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
  user,
  tasker_id
) {
  if (!name || !email || !phone || !place || !about) {
    return {
      type: ERROR,
      payload: ""
    };
  } else {
    return {
      type: CREATE_PROFILE,
      payload: axios
        .post("/api/tasker", {
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
          user,
          tasker_id
        })
        .then(res => {
          window.location.pathname = `/tasker-dashboard/${
            res.data[0].tasker_id
          }`;
          return {};
        })
        .catch(error => console.log("error in creating profile", error))
    };
  }
}

export function editProfile(
  tasker_name,
  email,
  selfie,
  phone,
  location,
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
  tasker_id
) {
  return {
    type: EDIT_PROFILE,
    payload: axios.put(`/api/tasker/${tasker_id}`, {
      tasker_name,
      email,
      selfie,
      phone,
      location,
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
    })
  };
}

export function confirmation(
  created_date,
  task,
  client_id,
  tasker_id,
  tasker_hourly,
  start_date,
  end_date,
  location_start,
  location_end,
  duration,
  task_details,
  lat,
  long,
  vehicle
) {
  return {
    type: CONFIRMATION,
    payload: axios
      .post("/api/confirmed", {
        created_date,
        task,
        client_id,
        tasker_id,
        tasker_hourly,
        start_date,
        end_date,
        location_start,
        location_end,
        duration,
        task_details,
        lat,
        long,
        vehicle
      })
      .then(() => (window.location.pathname = "/confirmation"))
      .catch(error => console.log("error in creating confirmation", error))
  };
}
