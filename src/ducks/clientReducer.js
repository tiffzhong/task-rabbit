import axios from "axios";


const INITIAL_STATE = {
  taskType: '',
  locationStart: '',
  locationEnd: '',
  duration: '',
  vehicle: '',
  startDate: '',
  endDate: '',
  taskDetails: '',
  clientData: []
};

const UPDATE_TASK_TYPE = "UPDATE_TASK_TYPE";
const UPDATE_LOCATION_START ='UPDATE_LOCATION_START';
const UPDATE_LOCATION_END = 'UPDATE_LOCATION_END';
const UPDATE_DURATION = 'UPDATE_DURATION';
const UPDATE_VEHICLE = 'UPDATE_VEHICLE';
const UPDATE_START_DATE = 'UPDATE_START_DATE';
const UPDATE_END_DATE = 'UPDATE_END_DATE';
const UPDATE_TASK_DETAILS = 'UPDATE_TASK_DETAILS';

export default function clientReducer(state = INITIAL_STATE, action) {
  console.log("REDUCER HIT: Action =>", action);
  switch (action.type) {
    case UPDATE_TASK_TYPE:
      return { ...state, taskType: action.payload };

    case UPDATE_LOCATION_START:
      return { ...state, locationStart: action.payload };

    case UPDATE_LOCATION_END:
      return { ...state, locationEnd: action.payload };

    case UPDATE_DURATION:
      return { ...state, duration: action.payload };

    case UPDATE_VEHICLE:
      return { ...state, vehicle: action.payload };

    case UPDATE_START_DATE:
      return { ...state, startDate: action.payload };

    case UPDATE_END_DATE:
      return { ...state, endDate: action.payload };

    case UPDATE_TASK_DETAILS:
      return { ...state, details: action.payload };

    default:
      return { ...state };
  }
}

export function updateTaskType(taskType) {
    return {
      type: UPDATE_TASK_TYPE,
      payload: taskType
    }
}

export function updateLocationStart(locationStart) {
  return {
    type: UPDATE_LOCATION_START,
    payload: locationStart
  }
}

export function updateLocationEnd(locationEnd) {
  return {
    type: UPDATE_LOCATION_END,
    payload: locationEnd
  }
}

export function updateDuration(duration) {
  return {
    type: UPDATE_DURATION,
    payload: duration
  }
}

export function updateVehicle(vehicle) {
  return {
    type: UPDATE_VEHICLE,
    payload: vehicle
  }
}

export function updateStartDate(startDate) {
  return {
    type: UPDATE_START_DATE,
    payload: startDate
  }
}

export function updateEndDate(endDate) {
  return {
    type: UPDATE_END_DATE,
    payload: endDate
  }
}

export function updateTaskDetails(taskDetails) {
  return {
    type: UPDATE_TASK_DETAILS,
    payload: taskDetails
  }
}