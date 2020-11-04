import React from 'react'

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function SHNavbar() {
    return (
        <Navbar bg="dark" variant="dark" className="py-3 px-4">
            <Navbar.Brand href="#">Sushi</Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
                <Form>
                    <Button variant="danger">Sign me up!</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SHNavbar