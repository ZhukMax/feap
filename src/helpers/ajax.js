import request from 'superagent';
import nocache from 'superagent-no-cache';

export default (jwt, url, data = {}) => {
    let response;

    response =
        request.post(url)
            .set('Jwt', jwt)
            .accept('application/json')
            .type('form')
            .use(nocache)
            .send(data)
            .end();

    return response.xhr;
}
