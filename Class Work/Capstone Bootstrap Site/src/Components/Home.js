import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Feature from './Feature'
import Footer from './Footer'
import Divider from './Divider'
import ReviewsCarousel from './ReviewsCarousel'

import brain from "./../Assets/brain.png";
import neurons from "./../Assets/neurons.png";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <Divider />
            <Feature
                title={ <div>Tell us what you hate!<br/>Sushi will tell you what you love!</div> }
                description="We use a state of the art AI that can accuratelly predict movies in a matter of seconds."
                image={brain}
            />

            <Divider />
            <Feature
                title="A neural engine built from ground up."
                description="Sushi's mind is a reimplementation of a human brain, made out of layers of neurons."
                image={neurons}
                isReversed={true}
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

export default Home