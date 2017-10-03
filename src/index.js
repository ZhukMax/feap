import React from 'react';
import { browserHistory, Router, IndexRoute, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './app';
import NotFound from './components/errors/NotFound';
import Dashboard from './components/dashboard';
import List from './components/list';
import Edit from './components/edit';
import Filemanager from './components/filemanager';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class Feap extends React.Component {
    render() {
        let settings = this.props;

        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/admin" component={App} settings={settings}>
                        <IndexRoute component={Dashboard} />
                        <Route path="/admin/media" components={Filemanager} />
                        <Route path="/admin/:object" component={List}/>
                        <Route path="/admin/:object/:id" component={Edit}/>
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default Feap;