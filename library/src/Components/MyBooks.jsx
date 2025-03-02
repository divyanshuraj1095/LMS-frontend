
const MyBooks = ({books})=>{
   
    return(<div>
       {books.length===0?(
        <p>No Books Save yet</p>
       ):(
        books.map((book)=>{
            <div key={book.id}>
             <h4>{book.title}</h4>
             <p>{book.author}</p>
            </div>    
        })
       )}
       </div>  
    )
}
export default MyBooks