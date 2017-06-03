import * as constants from '../constants';
import post from '../helpers/ajax';

export function getData(payload) {
    return (dispatch) => {
        dispatch({
           type: constants.LIST_GET_DATA_REQUEST
        });

        let response = post("/api/" + payload.data.object + "/get", payload.token, payload.data);
        response.end((err, res) => {
            if (err) {
                dispatch({
                    type: constants.LIST_GET_DATA_FALSE,
                    error: err
                });
            } else if (res.status !== 200) {
                dispatch({
                    type: constants.LIST_GET_DATA_FALSE,
                    error: "Error on server side, error code: " + res.status
                });
            } else {
                let data = JSON.parse(res.text);
                if (data.status === "error") {
                    dispatch({
                        type: constants.LIST_GET_DATA_FALSE,
                        error: data.message
                    });
                } else {
                    dispatch({
                        type: constants.LIST_GET_DATA_DONE,
                        data: data
                    });
                }
            }
        });
    };
}
