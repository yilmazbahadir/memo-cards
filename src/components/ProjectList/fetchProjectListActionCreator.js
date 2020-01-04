import { RSAA } from "redux-api-middleware";
import {
    PROJECTLIST_FETCH_REQUEST,
    PROJECTLIST_FETCH_SUCCESS,
    PROJECTLIST_FETCH_FAILURE
} from '../../store/actions';

export const fetchProjectList = () => ({
    [RSAA]: {
        endpoint: 'http://www.mocky.io/v2/5e0d13142f00006e00283232',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            PROJECTLIST_FETCH_REQUEST,
            PROJECTLIST_FETCH_SUCCESS,
            PROJECTLIST_FETCH_FAILURE
        ]
    }
})