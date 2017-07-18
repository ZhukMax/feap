import request from 'superagent';
import nocache from 'superagent-no-cache';
import * as constants from '../constants';

function post(url, token, data = {}) {
    let response;

    response =
        request.post(url)
            .set('Jwt', token)
            .accept('application/json')
            .type('form')
            .use(nocache)
            .send(data);

    return response;
}

function use(response, dispatch, doneType, falseType) {
    response.end((err, res) => {
        if (err) {
            dispatch({
                type: falseType,
                error: err
            });
        } else if (res.status !== 200) {
            dispatch({
                type: falseType,
                error: "Error on server side, error code: " + res.status
            });
        } else {
            // TODO проблема если приходит не Объект, тогда все нахрен зависает
            let data = JSON.parse(res.text);

            if (data.status === "error") {
                if (data.message === "Bad jwt-token") {
                    dispatch({
                        type: constants.USER_LOGGED_OUT
                    });
                } else {
                    dispatch({
                        type: falseType,
                        error: data.message
                    });
                }
            } else {
                dispatch({
                    type: doneType,
                    data: data
                });
            }
        }
    });
}

export { post, use };
