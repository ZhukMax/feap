import * as constants from '../constants';

export const loginAdmin = (payload) => {
    return (dispatch) => {
        dispatch({
            type: constants.USER_LOGIN_REQUEST
        });
        post(payload.token, '/api/index/index', payload.data);
    }
};

export function logoutAdmin() {
    return {
        type: constants.USER_LOGGED_OUT
    }
}
