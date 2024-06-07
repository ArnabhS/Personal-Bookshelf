import React from 'react';

const BookCard = ({ book, addToBookshelf, removeFromBookshelf, removable }) => {
  return (
    <div className="border p-4 bg-gray-900 text-gray-100 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition-transform transform hover:scale-105 rounded-lg">
      <h3 className="text-xl font-bold">{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <p>Edition Count: {book.edition_count}</p>
      <div className="mt-4">
        {addToBookshelf && (
          <button
            onClick={() => addToBookshelf(book)}
            className="bg-green-500 text-white p-2 rounded mr-2"
          >
            Add to Bookshelf
          </button>
        )}
        {removable && removeFromBookshelf && (
          <button
            onClick={() => removeFromBookshelf(book)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove from Bookshelf
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
