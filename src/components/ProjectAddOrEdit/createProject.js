import { RSAA } from 'redux-api-middleware';
import {
  PROJECTONE_CREATE_REQUEST,
  PROJECTONE_CREATE_SUCCESS,
  PROJECTONE_CREATE_FAILURE,
} from '../../store/actions';

export const createProject = (project) => ({
  [RSAA]: {
    endpoint: `http://localhost:3000/projects`,
    method: 'POST',
    body: JSON.stringify(project),
    headers: { 'Content-Type': 'application/json' },
    types: [
      PROJECTONE_CREATE_REQUEST,
      PROJECTONE_CREATE_SUCCESS,
      PROJECTONE_CREATE_FAILURE,
    ],
  },
});
