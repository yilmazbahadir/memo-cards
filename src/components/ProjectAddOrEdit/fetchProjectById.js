import { RSAA } from 'redux-api-middleware';
import {
  PROJECTONE_FETCH_REQUEST,
  PROJECTONE_FETCH_SUCCESS,
  PROJECTONE_FETCH_FAILURE,
} from '../../store/actions';

export const fetchProjectById = (id) => ({
  [RSAA]: {
    endpoint: `http://localhost:3000/projects/${id}`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      PROJECTONE_FETCH_REQUEST,
      PROJECTONE_FETCH_SUCCESS,
      PROJECTONE_FETCH_FAILURE,
    ],
  },
});
