import React from 'react';
import './styles.css';


function ChatListItem({ onClick, active, data }) {
  return (
      <div className={`chat-list-item ${active ? 'active' : ''}`} onClick={onClick}>
        <img className="chat-list-avatar" src={data.image} alt=""/>
        <div className="chat-list-lines">
          <div className="chat-list-line">
            <div className="chat-list-name">{data.title}</div>
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