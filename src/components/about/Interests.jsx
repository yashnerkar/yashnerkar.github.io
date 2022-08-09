import React from 'react'

const Interests = () => {
    return (
        <>
            <div className="container-text container-fluid aboutdesc-div interestdiv">
                <div className="d-flex">
                    <div className="mx-4 py-4 px-3 interestpara d-flex justify-content-center align-items-center">
                        <ol type="1">

                            <li>/**</li>
                            <li>&nbsp; <b>Interests</b></li>
                            <li>&nbsp; I am Interested in <b>DevOps.</b>I am currently</li>
                            <li>&nbsp; learning the <b>Docker and how container works?</b></li>
                            <li>&nbsp; I usually spend my leisure time at playing</li>
                            <li>&nbsp; video games. </li>
                            <li>&nbsp; There's also my youtube channel named as </li>
                            <li>&nbsp; <b>Weekendplayer.</b></li>
                            <li>&nbsp; Listening music is another thing </li>
                            <li>&nbsp; where I mostly resides. My Favorites genres </li>
                            <li>&nbsp; include<b>Pop,EDM and Classical.</b> </li>
                            <li>&nbsp; <b>and I am Cat-lover.</b></li>

                            <li>**/</li>
                        </ol>
                    </div>
                    <div className="aboutme-img d-flex justify-content-center align-items-center px-3">
                        <img src="images/about2.png" className=" img-fluid mt-2 int-img" alt=""></img>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Interests;