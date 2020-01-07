import { RSAA } from "redux-api-middleware";
import {
    PROJECTONE_FETCH_REQUEST,
    PROJECTONE_FETCH_SUCCESS,
    PROJECTONE_FETCH_FAILURE
} from '../../store/actions';

export const fetchProjectById = (id) => ({
    [RSAA]: {
        endpoint: 'http://www.mocky.io/v2/5e1281933100002174594067',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            PROJECTONE_FETCH_REQUEST,
            PROJECTONE_FETCH_SUCCESS,
            PROJECTONE_FETCH_FAILURE
        ]
    }
})