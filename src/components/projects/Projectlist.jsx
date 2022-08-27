import React, { useReducer } from 'react'
const initialState = { qmate: false, ctf: false, satiate: false, badge: false, tesero: false, alley: false, coseedge: false, amkam: false };

const reducer = (state, action) => {
    switch (action.type) {
        case "QMATE":
            return { qmate: !state.qmate };
        case "CTF":
            return { ctf: !state.ctf };
        case "SATIATE":
            return { satiate: !state.satiate };
        case "BADGE":
            return { badge: !state.badge };
        case "TESERO":
            return { tesero: !state.tesero };
        case "ALLEY":
            return { alley: !state.alley };
        case "COSEEDGE":
            return { coseedge: !state.coseedge };
        case "AMKAM":
            return { amkam: !state.amkam };
        default:
            throw new Error();
    }
};
const Projectlist = ({ stateChanger, setName }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleQmatePress = () => {

        dispatch({ type: "QMATE" });
    };
    const handleCtfPress = () => {
        dispatch({ type: "CTF" });
    };
    const handleSatiatePress = () => {
        dispatch({ type: "SATIATE" });
    };
    const handleBadgePress = () => {
        dispatch({ type: "BADGE" });
    };
    const handleTeseroPress = () => {
        dispatch({ type: "TESERO" });
    };
    const handleAlleyPress = () => {
        dispatch({ type: "ALLEY" });
    };
    const handleCoseedgePress = () => {
        dispatch({ type: "COSEEDGE" });
    };
    const handleAmkamPress = () => {
        dispatch({ type: "AMKAM" });
    };

    const handleName = (e) => {
        stateChanger(e.target.innerText);
        setName(e.target.innerText);
    }


    return (
        <div>
            <div className="container p-2"
                style={{ cursor: 'pointer' }}
            >
                <div onClick={handleQmatePress}>
                    {state.qmate ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light projectword">Qmate</span>
                </div>
                {state.qmate ? <div className="container project-div d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                    <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                    <p className="m-0 text-light projectword" onClick={(e) => handleName(e)}>Qmate</p>
                </div> : null}

            </div>
            <div className="container p-2"
                style={{ cursor: 'pointer' }}
            >
                <div onClick={handleCtfPress}>
                    {state.ctf ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light projectword">CTF-DMCE</span>
                </div>

                {state.ctf ? <div className="container project-div d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                    <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                    <p className="m-0 text-light projectword" onClick={(e) => handleName(e)}>CTF-DMCE</p>
                </div> : null}

            </div>
            <div className="container p-2"
                style={{ cursor: 'pointer' }}
            >
                <div onClick={handleSatiatePress}>
                    {state.satiate ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light projectword">Satiate</span>
                </div>

                {state.satiate ? <div className="container project-div d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                    <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                    <p className="m-0 text-light projectword" onClick={(e) => handleName(e)}>Satiate</p>
                </div> : null}

            </div>
            <div className="container p-2"
                style={{ cursor: 'pointer' }}
            >
                <div onClick={handleBadgePress}>
                    {state.badge ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light projectword">CSI-BADGE</span>
                </div>
                {state.badge ? <div className="container project-div d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                    <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                    <p className="m-0 text-light projectword" onClick={(e) => handleName(e)}>CSI-BADGE</p>
                </div> : null}

            </div>
            <div className="container p-2"
                style={{ cursor: 'pointer' }}
            >
                <div onClick={handleTeseroPress}>
                    {state.tesero ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light projectword">Tesero Heist</span>
                </div>
                {state.tesero ? <div className="container project-div d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                    <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                    <p className="m-0 text-light projectword" onClick={(e) => handleName(e)}>Tesero Heist</p>
                </div> : null}

            </div>
            <div className="container p-2"
                style={{ cursor: 'pointer' }}
            >
                <div onClick={handleCoseedgePress}>
                    {state.coseedge ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light projectword">Coseedge</span>
                </div>
                {state.coseedge ? <div className="container project-div d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                    <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                    <p className="m-0 text-light projectword" onClick={(e) => handleName(e)}>Coseedge</p>
                </div> : null}

            </div>
            <div className="container p-2"
                style={{ cursor: 'pointer' }}
            >
                <div onClick={handleAlleyPress}>
                    {state.alley ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light projectword">Data-Alley</span>
                </div>
                {state.alley ? <div className="container project-div d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                    <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                    <p className="m-0 text-light projectword" onClick={(e) => handleName(e)}>Data-alley</p>
                </div> : null}

            </div>
            <div className="container p-2"
                style={{ cursor: 'pointer' }}
            >
                <div onClick={handleAmkamPress}>

                    {state.amkam ? <i class="fa-solid fa-angle-down text-light"></i> : <i class="fa-solid fa-angle-right text-light"></i>}&nbsp;
                    <i className="fa-solid solid-3 fa-folder"></i>&nbsp;
                    <span className="text-light projectword">Amkam Tech</span>

                </div>
                {state.amkam ? <div className="container project-div d-flex align-items-center" style={{ maxHeight: "2rem" }}>
                    <i className="fa-solid fa-file m-0 text-light"></i>&nbsp;
                    <p className="m-0 text-light projectword" onClick={(e) => handleName(e)}>Amkam-Tech</p>
                </div> : null}

            </div>
        </div >
    )
}

export default Projectlist;