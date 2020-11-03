import React from 'react'
import { Container, Col, Row, Jumbotron, Button, Navbar, Form, Image, Card } from 'react-bootstrap'

import heroImage from "./../Assets/hero.jpg";

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Sushi</Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    <Form>
                        <Button variant="danger">Sign me up!</Button>
                    </Form>
                </Navbar.Collapse>

            </Navbar>


            <div className="text-center px-0"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: "75vh",
                }}
            >
                <div className="row align-items-center justify-content-center" 
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.65)",
                        height: "75vh",
                    }}
                >
                    <div className="text-white">
                        <h1 >Watch movies like never before!</h1>
                        <h5 className="mt-3">
                            Sushi can instantly reccomend you a movie that you will enjoy watching.
                        </h5>

                        <Button variant="danger" size="lg" className="mt-5">Sign me up!</Button>
                    </div>
                </div>

            </div>
        </>
    );
}


export default App