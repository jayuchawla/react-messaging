import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatHeader from './ChatHeader';
import ChatBody from './chatbody/ChatBody';
import ChatFooter from './ChatFooter';

import '../../styles/chatinstance/chatinstance.css';
import db from '../../config/firebase-config';

function ChatInstance() {
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [lastActivityAt, setLastActivityAt] = useState(null);
    const { roomId } = useParams();

    useEffect(function () {
        console.log("logging from ChatInstance, roomId for selected room: ", roomId);
        db.collection('rooms').doc(roomId).onSnapshot(function (snapshot) {
            setRoomName(snapshot.data().name);
        });
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
            .onSnapshot(function (snapshot) {
                setMessages(snapshot.docs.map(function (doc) {
                    return doc.data();
                }))
            });
    }, [roomId]);

    // useEffect(function () {
    //     setLastActivityAt(function () {
    //         const lastMessage = messages[messages.length - 1];
    //         return (
    //             new Date(lastMessage ? lastMessage.timestamp.toDate() : null).toUTCString()
    //         )
    //     })
    // }, [messages])

    return (
        <div className="chatinstance">
            <ChatHeader roomName={roomName} lastActivityAt={lastActivityAt}/>
            <ChatBody messages={messages} />
            <ChatFooter roomId={roomId} />
        </div>
    )
}

export default ChatInstance;
