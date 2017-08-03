import React, {Component, PropTypes} from "react";
import {Navbar} from "react-bootstrap";

import "../styles/UserMenu.less"

export default class UserMenu extends Component {
    render() {
        const {firstName, lastName} = this.props;
        return (
                <Navbar bsStyle='custom'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Quiz
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Text>
                            Signed in as: {firstName} {lastName}
                        </Navbar.Text>
                        <Navbar.Text pullRight>
                            Have a great day!
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

UserMenu.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userLogOut: PropTypes.func.isRequired

}