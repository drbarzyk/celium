import React from 'react'
import Landing from "./Landing"
import Development from "./Development"
import Community from "./Community"
import Purpose from "./Purpose"

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
