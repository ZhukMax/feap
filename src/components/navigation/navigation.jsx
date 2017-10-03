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
            dropdownOpen: "none"
        };
    }

    toggle() {
        if (this.state.dropdownOpen === "none") {
            this.setState({
                dropdownOpen: "block"
            });
        } else {
            this.setState({
                dropdownOpen: "none"
            });
        }
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
                                    <NavDropdown toggle={this.toggle}
                                                 key={key.toString()}>
                                        <DropdownToggle nav caret>
                                            {navigationItems[key].title}
                                        </DropdownToggle>
                                        <DropdownMenu style={{display:this.state.dropdownOpen}}>
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