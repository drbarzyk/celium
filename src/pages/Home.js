import React from 'react'
import Landing from "../components/Landing"
import Development from "../components/Development"
import Community from "../components/Community"
import Purpose from "../components/Purpose"

function Home() {
    return (
        <div className='content'>
            <Landing/>
            <Development />
            <Community />
            <Purpose />
        </div>
    )
}

export default Home
