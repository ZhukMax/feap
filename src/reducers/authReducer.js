import * as constants from '../constants';
import { getState, setState, clearState } from '../store/localStorage';

const initialState = getState({
    "name": "auth",
    "value": {
        "auth": {
            "id": null,
            "login": null,
            "token": null,
            "loginButtonDisabled": false,
            "loginInputError": null,
            "passwordInputError": null,
            "loginFalse": null
        }
    }
});

function auth(state = initialState, action) {
    let newState;

    switch (action.type) {
        case constants.USER_LOGIN_FIELD_ERROR:
            newState = Object.assign({}, state, {
                loginInputError: "danger"
            });
            break;

        case constants.USER_LOGIN_FIELD_NOERROR:
            newState = Object.assign({}, state, {
                loginInputError: null
            });
            break;

        case constants.USER_PASS_FIELD_ERROR:
            newState = Object.assign({}, state, {
                passwordInputError: "danger"
            });
            break;

        case constants.USER_PASS_FIELD_NOERROR:
            newState = Object.assign({}, state, {
                passwordInputError: null
            });
            break;

        case constants.USER_LOGIN_REQUEST:
            newState = Object.assign({}, state, {
                loginButtonDisabled: true
            });
            break;

        case constants.USER_LOGGED_IN:
            newState = Object.assign({}, state, {
                id: action.data.id,
                login: action.data.login,
                token: action.data.token,
                loginButtonDisabled: false,
                loginFalse: null
            });
            break;

        case constants.USER_LOGIN_FALSE:
            newState = Object.assign({}, state, {
                loginFalse: action.error,
                loginButtonDisabled: false
            });
            break;

        case constants.USER_LOGGED_OUT:
            clearState({"name": "auth"});
            return Object.assign({}, state, {
                id: null,
                login: null,
                token: null,
                loginButtonDisabled: false
            });

        default:
            newState = state;
            break;
    }

    setState({"name": "auth", "value": newState});
    return newState;
}

export default auth;