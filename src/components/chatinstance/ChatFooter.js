import React, { useState } from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
// to pull out server timestamp
import firebase from 'firebase';

import '../../styles/chatinstance/chatfooter.css';
import db from '../../config/firebase-config';
import { useStateValue } from '../util/user_state_management/StateProvider';



function ChatFooter({ roomId }) {
    const [typedMessage, setTypedMessage] = useState('')
    const [{ user }, dispatch] = useStateValue();

    const sendMessage = function(e) {
        e.preventDefault();
        console.log("message typed: ", typedMessage);
        // dump to database !!!
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: typedMessage,
            from: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setTypedMessage('');
    }
    
    return (
        <div className="chatfooter">
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <form>
                <input placeholder="Type a message..." type="text" value={typedMessage} onChange={(e) => setTypedMessage(e.target.value)} />
                <button type="submit" onClick={(e) => sendMessage(e)}>Send</button>
                {/* <SendIcon /> */}
            </form>
            <IconButton>
                <MicIcon />
            </IconButton>

        </div>
    )
}

export default ChatFooter;