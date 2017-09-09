import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import treeReducer from './treeReducer';
import listReducer from './listReducer';
import editReducer from './editReducer';

export default combineReducers({
    auth: authReducer,
    tree: treeReducer,
    list: listReducer,
    edit: editReducer,
    routing: routerReducer
})