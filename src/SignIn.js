import React, { Component } from 'react'
import history from './Components/History'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class SignIn extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <Link className="navbar-brand" to={"/sign-in"}>New User</Link>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <form>
                    <h3>Sign In</h3>
                    <div className="form-group">
                      <label>Enter Username</label>
                      <input type="text" className="form-control" placeholder="Enter Username" />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password" />
                     </div>

                     <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                      </div>
                    </div>
                    <button type="submit" onClick={() => history.push('/Main')} className="btn btn-primary btn-block">Submit</button>
                      <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                      </p>
                    </form>
                  </div>
                </div>
            </div>
        )
    }
}

export default SignIn
