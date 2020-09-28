import React, { useState } from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './styles.css';

function NewChat({ user, chatList, show, setShow }) {

    const [list, setList] = useState([
        { id: 123, avatar: 'https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4', name: 'Vinicius Benedito' },
        { id: 123, avatar: 'https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4', name: 'Vinicius Benedito' },
        { id: 123, avatar: 'https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4', name: 'Vinicius Benedito' },
        { id: 123, avatar: 'https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4', name: 'Vinicius Benedito' },
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="new-chat" style={{ left: show ? '0' : '-415px' }}>
            <div className="new-chat-head">
                <div onClick={handleClose} className="new-chat-back-button">
                    <ArrowBackIcon style={{ color: 'var(--color-bg-white)' }} />
                </div>
                <div className="new-chat-head-title">Nova Conversa</div>
            </div>
            <div className="new-chat-list">
                {list.map((item, key) => (
                    <div className="new-chat-item" key={key}>
                        <img className="new-chat-avatar" src={item.avatar} alt="" />
                        <div className="new-chat-item-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewChat;