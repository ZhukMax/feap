import * as constants from '../constants';
import post from '../helpers/ajax';

export function getData(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_GET_DATA_REQUEST
        });

        let response = post("/api/auth", payload.token, payload.data);
        use(response, dispatch, constants.EDIT_FORM_GET_DATA_DONE, constants.EDIT_FORM_GET_DATA_FALSE);
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
