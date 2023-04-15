import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between px-10 ">
                <a className="btn btn-ghost normal-case text-2xl">JS TechZone</a>
                <div className='normal-case text-xl'>
                    <Link className='mr-5' to='/' >Home</Link>
                    <Link className='mr-5'  to='/login' >Login</Link>
                    <Link to='/register' >Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;