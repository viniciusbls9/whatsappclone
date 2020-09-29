import React, { useState, useEffect } from 'react';

import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/ChatWindow/ChatWindow';
import ChatListItem from './components/ChatListItem/ChatListItem';
import Header from './components/Header/Header';
import NewChat from './components/NewChat/NewChat';
import Login from './components/Login/Login';

import Api from './Api';
import GlobalStyle from './assets/styles/global.css';
import SearchIcon from '@material-ui/icons/Search';

import './App.css';

export default () => {

    const [chatList, setChatList] = useState([]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState({
        id: 'W6GkNWa2c0TlXJB6l0UtQnh9Tmu1',
        name: 'Vinicius Benedito',
        avatar: 'https://graph.facebook.com/181573786763650/picture',
    });

    const [showNewChat, setShowNewChat] = useState(false);

    useEffect(() => {
        if(user !== null) {
            let unsub = Api.onChatList(user.id, setChatList);
            return unsub;
        }
    }, [user]);

    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        };

        await Api.addUser(newUser);
        setUser(newUser);
    }

    if(user === null) {
        return (<Login onReceive={handleLoginData} />);
    }

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