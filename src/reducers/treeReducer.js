import * as constants from '../constants';

const initialState = {
    "tree": {},
    "treeError": null
};

function tree(state = initialState, action) {
    switch (action.type) {
        case constants.GET_TREE_REQUEST:
            return state;

        case constants.GET_TREE_FALSE:
            return Object.assign({}, state, {
                treeError: action.error
            });

        case constants.GET_TREE_DONE:
            return Object.assign({}, state, {
                tree: action.data,
                treeError: null
            });

        case constants.ADD_TREE_PAGE:
            return {};

        default:
            return state;
    }
}

export default tree;
