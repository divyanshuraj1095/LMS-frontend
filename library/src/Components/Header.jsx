import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu.jsx';
import soeicon from '../assets/soe icon.jpeg';
import usericon from '../assets/usericon.svg'; 
import Button from '../Components/Button.jsx';

const Header = ({ setAbout, setMyBooks }) => {
    const [resources, setResources] = useState("");
    const [others, setOthers] = useState("");
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <header className='header'>
                <nav className='navigation'>
                    <div className='logo'>
                        <img src={soeicon} alt='college icon' />
                        <h2>SOE Library</h2>
                    </div>
                    
                    
                    <MdMenu className='vegburger text-4xl cursor-pointer' onClick={() => setOpen(!open)} />

                    <nav className='button'>
                        <Button label="Home" onClick={() => { setAbout(false); setMyBooks(false); }} />
                        <Button label="My Books" onClick={() => { setAbout(false); setMyBooks(true); }} />
                        <Button label="About" onClick={() => { setAbout(true); setMyBooks(false); }} />
                    </nav>
                </nav>

                <select value={resources} onChange={(e) => setResources(e.target.value)} className='resources'>
                    <option>Resources</option>
                    <option value="catPapers">Cat Papers</option>
                    <option value="institutionalRepo">Institutional Repository</option>
                    <option value="eNewspaper">E-Newspaper</option>
                    <option value="eBooks">E-Books</option>
                    <option value="indianJournals">Indian Journals</option>
                </select>

                <select value={others} onChange={(e) => setOthers(e.target.value)} className='resources'>
                    <option>Others</option>
                    <option value='tutorials'>Tutorials</option>
                    <option value='gallery'>Gallery</option>
                    <option value='contact'>Contact</option>
                </select>

                
                <div className="relative">
                    <button className='userbutton' onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <img 
                            className='usericon w-10 h-10 rounded-full' 
                            src={isLoggedIn ? profileIcon : usericon} 
                            alt="User Icon" 
                        />
                    </button>

                    
                    {dropdownOpen && (
                        <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-48 p-4">
                            {isLoggedIn ? (
                                <>
                                    <p className="text-gray-700 font-semibold">Welcome, User</p>
                                    <button 
                                        className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                                        onClick={() => { setIsLoggedIn(false); setDropdownOpen(false); }}
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <button 
                                    className="userbutton"
                                    onClick={() => { setIsLoggedIn(true); setDropdownOpen(false); }}
                                >
                                    Sign In
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </header>

        
            <ResponsiveMenu open={open} setOpen={setOpen} setAbout={setAbout} setMyBooks={setMyBooks} />
        </>
    );
}

export default Header;
