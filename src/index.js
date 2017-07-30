import React from "react"
import {Router, Route, browserHistory} from "react-router";
import {render} from "react-dom"
import {Provider} from "react-redux"
import Questions from "./containers/Questions";
import Themes from "./containers/Themes";
import Result from "./containers/Result"
import configureStore from "./store/configureStore"
const store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Themes}>
                <Route path='themes/:theme' component={Questions}/>
                <Route path='/result' component={Result}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);
