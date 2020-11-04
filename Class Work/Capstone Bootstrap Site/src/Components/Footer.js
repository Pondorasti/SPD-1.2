import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <Container fluid className="bg-secondary text-light">
            <Row className="p-4 justify-content-between">
                <h6 className="mb-0">© 2020 Sushi</h6>
                <h6 className="mb-0">Crafted with Care</h6>
            </Row>
        </Container>
    )
}

export default Footer