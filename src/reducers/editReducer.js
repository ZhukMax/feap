import * as constants from '../constants';

const initialState = {
    "object": {},
    "load": false,
    "error": null
};

function edit(state = initialState, action) {
    switch (action.type) {
        case constants.EDIT_FORM_GET_DATA_REQUEST:
            return Object.assign({}, state, {
                load: true,
                error: null
            });

        case constants.EDIT_FORM_GET_DATA_FALSE:
            return Object.assign({}, state, {
                load: false,
                error: action.error
            });

        case constants.EDIT_FORM_GET_DATA_DONE:
            return Object.assign({}, state, {
                object: action.data,
                load: false,
                error: null
            });

        default:
            return state;
    }
}

export default edit;
