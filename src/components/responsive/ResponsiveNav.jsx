import React from 'react'
import '../css/nav.css'
export const ResponsiveNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-2 m-0">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">yash_nerkar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link nav-text" aria-current="page" href="/">_hello</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-text" href="/about">_about-me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-text" href="/projects">_projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-text" href="/contact">_contact-me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default ResponsiveNav;