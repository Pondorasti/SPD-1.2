import React from 'react'

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import SignUpForm from './SignUpForm'

import heroImage from "./../Assets/hero.jpg";

function SHHero() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="text-center px-0"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: "75vh",
            }}
        >
            <Row className="px-5 align-items-center justify-content-center mx-0"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    height: "75vh",
                }}
            >
                <div className="text-white">
                    <h1>Watch movies like never before!</h1>
                    <h5 className="mt-3">
                        Sushi can instantly recommend a movie that you will enjoy watching.
                    </h5>

                    <Button
                        variant="danger"
                        size="lg"
                        className="mt-5"
                        onClick={() => setModalShow(true)}
                    >
                        Sign me up!
                    </Button>

                    <SignUpForm
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </Row>
        </div>
    )
}

export default SHHero