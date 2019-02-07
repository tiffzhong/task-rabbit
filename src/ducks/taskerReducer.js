import axios from "axios";

const INITIAL_STATE = {
  user: null,
  taskerProfile: []
};

const SET_USER = "SET_USER";
const CREATE_PROFILE = "CREATE_PROFILE";
const GET_PROFILE = "GET_PROFILE";

export default function taskerReducer(state = INITIAL_STATE, action) {
  console.log("REDUCER HIT(Tasker): Action =>", action);
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case GET_PROFILE:
      return { ...state, taskerProfile: action.payload };
    case `${CREATE_PROFILE}_FULFILLED`:
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
export function createProfile(
  name,
  email,
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
  user,
  tasker_id
) {
  return {
    type: CREATE_PROFILE,
    payload: axios
      .post("/api/tasker", {
        name,
        email,
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
        user,
        tasker_id
      })
      .then(newUser => {
        return newUser.data;
      })
      .catch(error => console.log("error in creating profile", error))
  };
}

// export function createExpertise(
//   tasker_profile_id,
//   mounting,
//   mountingHourly,
//   delivery,
//   deliveryHourly,
//   yard,
//   yardHourly,
//   home,
//   homeHourly,
//   moving,
//   movingHourly,
//   pet,
//   petHourly,
//   furniture,
//   furnitureHourly,
//   cleaning,
//   cleaningHourly,
//   cooking,
//   cookingHourly,
//   history
// ) {
//   return {
//     type: ADD_EXPERTISE,
//     payload: axios
//       .post("/api/tasker-expertise", {
//         tasker_profile_id,
//         mounting,
//         mountingHourly,
//         delivery,
//         deliveryHourly,
//         yard,
//         yardHourly,
//         home,
//         homeHourly,
//         moving,
//         movingHourly,
//         pet,
//         petHourly,
//         furniture,
//         furnitureHourly,
//         cleaning,
//         cleaningHourly,
//         cooking,
//         cookingHourly,
//         history
//       })
//       .then(res => {
//         history.push("/tasker-dashboard");
//         return res.data;
//       })
//       .catch(error => console.log("error in createExpertise in redux", error))
//   };
// }
