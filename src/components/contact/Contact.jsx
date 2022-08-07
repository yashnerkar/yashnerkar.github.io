import React, { useState } from 'react'
import '../css/contact.css';
import Input from './Input';
import Global from '../Globalstyles';
import Contactoggle from './Contactoggle';
import ContactList from './ContactList';
import ContactHome from './ContactHome';
const Contact = () => {
    const [open, setOpen] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const handleOpenContact = (prevState) => {
        setOpenContact(!prevState);
    }

    const handleOpen = (prevState) => {
        setOpen(!prevState);
    }

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
        }}>
            <Global image="images/about.png"></Global>
            <div
                className="container-fluid "
            >
                <div className="row">
                    <div
                        className="col-lg-2 col-12 about-border contact-main-div p-0"
                    >
                        {/* contact- info*/}
                        <div
                            className="container-fluid  about-border d-flex  align-center text-light pt-1"
                            style={{ height: '5vh', cursor: "pointer" }}
                            onClick={() => handleOpenContact(openContact)}
                        >
                            {openContact ? <span className="pic arrow-down mt-2"></span> : <span class="pic arrow-right mt-1"></span>}&nbsp;
                            <p className="contact" >Contacts</p>
                        </div>
                        {openContact ? <Contactoggle /> : null}
                        {/* second- info*/}
                        <div
                            className="container-fluid  d-flex about-border align-center text-light pt-1"
                            onClick={() => handleOpen(open)}
                            style={{
                                height: '5vh', cursor: 'pointer'
                            }}
                        > {open ? <span className="pic  arrow-down mt-2"></span> : <span class="pic  arrow-right mt-1"></span>}&nbsp;

                            <p>find-me-also-in</p>
                        </div>
                        {open ? <ContactList /> : null}
                    </div>
                    <div
                        className="col-lg-10 col-12 p-0"
                    >
                        <ContactHome />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Contact;
