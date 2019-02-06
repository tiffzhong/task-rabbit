import axios from "axios";

const INITIAL_STATE = {
  taskType: null
};

const UPDATE_TASK_TYPE = "UPDATE_TASK_TYPE";

export default function clientReducer(state = INITIAL_STATE, action) {
  console.log("REDUCER HIT: Action =>", action);
  switch (action.type) {
    case UPDATE_TASK_TYPE:
      return { ...state, taskType: action.payload };

    default:
      return { ...state };
  }
}

// export function updateTaskType(taskType) {
//   axios.post();
// }
