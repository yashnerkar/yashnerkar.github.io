import React from 'react'
import '../css/contact.css'
import Input from './Input';
const ContactHome = () => {
    return (
        <div> <div className="d-flex contact-container contact-border p-4">
            <img src="images/contact4.png" className="contact-image p-3" alt="" style={{ height: '35rem', width: '35rem' }}></img>
            <div className="text-light container-fluid contact-form col-md-6 w-50 pt-4 mt-4">

                <div className='p-2'>
                    <p>{'>'}_name:</p>
                    <Input size="" text="yash nerkar" />
                </div>
                <div className="p-2">
                    <p>{'>'}_email:</p>
                    <Input size="" text="yashnerkar512@gmail.com" />
                </div>
                <div className="p-2">
                    <p>{'>'}_message:</p>
                    <textarea cols="50" rows="5" className="input-group rounded glowing p-2" placeholder='"Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks!'></textarea>
                </div>
                <div className="text-center p-3">
                    <button className="btn">Send Message</button>
                </div>
            </div>

        </div></div >
    )
}

export default ContactHome;