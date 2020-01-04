import {
    PROJECTLIST_FETCH_REQUEST,
    PROJECTLIST_FETCH_SUCCESS,
    PROJECTLIST_FETCH_FAILURE
} from '../../store/actions';

const initialState = {
    fetching: true,
    projects: {}
}

export const fetchProjectListReducer = (state = initialState, action) => {

    let result = {};

    switch (action.type) {
        case PROJECTLIST_FETCH_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case PROJECTLIST_FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                projects: action.payload
            }
        case PROJECTLIST_FETCH_FAILURE:
            return {
                ...state,
                fetching: false,
                projects: action.payload
            }
        default:
            return initialState;
    }
}