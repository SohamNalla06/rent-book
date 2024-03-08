import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const ListBooks = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&key=AIzaSyBoXWnqF7CoWmEKg6uj0McZDGaW9Qdq04M`
      //"https://jsonplaceholder.typicode.com/photos"
    );
    const dataJSON = await data.json();
    setBooks(dataJSON.items);
  };
  const sampleBook = {
    title: "Test Title",
    description: "Lorem ipsum",
    imageUrl: "https://picsum.photos/id/237/200/300",
  };
  const [search, setSearch] = useState("ramayan");
  const handleSearch = () => {
    // Add your search functionality here
  };
  return (
    <div>
      <input
        name="book-search"
        type="text"
        placeholder="Search books,authors,publicshers.."
        onChange={(e) => {
          console.log(e.target.value);
          setSearch(e.target.value);
          if (e.target.value.length > 5) fetchdata();
        }}
        style={{
          background: "white",
          width: "450px",
          height: "40px",
          borderRadius: "4px",
          border: "2px solid",
          position: "fixed",
        }}
      />
      <div className="books-container">
        {
          //console.log(typeof(Books))
          //console.log(Books)
          Books.map((b) => {
            var data = {
              title: b.volumeInfo.title,
              author: b.volumeInfo?.authors[0],
              publisher: b.volumeInfo.publisher,
              publishedDate: b.volumeInfo.publishedDate,
              imageUrl: b.volumeInfo?.imageLinks?.smallThumbnail,
            };
            return <BookCard {...data} />;
          })
        }
      </div>
    </div>
  );
};

export default ListBooks;
