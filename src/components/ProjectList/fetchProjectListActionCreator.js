import { RSAA } from 'redux-api-middleware';
import {
  PROJECTLIST_FETCH_REQUEST,
  PROJECTLIST_FETCH_SUCCESS,
  PROJECTLIST_FETCH_FAILURE,
} from '../../store/actions';

export const fetchProjectList = () => ({
  [RSAA]: {
    endpoint: 'http://localhost:3000/projects',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      PROJECTLIST_FETCH_REQUEST,
      PROJECTLIST_FETCH_SUCCESS,
      PROJECTLIST_FETCH_FAILURE,
    ],
  },
});
