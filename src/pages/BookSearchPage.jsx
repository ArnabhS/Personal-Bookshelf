import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { toast } from 'react-toastify';
import BookCard from '../components/BookCard';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const debouncedFetchBooks = useCallback(
    debounce((query) => fetchBooks(query), 500),
    []
  );

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery) {
      debouncedFetchBooks(newQuery);
    } else {
      setBooks([]);
    }
  };

  const handleSearchClick = () => {
    if (query) {
      fetchBooks(query);
    }
  };

  const addToBookshelf = (book) => {
    const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...currentBookshelf, book]));
    toast.success(`${book.title} has been added to your bookshelf!`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="border p-2 w-[85%] rounded text-black mr-2"
          placeholder="Search for a book"
        />
        <button
          onClick={handleSearchClick}
          className="bg-orange-600 text-white p-2 rounded-lg mr-2"
        >
          Search
        </button>
        <Link to="/bookshelf" className="bg-orange-600 text-white p-2 rounded">My Bookshelf</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
