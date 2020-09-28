import React, { useState, useEffect } from 'react';

import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/ChatWindow/ChatWindow';
import ChatListItem from './components/ChatListItem/ChatListItem';
import Header from './components/Header/Header';
import NewChat from './components/NewChat/NewChat';

import GlobalStyle from './assets/styles/global.css';
import SearchIcon from '@material-ui/icons/Search';

import './App.css';

export default () => {

    const [chatList, setChatList] = useState([
        { chatId: 1, title: 'Fulano', image: 'https://media-exp1.licdn.com/dms/image/C4D03AQGO3EqVOfMqGw/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=CBL2R2fxKlPiMt9EU6d1Xrx4pRxeJP57NLSBdoARjH0' },
        { chatId: 2, title: 'Ciclaro', image: 'https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4' },
        { chatId: 3, title: 'Beltrano', image: 'https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4' },
        { chatId: 4, title: 'Mariangela', image: 'https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4' },
    ]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState({
        id: 0,
        avatar: 'https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4',
        name: 'Vinicius'
    });

    const [showNewChat, setShowNewChat] = useState(false);

    return (
        <div className="app-window">
            <div className="sidebar">
                <NewChat
                    chatList={chatList}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <Header
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <div className="search">
                    <div className="search--input">
                        <SearchIcon fontSize="small" style={{ color: '#919191' }} />
                        <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                    </div>
                </div>

                <div className="chat-list">
                    {chatList.map((item, key) => (
                        <ChatListItem
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatList[key].chatId}
                            onClick={() => setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </div>

            <div className="content-area">
                {activeChat.chatId !== undefined &&
                    <ChatWindow user={user} />
                }
                {activeChat.chatId === undefined &&
                    <ChatIntro />
                }
            </div>

        </div>
    );
}