import Row from 'react-bootstrap/Row';

function Footer() {
    return (
        <div className="container-fluid bg-secondary text-light mb-4">
            <Row className="p-4 justify-content-between">
                <h6>© 2020 Sushi</h6>
                <h6>Crafted with Care</h6>
            </Row>
        </div>
    )
}

export default Footer