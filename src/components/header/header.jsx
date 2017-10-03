import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logoutAdmin } from '../../actions/authAction';
import { Container, Row, Col, Button } from 'reactstrap';
import { Faicon } from 'faicon';
import Navigation from '../navigation';

import './header.css';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

class Header extends React.Component {
    componentWillMount() {
        this.logoutHandler = this.logoutHandler.bind(this);
    };

    logoutHandler() {
        logoutAdmin()(this.props.dispatch);
    };

    render() {
        return (
            <Container className="b-header-container">
                <Row>
                    <Col>
                        <Navigation navigationItems={ this.props.navigationItems }/>
                    </Col>
                    <Col xs="auto">
                        <Link to="/admin/settings" className="b-header-button"><Faicon name="cogs"/></Link>
                    </Col>
                    <Col xs="auto">
                        <Button color="link" onClick={this.logoutHandler} className="b-header-button"><Faicon name="sign-out"/></Button>
                    </Col>
                </Row>
            </Container>
        );
    };
}

Header = connect(mapStateToProps)(Header);

export default Header;