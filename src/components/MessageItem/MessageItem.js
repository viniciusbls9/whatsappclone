import React from 'react';

import './styles.css';

function MessageItem({ data, user }) {
    return (
        <div
            className="message-line"
            style={{justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'}}
        >
            <div
                className="message-item"
                style={{ backgroundColor: user.id === data.author ? 'var(--color-message)' : 'var(--color-bg-white)' }}
            >
                <div className="message-text">{data.body}</div>
                <div className="message-date">19:00</div>
            </div>
        </div>
    );
}

export default MessageItem;