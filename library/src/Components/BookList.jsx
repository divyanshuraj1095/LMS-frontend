import BorrowButton from '../Components/BorrowButton.jsx'
const BookList = ()=>{
  
    const books = [
        {
          id: 1,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          year: 1925,
          genre: "Classic",
          image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
        },
        {
          id: 2,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          year: 1960,
          genre: "Fiction",
          image: "https://images.unsplash.com/photo-1529590003495-161262ed1d9b",
        },
        {
          id: 3,
          title: "1984",
          author: "George Orwell",
          year: 1949,
          genre: "Dystopian",
          image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        },
        {
          id: 4,
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          year: 1951,
          genre: "Fiction",
          image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        },
        {
          id: 5,
          title: "Moby-Dick",
          author: "Herman Melville",
          year: 1851,
          genre: "Adventure",
          image: "https://images.unsplash.com/photo-1556040220-4096be9d3f52",
        },
        {
          id: 6,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          year: 1813,
          genre: "Romance",
          image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
        },
        {
          id: 7,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          year: 1937,
          genre: "Fantasy",
          image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
        },
        {
          id: 8,
          title: "War and Peace",
          author: "Leo Tolstoy",
          year: 1869,
          genre: "Historical Fiction",
          image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
        },
        {
          id: 9,
          title: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          year: 1866,
          genre: "Psychological Fiction",
          image: "https://images.unsplash.com/photo-1563206767-32090f03b9f3",
        },
        {
          id: 10,
          title: "Brave New World",
          author: "Aldous Huxley",
          year: 1932,
          genre: "Science Fiction",
          image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        },
        {
          id: 11,
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          year: 1954,
          genre: "Fantasy",
          image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
        },
        {
          id: 12,
          title: "The Alchemist",
          author: "Paulo Coelho",
          year: 1988,
          genre: "Philosophical Fiction",
          image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
        },
        {
          id: 13,
          title: "Don Quixote",
          author: "Miguel de Cervantes",
          year: 1605,
          genre: "Classic",
          image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
        },
        {
          id: 14,
          title: "Frankenstein",
          author: "Mary Shelley",
          year: 1818,
          genre: "Gothic Fiction",
          image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        },
        {
          id: 15,
          title: "Dracula",
          author: "Bram Stoker",
          year: 1897,
          genre: "Horror",
          image: "https://images.unsplash.com/photo-1526401485004-14f0ec9189a0",
        },
      ];
return (
    <div className='booklist'>
     {books.map((book) => (
      <div key={book.id } >
        <img src={book.image}alt={book.title} className='book1'/>
        <h4>{book.title}</h4>
        <p>{book.author}</p>
       
        <BorrowButton/>
        
      </div>


     ))}
    </div>
)      
}
export default BookList