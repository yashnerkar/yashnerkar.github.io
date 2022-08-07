import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MediaQuery from 'react-responsive';
import './css/footer.css';
const Footer = () => {
    return (
        <div style={{
            width: '100vw',
            bottom: '0',
            position: 'fixed',

        }}>
            <div className="container-fluid tabcolor footer mt-auto">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex align-center p-0">
                        <div className="tabcolor">
                            <p className="m-0 px-3 py-2 mt-1 links">find me in:</p>
                        </div>
                        <div>
                            <button className="btn footerlinks  py-2 px-3 tabcolor" >
                                <TwitterIcon />
                            </button>
                            <button className=" btn footerlinks  py-2 px-3 tabcolor">
                                <LinkedInIcon />
                            </button>
                            <MediaQuery maxWidth={992}>
                                <button className=" btn footerlinks  py-2 px-3 tabcolor">
                                    <GitHubIcon />
                                </button>
                            </MediaQuery>

                        </div>

                    </div>
                    <MediaQuery minWidth={992}>
                        <div className="col-md-6  d-flex justify-content-end align-items-center p-0">
                            <div className="border border-dark p-2 links tabcolor" style={{ width: "fit-content" }}>
                                @yash-png<snap className="mx-1 px-2"><GitHubIcon /></snap>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
            </div>
        </div >
    )

}

export default Footer