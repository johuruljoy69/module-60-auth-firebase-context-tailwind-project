import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';


const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div className='mt-10'>
            <h2>This is Home Page {user && <span>{user.displayName}</span>} </h2>
        </div>
    );
};

export default Home;