import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getData, updateData } from '../../actions/listAction';
import ErrorView from '../errors/ErrorView';
import { Container, Row, Col, Table, Pagination, PaginationItem, PaginationLink,
    Button, ButtonGroup } from 'reactstrap';
import { Faicon } from 'faicon';

import './list.css';

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        items: state.list.items,
        request: state.list.request,
        error: state.list.error,
        type: state.list.type
    };
};

class List extends React.Component {
    componentWillMount() {
        this.getData();
        this.getData = this.getData.bind(this);
        this.getHead = this.getHead.bind(this);
        this.update = this.update.bind(this);
    }

    getData() {
        let data = {};
        data.object = this.props.params.object;

        getData({"token": this.props.token, data})(this.props.dispatch);
    }

    tableHeadMaker(data) {
        let fields = data.fields;

        return (
            <thead>
            <tr>
                <th>#</th>
                {
                    Object.keys(fields).map(function (key) {
                        return (
                            <th key={key.toString()}>{fields[key]}</th>
                        );
                    }, this)
                }
                <th>&nbsp;</th>
            </tr>
            </thead>
        )
    }

    tableMaker(data) {
        let items = data.items;

        return Object.keys(items).map(function (key) {
            return (
                <tr key={key.toString()}>
                    <th scope="row">{key.toString()}</th>
                    {
                        Object.keys(items[key]).map(function (innerKey) {
                            return (
                                <td key={innerKey.toString()}>
                                    { items[key][innerKey] ? items[key][innerKey] : "-" }
                                </td>
                            );
                        })
                    }
                    <th scope="row">
                        <Link to={ window.location.pathname + "/" + key }><Faicon name="pencil-square-o"/></Link>
                    </th>
                </tr>
            );
        }, this);
    }

    getHead() {
        return (
            <Container className="b-header">
                <Row>
                    <Col>
                        <header>
                            <h5>{ this.props.request === false ? this.props.items.title : ""}</h5>
                        </header>
                    </Col>
                    <Col className="b-edit-buttons" xs="auto">
                        <ButtonGroup>
                            <Link to={ window.location.pathname + "/new" }><Button outline color="info">Добавить</Button></Link>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        );
    }

    update() {
        if (this.props.params.object !== this.props.type) {
            let type = this.props.params.object;
            updateData({"type": type})(this.props.dispatch);

            this.getData();
        }
    }

    render() {
        // TODO В консоли варнинг, починить
        this.update();

        let listItems = this.props.items;

        if (this.props.error) {
            return (
                <div>
                    <ErrorView error={this.props.error}/>
                </div>
            );
        } else {
            return (
                <Container className="b-container">
                    { this.getHead() }
                    <div className="b-content-wrapper">
                        <Container className="b-content">
                            <Row>
                                <Col>
                                    <Table className="b-list-table" striped responsive hover>
                                        {
                                            this.props.request === false ? this.tableHeadMaker(listItems) : ""
                                        }
                                        <tbody>
                                        {
                                            this.props.request === false ? this.tableMaker(listItems) : ""
                                        }
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            );
        }
    };
}

List = connect(mapStateToProps)(List);

export default List;
