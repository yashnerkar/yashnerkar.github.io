import React from 'react'
import '../css/project.css'
import Qmate from './Qmate';
import CTF from './CTF';
import Satiate from './Satiate';
import Badge from './Badge';
import Tesero from './Tesero';
import DataAlley from './DataAlley';
import Coseedge from './Coseedge';
import Amkam from './Amkam';

const ProjectDescription = ({ name }) => {
    return (
        <div
        >
            <div className="container-text container pt-4" >
                <div className='px-4 py-2'>
                    {
                        name === "Qmate" ? <Qmate /> : null
                    }
                    {
                        name === "CTF-DMCE" ? <CTF /> : null
                    }
                    {
                        name === "Satiate" ? <Satiate /> : null
                    }
                    {
                        name === "CSI-BADGE" ? <Badge /> : null
                    }
                    {
                        name === "Tesero Heist" ? <Tesero /> : null
                    }
                    {
                        name === "Data-alley" ? <DataAlley /> : null
                    }
                    {
                        name === "Coseedge" ? <Coseedge /> : null
                    }
                    {
                        name === "Amkam-Tech" ? <Amkam /> : null
                    }

                </div>
            </div>
        </div >
    )
}

export default ProjectDescription;



{/* <li><span className='constant'>const</span> <span className="constantName">projectName</span> = <span className='text'>"CSI-BADGE"</span></li>
                        <li><span className='constant'>const</span> <span className="constantName">projectLink</span> =  <a href="" className="text-link">"https://csi-badge.csi.edu"</a></li>
                        <li></li>
                        <li><span className='constant'>const</span> <span className="constantName">techStack</span> = &#123;</li>
                        <li>&nbsp;&nbsp;<span className="constantName">frontEnd</span>:<span className='text'>"HTML,CSS,Javascript,Bootstrap,Handlebars"</span>,</li>
                        <li>&nbsp;&nbsp;<span className="constantName">backEnd</span>:<span className='text'>"Node.js,Express.js,MySQL and REST API"</span>,</li>
                        <li>&#125;</li>
                        <li></li>
                        <li><span className='constant'>const</span>  <span className="constantName">problemStatement</span> = <span className='text'>"To develop a Digital credential system for students</span></li>
                        <li><span className='text'>to validate their skills or certificates in competition as well as</span></li>
                        <li><span className='text'>in learning environments."</span></li>
                        <li></li>
                        <li><span className="constant">const</span> <span className="constantName">description</span> = <span className='text'>"A digital badge is a recognition for the learning(s)</span></li>
                        <li><span className='text'> outside the traditional academic records. It includes boot camps, certifications, </span></li>
                        <li><span className='text'>volunteer work, continuing education, etc. This platform will facilitate user </span></li>
                        <li><span className='text'>to store badges and showcase on the display in sorted manner. </span></li>
                        <li></li>
                        <li><span className='constant'>const</span> <span className="constantName">githubLink</span> = <a href="" className="text-link">"https://github.com/csi-badges"</a></li> */}
