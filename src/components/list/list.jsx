import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getData } from '../../actions/listAction';
import ErrorView from '../errors/ErrorView';
import { Container, Row, Col, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './list.css';

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        items: state.list.items,
        request: state.list.request,
        error: state.list.error
    };
};

class List extends React.Component {
    componentWillMount() {
        this.getData();
        this.getData = this.getData.bind(this);
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
                </tr>
            );
        }, this);
    }

    render() {
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
                    <Container className="b-header">
                        <Row>
                            <Col>
                                <header>
                                    <h5>{ this.props.request === false ? listItems.title : ""}</h5>
                                </header>
                            </Col>
                        </Row>
                    </Container>
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
