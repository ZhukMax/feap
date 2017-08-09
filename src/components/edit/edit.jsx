import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, ButtonGroup, TabContent, TabPane, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Loader from '../loader';
import classnames from 'classnames';
import { Faicon } from "faicon";
import { getData, save } from '../../actions/editAction';

import './edit.css';

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        load: state.edit.load,
        object: state.edit.object
    };
};

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    componentWillMount() {
        this.validation = this.validation.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
        this.getForm = this.getForm.bind(this);
        this.getFormData = this.getFormData.bind(this);
        this.getFormData();
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    validation(data) {
        let validation = true;
        return validation;
    }

    saveHandler() {
        let data = {};
        let formElements = document.getElementsByClassName('b-edit-input form-control');
        Object.keys(formElements).map(function (key) {
            if (formElements[key].id === key) {
                data[formElements[key].name] = formElements[key].value;
            }
        });

        if (this.validation(data)) {
            save({"data": data})(this.props.dispatch);
        }
    }

    getFormData() {
        let data = {};
        data.object = this.props.params.object;
        data.id = this.props.params.id;

        getData({"token": this.props.token, data})(this.props.dispatch);
    }

    tabsMaker() {}

    formMaker(items) {
        if(Object.prototype.toString.call(items) === '[object Object]') {
            return Object.keys(items).map(function (key) {
                if (items[key]) {
                    console.log(key + ":" + items[key]);
                }
            });
        }
    }

    getHead() {
        return (
            <Container className="b-edit-header">
                <Row>
                    <Col>
                        <header>
                            <h5>Edit</h5>
                        </header>
                    </Col>
                    <Col className="b-edit-buttons" xs="auto">
                        <ButtonGroup>
                            <Button color="primary" onClick={this.saveHandler}>Сохранить</Button>
                            <Button outline color="warning">Отменить</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        );
    }

    getForm() {
        let object = this.props.object;
        // console.log(object);
        this.formMaker(object);

        return (
            <div className="b-edit-content-wrapper">
                <Container className="b-edit-content">
                    <Row>
                        <Col>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className={classnames({active: this.state.activeTab === '1'})}
                                             onClick={() => {
                                                 this.toggle('1');
                                             }}>
                                        Tab1
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({active: this.state.activeTab === '2'})}
                                             onClick={() => {
                                                 this.toggle('2');
                                             }}>
                                        Tab2
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab} className="b-edit-tab-content">
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="6">
                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={2}
                                                       className="b-edit-label">Email</Label>
                                                <Col sm={10}>
                                                    <Input type="email" name="email" id="exampleEmail"
                                                           placeholder="with a placeholder"
                                                           className="b-edit-input"/>
                                                </Col>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="6">
                                            <FormGroup row>
                                                <Label for="exampleEmail2" sm={2}
                                                       className="b-edit-label">Email</Label>
                                                <Col sm={10}>
                                                    <Input type="email" name="email2" id="exampleEmail2"
                                                           placeholder="with a placeholder"
                                                           className="b-edit-input"/>
                                                </Col>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Tab 2 Contents</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    render() {
        return (
            <Container className="b-edit-container">
                { this.getHead() }
                {
                    this.props.load ? <Loader/> : this.getForm()
                }
            </Container>
        );
    }
}

Edit = connect(mapStateToProps)(Edit);

export default Edit;
