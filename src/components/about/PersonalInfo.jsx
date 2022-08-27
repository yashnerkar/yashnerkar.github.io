import React, { useReducer, } from 'react'
import '../css/about.css';
const initialState = { bio: false, interests: false, education: false };
const reducer = (state, action) => {
    switch (action.type) {
        case "bio":
            return { bio: !state.bio };
        case "interests":
            return { interests: !state.interests };
        case "education":
            return { education: !state.education };
        default:
            throw new Error();
    }
};

const PersonalInfo = ({ stateChanger, setName }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleBio = () => {

        dispatch({ type: "bio" });
    };
    const handleInterests = () => {
        dispatch({ type: "interests" });
    };
    const handleEducation = () => {
        dispatch({ type: "education" });
    };

    const handleName = (e) => {
        stateChanger(e.target.innerText);
        setName(e.target.innerText);
    }

    return (
        <div> <div className="p-2">
            <div className="container-fluid"
                style={{ cursor: 'pointer' }}
            >
                <div
                    onClick={handleBio}
                >
                    {state.bio ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light personal-info-text">bio</span>
                </div>
                {state.bio ?
                    <div className="container project-div px-3 d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                        <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                        <p className="text-light m-0 personal-info-text" onClick={(e) => handleName(e)} >bio</p>
                    </div> : null}

            </div>
            <div className="container-fluid"
                style={{ cursor: 'pointer' }}
            >
                <div
                    onClick={handleInterests}
                >
                    {state.interests ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light  personal-info-text">interests</span>
                </div>
                {state.interests ?
                    <div className="container project-div px-3 d-flex align-items-center d-flex" style={{ maxHeight: "2rem" }}>
                        <i className="fa-solid fa-file m-0  text-light"></i>&nbsp;
                        <p className="text-light m-0 personal-info-text" onClick={(e) => handleName(e)}>interests</p>
                    </div> : null}

            </div>
            <div className="container-fluid"
                style={{ cursor: 'pointer' }}
            >
                <div
                    onClick={handleEducation}
                >
                    {state.education ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light  personal-info-text">education</span>
                </div>
                {state.education ?
                    <div className="container project-div px-3 d-flex align-items-center " style={{ maxHeight: "2rem" }}>
                        <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                        <p className="text-light m-0 personal-info-text" onClick={(e) => handleName(e)} >education</p>
                    </div> : null}

            </div>
        </div></div >
    )
}

export default PersonalInfo