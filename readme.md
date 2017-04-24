# FrontEnd Admin Panel

# While this does not work, I try to make the first version!!!

## Install

#### With Yarn
`yarn add feap`

#### With npm
`npm i --save feap`

## Use
After install feap, react, react-dom, redux and webpack, you must create local project with feap using:
```javascript
/* src/index.js */
import React from 'react'
import ReactDOM from 'react-dom'
import feap from 'feap'

const myApp = (
    <feap />
);

ReactDOM.render(myApp, document.getElementById('root'));
```
You can see simple example in directory `examples/basic` or how I use it in my another projects like [Phoxie][link-phoxie]

## Credits 
#### Plugins:
* Facebook React.js
* React DOM
* React Router
* Bootstrap 4
* Reactstrap
* Redux
* Webpack
* Babel
* Superagent

#### Font Icons:
* Font Awesome 4

[link-phoxie]: https://github.com/ZhukMax/phoxie
