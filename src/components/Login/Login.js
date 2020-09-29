import React from 'react';

import Api from '../../Api';
import './styles.css';

function Login({ onReceive }) {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if (result) {
            onReceive(result.user);
        } else {
            alert('erro!');
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com o Facebook</button>
        </div>
    );
}

export default Login;