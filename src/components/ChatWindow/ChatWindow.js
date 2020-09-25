import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import './styles.css';

function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-window-header">

        <div className="header-info">
          <img className="header-avatar" src="https://avatars3.githubusercontent.com/u/40433674?s=460&u=549c5647c3fbc3853cc210872ff1191aff7d03b6&v=4" alt="" />
          <div className="header-name">Vinicius Benedito</div>
        </div>

        <div className="header-buttons">
          <div className="header-btn">
            <SearchIcon style={{ color: '#919191' }} />
          </div>

          <div className="header-btn">
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>

          <div className="header-btn">
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </div>



      </div>
      <div className="chat-window-body">

      </div>
      <div className="chat-window-footer">

        <div className="chat-footer-pre">
          <div className="header-btn">
            <InsertEmoticonIcon style={{ color: '#919191' }} />
          </div>
        </div>
        <div className="chat-footer-input-area">
          <input
            className="chat-footer-input"
            type="text" placeholder="Digite uma mensagem"
          />
        </div>

        <div className="chat-footer-pos">

          <div className="header-btn">
            <SendIcon style={{ color: '#919191' }} />
          </div>

        </div>

      </div>
    </div>
  );
}

export default ChatWindow;