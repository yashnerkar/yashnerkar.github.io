import React from 'react'
import '../css/about.css';
const AboutTab = ({ name, handleClose, handleOpen }) => {
    console.log(name)

    return (
        <div className='container d-flex p-0'>
            {name.map((item, index) => {
                return (
                    <div key={index}
                        onClick={() => handleOpen(item)}
                        className="py-1 px-2 d-flex border border-light tab-div" style={{ height: '5vh', width: "fit-content" }}>
                        <p className='text-light'>{item}</p>&nbsp;
                        <i className="fa-solid fa-xmark pt-1"
                            onClick={(e) => handleClose(item, e)}
                        ></i>
                    </div>
                )
            })}
        </div >

    )
}

export default AboutTab;