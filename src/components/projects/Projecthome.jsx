import React from 'react'
import Card from './Card';
import '../css/project.css'
const Projecthome = ({ sendData, sendName }) => {
    return (
        <><div className="container-fluid project" style={{ height: '80vh', overflowY: "scroll" }}>
            <div className="row container-fluid mt-5">
                <p className="text-light">Personal Projects :</p>
                <div className="col-lg-4 col-12 project-center-container">
                    <Card name="Qmate" description="a collegiate project to conduct online MCQ quizzes."
                        image={`images/1.png`}
                        getProjectName={sendName}
                        sendProjectName={sendData} />
                </div>
                <div className="col-lg-4 col-12 project-center-container">
                    <Card name="CTF-DMCE" description="A college level competition of CTF(Capture the flag)."
                        image={`images/2.png`}
                        getProjectName={sendName}
                        sendProjectName={sendData} />
                </div>
                <div className="col-lg-4 col-12 project-center-container">
                    <Card name="Satiate" description="A crowd funded project for the No Poverty and Zero Hunger."
                        image={`images/3.png`}
                        getProjectName={sendName}
                        sendProjectName={sendData} />
                </div>

            </div>
            <div className="row container-fluid mt-5">
                <div className="col-lg-4 col-12 project-center-container">
                    <Card name="CSI-BADGE" description="A digital badge which can be used to showcase student's skills."

                        image={`images/5.png`}
                        getProjectName={sendName}
                        sendProjectName={sendData} />
                </div>
                <div className="col-lg-4 col-12 project-center-container">
                    <Card name="Tesero Heist" description="A Treasure hunt for Technitude (collge technical event)"
                        image={`images/4.png`}
                        getProjectName={sendName}
                        sendProjectName={sendData} />
                </div>
            </div>
            <div className="row container-fluid mt-5">
                <p className="text-light">Freealancing Project :</p>
                <div className="col-lg-4 col-12 project-center-container">
                    <Card name="Data-alley" description="Developed front end using React.js library "
                        image={`images/6.png`}
                        getProjectName={sendName} sendProjectName={sendData} />
                </div>
                <div className="col-lg-4 col-12 project-center-container">
                    <Card name="Coseedge" description="Developed front end using React.js library"
                        image={`images/7.png`}
                        getProjectName={sendName} sendProjectName={sendData} />
                </div>
                <div className="col-lg-4 col-12 project-center-container">
                    <Card name="Amkam-Tech" description="Developed front end using React.js library"
                        image={`images/8.png`}
                        getProjectName={sendName} sendProjectName={sendData} />
                </div>

            </div>
        </div ></>
    )
}

export default Projecthome