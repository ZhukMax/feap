import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem,
    NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

import './navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        // TODO We need REDUX
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        let navigationItems = Object.assign({}, this.props.navigationItems);

        return (
            <Navbar light toggleable className="b-navigation">
                <Nav>
                    {
                        Object.keys(navigationItems).map(function (key) {
                            if (navigationItems[key].items) {
                                return (
                                    <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}
                                                 key={key.toString()}>
                                        <DropdownToggle nav caret>
                                            {navigationItems[key].title}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                Object.keys(navigationItems[key].items).map(function (key2) {
                                                    return (
                                                        <DropdownItem key={key2.toString()}>
                                                            <Link to={"/admin/" + key2}>{navigationItems[key].items[key2]}</Link>
                                                        </DropdownItem>
                                                    );
                                                }, this)
                                            }
                                        </DropdownMenu>
                                    </NavDropdown>
                                );
                            } else {
                                return (
                                    <NavItem key={key.toString()}>
                                        <Link to={"/admin/" + key}>{navigationItems[key]}</Link>
                                    </NavItem>
                                );
                            }
                        }, this)
                    }
                </Nav>
            </Navbar>
        );
    };
}

export default Navigation;