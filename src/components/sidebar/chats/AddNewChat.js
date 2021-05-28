import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';

import '../../../styles/sidebar/chats/addnewchat.css';

import db from '../../../config/firebase-config';

function AddNewChat() {
    const createChat = function() {
        const roomName = prompt("Please enter a rocking room-name!");
        if(roomName) {
            // database functionality
            db.collection('rooms').add({
                name: roomName,

            });
        }
    }


    return (
        <div className="addnewchat">
            <IconButton onClick={createChat}>
                <AddIcon />
            </IconButton>
            <h3>Add New Chat</h3>
        </div>
    )
}

export default AddNewChat;
