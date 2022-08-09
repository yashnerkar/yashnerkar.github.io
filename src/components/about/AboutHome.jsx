import React from 'react'
import '../css/about.css'
const AboutHome = () => {
    return (
        <>  <div className="container-text container-fluid aboutdesc-div  ">
            <div className="d-flex paracontent">
                <div className="mx-4 px-1 py-4 para d-flex justify-content-center align-items-center">
                    <ol type="1">
                        <li>/**</li>
                        <li>&nbsp; About me</li>
                        <li>&nbsp; I am Yash Nerkar</li>
                        <li>&nbsp; Currently in final year of computer engineering at</li>
                        <li>&nbsp; DMCE,Airoli. I like to develop some projects</li>
                        <li>&nbsp; as well as open source contribution</li>
                        <li>&nbsp; I also did some freelancing projects.</li>
                        <li>&nbsp; Moreover,I was in the CSI-CATT-DMCE committee, </li>
                        <li>&nbsp; as a member of technical team.</li>
                        <li>&nbsp; Also, I was a part of GDSC-DMCE,</li>
                        <li>&nbsp; Web development team.</li>
                        <li>&nbsp; I was also a member of CodeChef-DMCE Chapter.</li>
                        <li>&nbsp; Currently practicing DSA.</li>
                        <li>&nbsp; And, I want to learn about DevOps.</li>
                        <li>**/</li>
                    </ol>
                </div>
                <div className="aboutme-img d-flex justify-content-center align-items-center px-3">
                    <img src="images/coffee.png" className=" img-fluid about-img mt-2 ml-5" alt="" ></img>
                </div>
            </div>
        </div></>
    )
}

export default AboutHome