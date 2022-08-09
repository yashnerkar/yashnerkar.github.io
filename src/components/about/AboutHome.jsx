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
                        <li>&nbsp; Yash Nerkar here!</li>
                        <li>&nbsp; Currently in final year of computer engineering at</li>
                        <li>&nbsp; DMCE,Airoli. I like to develop some projects</li>
                        <li>&nbsp; as well as involvement in open source.</li>
                        <li>&nbsp; I also worked on some freelancing projects.</li>
                        <li>&nbsp; Additionally, I am the <b>Technical Head</b> of </li>
                        <li>&nbsp; CSI-CATT-DMCE committee. Also, I was part of</li>
                        <li>&nbsp;  Web development team at GDSC-DMCE</li>
                        <li>&nbsp; Moreover,I also served on the CodeChef-DMCE Chapter.</li>
                        <li>&nbsp; Currently practicing DSA.</li>
                        <li>&nbsp; And, I also want to find out more about DevOps.</li>
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