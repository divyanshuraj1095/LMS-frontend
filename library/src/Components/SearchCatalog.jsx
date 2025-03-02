import Author from './dropdown compo/Author.jsx';
import Title from './dropdown compo/Title.jsx';
import { useState } from 'react';
import searchIcon from '../assets/search.svg';
import ISBN from './dropdown compo/ISBN.jsx';
import Subject from './dropdown compo/Subject.jsx';
import CallNumber from './dropdown compo/CallNumber.jsx';

const SearchCatalog=()=>{
    const [option, setOption]=useState("")
    
    const handleOption = (event)=>{
      setOption(event.target.value)
    }   
return(<>
<div className='search'>
            <h1>Search Library Catalog</h1>
            <div className='dropdowncontainer'>
                <select value={option} onChange={handleOption}className='dropdown'>
                    <option>Libaray Catelog</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="isbn">ISBN</option>
                    <option value="call number">Call Number</option>
                </select>
               
               {option==="title" && <Title/>}
               {option==="author" && <Author/>}
               {option==="isbn"&&<ISBN/>}
               {option==="subject"&& <Subject/>}
               {option==="callnumber"&& <CallNumber/>}
               
            </div>
             

             {/* <div className='searchbox'>
                 <img src={searchIcon} alt='search-icon' />
             </div> */}
            <input 
             type='text' 
             className='searchinput' 
             placeholder='Search Books'/>
                </div>

</>)
}
export default SearchCatalog