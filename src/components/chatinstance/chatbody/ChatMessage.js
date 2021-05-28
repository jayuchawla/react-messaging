import React from 'react'

import '../../../styles/chatinstance/chatbody/chatmessage.css';
import { useStateValue } from '../../util/user_state_management/StateProvider';
function ChatMessage({ message }) {
    const[{ user }, dispatch] = useStateValue();
    return (
        <div className="chatmessage">
            <p className={`message ${user.displayName === message.from && "message__sent"}`}>
                <span className="sender__name">{message.from}</span>
                {message.message}
                <span className="message__timestamp">{message.timestamp ? new Date(message.timestamp.toDate()).toUTCString() : null}</span>
            </p>
        </div>
    )
}

export default ChatMessage;
