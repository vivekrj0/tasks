import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignIn from './SignIn';
import SignUp from './SignUp';
import Main from './Components/Main';
import history from './Components/History';

class Routes extends Component {
    render() {
        return (<Router history={history}>
            <div className="App">
              <Switch>
                <Route exact path='/' exact component={SignIn} />
                <Route path="/sign-in" exact component={SignIn} />
                <Route path="/sign-up" exact component={SignUp} />
                <Route path="/Main" exact component={Main} />
              </Switch>
            </div>
          </Router>
        )
    }
}

export default Routes
