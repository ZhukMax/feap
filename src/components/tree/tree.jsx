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
        return Object.keys(items).map(function (key) {
            return (
                <NavItem key={key.toString()}>
                    <Link to={ "/admin/pages/" + key }>{ items[key].title }</Link>
                    {
                        items[key].children ?
                            <Nav vertical>{ this.treeMaker(items[key].children) }</Nav>
                            : ""
                    }
                </NavItem>
            );
        }, this);
    }

    addPageHandler() {
        createPage({})(this.props.dispatch);
    }

    render() {
        let treeItems = this.props.tree;

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
