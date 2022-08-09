import React from 'react'
const Input = ({ text, size }) => {

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control glowing" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={text}
                    style={{ height: size }}
                />
            </div>
        </div>
    )
}

export default Input