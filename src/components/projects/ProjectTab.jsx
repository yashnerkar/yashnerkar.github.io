import { Step } from '@mui/material';
import React, { useState, useEffect } from 'react'
import '../css/project.css';
const ProjectTab = ({ name, handleClose, handleOpen }) => {
    console.log(name)

    return (
        <div className='container-fluid  d-flex projectTab p-0'>
            {name.map((item, index) => {
                return (
                    <div key={index}
                        onClick={() => handleOpen(item)}
                        className="border border-light py-1  px-2 d-flex tab-div" style={{ height: '5vh', width: "fit-content" }}>
                        <p className="text-light">{item}</p>&nbsp;
                        <i className="fa-solid fa-xmark pt-1"
                            onClick={(e) => handleClose(item, e)}
                        ></i>
                    </div>
                )
            })}
        </div >

    )
}

export default ProjectTab;