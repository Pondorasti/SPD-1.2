import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function SignUpForm(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Feel like helping us? <br></br>
                    Join the waitlist
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Label>
                        Claim a unique username
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroup" placeholder="Username" />
                    </InputGroup>

                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" className="mr-auto" onClick={props.onHide}>Close</Button>
                <Button variant="danger" onClick={props.onHide}>Try it first!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUpForm