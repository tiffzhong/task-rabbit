const INITIAL_STATE = {
    clientMessages: [],
    taskerMessages: [],
    clientMessage: '',
    taskerMessage: ''
}

const UPDATE_CASE = 'UPDATE_CASE';

export default function messagesReducer(state = INITIAL_STATE, action) {
    console.log("REDUCER HIT: Action =>", action);
    switch(action.type) {
        case UPDATE_CASE:
        return Object.assign({}, state, { case: action.payload });

        default: return state;
    }
    
}