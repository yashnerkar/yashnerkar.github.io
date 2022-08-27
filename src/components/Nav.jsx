import { borderBottom } from '@mui/system';
import React, { useState, useEffect } from 'react'
const Nav = ({ currActive }) => {

    // const [currActive, setCurrActive] = useState(window.location.hash.split('#/')[1]);

    // console.log(currActive);

    return (
        <div>
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container-fluid">
                    <a className="navbar-brand text-light px-5" href="/">yash nerkar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" style={currActive === "home" ? { borderBottom: '3px solid #1E5994', color: '#fff !important' } : null}>
                                < a id={"1"} className="nav-link px-3" aria- current="page" href="#/" style={currActive === "" ? { color: '#fff !important' } : null}>_home</a>
                            </li>
                            <li className="nav-item" style={currActive === "about" ? { borderBottom: '3px solid #1E5994', color: '#fff' } : null}>
                                <a id={"2"} className="nav-link px-3 active" href="#/about">_about</a>
                            </li>
                            <li className="nav-item" style={currActive === "projects" ? { borderBottom: '3px solid #1E5994', color: '#fff' } : null}>
                                <a id={"3"} className="nav-link px-3" href="#/projects">_projects</a>
                            </li>
                            <li className="nav-item" style={currActive === "contact" ? { borderBottom: '3px solid #1E5994', color: '#fff' } : null}>
                                <a a id={"4"} className="nav-link px-3" href="#/contact">_contact</a>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >

        </div >
    )
}

export default Nav;