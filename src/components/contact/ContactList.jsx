import React from 'react'

const ContactList = () => {
    return (
        <div>
            <div className="p-2 removePad">
                <div className="container-fluid p-2 removePad">
                    <i class="fa-brands fa-discord"></i>
                    <span><a href="https://discordapp.com/users/302050872383242240" className='info-text'>&nbsp;Madmax</a></span>
                </div>
                <div className="container-fluid  p-2 removePad">
                    {/* <span className="arrow">{'>'} </span> */}
                    <i class="fa-brands fa-youtube text-danger"></i>
                    <span><a href="https://www.youtube.com/channel/UC2OkkQIf_NVqyasUxhM53lw" className='info-text'>&nbsp;WeekendPlayer</a></span>
                </div>
                <div className="container-fluid p-2 removePad">
                    <i class="fa-brands fa-linkedin"></i>
                    <span><a href="https://www.linkedin.com/in/yash-n12/" className='info-text'>&nbsp;Yash Nerkar</a></span>
                </div>
                <div className="container-fluid p-2 removePad">
                    <i class="fa-brands fa-twitter"></i>
                    <span><a href=" https://twitter.com/yashnerkar81?t=P0Qdmqzcx4BgbT59B2Voag&s=08" className='info-text'>&nbsp;yashnerkar</a></span>
                </div>
                <div className="container-fluid p-2 removePad">
                    <i class="fa-brands fa-github"></i>
                    <span><a href="https://github.com/yashnerkar" className='info-text'>&nbsp;yashnerkar</a></span>
                </div>
            </div>
        </div>
    )
}

export default ContactList;