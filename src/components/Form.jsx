/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Forms = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState({
        emailError: '',
        passwordError: ''
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(state.email);
        const isPasswordValid = validatePassword(state.password);

        setError({
            emailError: isEmailValid ? '' : 'Please enter a valid email address.',
            passwordError: isPasswordValid ? '' : 'Password must be at least 6 characters long.'
        });

        if (isEmailValid && isPasswordValid) {
            if (state.email === 'test@test.com' && state.password === 'test@test1234') {
                setLoggedIn(true);
                setError({ emailError: '', passwordError: '' });
            } else {
                setLoggedIn(false);
                setError({ emailError: '', passwordError: 'Invalid email or password. Please try again.' });
            }
        } else {
            setLoggedIn(false);
        }
    };

    return (
        <div>
           

            {!loggedIn ? (
                <form onSubmit={handleSubmit} className='mt-2'>
                    <h1 className='text-blue-600 mb-4 uppercase'>Login</h1>
                    <label >Name</label>
                    <input type="name" name='name' value={state.name} onChange={handleChange} className='mb-4' required />
                    <br />
                    {error.emailError && <p style={{ color: 'red' }}>{error.emailError}</p>}
                   
                    <label>Email</label>
                    <input type="email" name='email' value={state.email} onChange={handleChange} required className='mb-4'/>
                    <br />
                    {error.passwordError && <p style={{ color: 'red' }}>{error.passwordError}</p>}
                    <label>Password</label>
                    <input type="password" name='password' value={state.password} onChange={handleChange} required />
                    <br />
                    <input type="submit" value="Submit" className='bg-blue-500 p-4 mt-2 rounded-lg  hover:bg-blue-300 hover:text-lg' />
                </form>
            ) : (
                <h1>Welcome, {state.name}!</h1>
            )}
        </div>
    );
};

export default Forms;
