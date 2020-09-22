import React from 'react';
import './styles.css';


function ChatListItem() {
  return (
      <div className="chat-list-item">
        <img className="chat-list-avatar" src="https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4" alt=""/>
        <div className="chat-list-lines">
          <div className="chat-list-line">
            <div className="chat-list-name">Vinicius Benedito</div>
            <div className="chat-list-date">19:00</div>
          </div>

          <div className="chat-list-line">
            <div className="chat-list-last-msg">
              <p>Lorem, ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ChatListItem;