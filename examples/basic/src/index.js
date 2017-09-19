import React from 'react';
import ReactDOM from 'react-dom';
import Feap from 'feap';

let navigationItems = {
    "users": "Пользователи",
    "media": "Медиа-файлы",
    "polls": "Опросы"
};

const myApp = (
    <Feap
        navigationItems={navigationItems}
    />
);

ReactDOM.render(myApp, document.getElementById('root'));
