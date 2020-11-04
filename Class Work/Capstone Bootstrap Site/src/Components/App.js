import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Feature from './Feature'
import Footer from './Footer'
import Divider from './Divider'
import ReviewsCarousel from './ReviewsCarousel'

import brain from "./../Assets/brain.png";

function App() {
    return (
        <>
            <Navbar />
            <Hero />

            <Divider />
            <Feature
                title="
                    Tell us what you hate!
                    Sushi will tell you what you love!
                "
                description="We use a state of the art AI that can accuratelly predict movies in a matter of seconds."
                image={brain}
            />

            <Divider />
            <Feature
                title="
                    Tell us what you hate!
                    Sushi will tell you what you love!
                "
                description="We use a state of the art AI that can accuratelly predict movies in a matter of seconds."
                image={brain}
            />

            <Divider />
            <ReviewsCarousel 
                reviews={[
                    { description: "I love everything about Sushi. Go get it.", author: 'Rico Hawkins' },
                    { description: "Excellent App! Does What’s Expected + More", author: 'Omari Richardson' },
                    { description: "I love everything about Sushi 🍣. Go use it!", author: 'Neel Holder' }
                ]}
            />

            <Footer />
        </>
    );
}

export default App