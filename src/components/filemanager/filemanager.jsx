import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import './filemanager.css';

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
};

class Filemanager extends React.Component {
    componentWillMount() {
        this.treeClickHandler = this.treeClickHandler.bind(this);
    }

    treeClickHandler() {}

    render() {
        return (
            <Container className="b-container">
                <div className="b-content-wrapper">
                    <Container className="b-content">
                        <Row>
                            <Col xs="3">
                                <Container className="b-files-tree">
                                    <Row>
                                        <Col>
                                            <Nav vertical>
                                                <NavItem>
                                                    <NavLink href="#" onClick={this.treeClickHandler}>Link</NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col xs="9">
                                <Container className="b-files-tree">
                                    <Row>
                                        <Col></Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        );
    }
}

Filemanager = connect(mapStateToProps)(Filemanager);

export default Filemanager;