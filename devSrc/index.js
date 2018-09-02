import React from 'react';
import ReactDOM from 'react-dom';
import Feap from '../src';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

let navigationItems = {
    "users": "Пользователи",
    "media": "Медиа-файлы",
    "polls": "Опросы"
};

const myApp = (
    <Feap
        apiUrl="http://localhost:9000"
        navigationItems={navigationItems}
    />
);

ReactDOM.render(myApp, document.getElementById('root'));