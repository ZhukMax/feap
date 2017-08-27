import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Container, Row, Col, Button, ButtonGroup, TabContent,
    TabPane, Nav, NavItem, NavLink, Form, Alert } from 'reactstrap';
import Loader from '../loader';
import FormInput from "../input";
import classnames from 'classnames';
import { getData, add, save, remove, updateForm, dismissAlert } from '../../actions/editAction';

import './edit.css';

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        load: state.edit.load,
        object: state.edit.object,
        id: state.edit.id,
        type: state.edit.type,
        alert: state.edit.alert
    };
};

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.tabsMaker = this.tabsMaker.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 't0',
            id: null
        };

        this.validation = this.validation.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.getForm = this.getForm.bind(this);
        this.getFormData = this.getFormData.bind(this);
        this.update = this.update.bind(this);
        this.onDismissAlert = this.onDismissAlert.bind(this);
    }

    onDismissAlert() {
        dismissAlert()(this.props.dispatch);
    }

    getFormData() {
        let data = {};
        data.object = this.props.params.object;
        data.id = this.props.params.id;

        if (data.id !== "new") {
            getData({"token": this.props.token, data})(this.props.dispatch);
        } else {
            add({"token": this.props.token, data})(this.props.dispatch);
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            // TODO where is my lovely redux?
            this.setState({
                activeTab: tab
            });
        }
    }

    // TODO
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
            if (this.props.id !== "new") {
                data["id"] = this.props.id;
            }
            data["object"] = this.props.type;
            save({"token": this.props.token, "data": data})(this.props.dispatch);
        }
    }

    deleteHandler() {
        let data = {};
        data["id"] = this.props.id;
        data["object"] = this.props.type;
        remove({"token": this.props.token, "data": data})(this.props.dispatch);

        // TODO redirect
    }

    tabsMaker(items) {
        if(Object.prototype.toString.call(items) === '[object Object]') {
            let e = this;
            return Object.keys(items).map((key, i) => {
                return (
                    <NavItem key={i}>
                        <NavLink className={classnames({active: e.state.activeTab === 't' + i})}
                                 onClick={() => {
                                     e.toggle('t' + i);
                                 }}>
                            { key }
                        </NavLink>
                    </NavItem>
                );
            });
        }
    }

    formMaker(items) {
        if(Object.prototype.toString.call(items) === '[object Object]') {
            return Object.keys(items).map((key, i) => {
                if(Object.prototype.toString.call(items[key]) === '[object Object]') {
                    return (
                        <TabPane tabId={"t" + i} key={i}>
                            {
                                Object.keys(items[key]).map((key2, y) => {
                                    return (
                                        <Row key={y}>
                                            <Col sm="12">
                                                <FormInput item={items[key][key2]} name={key2} id={key2} class="b-edit-"/>
                                            </Col>
                                        </Row>
                                    );
                                })
                            }
                        </TabPane>
                    );
                }
            });
        }
    }

    getHead() {
        return (
            <Container className="b-header">
                <Row>
                    <Col>
                        <header>
                            <h5>Edit</h5>
                        </header>
                    </Col>
                    <Col className="b-edit-buttons" xs="auto">
                        <ButtonGroup>
                            <Button color="primary" onClick={this.saveHandler}>Сохранить</Button>
                            <Button outline color="warning" onClick={this.deleteHandler}>Удалить</Button>
                            <Link to={"/admin/"}><Button outline color="warning">Отменить</Button></Link>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        );
    }

    getForm() {
        let object = this.props.object;
        this.formMaker(object);

        return (
            <div className="b-content-wrapper">
                <Container className="b-content">
                    <Row>
                        <Col>
                            <Form id={"b-edit-form"}>
                                <Nav tabs>
                                    { this.tabsMaker(object) }
                                </Nav>
                                <TabContent activeTab={this.state.activeTab} className="b-edit-tab-content">
                                    { this.formMaker(object)}
                                </TabContent>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    update() {
        if (this.props.params.id !== this.props.id || this.props.params.object !== this.props.type) {
            let id = this.props.params.id;
            let type = this.props.params.object;
            updateForm({"id": id, "type": type})(this.props.dispatch);

            this.getFormData();
        }
    }

    render() {
        // TODO В консоли варнинг, починить
        this.update();

        let color = this.props.alert.color ? this.props.alert.color : "info" ;

        return (
            <Container className="b-container">
                <Alert color={color} isOpen={this.props.alert.visible} toggle={this.onDismissAlert}>
                    { this.props.alert.message }
                </Alert>
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