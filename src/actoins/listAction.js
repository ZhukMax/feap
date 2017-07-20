import * as constants from '../constants';
import { post, use } from '../helpers/ajax';

export function getData(payload) {
    return (dispatch) => {
        dispatch({
           type: constants.LIST_GET_DATA_REQUEST
        });

        let response = post("/api/" + payload.data.object + "/get", payload.token, payload.data);
        use(response, dispatch, constants.LIST_GET_DATA_DONE, constants.LIST_GET_DATA_FALSE);
    };
}
