import axios from "axios";

const INITIAL_STATE = {
  taskType: "",
  task: "",
  locationStart: "",
  locationEnd: "",
  lat: "",
  long: "",
  duration: 0,
  vehicle: "",
  startDate: "",
  endDate: "",
  taskDetails: "",
  clientData: [],
  allTaskers: [],
  clientReview: "",
  reviewData: []
};

const UPDATE_TASK_TYPE = "UPDATE_TASK_TYPE";
const UPDATE_LOCATION_START = "UPDATE_LOCATION_START";
const UPDATE_LOCATION_END = "UPDATE_LOCATION_END";
const UPDATE_LAT = "UPDATE_LAT";
const UPDATE_LONG = "UPDATE_LONG";
const UPDATE_DURATION = "UPDATE_DURATION";
const UPDATE_VEHICLE = "UPDATE_VEHICLE";
const UPDATE_START_DATE = "UPDATE_START_DATE";
const UPDATE_END_DATE = "UPDATE_END_DATE";
const UPDATE_TASK_DETAILS = "UPDATE_TASK_DETAILS";
const UPDATE_CLIENT_DATA = "UPDATE_CLIENT_DATA";
const ALL_TASKER_FOR_CLIENT = "ALL_TASKER_FOR_CLIENT";
const UPDATE_CLIENT_REVIEW = "UPDATE_CLIENT_REVIEW";
const UPDATE_REVIEW_DATA = "UPDATE_REVIEW_DATA";
const UPDATE_ALL_DETAILS = "UPDATE_ALL_DETAILS";

export default function clientReducer(state = INITIAL_STATE, action) {
  console.log("REDUCER HIT: Action =>", action);
  switch (action.type) {
    case UPDATE_TASK_TYPE:
      return {
        ...state,
        taskType: action.payload.taskType,
        task: action.payload.task
      };

    case UPDATE_LOCATION_START:
      return { ...state, locationStart: action.payload };

    case UPDATE_LOCATION_END:
      return { ...state, locationEnd: action.payload };

    case UPDATE_LAT:
      return { ...state, lat: action.payload };

    case UPDATE_LONG:
      return { ...state, long: action.payload };

    case UPDATE_DURATION:
      return { ...state, duration: action.payload };

    case UPDATE_VEHICLE:
      return { ...state, vehicle: action.payload };

    case UPDATE_START_DATE:
      return { ...state, startDate: action.payload };

    case UPDATE_END_DATE:
      return { ...state, endDate: action.payload };

    case UPDATE_TASK_DETAILS:
      return { ...state, taskDetails: action.payload };

    case UPDATE_CLIENT_DATA:
      return { ...state, clientData: action.payload };

    case `${ALL_TASKER_FOR_CLIENT}_FULFILLED`:
      return { ...state, allTaskers: action.payload };

    case UPDATE_CLIENT_REVIEW:
      return { ...state, clientReview: action.payload };

    case UPDATE_REVIEW_DATA:
      return { ...state, reviewData: action.payload };

    case UPDATE_ALL_DETAILS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

export function allTaskersForClient() {
  return {
    type: ALL_TASKER_FOR_CLIENT,
    payload: axios
      .get("/api/pickatasker")
      .then(response => {
        console.log("alltaskers=====>", response.data);
        return response.data;
      })
      .catch(error => console.log("Error in allTaskerForClient", error))
  };
}

// export function editClientForm() {
//   return {
//     type: EDIT_CLIENT_FORM,
//     payload: axios.put("/api/")
//   };
// }

export function updateTaskType(taskType) {
  return {
    type: UPDATE_TASK_TYPE,
    payload: taskType
  };
}

export function updateLocationStart(locationStart) {
  return {
    type: UPDATE_LOCATION_START,
    payload: locationStart
  };
}

export function updateLocationEnd(locationEnd) {
  return {
    type: UPDATE_LOCATION_END,
    payload: locationEnd
  };
}

export function updateLat(lat) {
  return {
    type: UPDATE_LAT,
    payload: lat
  };
}

export function updateLong(long) {
  return {
    type: UPDATE_LONG,
    payload: long
  };
}

export function updateDuration(duration) {
  return {
    type: UPDATE_DURATION,
    payload: duration
  };
}

export function updateVehicle(vehicle) {
  return {
    type: UPDATE_VEHICLE,
    payload: vehicle
  };
}

export function updateStartDate(startDate) {
  return {
    type: UPDATE_START_DATE,
    payload: startDate
  };
}

export function updateEndDate(endDate) {
  return {
    type: UPDATE_END_DATE,
    payload: endDate
  };
}

export function updateTaskDetails(taskDetails) {
  return {
    type: UPDATE_TASK_DETAILS,
    payload: taskDetails
  };
}

export function updateClientData(clientData) {
  return {
    type: UPDATE_CLIENT_DATA,
    payload: clientData
  };
}

export function updateClientReview(clientReview) {
  return {
    type: UPDATE_CLIENT_REVIEW,
    payload: clientReview
  };
}

export function updateReviewData(reviewData) {
  return {
    type: UPDATE_REVIEW_DATA,
    payload: reviewData
  };
}
export function editTaskDetails(allDetails) {
  return {
    type: UPDATE_ALL_DETAILS,
    payload: allDetails
  };
}
