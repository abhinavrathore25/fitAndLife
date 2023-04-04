import axios from 'axios';
import {React, useState} from 'react';
import './Login.css';
import {config} from './axiosConfig';

const Login = ({isLoggedIn}) => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleCredentials = (event) => {
        const {name, value} = event.target;

        setCredentials({...credentials, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        authenticateUser();
    }

    const authenticateUser = () => {
        axios.post('http://localhost:8080/validateUser', credentials, config)
        .then(res => {
            (localCredentials === null) && localStorage.setItem('credentials', JSON.stringify(credentials));
            isLoggedIn(true, false);
        })
        .catch(err => {
            isLoggedIn(false, null);
            console.log(err);
        });
    }

    const localCredentials = localStorage.getItem('credentials');
    if(localCredentials !== null){
        authenticateUser(localCredentials);
    }

    return (
        <div className='loginModal'>
            <form className='loginForm'>
                <label htmlFor='email'>Email</label><br />
                <input type='email' name='email' id='email' className='email' required
                    pattern='([a-z]{2,100})(@[a-z]{2,30}(.[a-z]{2,10}))' onChange={handleCredentials} value={credentials.email}
                /><br />
                <label htmlFor='password'>Password</label><br />
                <input type='password' name='password' id='password' className='password' required
                onChange={handleCredentials} value={credentials.password}
                /><br />
                <button className='loginButton' onClick={handleSubmit}>
                    LOGIN
                </button>
            </form>
        </div>
    )
}

export default Login;