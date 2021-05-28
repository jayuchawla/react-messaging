import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from '../../../config/firebase-config';

import '../../../styles/sidebar/chats/chat.css';

function Chat({ id, roomname }) {

    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState([])

    useEffect(function() {
        if(id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(function(snapshot) {
                    setMessages(snapshot.docs.map(function(doc) {
                        return doc.data()
                    }))
                })
        }
    }, [id]);

    useEffect(function () {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <Link to={`/rooms/${id}`}>
            <div className="chat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__info">
                    <h3>{roomname}</h3>
                    <p>{messages[0] ? messages[0].message : null}</p>
                </div>
            </div>
        </Link>

    )
}

export default Chat;