import { RSAA } from 'redux-api-middleware';
import {
  PROJECTONE_DELETE_REQUEST,
  PROJECTONE_DELETE_SUCCESS,
  PROJECTONE_DELETE_FAILURE,
} from '../../store/actions';

export const deleteProjectById = (id) => ({
  [RSAA]: {
    endpoint: `http://localhost:3000/projects/${id}`,
    method: 'DELETE',
    types: [
      PROJECTONE_DELETE_REQUEST,
      PROJECTONE_DELETE_SUCCESS,
      PROJECTONE_DELETE_FAILURE,
    ],
  },
});
