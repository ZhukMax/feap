import React      from 'react';
import ReactDOM   from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/configureStore';

const store = configureStore();

const feapApp = (
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>
);

ReactDOM.render(feapApp, document.getElementById('feap-root'));
