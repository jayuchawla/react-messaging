import React, { useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import '../../styles/util/popup.css';
import { IconButton } from '@material-ui/core';

function Popup({ title, inputFieldContent, handleConfirm, handleCancel }) {
    const [inputText, setInputText] = useState('')

    return (
        <div className="popup-box">
            <div className="box">
                <h3>{title}</h3>
                <div className="inputFieldContainer">
                    <input className="inputField" placeholder={inputFieldContent} onChange={(e) => setInputText(e.target.value)} value={inputText}/>
                </div>
                <div className="buttons-container">
                    <IconButton onClick={() => handleConfirm(inputText)}>
                        <CheckIcon />
                    </IconButton>
                    <IconButton onClick={handleCancel}>
                        <CloseIcon />                        
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Popup;
