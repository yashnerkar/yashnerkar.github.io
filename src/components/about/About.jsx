import React, { useState } from 'react'
import Contactoggle from '../contact/Contactoggle'
import '../css/about.css'
import Global from '../Globalstyles'
import PersonalInfo from './PersonalInfo'
import AboutTab from './AboutTab'
import AboutHome from './AboutHome'
import AboutDescription from './AboutDescription'
const About = () => {

    const [aboutTabs, setAbout] = useState([])
    const [name, setName] = useState();
    const [openContact, setOpenContact] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = (prevState) => {
        setOpen(!prevState);
    }
    const openFile = (item) => {
        setName(item);
    }
    const closeFile = (fileName, e) => {
        e.stopPropagation();
        let nameIndex = aboutTabs.indexOf(fileName);
        console.log(nameIndex);
        console.log("nameIndex", nameIndex);
        const setFileName = () => {
            if (aboutTabs.length === 1) return setName("");
            if (nameIndex === 0) return setName(aboutTabs[nameIndex + 1]);
            setName(aboutTabs[nameIndex - 1]);
            console.log("nameIndex-1", aboutTabs[nameIndex - 1])

        }
        setFileName();
        aboutTabs.splice(nameIndex, 1);
        setAbout([...aboutTabs]);
    }

    const setTabsAbout = (data) => {
        console.log(data);
        let index = aboutTabs.indexOf(data);
        if (index === -1) setAbout((prev) => [...prev, data])
    };

    const handleOpenContact = (prevState) => {
        setOpenContact(!prevState);
    }
    return (
        <div style={{
            minHeight: '100vh',
            width: '100vw',

        }}>
            <Global image="images/about.png"></Global>
            <div
                className="container-fluid aboutmain"
            >
                <div className="row">
                    <div
                        className="col-lg-2 col-12 about-border about-div p-0"
                    >
                        <div
                            className="container-fluid d-flex about-border align-items-center text-light pt-1"
                            style={{ height: '5vh', cursor: 'pointer' }}
                            onClick={() => handleOpen(open)}
                        >
                            {open ? <span className="pic arrow-down icons mt-2"></span> : <span class="pic icons arrow-right mt-1"></span>}&nbsp;
                            <p className="personal-text m-0">personal-info</p>
                        </div>

                        {open ? <PersonalInfo stateChanger={setTabsAbout} setName={setName} /> : null}

                        {/* personal- info complete */}
                        {/* contact-info */}
                        <div
                            className="container-fluid  about-border d-flex  align-items-center text-light pt-1"
                            style={{ height: '5vh', cursor: "pointer" }}
                            onClick={() => handleOpenContact(openContact)}
                        >
                            {openContact ? <span className="pic icons arrow-down mt-2"></span> : <span class="icons pic arrow-right mt-1"></span>}&nbsp;
                            <p className="contact m-0" >Contacts</p>
                        </div>
                        {openContact ? <Contactoggle /> : null}
                    </div>
                    {/* second grid complete */}
                    <div
                        className="col-lg-10 p-0"
                    >

                        <div
                            className="container-fluid  about-border p-0 m-0"
                            style={{ height: '5vh' }}
                        >
                            {<AboutTab name={aboutTabs} handleOpen={openFile} handleClose={closeFile} />}
                        </div>
                        <div className=" d-flex justify-content-center align-items-center container-fluid center-about">
                            {aboutTabs.length > 0 ? < AboutDescription name={name} /> : <AboutHome />}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
