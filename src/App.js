import React, { useState, useEffect } from 'react';

import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatListItem from './components/ChatListItem/ChatListItem';
import Header from './components/Header/Header';
import GlobalStyle from './assets/styles/global.css';
import SearchIcon from '@material-ui/icons/Search';

import './App.css';

export default () => {

  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <div className="app-window">
      <div className="sidebar">
        <Header />
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
            />
          ))}
        </div>
      </div>

      <div className="content-area">
        <ChatIntro />
      </div>

    </div>
  );
}