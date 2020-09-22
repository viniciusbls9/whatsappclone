import React from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './styles.css';

function Header() {
    return (
        <header>
            <img className="header--avatar" src="https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4" alt="" />

            <div className="header--buttons">
                <div className="header--btn">
                    <DonutLargeIcon style={{ color: '#919191' }} />
                </div>

                <div className="header--btn">
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