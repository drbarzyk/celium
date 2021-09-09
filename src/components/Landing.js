import React from 'react'
import JoinDiscord from './JoinDiscord';

function Landing() {
    return (
        <div className='wrapper landing'>
            <div className='container landing-inner'>
                <div className='landing-content'>
                    <div className='header'>
                        <h1>ce·li·​um</h1>
                        <span>\si-li-əm\</span>
                    </div>
                    <div className="tagline">
                        <p>Connecting developers.</p>
                        <p>Building the future.</p>
                    </div>
                </div>
                <JoinDiscord />
            </div>
        </div>
    )
}

export default Landing
