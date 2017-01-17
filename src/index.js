import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

const feapApp = (
    <Router history={browserHistory}>
        {routes}
    </Router>
);

ReactDOM.render(feapApp, document.getElementById('feap-root'));
