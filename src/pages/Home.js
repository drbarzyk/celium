import React from 'react'
import Landing from "../components/Landing"
import Footer from "../components/Footer"
import Connect from "../components/Connect"
import Learn from "../components/Learn"
import Develop from "../components/Develop"

function Home() {
    return (
        <div className='content'>
            <Landing/>
            <div className='runway'>
                <Connect />
                <Develop />
                <Learn />
            </div>
        </div>
    )
}

export default Home
