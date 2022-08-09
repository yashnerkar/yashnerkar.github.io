import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MediaQuery from 'react-responsive';
import './css/footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div style={{
            width: '100vw',
            bottom: '0',
            position: 'fixed',

        }}>
            <div className="container-fluid tabcolor footer mt-auto">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex align-items-center p-0">
                        <div className="">
                            <p className="m-0 px-3 py-2 mt-1 links">find me in:</p>
                        </div>
                        <div>
                            <a href=" https://twitter.com/yashnerkar81?t=P0Qdmqzcx4BgbT59B2Voag&s=08"><button className="btn footerlinks  py-2 px-3 tabcolor" >
                                <TwitterIcon />
                            </button>
                            </a>
                            <a href="https://www.linkedin.com/in/yash-n12/">
                                <button className="btn footerlinks  py-2 px-3 tabcolor">
                                    <LinkedInIcon />
                                </button>
                            </a>

                            <MediaQuery maxWidth={992}>
                                <a href="https://github.com/yash-png">
                                    <button className=" btn footerlinks  py-2 px-3 tabcolor">
                                        <GitHubIcon />
                                    </button>
                                </a>
                            </MediaQuery>

                        </div>

                    </div>
                    <MediaQuery minWidth={992}>
                        <div className="col-md-6  d-flex justify-content-end align-items-center p-0">
                            <a href="https://github.com/yashnerkar" style={{
                                textDecoration: 'none'
                            }}>
                                <div className="border border-dark p-2 links tabcolor" style={{ width: "fit-content" }
                                } >
                                    @yashnerkar<span className="mx-1 px-2"><GitHubIcon /></span>
                                </div>
                            </a>
                        </div>
                    </MediaQuery>
                </div>
            </div >
        </div >
    )

}

export default Footer