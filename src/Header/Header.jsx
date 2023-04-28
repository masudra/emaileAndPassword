import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header-div'>
                <Link className='deader-link' to='/'>Home</Link>
                <Link className='deader-link' to='/login'>Login</Link>
                <Link className='deader-link' to='/registration'>Registration</Link>
            </nav>
            
        </div>
    );
};

export default Header;