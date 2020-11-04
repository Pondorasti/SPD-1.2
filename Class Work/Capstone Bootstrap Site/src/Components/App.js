import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Feature from './Feature'
import Footer from './Footer'

import brain from "./../Assets/brain.png";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Feature
                title="
                    Tell us what you hate!
                    Sushi will tell you what you love!
                "
                description="We use a state of the art AI that can accuratelly predict movies in a matter of seconds."
                image={brain}
            />

            <Feature
                title="
                    Tell us what you hate!
                    Sushi will tell you what you love!
                "
                description="We use a state of the art AI that can accuratelly predict movies in a matter of seconds."
                image={brain}
            />

            <Footer/>            
        </>
    );
}

export default App