import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Timeline from './Timeline'
import Feedback from './Feedback'

function App() {
    return (
        <>
           <BrowserRouter>
                <div>
                    {/* <Navigation /> */}

                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/timeline" component={Timeline} exact/>
                        <Route path="/feedback" component={Feedback} exact/>
                    </Switch>
                </div>
           </BrowserRouter>
        </>
    );
}

export default App