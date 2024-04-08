import React,{useState} from 'react';
import './LoginSignup.css';


import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action,setAction]= useState("Sign Up");

    return (
        <>
        {/* Navbar */}
        <nav className='navbar'>
            <div className='container-fluid'>
                <h1 className=' fs-1 p-5'>Natia Latsuzbaia's Blog</h1>
            </div>
        </nav>

        {/* Main Content */}
        <div className='container'>
            <div className="header">
                <div className="text fs-1 fw-semibold">{action}</div>
                <div className="underline rounded-4"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name' />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email Address' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">Lost Password <span>Click Here!</span></div>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    </>
    );
};

export default LoginSignup;