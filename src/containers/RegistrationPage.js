import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {registerUser} from "../actions/SessionActions";
import Registration from "../components/Registration"


class RegistrationPage extends Component {

    handleRegisterUser(e) {
        e.preventDefault();
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
        this.props.registerUser(user)
    }

    render() {
        return (
            <Registration registerUser={this.handleRegisterUser.bind(this)}/>
        )
    }
}

function State() {
    return {}
}
function Dispatch(dispatch) {
    return {
        registerUser: bindActionCreators(registerUser, dispatch)
    }
}

export default connect(State, Dispatch)(RegistrationPage)