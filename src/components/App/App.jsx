import React, { Component } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Dashboard from '../dashboard';
import Head from '../head';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <Grid>
                    <Dashboard />
                </Grid>
            </div>
        );
    }
}

export default App;