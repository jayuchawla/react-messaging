import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import '../../../styles/sidebar/chats/chat.css';

function Chat() {

    const [seed, setSeed] = useState('');

    useEffect(function() {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__info">
                <h3>This is a chat</h3>
                <p>Recent message</p>
            </div>
        </div>
    )
}

export default Chat;