import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { applicantReducer } from './reducers/applicantReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        applicant: applicantReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;