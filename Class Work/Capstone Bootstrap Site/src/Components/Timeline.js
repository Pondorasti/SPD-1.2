import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Navbar from './Navbar'

function Timeline() {
    return (
        <>
            <Navbar />
            
            <Jumbotron className="mt-5">
                <h1>Here's our timeline with milestones</h1>
                <p>
                   Since we are making our development process public, you can take a peek of what we are currently working on and beta test new features as they are deployed.
                </p>

                <ProgressBar>
                    <ProgressBar animated variant='danger' now={5} label={`Blocked: 5%`} key={1} />
                    <ProgressBar animated now={42} label={`Done: 42%`} key={2} />
                    <ProgressBar animated variant='warning' now={18} label={`In Progress: 18%`} key={3} />
                    <ProgressBar animated variant='info' now={35} label={`Coming Soon`} key={4} />
                    
                </ProgressBar>
                
            </Jumbotron>
        </>
    )
}

export default Timeline