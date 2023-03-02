import React from 'react';

//Components
import Navbar from './Navbar';
import Appbar from './Appbar';

const Header = () => {
    return (
        <div className='sticky top-0 z-10'>
            <Appbar/>
            <Navbar/>
        </div>
    );
};

export default Header;