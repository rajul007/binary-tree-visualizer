import React from 'react'

export default function (props) {
    const handleOnChange = (e) => {
        props.handleTreeInputChange(e.target.value);
    }
    return (
        <div className="tree-input-container">
            <input type="text" id="tree-input" onChange={handleOnChange} />
        </div>
    )
}
