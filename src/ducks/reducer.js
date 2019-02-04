const initialState = {
  test: null
};

const test = "TEST";
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case test:
      return { ...state, test: action.payload };
    default:
      return { ...state };
  }
}

export function testing(test) {
  return {
    type: test,
    payload: test
  };
}
