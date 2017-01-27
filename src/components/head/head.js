import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class Head extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>FeaPanel</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav navbar>
                        <LinkContainer to="/users">
                            <NavItem>Users</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/settings">
                            <NavItem>Settings</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Head;
