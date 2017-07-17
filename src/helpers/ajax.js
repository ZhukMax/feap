import request from 'superagent';
import nocache from 'superagent-no-cache';

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
            let data = JSON.parse(res.text);
            if (data.error) {
                dispatch({
                    type: falseType,
                    error: data.error
                });
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
