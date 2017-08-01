import React, {PropTypes, Component} from "react";

import {Col, FormGroup, Form, FormControl, Button, ControlLabel} from "react-bootstrap"

export default class LogIn extends Component {

    render() {
        const {userAuth, goToRegistration} = this.props
        return <Form onSubmit={userAuth} horizontal>
            <FormGroup controlId='formHorizontalLogin'>
                <Col componentClass={ControlLabel} sm={3}>
                    Login
                </Col>
                <Col sm={4}>
                    <FormControl required type='text' placeholder='Login'/>
                </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalPassword'>
                <Col componentClass={ControlLabel} sm={3}>
                    Password
                </Col>
                <Col sm={4}>
                    <FormControl required type='password' placeholder='Password'/>
                </Col>
            </FormGroup>

            <FormGroup controlId='formErrorLogIn'>
                <Col componentClass={ControlLabel} sm={3}>
                </Col>
                <Col id='error-login' sm={4}>

                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={3} sm={1}>
                        <Button bsStyle='primary' type='submit'>
                            Sign in
                        </Button>
                </Col>
                <Col smOffset={1} sm={3}>
                    <Button bsStyle='primary' type='button' onClick={goToRegistration}>
                        Registration
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    }
}

LogIn.propTypes = {
    userAuth: PropTypes.func.isRequired,
    goToRegistration: PropTypes.func.isRequired
}