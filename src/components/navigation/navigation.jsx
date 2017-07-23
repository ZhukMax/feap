import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'reactstrap';

import './navigation.css';

class Navigation extends React.Component {
    render() {
        let navigationItems = Object.assign({}, {
            "users": "Users",
            "media": "Media"
        }, this.props.navigationItems);

        return (
            <Navbar light toggleable className="b-navigation">
                <Nav>
                    { Object.keys(navigationItems).map(function (key) {
                        return (
                            <NavItem key={key.toString()}>
                                <Link to={ "/admin/" + key }>{ navigationItems[key] }</Link>
                            </NavItem>
                        );
                    }, this)}
                </Nav>
            </Navbar>
        );
    };
}

export default Navigation;
