import * as constants from '../constants';

const initialState = {
    "object": {},
    "load": true,
    "error": null,
    "id": null,
    "type": null,
    "alert": {
        "visible": false,
        "message": null,
        "color": null
    },
    "redirect": false
};

function edit(state = initialState, action) {
    switch (action.type) {
        case constants.EDIT_FORM_GET_DATA_REQUEST:
            return Object.assign({}, state, {
                load: true,
                error: null
            });

        case constants.EDIT_FORM_GET_DATA_DONE:
            return Object.assign({}, state, {
                object: action.data,
                load: false,
                error: null
            });

        case constants.EDIT_FORM_GET_DATA_FALSE:
            return Object.assign({}, state, {
                load: false,
                error: action.error
            });

        case constants.EDIT_FORM_UPDATE:
            return Object.assign({}, state, {
                id: action.id,
                type: action.object
            });

        case constants.EDIT_FORM_SAVE_REQUEST:
            return Object.assign({}, state, {
            });

        case constants.EDIT_FORM_SAVE_DONE:
            return Object.assign({}, state, {
                alert: {
                    visible: true,
                    message: action.data.message,
                    color: "success"
                }
            });

        case constants.EDIT_FORM_SAVE_FALSE:
            return Object.assign({}, state, {
                alert: {
                    visible: true,
                    message: action.error,
                    color: "danger"
                }
            });

        case constants.EDIT_FORM_DISMISS_ALERT:
            return Object.assign({}, state, {
                alert: {
                    visible: false
                }
            });

        case constants.EDIT_FORM_DELETE_DONE:
            return Object.assign({}, state, {
                alert: {
                    visible: true,
                    message: action.data.message,
                    color: "success"
                },
                redirect: true
            });

        case constants.EDIT_FORM_DELETE_FALSE:
            return Object.assign({}, state, {
                alert: {
                    visible: true,
                    message: action.error,
                    color: "danger"
                }
            });

        default:
            return state;
    }
}

export default edit;