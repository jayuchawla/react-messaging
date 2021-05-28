import React, { useEffect, useState } from 'react'

import '../../../styles/sidebar/chats/chats.css';
import AddNewChat from './AddNewChat';
import Chat from './Chat';

import db from '../../../config/firebase-config';

function Chats() {

    const [rooms, setRooms] = useState([])

    useEffect(function () {
        const unsubscribe = db.collection('rooms').onSnapshot(function (snapshot) {
            setRooms(snapshot.docs.map(function (doc) {
                return ({
                    id: doc.id,
                    data: doc.data(),
                });
            }))
        })
        // cleanup
        return (function () {
            // this is cleanup, will detach row time listener post fetching
            unsubscribe();
        });
    }, [])

    return (
        <div className="chats">
            <AddNewChat />
            {
                rooms.map(function (room) {
                    return (
                        <Chat key={room.id} id={room.id} roomname={room.data.name} />
                    );
                })
            }
        </div>
    )
}

export default Chats;
