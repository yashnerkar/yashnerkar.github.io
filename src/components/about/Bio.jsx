import React from 'react'
import '../css/about.css'
const Bio = () => {
    return (
        <>
            <div className="container-text container-fluid aboutdesc-div">
                <div className="d-flex">
                    <div className="mx-4 py-4 px-3 para para-info d-flex justify-content-center align-items-center">
                        <ol type="1">
                            <li>/**</li>
                            <li>&nbsp; Hey folks!</li>
                            <li>&nbsp; I have keen interset to develop new projects</li>
                            <li>&nbsp; as well as to contribute in it. Trying new and </li>
                            <li>&nbsp; different frameworks and technologies in the niche of </li>
                            <li>&nbsp; web-development. Apart from development,</li>
                            <li>&nbsp; I enjoy solving problems.Check out</li>
                            <li>&nbsp; my ratings on <a href="https://leetcode.com/Madmax10/" style={{ textDecoration: 'none' }}>Leetcode,</a><a href="https://auth.geeksforgeeks.org/user/yashnerkar512/profile" style={{ textDecoration: 'none' }}>GeeksforGeeks</a> and <a href="https://www.codechef.com/users/yash7861" style={{ textDecoration: 'none' }}>Codechef</a>,etc</li>
                            <li></li>
                            <li>&nbsp; <b>Achievements :</b></li>
                            <li>&nbsp; Secured 2<sup>nd</sup> rank in "Hackoverflow" hackathon.</li>
                            <li>&nbsp; Runner Up at<b>TechStorm</b> by Ruia College.</li>
                            <li>&nbsp; Secured 2<sup>nd</sup> rank at state level "ICT-Olympiad"</li>
                            <li>**/</li>
                        </ol>
                    </div>
                    <div className="aboutme-img  d-flex justify-content-center align-items-center px-3">
                        <img src="images/bio.png" className=" img-fluid mt-2 bio-img" alt=""></img>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Bio;