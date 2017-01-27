import React, { Component } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Head from '../head';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Head />
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

export default App;