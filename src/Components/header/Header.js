import React from 'react';

//Components
import Navbar from './Navbar';
import Appbar from './Appbar';
import Sortfilter from './Sortfilter';

const Header = ({setActive}) => {
    return (
        <div className='md:sticky top-0 z-10'>
            <Appbar/>
            <Navbar/>
            <Sortfilter setActive={setActive}/>
        </div>
    );
};

export default Header;