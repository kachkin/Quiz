import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import LogIn from "../components/LogIn";
import {userAuth} from "../actions/SessionActions";
import {browserHistory} from "react-router"

class LogInPage extends Component {
    handleFormSubmit(e) {
        e.preventDefault();
        var login = e.target.elements["formHorizontalLogin"].value;
        var password = e.target.elements["formHorizontalPassword"].value;
        if(!this.props.login){
            document.getElementById("error-login").innerHTML="Incorrect login or password"
        }
        this.props.userAuth(login, password);
    }

    goToRegistration() {
        browserHistory.push("/registration");
    }

    render() {
        return <div>
            <LogIn userAuth={this.handleFormSubmit.bind(this)} goToRegistration={this.goToRegistration.bind(this)}/>
        </div>
    }
}

function mapStateProps(state) {
    return {
        login: state.session.login
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAuth: bindActionCreators(userAuth, dispatch)
    }
}

export default connect(mapStateProps, mapDispatchToProps)(LogInPage)