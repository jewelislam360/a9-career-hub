import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' w-[75%] mx-auto flex align-center justify-between navbar'>
            <div>
                <h1 className='text-4xl'>JobHUB</h1>
                </div>
            <div>
            <nav className='" text-xl'>
            <Link className='mr-8' to="/">Home</Link>
            <Link className='mr-8' to="/statistics">Statistics</Link>
            <Link className='mr-8' to="/appliedjobs">Applied Jobs</Link>
            <Link className='mr-8' to="/blog">Blog</Link>
            
            
        </nav>
            </div>
            <div>
                <button className='btn btn-accent'>Star Applying</button>
            </div>

        </div>
        
    );
};

export default Header;