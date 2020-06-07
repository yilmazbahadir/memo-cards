import { RSAA } from 'redux-api-middleware';
import {
  PROJECTONE_UPDATE_REQUEST,
  PROJECTONE_UPDATE_SUCCESS,
  PROJECTONE_UPDATE_FAILURE,
} from '../../store/actions';

export const updateProject = (project) => ({
  [RSAA]: {
    endpoint: `http://localhost:3000/projects/${project._id}`,
    method: 'PUT',
    body: JSON.stringify(project),
    headers: { 'Content-Type': 'application/json' },
    types: [
      PROJECTONE_UPDATE_REQUEST,
      PROJECTONE_UPDATE_SUCCESS,
      PROJECTONE_UPDATE_FAILURE,
    ],
  },
});
