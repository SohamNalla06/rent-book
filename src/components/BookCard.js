import React from "react";
import "../global.css";
//
const BookCard = ({ title, author, publisher, publishedDate, imageUrl }) => {
  console.log(BookCard);
  return (
    <div className="book-card">
      <img
        src={
          !imageUrl
            ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FHarry-Potter-Order-Phoenix-Illustrated%2Fdp%2F054579143X&psig=AOvVaw3Oqo1jjgTYi5MU4GRljjza&ust=1709455365125000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiBntCX1YQDFQAAAAAdAAAAABAE"
            : imageUrl
        }
        alt={title}
      />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{publisher}</p>
        <p>{publishedDate}</p>
        <button className="btn btn-success" type="Rent">
          Rent
        </button>
        <button className="btn btn-success" type="Buy">
          Buy
        </button>
      </div>
    </div>
  );
};

export default BookCard;
