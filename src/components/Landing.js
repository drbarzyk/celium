import React from 'react'
import JoinDiscord from './JoinDiscord';

function Landing() {
    return (
        <div className='wrapper landing'>
            <div className='container landing-inner'>
                <div className='landing-content'>
                    <div className='header'>
                        <h1><span className="celium">celium</span><span>.network</span></h1>
                        {/* <h1>ce·li·​um</h1> */}
                        {/* <span>\si-li-əm\</span> */}
                    </div>
                    <div className="tagline">
                        <span>Connecting developers.</span>
                        <span>Building the future.</span>
                    </div>
                </div>
                <JoinDiscord />
            </div>
        </div>
    )
}

export default Landing
