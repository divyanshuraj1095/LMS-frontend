import soeicon from '../assets/soe icon.jpeg';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import usericon from '../assets/usericon.svg';
import Button from '../Components/Button.jsx';
import CatPapers from './HeaderButton/CatPapers.jsx'

const Header = ({ setAbout,setMyBooks}) => {
    const [resources, setResources] = useState("")
    const [others, setOthers]=useState("")
    const handleDropbar=(event)=>{
        setResources(event.target.value)
    }
    const handleOthers =(event)=>{
        setOthers(event.target.value)
    }

    return (
        <>
            <header className='header'>
                <nav className='navigation'>
                    <div className='logo'>
                        <img src={soeicon} alt='college icon' />
                        <h2>SOE Library</h2>
                    </div>
                    <GiHamburgerMenu className='vegburger'/>

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
                <select value={resources} onClick={handleDropbar}className='resources'>
                        <option>Resources</option>
                        <option value="catPapers">Cat Papers</option>
                        <option value="institutionalRepo">Institutional Repository</option>
                        <option value="eNewspaper">E-Newspaper</option>
                        <option value="eBooks">E-Books</option>
                        <option value="indianJournals">Indian Journals</option>
                     </select>

                <select value={others} onclick={handleOthers} className='resources'>
                    <option>Others</option>
                    <option value='tutorials'>Tutotrials</option>
                    <option value='gallary'>Gallary</option>
                    <option value='contact'>Contact</option>
                    </select>     

                

                <button className='userbutton'><img className='usericon' src={usericon} alt="icon" /></button>
            </header>
        </>
    );
}

export default Header;
