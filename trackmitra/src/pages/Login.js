import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const users = [
        { username: 'official1', password: 'password1', type: 'Official' },
        { username: 'club1', password: 'password2', type: 'Clubs' },
        { username: 'club2', password: 'password3', type: 'Clubs' },
    ];

    const handleLogin = (event) => {
        event.preventDefault();

        const user = users.find((user) => user.username === username);

        if (user && user.password === password) {
            alert('Login successful!');
            if (user.type === 'Official') {
                navigate('/showcsv');
            } else {
                navigate('/uploadcsv');
            }
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container" style={{
            backgroundImage: "url('/athlete.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh'
        }}>
            <h1 className="branding">Trackmitra</h1>
            <form onSubmit={handleLogin} className="login-form">
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
