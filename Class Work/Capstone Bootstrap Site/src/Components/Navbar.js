import React from 'react'

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import SignUpForm from './SignUpForm'

function SHNavbar() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Navbar bg="dark" variant="dark" className="py-3 px-4 fixed-top">
            <Navbar.Brand href="/">Sushi 🍣</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/timeline">Timeline</Nav.Link>
                <Nav.Link href="/feedback">Feedback</Nav.Link>
            </Nav>

            <Navbar.Collapse className="justify-content-end">
                <Form>
                    <Button 
                        variant="danger"
                        onClick={() => setModalShow(true)}
                    >
                        Sign me up!
                    </Button>

                    <SignUpForm
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SHNavbar