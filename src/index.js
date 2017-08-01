import React from "react"
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {render} from "react-dom"
import {Provider} from "react-redux"
import Questions from "./containers/Questions";
import Themes from "./containers/Themes";
import Result from "./containers/Result";
import LogInPage from "./containers/LogInPage";
import RegistrationPage from "./containers/RegistrationPage"
import App from "./App"
import configureStore from "./store/configureStore";


import "./styles/App.less"


const store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={LogInPage}/>
                <Route path='registration' component={RegistrationPage}/>
            </Route>
            <Route path='themes' component={Themes}>
                <Route path='questions/:theme' component={Questions}/>
                <Route path='result' component={Result}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);