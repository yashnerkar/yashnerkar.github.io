import React from 'react'
import '../css/about.css'
const Education = () => {
    return (
        <>
            <div className="container-text container-fluid aboutdesc-div ">
                <div className="d-flex paracontent ">
                    <div className="mx-4 py-4 px-3 para d-flex justify-content-center align-items-center">
                        <ol type="1">
                            <li>/**</li>
                            <li>&nbsp; <b>Education</b></li>
                            <li>&nbsp; </li>
                            <li>&nbsp; <b>Datta Meghe College Of Engineering</b></li>
                            <li>&nbsp; BE Computer Engineering - <b>CGPA : 8.9(uptill 6th sem.)</b></li>
                            <li>&nbsp; </li>
                            <li>&nbsp; <b>Mudhoji Highschool and Junior College</b></li>
                            <li>&nbsp; 12<sup>th</sup> - <b>Percentage: 78%</b></li>
                            <li>&nbsp; </li>
                            <li>&nbsp; <b>Mudhoji Highschool and Junior College</b></li>
                            <li>&nbsp; 10<sup>th</sup> - <b>Percentage: 94.2%</b></li>
                            <li>&nbsp; </li>

                            <li>**/</li>
                        </ol>
                    </div>
                    <div className="aboutme-img d-flex justify-content-center align-items-center px-3">
                        <img src="images/education2.png" className=" img-fluid mt-2 edu-img" alt=""></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;