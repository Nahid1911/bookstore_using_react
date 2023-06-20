/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookInformation = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bookInformation">
      <span className="bookType">{category}</span>
      <h3 className="bookTtl">{title}</h3>
      <p className="author">{author}</p>
      <ul className="comntRmvEdt">
        <li className="comntRmvEdtLi">Comments</li>
        <li className="comntRmvEdtLi">
          <button type="submit" className="rmvBtn" id={id} onClick={handleRemoveBook}>Remove </button>
        </li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

export default BookInformation;
