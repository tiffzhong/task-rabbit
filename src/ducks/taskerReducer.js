import axios from "axios";

const INITIAL_STATE = {
  user: null,
  taskerProfile: [],
  taskerSkills: []
};

const SET_USER = "SET_USER";
const CREATE_PROFILE = "CREATE_PROFILE";
const ADD_EXPERTISE = "ADD_EXPERTISE";

export default function taskerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case `${CREATE_PROFILE}_FULFILLED`:
      return { ...state, taskerProfile: action.payload };
    case `${ADD_EXPERTISE}_FULFILLED`:
      return { ...state, taskerSkills: action.payload };
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

export function createProfile(tasker_id, name, email, phone, location, about) {
  return {
    type: CREATE_PROFILE,
    payload: axios
      .post("/api/tasker", {
        tasker_id,
        name,
        email,
        phone,
        location,
        about
      })
      .then(() => (window.location.pathname = "/expertise"))
      .catch(error => console.log("error in creating profile", error))
  };
}

export function createExpertise(tasker_id, skill, pricing) {
  return {
    type: ADD_EXPERTISE,
    payload: axios
      .post("/api/tasker-expertise", { tasker_id, skill, pricing })
      .then(() => (window.location.pathname = "/tasker-dashboard"))
      .catch(error => console.log("error in createExpertise", error))
  };
}
