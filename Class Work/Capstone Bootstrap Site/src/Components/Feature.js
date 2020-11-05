import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Feature(props) {
    var rowClasses = `row px-5 mx-0 justify-content-center align-items-center ${props.isReversed ? "flex-row-reverse" : ""}`

    return (
        <Jumbotron fluid className="text-white mb-0" style={{ background: 'black' }}>
            <div class={rowClasses}>
                <Col className="col-md-6 mx-md-5">
                    <h1>{props.title}</h1>
                    <h5 className="mt-4">{props.description}</h5>
                </Col>

                <div className="col-md-4">
                    <img src={props.image} className="img-fluid"></img>
                </div>
            </div>
        </Jumbotron>
    )
}

export default Feature