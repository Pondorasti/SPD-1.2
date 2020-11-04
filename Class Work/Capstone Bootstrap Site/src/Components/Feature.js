import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Feature(props) {
    return (
        <Jumbotron fluid className="text-white mb-0" style={{background: 'black'}}>
            <Row className="px-5 justify-content-center align-items-center mx-0" >
                <Col className="col-lg-6 pl-5">
                    <h1>{props.title}</h1>
                    <h5 className="mt-4">{props.description}</h5>
                </Col>

                <div className="col-lg-4 pr-5">
                    <img src={props.image} className="img-fluid"></img>
                </div>
            </Row>
        </Jumbotron>
    )
}

export default Feature