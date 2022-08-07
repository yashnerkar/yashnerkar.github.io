import React from 'react'
import '../css/about.css'
import Global from '../Globalstyles'
const Contactoggle = () => {
    return (


        <>
            <div className="container-fluid d-flex p-2 removePad">
                <i class="fa-solid solid-4 fa-envelope pt-1"></i> &nbsp;
                <span className=" email pt-1">yashnerkar512@gmail.com</span>
            </div>
            <div className="container-fluid d-flex p-2 removePad">
                <i class="fa-solid solid-4 fa-phone pt-1"></i> &nbsp;
                <span className=" email pt-1">+918208474705</span>
            </div>
        </>
    )
}

export default Contactoggle;