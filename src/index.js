'use strict';

import head from './components/App'

let test = "Max Zhuk!";

if (NODE_ENV == 'development') {
    console.log(test);
}

exports.index = head;
