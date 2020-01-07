import {
    PROJECTONE_FETCH_REQUEST,
    PROJECTONE_FETCH_SUCCESS,
    PROJECTONE_FETCH_FAILURE
} from '../../store/actions';

const initialState = {
    fetching: true,
    project: {}
}

export const fetchProjectOneReducer = (state = initialState, action) => {

    switch (action.type) {
        case PROJECTONE_FETCH_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case PROJECTONE_FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                project: action.payload
            }
        case PROJECTONE_FETCH_FAILURE:
            return {
                ...state,
                fetching: false,
                project: action.payload
            }
        default:
            return {
                ...initialState,
                ...state
            }
    }
}