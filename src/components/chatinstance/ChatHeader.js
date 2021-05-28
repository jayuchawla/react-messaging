import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import '../../styles/chatinstance/chatheader.css';

function ChatHeader({ roomName, lastActivityAt }) {
    return (
        <div className="chatheader">
            {/* in src show up avatar of selected chat */}
            <Avatar src=""/>
            <div className="chatheader__info">
                <h3>{roomName}</h3>
                <p>{lastActivityAt}</p>    
            </div>
            <div className="chatheader__right">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default ChatHeader;
