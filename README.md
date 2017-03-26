# FrontEnd Admin Panel

## Install

#### With Yarn
`yarn add feap`

#### With npm
`npm i --save feap`

## Use
After install feap, react, react-dom, redux and webpack, you must create local project with feap using:
```javascript
/* path/to/frontent/sources/index.js */
import React from 'react'
import ReactDOM from 'react-dom'
import feap from 'feap'

const myApp = (
    <feap />
);

ReactDOM.render(myApp, document.getElementById('root'));
```
You can see simple example in directory `examples/basic` or how I use it in my another projects like Phoxie ([https://github.com/ZhukMax/phoxie][link-phoxie])

## Credits 
#### Plugins:
* Facebook React.js
* React DOM
* React Router
* Bootstrap (react-bootstrap)
* Redux
* Webpack
* Webpack DevServer
* Babel
* Bootswatch Theme

#### Font Icons:
* Glyphicons

[link-phoxie]: https://github.com/ZhukMax/phoxie
