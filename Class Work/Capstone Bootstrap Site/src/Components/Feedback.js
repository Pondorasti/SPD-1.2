import React from 'react'
import Button from 'react-bootstrap/esm/Button'

import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Navbar from './Navbar'

function Feedback() {
    return (
        <>
            <Navbar />
            
            <Jumbotron className="mt-5">
              <h1>Help us define the future of sushi</h1>
              <p>
                Take this quick 1 minute survey and let us now what you think about the app.
              </p>
            </Jumbotron>


            <Jumbotron>
            <Form>
              <h1>Let's start!</h1>
              <Form.Group>
                <Form.Label>How likely are you to reccomend this app to somebody else?</Form.Label>
                <Form.Control as="select">
                  <option>Not at all</option>
                  <option>Not likely</option>
                  <option>Maybe</option>
                  <option>Very likely</option>
                  <option>Extremely likely</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="textarea">
                <Form.Label>What do you think we could do better?</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group>
                <Form.Label>What are you most interested when using Sushi?</Form.Label>
                
                <Form.Check label={`Instantly find movies to watch`}/>
                <Form.Check label={`Narrow down a list of movies to watch with friends`}/>
                <Form.Check label={`Directly watch movies inside Sushi`}/>
              </Form.Group>

              <Form.Group>
                <Button type="submit">Thank you too!</Button>
              </Form.Group>
            </Form>
            </Jumbotron>


        </>
    )
}

export default Feedback