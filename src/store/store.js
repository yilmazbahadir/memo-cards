import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
//import reducers
import { fetchProjectListReducer } from './reducers';

const combinedReducers = combineReducers({ projectList: fetchProjectListReducer });

const middlewares = [
    thunk,
    apiMiddleware
];

export const store = createStore(combinedReducers, applyMiddleware(...middlewares));
