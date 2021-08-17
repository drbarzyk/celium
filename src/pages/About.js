import React from 'react'
import Map from '../components/Map'

function About() {
    return (
        <div className='content'>
            <div className='heading'>
                <div className='title'>
                    <h1>about</h1>
                </div>
                <h3 className='tagline'>read more about us!</h3>
            </div>

            <div className='page-body'>
                <Map />
            </div>
        </div>
    )
}

export default About
