import React from 'react'

const CTF = () => {
    return (
        <div>
            <ol type="1">
                <li><span className='constant'>const</span> <span className="constantName">projectName</span> = <span className='text'>"CTF-DMCE"</span></li>
                <li><span className='constant'>const</span> <span className="constantName">projectLink</span> =  <a href="http://ctf-registration.herokuapp.com/" className="text-link">"CTF-Registration"</a>, <a href="https://ctfchallenge.herokuapp.com/" className="text-link">"CTF"</a></li>
                <li></li>
                <li><span className='constant'>const</span> <span className="constantName">techStack</span> = &#123;</li>
                <li>&nbsp;&nbsp;<span className="constantName">frontEnd</span>:<span className='text'>"React.js,Crypto.js,Bootstrap"</span>,</li>
                <li>&nbsp;&nbsp;<span className="constantName">backEnd</span>:<span className='text'>"Node.js,Express.js,Mongodb and REST API"</span>,</li>
                <li>&#125;</li>
                <li></li>
                <li><span className='constant'>const</span>  <span className="constantName">problemStatement</span> = <span className='text'>"An online platform for conducting <b>CTF</b></span> </li>
                <li><span className='text'>(capture the flag) for competition on college level"</span></li>
                <li></li>
                <li><span className="constant">const</span> <span className="constantName">description</span> = <span className='text'>"As students doesn't know about<b> CTF </b> we had decided to </span></li>
                <li><span className='text'>to develop this platform as an introduction of such new topics to the students</span></li>
                <li><span className='text'>Moreover,it will brings awareness among the students to develop skill</span></li>
                <li><span className='text'>in CyberSecurity Field.</span></li>
                <li></li>
                <li><span className='text'><a href="https://thehackersmeetup.medium.com/beginners-guide-to-capture-the-flag-ctf-71a1cbd9d27c"><span><i class="fa fa-link" aria-hidden="true"></i></span>Know more about ctf</a></span></li>
                <li></li>
                <li><span className='constant'>const</span> <span className="constantName">githubLink</span> = <a href="" className="text-link">"https://github.com/ctf-dmce"</a></li>
            </ol>
        </div >
    )
}

export default CTF