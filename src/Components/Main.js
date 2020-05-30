import React, { Component } from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'https://www.wikipedia.org/',
            url: 'https://www.wikipedia.org/'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeUrl = this.handleChangeUrl.bind(this);
    }
        handleChange(event) {
            this.setState({
                value: event.target.value
            });
        }
        handleChangeUrl(event) {
            this.setState({
                url: event.target.value
            });
        }
        

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Username</Navbar.Brand>
                <Nav className="mr-auto">
                    <Form inline>
                        <input type="text" value={this.state.value} onChange={this.handleChange} className="mr-sm-2" />
                    </Form>
                </Nav>
                <Nav className="mr-auto">
                    <Form inline>
                        <input type="text" value={this.state.url} onChange={this.handleChangeUrl} className="mr-sm-2" />
                    </Form>
                </Nav>
                 <Navbar.Brand href="#home">Logout</Navbar.Brand>
                </Navbar>
                <div class="viewbox-left">
                    <iframe src={this.state.value} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" ></iframe>                
                </div>
                <div class="viewbox-right">
                    <iframe src={this.state.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" ></iframe>                
                </div>
            </div>
        )
    }
}

export default Main
