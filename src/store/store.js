import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
//import reducers
import { fetchProjectListReducer, fetchProjectOneReducer } from './reducers';

const combinedReducers = combineReducers({ projectList: fetchProjectListReducer, project: fetchProjectOneReducer });

const middlewares = [
    thunk,
    apiMiddleware
];

export const store = createStore(combinedReducers, applyMiddleware(...middlewares));
