import * as constants from '../constants';
import post from '../helpers/ajax';

export function getData(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_GET_DATA_REQUEST
        });

        let response = post("/api/auth", payload.token, payload.data);
        response.end((err, res) => {
            if (err) {
                dispatch({
                    type: constants.EDIT_FORM_GET_DATA_FALSE,
                    error: err
                });
            } else if (res.status !== 200) {
                dispatch({
                    type: constants.EDIT_FORM_GET_DATA_FALSE,
                    error: "Error on server side, error code: " + res.status
                });
            } else {
                let data = JSON.parse(res.text);
                dispatch({
                    type: constants.EDIT_FORM_GET_DATA_DONE,
                    data: data
                });
            }
        });
    };
}

export function inputError(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_FIELD_ERROR
        });
    };
}

export function inputNoError(payload) {
    return (dispatch) => {};
}

export function save(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_SAVE_REQUEST
        });
    };
}
