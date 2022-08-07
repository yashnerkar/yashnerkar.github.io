import React, { useState, useEffect } from 'react'
import '../css/project.css'
import ProjectDescription from './ProjectDescription'
import Projecthome from './Projecthome'
import Projectlist from './Projectlist'
import ProjectTab from './ProjectTab'
import Global from '../Globalstyles';
const Project = () => {
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState([])
    const [name, setName] = useState("");


    const sendDataToParent = (data) => {
        console.log(data);
        let index = details.indexOf(data);
        if (index === -1) setDetails((prev) => [...prev, data])
    };
    const openFile = (item) => {
        setName(item);
    }
    const closeFile = (fileName, e) => {
        e.stopPropagation();
        let nameIndex = details.indexOf(fileName);
        console.log(nameIndex);
        console.log("nameIndex", nameIndex);
        const setFileName = () => {
            if (details.length == 1) return setName("");
            if (nameIndex == 0) return setName(details[nameIndex + 1]);
            setName(details[nameIndex - 1]);
        }
        setFileName();
        details.splice(nameIndex, 1);
        setDetails([...details]);
    }

    const handleOpen = (prevState) => {
        setOpen(!prevState);
    }

    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100vw',

            }}
        >
            <Global image="images/about.png"></Global>
            <div className="container-fluid ">
                <div className="row">
                    <div
                        className="col-lg-2 col-12 about-border project-main-div p-0"
                    > <div
                        className="container-fluid d-flex about-border project-list-div align-center text-light pt-1"
                        style={{ height: '5vh', cursor: 'pointer' }}
                        onClick={() => handleOpen(open)}
                    >   {open ? <span className="pic pic-project arrow-down mt-2"></span> : <span class="pic pic-project arrow-right mt-1"></span>}&nbsp;
                            <p className="projectName">Projects</p>
                        </div>
                        <div className="project-list p-2">
                            {open ? <Projectlist stateChanger={sendDataToParent} setName={setName} /> : null}
                        </div>
                    </div>
                    <div className="col-lg-10 col-12 p-0 " >
                        <div
                            className="container-fluid about-border  p-0"
                            style={{ height: '5vh' }}
                        >
                            <ProjectTab name={details} handleOpen={openFile} handleClose={closeFile} />
                        </div>
                        {details.length > 0 ? <ProjectDescription name={name} /> : <Projecthome sendName={setName} sendData={sendDataToParent} />}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Project;


