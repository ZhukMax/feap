import * as constants from '../constants';

const initialState = {
    "items": {},
    "request": null,
    "error": null,
    "type": null
};

function list(state = initialState, action) {
    switch (action.type) {
        case constants.LIST_GET_DATA_REQUEST:
            return Object.assign({}, state, {
                items: {},
                request: true,
                error: null
            });

        case constants.LIST_GET_DATA_DONE:
            return Object.assign({}, state, {
                items: action.data,
                request: false,
                error: null
            });

        case constants.LIST_GET_DATA_FALSE:
            return Object.assign({}, state, {
                items: {},
                request: false,
                error: action.error
            });

        case constants.LIST_UPDATE:
            return Object.assign({}, state, {
                type: action.object
            });

        default:
            return state;
    }
}

export default list;