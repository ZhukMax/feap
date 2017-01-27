import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from './components/App';
import Dashboard from './components/dashboard';
import Settings from './components/settings';
import Users from './components/users';
import NoMatch from './components/errors/404';

export default (
    <Route component={App} path="/">
        <IndexRoute             component={Dashboard} />
        <Route path="settings"  component={Settings} />
        <Route path="users"     component={Users} />
        <Route path="*"         component={NoMatch} />
    </Route>
);