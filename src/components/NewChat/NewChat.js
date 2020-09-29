import React, { useState, useEffect } from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Api from '../../Api';

import './styles.css';

function NewChat({ user, chatList, show, setShow }) {

    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            if (user !== null) {
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user]);

    const addNewChat = async(user2) => {
        await Api.addNewChat(user, user2);

        handleClose();
    }

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
                    <div onClick={() => addNewChat(item)} className="new-chat-item" key={key}>
                        <img className="new-chat-avatar" src={item.avatar} alt="" />
                        <div className="new-chat-item-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewChat;