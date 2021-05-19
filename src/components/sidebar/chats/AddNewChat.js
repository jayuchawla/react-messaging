import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';

import '../../../styles/sidebar/chats/addnewchat.css';

function AddNewChat() {

    
    const createChat = function() {
        const roomName = prompt("Please enter a rocking room-name!");
        if(roomName) {
            // database functionality
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
