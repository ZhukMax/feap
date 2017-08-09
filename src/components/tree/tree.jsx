import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTreeItems, createPage } from '../../actions/treeAction';
import { Nav, NavItem } from 'reactstrap';
import { Faicon } from 'faicon';
import { Scrollbars } from 'react-custom-scrollbars';

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
            return Object.keys(items).map((key) => {
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
        /**
         * Wrong, but easy way
         * TODO fix this method and add action
         *
         * @type {Element}
         */
        let submenu = document.getElementById("submenu-" + id);
        let display = submenu.style.display;

        if (display !== "block") {
            submenu.setAttribute("style", "display:block");
        } else {
            submenu.setAttribute("style", "display:none");
        }

        // TODO Add animation for <Faicon name="angle-right"/> :31
    }

    autoHeightMax() {
        return window.innerHeight - 120;
    }

    // TODO Add loader
    render() {
        let treeItems = this.props.tree.tree;

        return (
            <div className="b-tree-navbar">
                <header>
                    ___ Страницы сайта
                    <a href="#" className="b-create-page" onClick={this.addPageHandler}><Faicon name="plus"/></a>
                </header>
                <Scrollbars autoHeight autoHeightMin={100} autoHeightMax={this.autoHeightMax()}
                            autoHide autoHideTimeout={1000} autoHideDuration={200}>
                    <Nav vertical className="b-tree-nav">
                        { this.treeMaker(treeItems) }
                    </Nav>
                </Scrollbars>
            </div>
        );
    }
}

Tree = connect(mapStateToProps)(Tree);

export default Tree;
