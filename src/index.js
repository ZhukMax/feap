'use strict';

import head from './components/head'

head('test3');

let test = "Hello Max!";

if (NODE_ENV == 'development') {
    console.log(test);
}

exports.feap = head;
