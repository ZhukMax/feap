import React from 'react';
import { connect } from 'react-redux';
import { loginAdmin, inputError, inputNoError } from '../../actions/authAction';
import { Container, Col, Jumbotron, Form, FormGroup, FormFeedback, Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { Faicon } from 'faicon';

import './login.css';

const mapStateToProps = (state) => {
    return {
        button: state.auth.loginButtonDisabled,
        loginInputError: state.auth.loginInputError,
        passwordInputError: state.auth.passwordInputError,
        loginFalse: state.auth.loginFalse
    };
};

class Login extends React.Component {
    componentWillMount() {
        document.body.setAttribute("class", "login-page");
        this.onClickHandler = this.onClickHandler.bind(this);
        this.validation = this.validation.bind(this);
    }

    validation(data) {
        let validation = true;
        if (data.login.length < 3) {
            inputError({"field": "login"})(this.props.dispatch);
            validation = false;
        } else {
            inputNoError({"field": "login"})(this.props.dispatch);
            validation = true;
        }

        if (data.password.length < 3) {
            inputError({"field": "password"})(this.props.dispatch);
            validation = false;
        } else {
            inputNoError({"field": "password"})(this.props.dispatch);
            validation = true;
        }

        return validation;
    }

    onClickHandler(e) {
        e.preventDefault();
        let loginInput = document.getElementById("formLogin");
        let passwordInput = document.getElementById("formPassword");

        let data = {
            "login": loginInput.value,
            "password": passwordInput.value
        };

        if (this.validation(data)) {
            loginAdmin({"data": data})(this.props.dispatch);
        }
    }

    render() {
        return (
            <Container className="b-container-login-page">
                <h4><strong>Admin</strong> Panel</h4>
                <Jumbotron className="b-jumbotron-login-page">
                    <Form>
                        <FormGroup row color={ this.props.loginInputError }>
                            <Label for="formLogin" sm={2}>Логин </Label>
                            <Col sm={10}>
                                <InputGroup>
                                    <InputGroupAddon><Faicon name="user"/></InputGroupAddon>
                                    <Input type="text" name="login" id="formLogin"/>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup row color={ this.props.passwordInputError }>
                            <Label for="formPassword" sm={2}>Пароль </Label>
                            <Col sm={10}>
                                <InputGroup>
                                    <InputGroupAddon><Faicon name="lock"/></InputGroupAddon>
                                    <Input type="password" name="password" id="formPassword"/>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 8, offset: 7 }}>
                                <Button id="b-form-login-button" onClick={this.onClickHandler} disabled={ this.props.button }>
                                    <Faicon name="refresh" spin/> Вход
                                </Button>
                            </Col>
                            <FormFeedback>{ this.props.loginFalse }</FormFeedback>
                        </FormGroup>
                    </Form>
                </Jumbotron>
            </Container>
        );
    }
}

Login = connect(mapStateToProps)(Login);

export default Login;
