import React from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './styles.css';

function Header({ user, show, setShow }) {

    const handleNewChat = () => {
        setShow(true);
    }

    return (
        <header>
            <img className="header--avatar" src={user.avatar} alt="" />

            <div className="header--buttons">
                <div className="header--btn">
                    <DonutLargeIcon style={{ color: '#919191' }} />
                </div>

                <div onClick={handleNewChat} className="header--btn">
                    <ChatIcon style={{ color: '#919191' }} />
                </div>

                <div className="header--btn">
                    <MoreVertIcon style={{ color: '#919191' }} />
                </div>

            </div>
        </header>
    );
}

export default Header;