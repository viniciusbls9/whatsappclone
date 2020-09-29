import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';

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
            <button onClick={handleFacebookLogin}>
                <FacebookIcon />    
                <span>Logar com o Facebook</span>
            </button>
        </div>
    );
}

export default Login;