import React, { Component } from 'react';
import ReduxCounter from './ReduxCounter';

class Settings extends Component {
    render() {
        return (
            <div>
                <h3>Redux Counter</h3>
                <ReduxCounter />
            </div>
        );
    }
}

export default Settings;