import React, {Component, PropTypes} from "react";
import {Col, FormGroup, Form, FormControl, Button, ControlLabel} from "react-bootstrap"

export default class Registration extends Component{
    render(){
        const {registerUser} = this.props;
        return (
            <Form horizontal onSubmit={registerUser}>
                <FormGroup controlId='formFirstName'>
                    <Col componentClass={ControlLabel} sm={3}>
                        First Name
                    </Col>
                    <Col sm={4}>
                        <FormControl required type='text' placeholder='First Name' />
                    </Col>
                </FormGroup>
                <FormGroup controlId='formLastName'>
                    <Col componentClass={ControlLabel} sm={3}>
                        Last Name
                    </Col>
                    <Col sm={4}>
                        <FormControl required type='text' placeholder='Last Name' />
                    </Col>
                </FormGroup>
                <FormGroup controlId='formLogin'>
                    <Col componentClass={ControlLabel} sm={3}>
                        Login
                    </Col>
                    <Col sm={4}>
                        <FormControl required type='text' placeholder='Login' />
                    </Col>
                </FormGroup>
                <FormGroup controlId='formPassword'>
                    <Col componentClass={ControlLabel} sm={3}>
                        Password
                    </Col>
                    <Col sm={4}>
                        <FormControl required type='password' placeholder='Password' />
                    </Col>
                </FormGroup>
                <FormGroup controlId='formPasswordRepeat'>
                    <Col componentClass={ControlLabel} sm={3}>
                        Repeat password
                    </Col>
                    <Col sm={4}>
                        <FormControl required type='password' placeholder='Repeat Password' />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={3} sm={9}>
                        <Button bsStyle='primary' type='submit'>
                            Registration
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}


Registration.propTypes={
    registerUser: PropTypes.func.isRequired
};
