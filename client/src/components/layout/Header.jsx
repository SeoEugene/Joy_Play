import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import firebase from '../../firebase.js'

const Header = () => {
    // 유저 정보 가져오기
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const LogoutHandler = () => {
        firebase.auth().signOut();
        navigate("/");
    }

    return (
        <>
            <header id="header" role="banner">
                <div className="header1">
                    <h1>Joy AI</h1>
                    <nav className="nav">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/list">List</Link></li>
                            <li><Link to="/write">Wirte</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='header2 right'>
                    {user.accessToken === "" ? (
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/join">join</Link></li>
                        </ul>
                    ) : (
                        <ul>
                            <li>{user.displayName}님 어서와요</li>
                            <li><Link onClick={() => LogoutHandler()}>Logout</Link></li>
                        </ul>
                    )}
                </div>
            </header >
            <div className="banner">
            </div>
        </>
    )
}

export default Header