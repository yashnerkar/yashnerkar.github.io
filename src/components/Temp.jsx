import React, { useState } from 'react'
const Temp = () => {
    // console.log(window.location.pathname.split('/')[1]);
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
                            <li className="nav-item">
                                <a id={"1"} className="nav-link px-3" aria-current="page" href="/">_home</a>
                            </li>
                            <li className="nav-item">
                                <a id={"2"} className="nav-link px-3 active" href="/about">_about</a>
                            </li>
                            <li className="nav-item">
                                <a id={"3"} className="nav-link px-3" href="/projects">_projects</a>
                            </li>
                            <li className="nav-item">
                                <a id={"4"} className="nav-link px-3" href="/contact">_contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

        </div >
    )
}

export default Temp