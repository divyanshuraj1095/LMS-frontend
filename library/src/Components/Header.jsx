import soeicon from '../assets/soe icon.jpeg';
import { useEffect, useState } from 'react';
import searchIcon from '../assets/search.svg';
import usericon from '../assets/usericon.svg';
import Button from '../Components/Button.jsx';

const Header = ({ setAbout,setMyBooks}) => {


    return (
        <>
            <header className='header'>
                <nav className='navigation'>
                    <div className='logo'>
                        <img src={soeicon} alt='college icon' />
                        <h2>SOE Library</h2>
                    </div>

                    <nav className='button'>
                     <Button label="Home" onClick={() => {
                         setAbout(false);
                         setMyBooks(false); }} />
                     <Button label="My Books" onClick={() => { 
                        setAbout(false);
                         setMyBooks(true); }} />
                     <Button label="About" onClick={() => {
                         setAbout(true); 
                         setMyBooks(false); }} />
                    </nav>
                </nav>

                <div className='search'>
                    <div className='searchbox'>
                        <img src={searchIcon} alt='search-icon' />
                    </div>
                    <input 
                        type='text' 
                        className='searchinput' 
                        placeholder='Search Books' 
                        
                    />
                </div>

                <button className='userbutton'><img className='usericon' src={usericon} alt="icon" /></button>
            </header>
        </>
    );
}

export default Header;
