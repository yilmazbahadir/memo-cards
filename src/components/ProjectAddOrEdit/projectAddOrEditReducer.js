import {
  PROJECTONE_FETCH_REQUEST,
  PROJECTONE_FETCH_SUCCESS,
  PROJECTONE_FETCH_FAILURE,
  PROJECTONE_UPDATE_REQUEST,
  PROJECTONE_UPDATE_SUCCESS,
  PROJECTONE_UPDATE_FAILURE,
  PROJECTONE_CREATE_REQUEST,
  PROJECTONE_CREATE_FAILURE,
  PROJECTONE_CREATE_SUCCESS,
} from '../../store/actions';

const initialState = {
  fetching: false,
  updating: false,
  project: {},
};

export const fetchProjectOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTONE_FETCH_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case PROJECTONE_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        project: action.payload,
      };
    case PROJECTONE_FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        project: null,
      };
    case PROJECTONE_CREATE_REQUEST:
    case PROJECTONE_UPDATE_REQUEST:
      return {
        ...state,
        updating: true,
      };
    case PROJECTONE_CREATE_SUCCESS:
    case PROJECTONE_UPDATE_SUCCESS:
      return {
        ...state,
        updating: false,
        project: action.payload,
      };
    case PROJECTONE_CREATE_FAILURE:
    case PROJECTONE_UPDATE_FAILURE:
      return {
        ...state,
        updating: false,
        project: null,
      };
    case 'RESET_PROJECT_STATE':
      return {
        ...initialState,
      };

    default:
      return {
        ...initialState,
        ...state,
      };
  }
};
