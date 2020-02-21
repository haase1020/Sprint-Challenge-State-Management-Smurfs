import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            default:
                return state;
    }
};

export default reducer;
