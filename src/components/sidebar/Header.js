import React from 'react';
import { Avatar,IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat'; 
import MoreVertIcon from '@material-ui/icons/MoreVert';

import '../../styles/sidebar/header.css';
import { useStateValue } from '../util/user_state_management/StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <Avatar src={user ? `${user.photoURL}` : null}/>
            <div className="header__right">
                {/* IconButton wrapper lets you create ripple effect on click */}
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
