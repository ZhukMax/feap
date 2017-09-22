import * as constants from '../constants';
import { post, use } from '../helpers/ajax';

export function getData(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_GET_DATA_REQUEST
        });

        let response = post("/feap/" + payload.data.object + "/get", payload.token, payload.data);
        use(response, dispatch, constants.EDIT_FORM_GET_DATA_DONE, constants.EDIT_FORM_GET_DATA_FALSE);
    };
}

export function updateForm(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_UPDATE,
            id: payload.id,
            object: payload.type
        });
    };
}

export function dismissAlert(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_DISMISS_ALERT
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

export function add(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_GET_DATA_REQUEST
        });

        let response = post("/feap/" + payload.data.object + "/new", payload.token, payload.data);
        use(response, dispatch, constants.EDIT_FORM_GET_DATA_DONE, constants.EDIT_FORM_GET_DATA_FALSE);
    };
}

export function save(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_SAVE_REQUEST
        });

        let response = post("/feap/" + payload.data.object + "/save", payload.token, payload.data);
        use(response, dispatch, constants.EDIT_FORM_SAVE_DONE, constants.EDIT_FORM_SAVE_FALSE);
    };
}

export function remove(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_FORM_SAVE_REQUEST
        });

        let response = post("/feap/" + payload.data.object + "/delete", payload.token, payload.data);
        use(response, dispatch, constants.EDIT_FORM_DELETE_DONE, constants.EDIT_FORM_DELETE_FALSE);
    };
}