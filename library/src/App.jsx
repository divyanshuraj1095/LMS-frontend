import Button from './Components/Button.jsx'
import Header from './Components/Header.jsx'
// import MyBooks from './Components/MyBooks.jsx'
import Section from './Components/Section.jsx'
import { useEffect,useState } from 'react'
import About from './Components/About.jsx'
import BookList from './Components/BookList.jsx'

const App = ()=>{
  const [about, setAbout]=useState(false)
  const [myBooks, setMyBooks]=useState(false)
  // const [savedbooks, setSavedBooks]=useState([])
  

  // const handleSavedBook = (book)=>{
  //   if(!savedbooks.some((b)=>b.id === book.id)){
  //     setSavedBooks([...savedbooks,book])
  //   }
  // }
return(<div>
  <Header setAbout={setAbout} setMyBooks={setMyBooks}/>

 {about ? (
        <About />
      ) : myBooks ? (
        <BookList />
      ) : (
        <Section />
      )}


 </div>)
}
export default App