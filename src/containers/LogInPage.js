import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import LogIn from "../components/LogIn";
import {userAuth, registerUser} from "../actions/SessionActions";

class LogInPage extends Component{
    render(){
        return <div>
            <LogIn userAuth={this.props.userAuth}/>
        </div>
    }
}

function mapStateProps(state) {
    return {
        login: state.session.login
    }
}

function mapDispatchToProps(dispatch) {
    return{
        userAuth: bindActionCreators(userAuth, dispatch),
        registerUser: bindActionCreators(registerUser, dispatch)
    }
}

export default connect(mapStateProps, mapDispatchToProps)(LogInPage)