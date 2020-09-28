import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

import MessageItem from '../MessageItem/MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import './styles.css';

function ChatWindow() {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listenig, setListening] = useState(false);
    const [list, setList] = useState([]);

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji0);
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleMicClick = () => {
        if (recognition !== null) {
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }

            recognition.start();
        }
    }

    const handleSendClick = () => {

    }


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
                {list.map((item, key) => (
                    <MessageItem key={key} data={item} />
                ))}
            </div>

            <div className="chat-emoji-area" style={{ height: emojiOpen ? '200px' : '0px' }}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            <div className="chat-window-footer">

                <div className="chat-footer-pre">

                    <div className="header-btn"
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen ? '40px' : '0px' }}
                    >
                        <CloseIcon style={{ color: '#919191' }} />
                    </div>

                    <div className="header-btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
                    </div>

                </div>
                <div className="chat-footer-input-area">
                    <input
                        className="chat-footer-input"
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>

                <div className="chat-footer-pos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="header-btn">
                            <MicIcon style={{ color: listenig ? '#126ece' : '#919191' }} />
                        </div>
                    }

                    {text !== '' &&
                        <div onClick={handleSendClick} className="header-btn">
                            <SendIcon style={{ color: '#919191' }} />
                        </div>
                    }
                </div>

            </div>
        </div>
    );
}

export default ChatWindow;