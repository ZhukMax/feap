import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTreeItems, createPage } from '../../actions/treeAction';
import { Nav, NavItem } from 'reactstrap';
import { Faicon } from 'faicon';

import './tree.css';

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        tree: state.tree
    };
};

class Tree extends React.Component {
    componentWillMount() {
        getTreeItems({"token": this.props.token})(this.props.dispatch);
    }

    treeMaker(items) {
        if(Object.prototype.toString.call(items) === '[object Object]') {
            return Object.keys(items).map(function (key) {
                if (items[key]) {
                    return (
                        <NavItem key={key.toString()}>
                            {
                                items[key].children ?
                                    <a href="#" className="b-tree-visible" onClick={this.openSubmenu.bind(this, key)}><Faicon name="angle-right"/></a>
                                    : ""
                            }
                            <Link to={ "/admin/pages/" + key }>{ items[key].title }</Link>
                            {
                                items[key].children ?
                                    <div id={"submenu-" + key} className="b-tree-submenu"><Nav vertical>{ this.treeMaker(items[key].children) }</Nav></div>
                                    : ""
                            }
                        </NavItem>
                    );
                }
            }, this);
        }
    }

    addPageHandler() {
        createPage({})(this.props.dispatch);
    }

    openSubmenu(id) {
        let submenu = document.getElementById("submenu-" + id);
        let display = submenu.style.display;

        if (display !== "block") {
            submenu.setAttribute("style", "display:block");
        } else {
            submenu.setAttribute("style", "display:none");
        }
    }

    render() {
        let treeItems = this.props.tree.tree;

        return (
            <div className="b-tree-navbar">
                <header>
                    ___ Страницы сайта
                    <a href="#" className="b-create-page" onClick={this.addPageHandler}><Faicon name="plus"/></a>
                </header>
                <Nav vertical className="b-tree-nav">
                    { this.treeMaker(treeItems) }
                </Nav>
            </div>
        );
    }
}

Tree = connect(mapStateToProps)(Tree);

export default Tree;
