import React from 'react';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import routes from './routes';

const store = configureStore(initialState());
const history = syncHistoryWithStore(browserHistory, store);

const feap = (
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
);

export default feap;
