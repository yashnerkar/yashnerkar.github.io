import React from 'react'
import Bio from './Bio';
import Interests from './Interests';
import Education from './Education';
import '../css/about.css'
const AboutDescription = ({ name }) => {
    return (
        < div >
            <div className="container-text container-fluid aboutdesc-div pt-3" >
                <div className='px-2 py-2'>
                    {
                        name === "bio" ? <Bio /> : null
                    }
                    {
                        name === "interests" ? <Interests /> : null
                    }
                    {
                        name === "education" ? <Education /> : null
                    }

                </div>
            </div>
        </div >
    )
}

export default AboutDescription