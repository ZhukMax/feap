import * as constants from '../constants';
import { post, use } from '../helpers/ajax';

export function inputError(payload) {
    return (dispatch) => {
        let type;

        if (payload.field === "login") {
            type = constants.USER_LOGIN_FIELD_ERROR;
        } else {
            type = constants.USER_PASS_FIELD_ERROR;
        }

        dispatch({
            type: type
        });
    };
}

export function inputNoError(payload) {
    return (dispatch) => {
        let type;

        if (payload.field === "login") {
            type = constants.USER_LOGIN_FIELD_NOERROR;
        } else {
            type = constants.USER_PASS_FIELD_NOERROR;
        }

        dispatch({
            type: type
        });
    };
}

export function loginAdmin(payload) {
    return (dispatch) => {
        dispatch({
            type: constants.USER_LOGIN_REQUEST
        });

        let response = post("/api/auth", "", payload.data);
        use(response, dispatch, constants.USER_LOGGED_IN, constants.USER_LOGIN_FALSE);
    };
}

export function logoutAdmin() {
    return (dispatch) => {
        dispatch({
            type: constants.USER_LOGGED_OUT
        });
    }
}
