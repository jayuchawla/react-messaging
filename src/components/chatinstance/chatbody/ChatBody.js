import React, { useEffect } from 'react';

import '../../../styles/chatinstance/chatbody/chatbody.css';

import { backgroundImage } from '../../util/Constants';
import { useStateValue } from '../../util/user_state_management/StateProvider';
import ChatMessage from './ChatMessage';

function ChatBody({ messages }) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="chatbody" style={{backgroundImage: 'url('+backgroundImage+')'}}>
            {
                messages.map(function(message) {
                    if(message.from === user.displayName) {
                        return (
                            <ChatMessage message={message} sent_message={true} />
                        )
                    }
                    else {
                        return (
                            <ChatMessage message={message} sent_message={false} />
                        )
                    }
                })
            }
        </div>
        
    )
}

export default ChatBody;
