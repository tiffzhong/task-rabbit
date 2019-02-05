import axios from "axios";

const INITIAL_STATE = {
  user: null,
  taskerProfile: []
};

const SET_USER = "SET_USER";

export default function taskerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    // case `${}_FULFILLED`:

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

// export function createProfile(
//   tasker_id, name, email, phone, location, about
// )
