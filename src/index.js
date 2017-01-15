'use strict';

import head from './components/App'

let test = "Hello Mad Max!";

if (NODE_ENV == 'development') {
    console.log(test);
}

exports.index = head;
