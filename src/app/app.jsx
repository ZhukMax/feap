import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/login';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.body.setAttribute("class", "feap");
    }

    render() {
        let settings = this.props.route.settings;
        const { token } = this.props;
        if (!token) {
            return(
                <div>
                    <Login />
                </div>
            );
        } else {
            return(
                <div>
                    <Sidebar/>
                    <Header navigationItems={ settings.navigationItems }/>
                    <div className="b-content">
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}

App = connect(mapStateToProps)(App);

export default App;
