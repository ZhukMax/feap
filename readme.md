# FrontEnd Admin Panel (alfa)

## Install

#### With Yarn
`yarn add feap`

#### With npm
`npm i --save feap`

## Use
After installing feap you must create local project with feap using:
```javascript
/* src/index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Feap from 'feap';

let navigationItems = {
    "users": "Users"
};

const myApp = (
    <Feap
        navigationItems={navigationItems}
    />
);

ReactDOM.render(myApp, document.getElementById('root'));
```
You can see simple example in directory `examples/basic`

## Credits 
#### Plugins:
* Facebook React.js
* React DOM
* React Router
* [Bootstrap 4][link-Bootstrap]
* [Reactstrap][link-reactstrap]
* Redux
* Webpack
* Babel
* Superagent
* react-custom-scrollbars
* react-l20n-u (soon)

#### Font Icons:
* Font Awesome 4
* Faicon

## Change log

Please see [CHANGELOG](changelog.md) for more information what has changed recently.

## License

The Apache License Version 2.0. Please see [License File](license.md) for more information.

[link-reactstrap]: https://reactstrap.github.io
[link-Bootstrap]: http://getbootstrap.com/
