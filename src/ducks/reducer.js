const initialState = {
  user: null
};

const SET_USER = "SET_USER";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
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
