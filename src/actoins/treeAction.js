import * as constants from '../constants';
import post from '../helpers/ajax';

export function getTreeItems(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.GET_TREE_REQUEST
        });

        let response = post("/api/auth", payload.token, payload.data);
        response.end((err, res) => {
            if (err) {
                dispatch({
                    type: constants.GET_TREE_FALSE,
                    error: err
                });
            } else if (res.status !== 200) {
                dispatch({
                    type: constants.GET_TREE_FALSE,
                    error: "Error on server side, error code: " + res.status
                });
            } else {
                let data = JSON.parse(res.text);
                dispatch({
                    type: constants.GET_TREE_DONE,
                    data: data
                });
            }
        });
    }
}

export function createPage(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.ADD_TREE_PAGE
        });
    }
}
