import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookAddForm = () => {
  const books = useSelector((store) => store.books);
  const totalBooks = books.length;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: `item${totalBooks + 1}`,
      title,
      author,
      category: 'Fantacy',
    };
    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
  };

  return (
    <div className="bookFormDiv">
      <h3>ADD NEW BOOK</h3>
      <form className="formFields" onSubmit={handleAddBook}>
        <input className="bookTtlInp" onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder="Book title" />
        <input className="bookCateg" onChange={(e) => setAuthor(e.target.value)} type="dropdown" value={author} placeholder="Author" />
        <button className="formBtn" type="submit"> ADD BOOK </button>
      </form>
    </div>
  );
};

export default BookAddForm;
