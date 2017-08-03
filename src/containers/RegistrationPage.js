import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
    registerUser,
    validateFirstName,
    validateLastName,
    validatePassword,
    validateLogin,
    checkRepeatPassword
} from "../actions/SessionActions";
import Registration from "../components/Registration"


class RegistrationPage extends Component {

    handleRegisterUser(e) {
        e.preventDefault();
        if(this.props.validation.password&&
            this.props.validation.firstName&&
            this.props.validation.lastName&&
            this.props.validation.login&&
            this.props.validation.repeat){
        var firstName = e.target.elements["formFirstName"].value;
        var lastName = e.target.elements["formLastName"].value;
        var login = e.target.elements["formLogin"].value;
        var password = e.target.elements["formPassword"].value;
        var user = {
            firstName,
            lastName,
            login,
            password,
            teacher: false
        };
        this.props.registerUser(user)}
    }

    handleValidateFirstName(value) {
        this.props.validateFirstName(value);
        return this.props.validation.firstName;
    }

    handleValidateLastName(value) {
        this.props.validateLastName(value);
        return this.props.validation.lastName;
    }

    handleValidatePassword(value){
        this.props.validatePassword(value);
        return this.props.validation.password;
    }
    handleValidateLogin(value){
        this.props.validateLogin(value);
        return this.props.validation.login;
    }
    handleCheckRepeatPassword(repeatPassword){
        var password = document.getElementById("formPassword").value;
        this.props.checkRepeatPassword(password, repeatPassword);
        return this.props.validation.repeat;
    }

    render() {
        return (
            <Registration registerUser={this.handleRegisterUser.bind(this)}
                          validateFirstName={this.handleValidateFirstName.bind(this)}
                          validateLastName={this.handleValidateLastName.bind(this)}
                          validatePassword={this.handleValidatePassword.bind(this)}
                          validateLogin={this.handleValidateLogin.bind(this)}
                          checkRepeatPassword={this.handleCheckRepeatPassword.bind(this)}
            />
        )
    }
}

function State(state) {
    return {
        validation: state.session.validation
    }
}
function Dispatch(dispatch) {
    return {
        registerUser: bindActionCreators(registerUser, dispatch),
        validateFirstName: bindActionCreators(validateFirstName, dispatch),
        validateLastName: bindActionCreators(validateLastName, dispatch),
        validatePassword: bindActionCreators(validatePassword, dispatch),
        validateLogin: bindActionCreators(validateLogin, dispatch),
        checkRepeatPassword: bindActionCreators(checkRepeatPassword, dispatch)
    }
}

export default connect(State, Dispatch)(RegistrationPage)