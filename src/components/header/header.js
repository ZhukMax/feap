import React from 'react';
import { connect } from 'react-redux';
import { logoutAdmin } from '../../actions/authAction';
import { Container, Row, Col, Button, NavLink } from 'reactstrap';
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
                        <Navigation/>
                    </Col>
                    <Col xs="auto">
                        <NavLink href="#" className="b-header-button"><Faicon name="cogs"/></NavLink>
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
