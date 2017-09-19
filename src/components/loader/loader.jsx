import React from 'react';
import { Faicon } from 'faicon';

import './loader.css';

class Loader extends React.Component {
    render() {
        return (
            <div className="b-loader">
                <Faicon name="spinner" spin/>
            </div>
        );
    }
}

export default Loader;