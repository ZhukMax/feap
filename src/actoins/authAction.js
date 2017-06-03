import * as constants from '../constants';
import post from '../helpers/ajax';

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
        response.end((err, res) => {
            if (err) {
                dispatch({
                    type: constants.USER_LOGIN_FALSE,
                    error: err
                });
            } else if (res.status !== 200) {
                dispatch({
                    type: constants.USER_LOGIN_FALSE,
                    error: "Error on server side, error code: " + res.status
                });
            } else {
                let data = JSON.parse(res.text);
                if (data.status === "error") {
                    dispatch({
                        type: constants.USER_LOGIN_FALSE,
                        error: data.message
                    });
                } else {
                    dispatch({
                        type: constants.USER_LOGGED_IN,
                        data: data
                    });
                }
            }
        });
    };
}

export function logoutAdmin() {
    return (dispatch) => {
        dispatch({
            type: constants.USER_LOGGED_OUT
        });
    }
}
