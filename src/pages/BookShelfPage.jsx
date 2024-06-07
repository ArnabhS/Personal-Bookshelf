import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">My Bookshelf</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            removeFromBookshelf={removeFromBookshelf}
            removable
          />
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
