import Carousel from 'react-bootstrap/Carousel';


function ReviewsCarousel(props) {
    return (
        <Carousel indicators={false} fade={true} className="my-5  text-white">
            {/* <Carousel.Item className="col-md-6 offset-md-3 text-center">
                <blockquote>
                    <h2 className="font-weight-normal font-italic"> "I love everything about Sushi. Go get it." </h2>
                    <h4 className="font-weight-normal mt-5">David Bressler</h4>
                </blockquote>
            </Carousel.Item> */}

            {props.reviews.map(review => (
                <Carousel.Item className="col-md-6 offset-md-3 text-center">
                <blockquote>
                    <h2 className="font-weight-normal font-italic"> "{review.description}" </h2>
                    <h4 className="font-weight-normal mt-5">{review.author}</h4>
                </blockquote>
                </Carousel.Item>
            )
            )
            }
        </Carousel>
    )
}

export default ReviewsCarousel