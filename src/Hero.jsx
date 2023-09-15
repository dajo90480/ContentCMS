import React from 'react'


import heroImg from './assets/hero.svg'
const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-center'>
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        I'm baby xOXO 90's iPhone irony gochujang.
                        Bushwick meggings pok pok readymade you probably haven't heard of them,
                        truffaut post-ironic freegan venmo chartreuse letterpress VHS salvia drinking vinegar pabst.

                    </p>
                    <div className="img-container">
                        <img src={heroImg} alt="woman and the browser" className='img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero