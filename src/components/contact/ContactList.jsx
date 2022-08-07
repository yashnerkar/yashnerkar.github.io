import React from 'react'

const ContactList = () => {
    return (
        <div>
            <div className="p-2 removePad">
                <div className="container-fluid p-2 removePad">
                    <i class="fa-brands fa-discord"></i>
                    <span><a href="" className='info-text'>&nbsp;yash-png</a></span>
                </div>
                <div className="container-fluid  p-2 removePad">
                    {/* <span className="arrow">{'>'} </span> */}
                    <i class="fa-brands fa-youtube text-danger"></i>
                    <span><a href="" className='info-text'>&nbsp;weekendPlayer</a></span>
                </div>
                <div className="container-fluid  p-2 removePad">
                    <i class="fa-brands fa-instagram solid-insta"></i>
                    <span><a href="" className='info-text'>&nbsp;yashhnn</a></span>
                </div>
                <div className="container-fluid p-2 removePad">
                    <i class="fa-brands fa-linkedin"></i>
                    <span><a href="" className='info-text'>&nbsp;yash-png</a></span>
                </div>
                <div className="container-fluid p-2 removePad">
                    <i class="fa-brands fa-twitter"></i>
                    <span><a href="" className='info-text'>&nbsp;yash-png</a></span>
                </div>
                <div className="container-fluid p-2 removePad">
                    <i class="fa-brands fa-github"></i>
                    <span><a href="" className='info-text'>&nbsp;yash-png</a></span>
                </div>
            </div>
        </div>
    )
}

export default ContactList;