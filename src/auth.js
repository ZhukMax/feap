'use strict';

import auth from './components/auth'

document.getElementById('signup-button').onclick = function () {
    require.ensure(['./components/signup'], function (require) {
        let signup = require('./components/signup');

        signup();
    }, 'signup');
};

exports.auth = auth;
