import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';

export default combineReducers({
    auth:    authReducer,
    routing: routerReducer
})
