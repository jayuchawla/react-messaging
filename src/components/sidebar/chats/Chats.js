import React from 'react'

import '../../../styles/sidebar/chats/chats.css';
import AddNewChat from './AddNewChat';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <AddNewChat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
        </div>
    )
}

export default Chats;
