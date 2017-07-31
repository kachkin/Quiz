
import React, {PropTypes, Component} from "react";

import {Col, FormGroup, Form, FormControl, Button, ControlLabel} from "react-bootstrap"

export default class LogIn extends Component{
    handleFormSubmit(e){
        e.preventDefault();
        var login = e.target.elements["formHorizontalLogin"].value;
        var password = e.target.elements["formHorizontalPassword"].value;
        this.props.userAuth(login, password);
    }
    render(){
        return<Form onSubmit={this.handleFormSubmit.bind(this)} horizontal>
            <FormGroup controlId='formHorizontalLogin'>
                <Col componentClass={ControlLabel} sm={2}>
                    Login
                </Col>
                <Col sm={10}>
                    <FormControl type='login' placeholder='Login' />
                </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalPassword'>
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl type='password' placeholder='Password' />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type='submit'>
                        Sign in
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    }
}

LogIn.propTypes = {
    userAuth: PropTypes.func.isRequired
}