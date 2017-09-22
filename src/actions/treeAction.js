import * as constants from '../constants';
import { post, use } from '../helpers/ajax';

export function getTreeItems(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.GET_TREE_REQUEST
        });

        let response = post("/api/tree", payload.token, {});
        use(response, dispatch, constants.GET_TREE_DONE, constants.GET_TREE_FALSE);
    }
}

export function createPage(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.ADD_TREE_PAGE
        });
    }
}