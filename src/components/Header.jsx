import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {  })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between px-10 ">
                <a className="btn btn-ghost normal-case text-2xl">JS TechZone</a>
                <div className='normal-case text-xl'>
                    <Link className='mr-5' to='/'>Home</Link>
                    <Link className='mr-5' to='/orders'>Orders</Link>
                    {user && <Link className='mr-5' to='/profile'>Profile</Link>}
                    <Link className='mr-5' to='/login'>Login</Link>
                    <Link className='mr-5' to='/register'>Register</Link>
                    {
                        user ?
                            <><span>{user.email}</span>
                                <><button onClick={handleLogOut} className="btn btn-xs">Sign Out</button></>
                            </> : <> <Link to='/login'>Login</Link> </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;